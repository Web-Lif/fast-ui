(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[83],{"9kvl":function(e,t,l){"use strict";var n=l("FfOG");l.d(t,"a",(function(){return n["b"]}));l("bCY9")},Pg6R:function(e,t,l){},RIZa:function(e,t,l){"use strict";var n=l("kM82"),a=l.n(n),r=l("rgW5"),c=l("IujW"),u=function(e){for(var t=e.split("\n"),l=[],n=null,a=0;a<t.length;a+=1)/\s*##.*/.test(t[a])&&(null!==n&&l.push(n),n="".concat(t[a])),null!==n&&(n+="\n".concat(t[a]));return null!==n&&l.push(n),l},m=function(){var e="",t=u(e),l=function(){return t.map((function(e,t){return a.a.createElement(r["a"].Item,{key:t},a.a.createElement(c["a"],{className:"markdown"},e))}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(r["a"],{style:{marginTop:"3rem",marginLeft:13}},l()))};t["a"]=m},WtSh:function(e,t,l){"use strict";var n=l("kM82"),a=l.n(n),r=l("hKI/"),c=l.n(r);l("Pg6R");function u(e,t){return i(e)||E(e,t)||d(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return o(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function E(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,u=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(m){u=!0,a=m}finally{try{c||null==l["return"]||l["return"]()}finally{if(u)throw a}}return r}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(n["useRef"])(),r=Object(n["useState"])(!1),m=u(r,2),d=m[0],o=m[1],E=Object(n["useState"])(!1),i=u(E,2),s=i[0],f=i[1];return Object(n["useEffect"])((function(){var e=l.current,t=c()((function(){o(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":d||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},YYVz:function(e,t,l){"use strict";l.r(t);var n=l("kM82"),a=l.n(n),r=l("dEAq"),c=(l("RIZa"),l("DSWR")),u=l("WtSh"),m=a.a.memo((function(e){var t=e.demos,l=t["slider-demo"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"slider-\u6ed1\u52a8\u8f93\u5165\u6761"},a.a.createElement(r["AnchorLink"],{to:"#slider-\u6ed1\u52a8\u8f93\u5165\u6761","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Slider \u6ed1\u52a8\u8f93\u5165\u6761"),a.a.createElement("p",null,"\u6ed1\u52a8\u578b\u8f93\u5165\u5668\uff0c\u5c55\u793a\u5f53\u524d\u503c\u548c\u53ef\u9009\u8303\u56f4\u3002"),a.a.createElement("br",null),a.a.createElement("p",null,"\u4f8b\u5b50:"),a.a.createElement("div",{className:"fu-code-block-row"},a.a.createElement("div",{className:"fu-code-block-col-2-1"},a.a.createElement(c["default"],t["slider-demo"].previewerProps,a.a.createElement(l,null)))),a.a.createElement("h2",{id:"api"},a.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),a.a.createElement("th",null,"\u7248\u672c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"allowClear"),a.a.createElement("td",null,"\u652f\u6301\u6e05\u9664, \u5355\u9009\u6a21\u5f0f\u6709\u6548"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"defaultValue"),a.a.createElement("td",null,"\u8bbe\u7f6e\u521d\u59cb\u53d6\u503c\u3002\u5f53 ",a.a.createElement("code",null,"range")," \u4e3a false \u65f6\uff0c\u4f7f\u7528 number\uff0c\u5426\u5219\u7528 [number, number]"),a.a.createElement("td",null,"number | [number, number]"),a.a.createElement("td",null,"0 | [0, 0]"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"disabled"),a.a.createElement("td",null,"\u503c\u4e3a true \u65f6\uff0c\u6ed1\u5757\u4e3a\u7981\u7528\u72b6\u6001"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"dots"),a.a.createElement("td",null,"\u662f\u5426\u53ea\u80fd\u62d6\u62fd\u5230\u523b\u5ea6\u4e0a"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"getTooltipPopupContainer"),a.a.createElement("td",null,"Tooltip \u6e32\u67d3\u7236\u8282\u70b9\uff0c\u9ed8\u8ba4\u6e32\u67d3\u5230 body \u4e0a"),a.a.createElement("td",null,"(triggerNode) => HTMLElement"),a.a.createElement("td",null,"() => document.body"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"included"),a.a.createElement("td",null,a.a.createElement("code",null,"marks")," \u4e0d\u4e3a\u7a7a\u5bf9\u8c61\u65f6\u6709\u6548\uff0c\u503c\u4e3a true \u65f6\u8868\u793a\u503c\u4e3a\u5305\u542b\u5173\u7cfb\uff0cfalse \u8868\u793a\u5e76\u5217"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"true"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"marks"),a.a.createElement("td",null,"\u523b\u5ea6\u6807\u8bb0\uff0ckey \u7684\u7c7b\u578b\u5fc5\u987b\u4e3a ",a.a.createElement("code",null,"number")," \u4e14\u53d6\u503c\u5728\u95ed\u533a\u95f4 [min, max] \u5185\uff0c\u6bcf\u4e2a\u6807\u7b7e\u53ef\u4ee5\u5355\u72ec\u8bbe\u7f6e\u6837\u5f0f"),a.a.createElement("td",null,"object"),a.a.createElement("td",null,"{"," number: ReactNode ","}"," or ","{"," number: ","{"," style: CSSProperties, label: ReactNode ","}"," ","}"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"max"),a.a.createElement("td",null,"\u6700\u5927\u503c"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"100"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"min"),a.a.createElement("td",null,"\u6700\u5c0f\u503c"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"0"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"range"),a.a.createElement("td",null,"\u53cc\u6ed1\u5757\u6a21\u5f0f"),a.a.createElement("td",null,"boolean | ",a.a.createElement(r["AnchorLink"],{to:"#range"},"range")),a.a.createElement("td",null,"false"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"reverse"),a.a.createElement("td",null,"\u53cd\u5411\u5750\u6807\u8f74"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"step"),a.a.createElement("td",null,"\u6b65\u957f\uff0c\u53d6\u503c\u5fc5\u987b\u5927\u4e8e 0\uff0c\u5e76\u4e14\u53ef\u88ab (max - min) \u6574\u9664\u3002\u5f53 ",a.a.createElement("code",null,"marks")," \u4e0d\u4e3a\u7a7a\u5bf9\u8c61\u65f6\uff0c\u53ef\u4ee5\u8bbe\u7f6e ",a.a.createElement("code",null,"step")," \u4e3a null\uff0c\u6b64\u65f6 Slider \u7684\u53ef\u9009\u503c\u4ec5\u6709 marks \u6807\u51fa\u6765\u7684\u90e8\u5206"),a.a.createElement("td",null,"number | null"),a.a.createElement("td",null,"1"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"tipFormatter"),a.a.createElement("td",null,"Slider \u4f1a\u628a\u5f53\u524d\u503c\u4f20\u7ed9 ",a.a.createElement("code",null,"tipFormatter"),"\uff0c\u5e76\u5728 Tooltip \u4e2d\u663e\u793a ",a.a.createElement("code",null,"tipFormatter")," \u7684\u8fd4\u56de\u503c\uff0c\u82e5\u4e3a null\uff0c\u5219\u9690\u85cf Tooltip"),a.a.createElement("td",null,"value => ReactNode | null"),a.a.createElement("td",null,"IDENTITY"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"tooltipPlacement"),a.a.createElement("td",null,"\u8bbe\u7f6e Tooltip \u5c55\u793a\u4f4d\u7f6e\u3002\u53c2\u8003 ",a.a.createElement(r["Link"],{to:"/components/tooltip/"},"Tooltip")),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"tooltipVisible"),a.a.createElement("td",null,"\u503c\u4e3a true \u65f6\uff0cTooltip \u5c06\u4f1a\u59cb\u7ec8\u663e\u793a\uff1b\u5426\u5219\u59cb\u7ec8\u4e0d\u663e\u793a\uff0c\u54ea\u6015\u5728\u62d6\u62fd\u53ca\u79fb\u5165\u65f6"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"value"),a.a.createElement("td",null,"\u8bbe\u7f6e\u5f53\u524d\u53d6\u503c\u3002\u5f53 ",a.a.createElement("code",null,"range")," \u4e3a false \u65f6\uff0c\u4f7f\u7528 number\uff0c\u5426\u5219\u7528 [number, number]"),a.a.createElement("td",null,"number | [number, number]"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"vertical"),a.a.createElement("td",null,"\u503c\u4e3a true \u65f6\uff0cSlider \u4e3a\u5782\u76f4\u65b9\u5411"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"onAfterChange"),a.a.createElement("td",null,"\u4e0e ",a.a.createElement("code",null,"onmouseup")," \u89e6\u53d1\u65f6\u673a\u4e00\u81f4\uff0c\u628a\u5f53\u524d\u503c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165"),a.a.createElement("td",null,"(value) => void"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"onChange"),a.a.createElement("td",null,"\u5f53 Slider \u7684\u503c\u53d1\u751f\u6539\u53d8\u65f6\uff0c\u4f1a\u89e6\u53d1 onChange \u4e8b\u4ef6\uff0c\u5e76\u628a\u6539\u53d8\u540e\u7684\u503c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165"),a.a.createElement("td",null,"(value) => void"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)))),a.a.createElement("h3",{id:"range"},a.a.createElement(r["AnchorLink"],{to:"#range","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"range"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),a.a.createElement("th",null,"\u7248\u672c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"draggableTrack"),a.a.createElement("td",null,"\u8303\u56f4\u523b\u5ea6\u662f\u5426\u53ef\u88ab\u62d6\u62fd"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null)))),a.a.createElement("h2",{id:"\u65b9\u6cd5"},a.a.createElement(r["AnchorLink"],{to:"#\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd5"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u540d\u79f0"),a.a.createElement("th",null,"\u63cf\u8ff0"),a.a.createElement("th",null,"\u7248\u672c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"blur()"),a.a.createElement("td",null,"\u79fb\u9664\u7126\u70b9"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"focus()"),a.a.createElement("td",null,"\u83b7\u53d6\u7126\u70b9"),a.a.createElement("td",null))))))}));t["default"]=function(e){var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((function(){var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(m,{demos:l})}}}]);