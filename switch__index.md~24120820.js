(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[89],{"9kvl":function(e,t,l){"use strict";var n=l("FfOG");l.d(t,"a",(function(){return n["b"]}));l("bCY9")},Pg6R:function(e,t,l){},RIZa:function(e,t,l){"use strict";var n=l("kM82"),a=l.n(n),r=l("rgW5"),c=l("IujW"),u=function(e){for(var t=e.split("\n"),l=[],n=null,a=0;a<t.length;a+=1)/\s*##.*/.test(t[a])&&(null!==n&&l.push(n),n="".concat(t[a])),null!==n&&(n+="\n".concat(t[a]));return null!==n&&l.push(n),l},o=function(){var e="",t=u(e),l=function(){return t.map((function(e,t){return a.a.createElement(r["a"].Item,{key:t},a.a.createElement(c["a"],{className:"markdown"},e))}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(r["a"],{style:{marginTop:"3rem",marginLeft:13}},l()))};t["a"]=o},WtSh:function(e,t,l){"use strict";var n=l("kM82"),a=l.n(n),r=l("hKI/"),c=l.n(r);l("Pg6R");function u(e,t){return E(e)||i(e,t)||m(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return d(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function i(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,u=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(o){u=!0,a=o}finally{try{c||null==l["return"]||l["return"]()}finally{if(u)throw a}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(n["useRef"])(),r=Object(n["useState"])(!1),o=u(r,2),m=o[0],d=o[1],i=Object(n["useState"])(!1),E=u(i,2),s=E[0],f=E[1];return Object(n["useEffect"])((function(){var e=l.current,t=c()((function(){d(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":m||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},je6u:function(e,t,l){"use strict";l.r(t);var n=l("kM82"),a=l.n(n),r=l("dEAq"),c=(l("RIZa"),l("DSWR")),u=l("WtSh"),o=a.a.memo((function(e){var t=e.demos,l=t["switch-demo"].component,n=t["switch-demo-1"].component,o=t["switch-demo-2"].component,m=t["switch-demo-3"].component,d=t["switch-demo-4"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"switch-\u5f00\u5173"},a.a.createElement(r["AnchorLink"],{to:"#switch-\u5f00\u5173","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Switch \u5f00\u5173"),a.a.createElement("p",null,"\u901a\u8fc7\u9f20\u6807\u6216\u952e\u76d8\u8f93\u5165\u5185\u5bb9\uff0c\u662f\u6700\u57fa\u7840\u7684\u8868\u5355\u57df\u7684\u5305\u88c5\u3002"),a.a.createElement("br",null),a.a.createElement("p",null,"\u4f8b\u5b50:"),a.a.createElement("div",{className:"fu-code-block-row"},a.a.createElement("div",{className:"fu-code-block-col-2-1"},a.a.createElement(c["default"],t["switch-demo"].previewerProps,a.a.createElement(l,null)),a.a.createElement(c["default"],t["switch-demo-1"].previewerProps,a.a.createElement(n,null)),a.a.createElement(c["default"],t["switch-demo-2"].previewerProps,a.a.createElement(o,null))),a.a.createElement("div",{className:"fu-code-block-col-2-1"},a.a.createElement(c["default"],t["switch-demo-3"].previewerProps,a.a.createElement(m,null)),a.a.createElement(c["default"],t["switch-demo-4"].previewerProps,a.a.createElement(d,null)))),a.a.createElement("h2",{id:"api"},a.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"autoFocus"),a.a.createElement("td",null,"\u7ec4\u4ef6\u81ea\u52a8\u83b7\u53d6\u7126\u70b9"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"checked"),a.a.createElement("td",null,"\u6307\u5b9a\u5f53\u524d\u662f\u5426\u9009\u4e2d"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"checkedChildren"),a.a.createElement("td",null,"\u9009\u4e2d\u65f6\u7684\u5185\u5bb9"),a.a.createElement("td",null,"ReactNode"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"className"),a.a.createElement("td",null,"Switch \u5668\u7c7b\u540d"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"defaultChecked"),a.a.createElement("td",null,"\u521d\u59cb\u662f\u5426\u9009\u4e2d"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"disabled"),a.a.createElement("td",null,"\u662f\u5426\u7981\u7528"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"loading"),a.a.createElement("td",null,"\u52a0\u8f7d\u4e2d\u7684\u5f00\u5173"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"size"),a.a.createElement("td",null,"\u5f00\u5173\u5927\u5c0f\uff0c\u53ef\u9009\u503c\uff1a",a.a.createElement("code",null,"default")," ",a.a.createElement("code",null,"small")),a.a.createElement("td",null,"string"),a.a.createElement("td",null,a.a.createElement("code",null,"default"))),a.a.createElement("tr",null,a.a.createElement("td",null,"unCheckedChildren"),a.a.createElement("td",null,"\u975e\u9009\u4e2d\u65f6\u7684\u5185\u5bb9"),a.a.createElement("td",null,"ReactNode"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"onChange"),a.a.createElement("td",null,"\u53d8\u5316\u65f6\u56de\u8c03\u51fd\u6570"),a.a.createElement("td",null,"function(checked: boolean, event: Event)"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"onClick"),a.a.createElement("td",null,"\u70b9\u51fb\u65f6\u56de\u8c03\u51fd\u6570"),a.a.createElement("td",null,"function(checked: boolean, event: Event)"),a.a.createElement("td",null,"-")))),a.a.createElement("h2",{id:"\u65b9\u6cd5"},a.a.createElement(r["AnchorLink"],{to:"#\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd5"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u540d\u79f0"),a.a.createElement("th",null,"\u63cf\u8ff0"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"blur()"),a.a.createElement("td",null,"\u79fb\u9664\u7126\u70b9")),a.a.createElement("tr",null,a.a.createElement("td",null,"focus()"),a.a.createElement("td",null,"\u83b7\u53d6\u7126\u70b9"))))))}));t["default"]=function(e){var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((function(){var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(o,{demos:l})}}}]);