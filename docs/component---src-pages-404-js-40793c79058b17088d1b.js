(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{189:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),i=o(191),s=o(192),a=o(194);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"404: Not found"}),r.a.createElement(a.a,{text:"Nathan Crank",rainbow:!0}))}},191:function(t,e,o){"use strict";var n=o(0),r=o.n(n);o(195),o(196);e.a=function(t){var e=t.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,e))}},192:function(t,e,o){"use strict";var n=o(193),r=o(0),i=o.n(r),s=o(197),a=o.n(s);function c(t){var e=t.description,o=t.lang,r=t.meta,s=t.title,c=n.data.site,l=e||c.siteMetadata.description;return i.a.createElement(a.a,{htmlAttributes:{lang:o},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"viewport",content:"device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no, cover"}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},193:function(t){t.exports={data:{site:{siteMetadata:{title:"Nathan Crank",description:"This is my personal site or something.",author:"@nathancrank"}}}}},194:function(t,e,o){"use strict";o(199),o(14);var n=o(0),r=o.n(n),i=o(200),s=o.n(i);var a=function(t){var e,o;function n(){for(var e,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).toggleHover=function(){e.props.hover(e.props.row,e.props.column)},e}o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o;var i=n.prototype;return i.randomInt=function(t,e){return Math.random()*(e-t)+t},i.render=function(){var t={fontSize:this.props.size,color:this.props.color,flexGrow:"1",textAlign:"center",fontVariationSettings:"'wdth' "+this.props.width+", 'wght' "+this.props.weight,width:this.props.size+"px",height:this.props.size+"px",transition:"color .1s ease-in-out, font-variation-settings .1s ease-in-out, rotate .1s ease-in-out"};return this.props.level>0&&(t.transform="rotate("+this.randomInt(-30,30)+"deg)"),"function"==typeof PointerEvent?r.a.createElement("span",{onPointerOver:this.toggleHover,style:t},this.props.character):r.a.createElement("span",{onMouseOver:this.toggleHover,style:t},this.props.character)},n}(r.a.Component);function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var l=function(t){var e,o;function n(e){var o,n={background:(o=t.call(this,e)||this).props.background?s()(o.props.background).hsl():s()("#272727").hsl(),font:o.props.background?s()(o.props.background).hsl():s()("black").hsl(),torch:o.props.background?s()(o.props.background).hsl():s()("white").hsl()};return o.state={grid:{},colors:n,focus:{row:0,column:0}},o.altTest=o.props.text?o.props.text:"TorchDemo",o.text=o.props.text?o.props.text.replace(/\s+/g,"").toUpperCase():"TorchDemo".toUpperCase(),o.ariaLabel="A torch demo with the text "+o.altText+" repeating",o.resize=o.resize.bind(c(o)),o.reorient=o.reorient.bind(c(o)),o.newFocusPoint=o.newFocusPoint.bind(c(o)),o}o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o;var i=n.prototype;return i.componentDidMount=function(){this.createGrid(this.refs.container,this.state.focus),window.addEventListener("resize",this.resize),window.addEventListener("orientationchange",this.reorient),document.addEventListener("contextmenu",function(t){return t.preventDefault()})},i.componentWillUnmount=function(){window.removeEventListener("resize",this.resize),window.removeEventListener("orientationchange",this.reorient)},i.reorient=function(){this.newFocusPoint(0,0)},i.resize=function(){this.createGrid(this.refs.container,this.state.focus)},i.createGrid=function(t,e){var o=this,n={},r=t.getBoundingClientRect(),i=r.width,a=r.height;n.itemSize=i<600||a<600?100:i<1200||a<1200?150:200,n.rows=Math.floor(a/n.itemSize),n.columns=Math.floor(i/n.itemSize),n.extraDiffusion=Math.floor(n.columns>=n.rows?n.columns/8:n.rows/8),n.diffusionSteps=n.extraDiffusion+2,n.diffusionLevelWeights=[300];for(var c=400/n.diffusionSteps,l=1;l<n.diffusionSteps+1;l++){var u=n.diffusionLevelWeights[l-1],h=Math.floor(u+c);h>700?h=700:h<300&&(h=300),n.diffusionLevelWeights[l]=h}n.diffusionLevelWidths=[1];for(var f=150/n.diffusionSteps,d=1;d<n.diffusionSteps+1;d++){var p=n.diffusionLevelWidths[d-1],v=Math.floor(p+f);v>150?v=150:v<1&&(v=1),n.diffusionLevelWidths[d]=v}n.diffusionLevelColors=[this.state.colors.font];for(var m=(this.state.colors.torch.color[2]-this.state.colors.font.color[2])/n.diffusionSteps,w=1;w<n.diffusionSteps+1;w++){var g=n.diffusionLevelColors[w-1],x=s()(g).hsl();x.color[2]=Math.floor(x.color[2]+m),x.color[2]>100?x.color[2]=100:x.color[2]<0&&(x.color[2]=0),n.diffusionLevelColors[w]=x}var b=n.columns*n.rows,y=Math.floor(b/this.text.length)+1,E=new Array(y).fill(this.text).join("").substring(0,b);n.diffusionMatrix=[];for(var M=0;M<n.rows;M++){for(var L=[],k=0;k<n.columns;k++)L.push(0);n.diffusionMatrix.push(L)}n.diffusionMatrix[e.row][e.column]=n.diffusionSteps;for(var S=function(t){n.diffusionMatrix.forEach(function(e,r){e.forEach(function(e,i){o.neighborsHaveLevel(n.diffusionMatrix,t+1,r,i)&&n.diffusionMatrix[r][i]<t&&(n.diffusionMatrix[r][i]=t)})})},z=n.diffusionSteps-1;z>0;z--)S(z);n.matrix=[];for(var C=0,I=0;I<n.rows;I++){for(var P=[],W=0;W<n.columns;W++){var _=n.diffusionMatrix[I][W];P.push(this.createGridItem(E[C],n.diffusionLevelColors[_],I,W,_,n.diffusionLevelWeights[_],n.diffusionLevelWidths[_])),C++}n.matrix.push(P)}if(this.props.rainbow){var D={background:s()({h:this.randomInt(0,255),s:this.randomInt(0,255),l:this.randomInt(0,100)}),font:s()({h:this.randomInt(0,255),s:this.randomInt(0,255),l:this.randomInt(0,100)}),torch:s()({h:this.randomInt(0,255),s:this.randomInt(0,255),l:this.randomInt(0,100)})};this.setState(function(t){return{colors:D}})}this.setState(function(t){return{grid:n,focus:e}})},i.neighborsHaveLevel=function(t,e,o,n){var r=this.doesMatrixPositionExist(t,o,n-1)&&t[o][n-1]===e,i=this.doesMatrixPositionExist(t,o,n+1)&&t[o][n+1]===e,s=this.doesMatrixPositionExist(t,o-1,n)&&t[o-1][n]===e,a=this.doesMatrixPositionExist(t,o+1,n)&&t[o+1][n]===e;return r||i||s||a},i.doesMatrixPositionExist=function(t,e,o){return!(e>t.length-1||e<0||o>t[0].length-1||o<0)},i.createGridItem=function(t,e,o,n,r,i,s){return{character:t,color:e,level:r,row:o,column:n,width:s,weight:i}},i.newFocusPoint=function(t,e){this.createGrid(this.refs.container,{row:t,column:e})},i.randomInt=function(t,e){return Math.random()*(e-t)+t},i.render=function(){var t=this,e=[],o={display:"flex",flexWrap:"nowrap",justifyContent:"space-between"};return this.state.grid.matrix&&this.state.grid.matrix.forEach(function(n,i){var s=[];n.forEach(function(e){s.push(r.a.createElement(a,{character:e.character,size:t.state.grid.itemSize,color:e.color,level:e.level,key:10*e.row+e.column,hover:t.newFocusPoint,row:e.row,column:e.column,width:e.width,weight:e.weight}))}),e.push(r.a.createElement("div",{style:o,key:i},s))}),r.a.createElement("div",{ref:"container","aria-label":this.ariaLabel,style:{backgroundColor:this.state.colors.background,transition:"background-color .1s ease-in-out",userSelect:"none"}},r.a.createElement("div",{style:{width:"100vw",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"space-between",alignContent:"strech"}},e))},n}(r.a.Component);e.a=l}}]);
//# sourceMappingURL=component---src-pages-404-js-40793c79058b17088d1b.js.map