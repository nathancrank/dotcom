import React from "react"

class TorchCharacter extends React.Component {
	toggleHover = () => {
		this.props.hover(this.props.row, this.props.column)
	}

	randomInt(min, max) {
		return Math.random() * (max - min) + min
	}

	render() {
		let style = {
			fontSize: this.props.size,
			color: this.props.color,
			flexGrow: `1`,
			textAlign: `center`,
			fontVariationSettings: `'wdth' ${this.props.width}, 'wght' ${this.props.weight}`,
			width: this.props.size +'px',
			height: this.props.size +'px',
			transition: `color .005s ease-in-out, font-variation-settings .005s ease-in-out, rotate .005s ease-in-out`
		}
		if ( this.props.level > 0 ) {
			style.transform = `rotate(${this.randomInt(-30,30)}deg)`
		}
		return (
		  <span
		  	onMouseEnter={this.toggleHover}
		  	onTouchStart={this.toggleHover}
		  	style={style}
		  >
		    {this.props.character}
		  </span>
		)
	}
}

export default TorchCharacter