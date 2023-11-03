(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-bos;\n\n}\n:root{\n    background-color: yellow;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    background-color: pink;\n    color:blue;\n    min-height: 100vh;\n}\n\n.nav{\n    display: flex;\n    border: 2px solid yellow;\n}\n\n.body-container{\n    display: flex;\n    align-content: space-between;\n    flex: 1;\n    border: 2px solid red;\n}\n#grid-container{\n    display: grid;\n    grid-template-columns: repeat(2, 100px);\n    grid-template-rows: repeat(4, 100px);\n    gap: 10px;\n\n}\n\n.grid-cell{\n    background-color: orange;\n    border: 1px solid black;\n\n}\n\n.menu-img{\n\n}\n\n.item-container{\n\n}\n\n.item{\n\n}\n\n.price{\n\n}\n\n.item-description{\n\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(28),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const v=document.getElementById("content");!function(){const e=document.createElement("div");e.textContent="The Simpson's Donut Shop",v.appendChild(e);const n=document.createElement("div");n.textContent="HI Im Maggie",function(e){const n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div");o.textContent="Ha",a.textContent="Ha",i.textContent="Ha",n.appendChild(o),t.appendChild(a),r.appendChild(i),e.appendChild(n),e.appendChild(t),e.appendChild(r),e.classList.add("nav"),v.appendChild(e)}(n),function(e){const n=document.createElement("div");n.setAttribute("id","grid-container");for(let e=1;e<=8;e++){const t=document.createElement("div");t.setAttribute("id",`cell-${e}`),t.textContent="Yeahh",t.classList.add("grid-cell");const r=document.createElement("img");r.classList.add("menu-img"),t.appendChild(r);const o=document.createElement("div");o.setAttribute("id",`item-${e}`);const a=document.createElement("div"),i=document.createElement("div");a.classList.add("item"),i.classList.add("price"),o.classList.add("item-container"),o.appendChild(a),o.appendChild(i),t.appendChild(o);const c=document.createElement("div");c.setAttribute("id",`text-${e}`),c.textContent=`cell-${e}`,c.classList.add("item-description"),t.appendChild(c),n.appendChild(t)}e.appendChild(n),v.appendChild(e)}(document.createElement("div")),function(e){const n=document.createElement("div");n.textContent="Created By Nate-O";const t=new Image;e.appendChild(n),e.appendChild(t),v.appendChild(e)}(document.createElement("div"))}()})()})();