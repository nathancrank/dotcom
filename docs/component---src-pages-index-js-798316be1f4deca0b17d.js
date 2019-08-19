(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{190:function(t,e,o){"use strict";o.r(e);var r=o(0),n=o.n(r),i=o(191),s=o(192),a=(o(207),o(14),o(209)),c=o.n(a);var l=function(t){var e,o;function r(){for(var e,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))||this).toggleHover=function(){e.props.hover(e.props.row,e.props.column)},e}o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o;var i=r.prototype;return i.randomInt=function(t,e){return Math.random()*(e-t)+t},i.render=function(){var t={fontSize:this.props.size,color:this.props.color,flexGrow:"1",textAlign:"center",fontVariationSettings:"'wdth' "+this.props.width+", 'wght' "+this.props.weight,width:this.props.size+"px",height:this.props.size+"px",transition:"color .005s ease-in-out, font-variation-settings .005s ease-in-out, rotate .005s ease-in-out"};return this.props.level>0&&(t.transform="rotate("+this.randomInt(-30,30)+"deg)"),n.a.createElement("span",{onMouseEnter:this.toggleHover,onTouchStart:this.toggleHover,style:t},this.props.character)},r}(n.a.Component);function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var h=function(t){var e,o;function r(e){var o,r={background:(o=t.call(this,e)||this).props.background?c()(o.props.background).hsl():c()("#272727").hsl(),font:o.props.background?c()(o.props.background).hsl():c()("black").hsl(),torch:o.props.background?c()(o.props.background).hsl():c()("white").hsl()};return o.state={grid:{},colors:r,focus:{row:0,column:0}},o.altTest=o.props.text?o.props.text:"TorchDemo",o.text=o.props.text?o.props.text.replace(/\s+/g,"").toUpperCase():"TorchDemo".toUpperCase(),o.ariaLabel="A torch demo with the text "+o.altText+" repeating",o.resize=o.resize.bind(u(o)),o.newFocusPoint=o.newFocusPoint.bind(u(o)),o}o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o;var i=r.prototype;return i.componentDidMount=function(){this.createGrid(this.refs.container,this.state.focus),window.addEventListener("resize",this.resize),document.addEventListener("contextmenu",function(t){return t.preventDefault()})},i.componentWillUnmount=function(){window.removeEventListener("resize",this.resize)},i.resize=function(){this.createGrid(this.refs.container,this.state.focus)},i.createGrid=function(t,e){var o=this,r={},n=t.getBoundingClientRect(),i=n.width,s=n.height;r.itemSize=i<600||s<600?100:i<1200||s<1200?150:200,r.rows=Math.floor(s/r.itemSize),r.columns=Math.floor(i/r.itemSize),r.extraDiffusion=Math.floor(r.columns>=r.rows?r.columns/8:r.rows/8),r.diffusionSteps=r.extraDiffusion+2,r.diffusionLevelWeights=[300];for(var a=400/r.diffusionSteps,l=1;l<r.diffusionSteps+1;l++){var u=r.diffusionLevelWeights[l-1],h=Math.floor(u+a);h>700?h=700:h<300&&(h=300),r.diffusionLevelWeights[l]=h}r.diffusionLevelWidths=[1];for(var f=150/r.diffusionSteps,d=1;d<r.diffusionSteps+1;d++){var p=r.diffusionLevelWidths[d-1],m=Math.floor(p+f);m>150?m=150:m<1&&(m=1),r.diffusionLevelWidths[d]=m}r.diffusionLevelColors=[this.state.colors.font];for(var v=(this.state.colors.torch.color[2]-this.state.colors.font.color[2])/r.diffusionSteps,g=1;g<r.diffusionSteps+1;g++){var w=r.diffusionLevelColors[g-1],x=c()(w).hsl();x.color[2]=Math.floor(x.color[2]+v),x.color[2]>100?x.color[2]=100:x.color[2]<0&&(x.color[2]=0),r.diffusionLevelColors[g]=x}var A=r.columns*r.rows,b=Math.floor(A/this.text.length)+1,E=new Array(b).fill(this.text).join("").substring(0,A);r.diffusionMatrix=[];for(var M=0;M<r.rows;M++){for(var y=[],S=0;S<r.columns;S++)y.push(0);r.diffusionMatrix.push(y)}r.diffusionMatrix[e.row][e.column]=r.diffusionSteps;for(var k=function(t){r.diffusionMatrix.forEach(function(e,n){e.forEach(function(e,i){o.neighborsHaveLevel(r.diffusionMatrix,t+1,n,i)&&r.diffusionMatrix[n][i]<t&&(r.diffusionMatrix[n][i]=t)})})},L=r.diffusionSteps-1;L>0;L--)k(L);r.matrix=[];for(var C=0,z=0;z<r.rows;z++){for(var I=[],P=0;P<r.columns;P++){var D=r.diffusionMatrix[z][P];I.push(this.createGridItem(E[C],r.diffusionLevelColors[D],z,P,D,r.diffusionLevelWeights[D],r.diffusionLevelWidths[D])),C++}r.matrix.push(I)}if(this.props.rainbow){var F={background:c()({h:this.randomInt(0,255),s:this.randomInt(0,255),l:this.randomInt(0,100)}),font:c()({h:this.randomInt(0,255),s:this.randomInt(0,255),l:this.randomInt(0,100)}),torch:c()({h:this.randomInt(0,255),s:this.randomInt(0,255),l:this.randomInt(0,100)})};this.setState(function(t){return{colors:F}})}this.setState(function(t){return{grid:r,focus:e}})},i.neighborsHaveLevel=function(t,e,o,r){var n=this.doesMatrixPositionExist(t,o,r-1)&&t[o][r-1]===e,i=this.doesMatrixPositionExist(t,o,r+1)&&t[o][r+1]===e,s=this.doesMatrixPositionExist(t,o-1,r)&&t[o-1][r]===e,a=this.doesMatrixPositionExist(t,o+1,r)&&t[o+1][r]===e;return n||i||s||a},i.doesMatrixPositionExist=function(t,e,o){return!(e>t.length-1||e<0||o>t[0].length-1||o<0)},i.createGridItem=function(t,e,o,r,n,i,s){return{character:t,color:e,level:n,row:o,column:r,width:s,weight:i}},i.newFocusPoint=function(t,e){this.createGrid(this.refs.container,{row:t,column:e})},i.randomInt=function(t,e){return Math.random()*(e-t)+t},i.render=function(){var t=this,e=[],o={display:"flex",flexWrap:"nowrap",justifyContent:"space-between"};return this.state.grid.matrix&&this.state.grid.matrix.forEach(function(r,i){var s=[];r.forEach(function(e){s.push(n.a.createElement(l,{character:e.character,size:t.state.grid.itemSize,color:e.color,level:e.level,key:10*e.row+e.column,hover:t.newFocusPoint,row:e.row,column:e.column,width:e.width,weight:e.weight}))}),e.push(n.a.createElement("div",{style:o,key:i},s))}),n.a.createElement("div",{ref:"container","aria-label":this.ariaLabel,style:{backgroundColor:this.state.colors.background,transition:"background-color .005s ease-in-out",cursor:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAZCAMAAAD63NUrAAAACVBMVEX///8AAAD///9+749PAAAAAXRSTlMAQObYZgAAAFZJREFUeNqdzksKwDAIAFHH+x+6lIYOVPOhs5OHJnES/5UkYKEkU7xjijSIm50iFh4fAXgYDd/yumVVRSwsqq/nRA3xVK0oo06d5U6DpQZ7PV7lMxH7LkaQAbYFwryzAAAAAElFTkSuQmCC), help",userSelect:"none"}},n.a.createElement("div",{style:{width:"100vw",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"space-between",alignContent:"strech"}},e))},r}(n.a.Component);e.default=function(){return n.a.createElement(i.a,null,n.a.createElement(s.a,{title:"Annoyed?"}),n.a.createElement(h,{text:"Nathan Crank",rainbow:!0}))}},191:function(t,e,o){"use strict";var r=o(0),n=o.n(r);o(194),o(195);e.a=function(t){var e=t.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement("main",null,e))}},192:function(t,e,o){"use strict";var r=o(193),n=o(0),i=o.n(n),s=o(196),a=o.n(s);function c(t){var e=t.description,o=t.lang,n=t.meta,s=t.title,c=r.data.site,l=e||c.siteMetadata.description;return i.a.createElement(a.a,{htmlAttributes:{lang:o},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"}].concat(n)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},193:function(t){t.exports={data:{site:{siteMetadata:{title:"Nathan Crank",description:"This is my personal site or something.",author:"@nathancrank"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-798316be1f4deca0b17d.js.map