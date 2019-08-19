import React from "react"
import Color from "color"

import TorchCharacter from "./TorchCharacter"

class Torch extends React.Component {
	constructor(props) {
		super(props)
		let colors = {
			background: this.props.background ? Color(this.props.background).hsl() : Color("#272727").hsl(),
			font: this.props.background ? Color(this.props.background).hsl() : Color("black").hsl(),
			torch: this.props.background ? Color(this.props.background).hsl() : Color("white").hsl(),
		}
		this.state = {
			grid: {},
			colors: colors,
			focus: { row:0, column:0 }
		}
		this.altTest = this.props.text ? this.props.text : "TorchDemo"
		this.text = this.props.text ? this.props.text.replace(/\s+/g, '').toUpperCase() : "TorchDemo".toUpperCase()
		this.ariaLabel = "A torch demo with the text " + this.altText + " repeating"
		this.resize = this.resize.bind(this)
		this.reorient = this.reorient.bind(this)
		this.newFocusPoint = this.newFocusPoint.bind(this)
	}

	componentDidMount() {
  	this.createGrid( this.refs.container, this.state.focus )
  	window.addEventListener("resize", this.resize)
  	window.addEventListener("orientationchange", this.reorient)
  	document.addEventListener("contextmenu", event => event.preventDefault())
  }

  componentWillUnmount() {
  	window.removeEventListener("resize", this.resize)
  	window.removeEventListener("orientationchange", this.reorient)
  }

	reorient() {
		this.newFocusPoint(0,0)
	}

  resize() {
  	this.createGrid( this.refs.container, this.state.focus )
  }

	createGrid( element, focalPoint ) {
		// I know this is too long of a function
		let grid = {}

		// get element size
		let boundingBox = element.getBoundingClientRect()
		let sizes = {
			width:	boundingBox.width,
			height:	boundingBox.height
		}

		// determine grid item size
		if ( sizes.width < 600 || sizes.height < 600 ) {
			grid.itemSize = 100
		} else if ( sizes.width < 1200 || sizes.height < 1200 ) {
			grid.itemSize = 150
		} else {
			grid.itemSize = 200
		}

		// determine grid rows and columns
		grid.rows = Math.floor( sizes.height / grid.itemSize )
		// grid.rowGutter = Math.floor( sizes.height / grid.rows )
		grid.columns = Math.floor( sizes.width / grid.itemSize )
		// grid.columnGutter = Math.floor( sizes.width / grid.columns )

		// determine appropriate levels of extra diffusion
		//   all grids get 2 diffusion levels by default
		//   dividing by x is a completely arbiratry choice
		grid.extraDiffusion = Math.floor( ( grid.columns >= grid.rows ? grid.columns/8 : grid.rows/8 ) )

		// build diffusion info
		grid.diffusionSteps = grid.extraDiffusion + 2

		// build diffusion weight - built around gingham
		grid.diffusionLevelWeights = [ 300 ]
		let weightStepDiff = 400/grid.diffusionSteps
		for ( let level = 1; level < grid.diffusionSteps + 1 ; level++ ) {
			let previousWeight = grid.diffusionLevelWeights[level - 1]
			let weight = Math.floor( previousWeight + weightStepDiff )
			if ( weight > 700 ) {
				weight = 700
			} else if ( weight < 300 ) {
				weight = 300
			}
			grid.diffusionLevelWeights[level] = weight
		}

		// build diffusion widths - built around gingham
		grid.diffusionLevelWidths = [ 1 ]
		let widthStepDiff = 150/grid.diffusionSteps
		for ( let level = 1; level < grid.diffusionSteps + 1 ; level++ ) {
			let previousWidth = grid.diffusionLevelWidths[level - 1]
			let width = Math.floor( previousWidth + widthStepDiff )
			if ( width > 150 ) {
				width = 150
			} else if ( width < 1 ) {
				width = 1
			}
			grid.diffusionLevelWidths[level] = width
		}

		//build diffusion colors
		grid.diffusionLevelColors = [ this.state.colors.font ]
		let colorStepDiff = (this.state.colors.torch.color[2] - this.state.colors.font.color[2])/grid.diffusionSteps
		for ( let level = 1; level < grid.diffusionSteps + 1 ; level++ ) {
			let previousColor = grid.diffusionLevelColors[level - 1]
			let color = Color(previousColor).hsl()
			color.color[2] = Math.floor( color.color[2] + colorStepDiff )
			if ( color.color[2] > 100 ) {
				color.color[2] = 100
			} else if ( color.color[2] < 0 ) {
				color.color[2] = 0
			}
			grid.diffusionLevelColors[level] = color
		}

		// build matrix string
		let matrixLength = grid.columns * grid.rows
		let textFillRepeats = Math.floor( matrixLength / this.text.length ) + 1
		let matrixStringArray = new Array( textFillRepeats ).fill( this.text )
		let matrixString = matrixStringArray.join( '' ).substring( 0, matrixLength )

		// build empty diffusion matrix
		grid.diffusionMatrix = []
		for ( let row = 0; row < grid.rows; row++ ) {
			let contents = []
			for ( let column = 0; column < grid.columns; column++ ) {
				contents.push(0)
			}
			grid.diffusionMatrix.push( contents )
		}

		// update with focal points
		// place center
		grid.diffusionMatrix[focalPoint.row][focalPoint.column] = grid.diffusionSteps
		// loop thru each level
		for ( let level = grid.diffusionSteps - 1; level > 0; level-- ) {
			// loop through each matrix element
			grid.diffusionMatrix.forEach( (row, rowIndex) => {
				row.forEach( (column, columnIndex) => {
					// check if any neighbors have previous level
					if ( this.neighborsHaveLevel( grid.diffusionMatrix, level + 1, rowIndex, columnIndex ) && grid.diffusionMatrix[rowIndex][columnIndex] < level ) {
						// if so mark as this level
						grid.diffusionMatrix[rowIndex][columnIndex] = level
					}		
				})
			})
		}

		// build matrix from matrix string
		grid.matrix = []
		let stringPosition = 0
		for ( let row = 0; row < grid.rows; row++ ) {
			let contents = []
			for ( let column = 0; column < grid.columns; column++ ) {
				let level = grid.diffusionMatrix[row][column]
				contents.push(
					this.createGridItem(
						matrixString[stringPosition],
						grid.diffusionLevelColors[level],
						row,
						column,
						level,
						grid.diffusionLevelWeights[level],
						grid.diffusionLevelWidths[level],
					)
				)
				stringPosition++
			}
			grid.matrix.push( contents )
		}

		if (this.props.rainbow) {
			let colors = {
				background: Color({
					h: this.randomInt(0,255),
					s: this.randomInt(0,255),
					l: this.randomInt(0,100)
				}),
				font: Color({
					h: this.randomInt(0,255),
					s: this.randomInt(0,255),
					l: this.randomInt(0,100)
				}),
				torch: Color({
					h: this.randomInt(0,255),
					s: this.randomInt(0,255),
					l: this.randomInt(0,100)
				})
			}
			// set state with new grid
			this.setState( prevState => ({
				colors: colors
			}))
		}

		// set state with new grid
		this.setState( prevState => ({
			grid: grid,
			focus: focalPoint
		}))
	}

