var n="0.0.3",o=function(){function e(){this.version=n,this.TinyClipbord=e,this.copyList=[],this.element=document.createElement("textarea"),this.init()}return e.prototype.init=function(){var t=document.documentElement.getAttribute("dir")=="rtl";this.element.style.border="0",this.element.style.padding="0",this.element.style.margin="0",this.element.style.border="none",this.element.style.position="absolute",this.element.style[t?"right":"left"]="-9999px",document.body.appendChild(this.element)},e.prototype.copy=function(t,i){this.element.innerText=t,this.element.select(),document.execCommand("copy")?(document.execCommand("selectAll"),document.execCommand("copy"),this.copyList.push(t),i&&i()):i&&i(new Error("[tiny-clipbord] copy fail"))},e.prototype.getHistory=function(){return this.copyList},e.prototype.clearHistroy=function(){this.copyList.length=0},e}(),s=new o;export{s as default};