	neighborsHaveLevel( matrix, level, row, column ) {
		let left = ( this.doesMatrixPositionExist( matrix, row, column - 1 ) && ( matrix[row][column - 1] === level ) )
		let right = ( this.doesMatrixPositionExist( matrix, row, column + 1 ) && ( matrix[row][column + 1] === level ) )
		let top = ( this.doesMatrixPositionExist( matrix, row - 1, column ) && ( matrix[row - 1][column] === level ) )
		let bottom = ( this.doesMatrixPositionExist( matrix, row + 1, column ) && ( matrix[row + 1][column] === level ) )
		return left || right || top || bottom
	}

	doesMatrixPositionExist(matrix, row, column) {
		// check if past length or below 0
		return !( row > matrix.length - 1 || row < 0 || column > matrix[0].length - 1 || column < 0 )
	}

	createGridItem( character, color, row, column, level, weight, width ) {
		return {
			character: character,
			color: color,
			level: level,
			row: row,
			column: column,
			width: width,
			weight: weight
		}
	}

	newFocusPoint(row, column) {
		this.createGrid( this.refs.container, { row:row, column:column } )
	}

	randomInt(min, max) {
		return Math.random() * (max - min) + min
	}

	render() {
		let renderMatrix = []
		let rowStyle = {
			display: `flex`,
			flexWrap: `nowrap`,
			justifyContent: `space-between`
		}
		if ( this.state.grid.matrix ) {
			this.state.grid.matrix.forEach( (row, rowIndex) => {
				let rowContents = []
				row.forEach( column => {
					rowContents.push(
						<TorchCharacter
							character={column.character}
							size={this.state.grid.itemSize}
							color={column.color}
							level={column.level}
							key={(column.row * 10) + column.column}
							hover={this.newFocusPoint}
							row={column.row}
							column={column.column}
							width={column.width}
							weight={column.weight}
						/>
					)
				})
				renderMatrix.push(
					<div
						style={rowStyle}
						key={rowIndex}
					>
						{rowContents}
					</div>
				)
			})
		}

		return (
		  <div
		  	ref="container"
		  	aria-label={this.ariaLabel}
		  	style={{
		  		backgroundColor: this.state.colors.background,
		  		transition: `background-color .1s ease-in-out`,
			  	userSelect: `none`,
		  	}}
		  >
		  	<div
		  		style={{
		  			width: `100vw`,
		  			height: `100vh`,
		  			overflow: `hidden`,
			  		display: `flex`,
			  		flexDirection: `column`,
			  		justifyContent: `space-between`,
			  		alignContent: `strech`,
		  		}}
		  	>
		  		{renderMatrix}
		  	</div>
		  </div>
		)
	}
}

export default Torch