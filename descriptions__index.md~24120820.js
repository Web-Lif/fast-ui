(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{"9kvl":function(e,t,l){"use strict";var n=l("FfOG");l.d(t,"a",(function(){return n["b"]}));l("bCY9")},Pg6R:function(e,t,l){},RIZa:function(e,t,l){"use strict";var n=l("kM82"),a=l.n(n),r=l("rgW5"),c=l("IujW"),u=function(e){for(var t=e.split("\n"),l=[],n=null,a=0;a<t.length;a+=1)/\s*##.*/.test(t[a])&&(null!==n&&l.push(n),n="".concat(t[a])),null!==n&&(n+="\n".concat(t[a]));return null!==n&&l.push(n),l},m=function(){var e="",t=u(e),l=function(){return t.map((function(e,t){return a.a.createElement(r["a"].Item,{key:t},a.a.createElement(c["a"],{className:"markdown"},e))}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(r["a"],{style:{marginTop:"3rem",marginLeft:13}},l()))};t["a"]=m},WtSh:function(e,t,l){"use strict";var n=l("kM82"),a=l.n(n),r=l("hKI/"),c=l.n(r);l("Pg6R");function u(e,t){return E(e)||i(e,t)||o(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return d(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function i(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,u=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(m){u=!0,a=m}finally{try{c||null==l["return"]||l["return"]()}finally{if(u)throw a}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(n["useRef"])(),r=Object(n["useState"])(!1),m=u(r,2),o=m[0],d=m[1],i=Object(n["useState"])(!1),E=u(i,2),s=E[0],f=E[1];return Object(n["useEffect"])((function(){var e=l.current,t=c()((function(){d(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":o||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},Ynci:function(e,t,l){"use strict";l.r(t);var n=l("kM82"),a=l.n(n),r=l("dEAq"),c=(l("RIZa"),l("DSWR")),u=l("WtSh"),m=a.a.memo((function(e){var t=e.demos,l=t["descriptions-demo"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"descriptions-\u63cf\u8ff0\u5217\u8868"},a.a.createElement(r["AnchorLink"],{to:"#descriptions-\u63cf\u8ff0\u5217\u8868","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Descriptions \u63cf\u8ff0\u5217\u8868"),a.a.createElement("p",null,"\u6210\u7ec4\u5c55\u793a\u591a\u4e2a\u53ea\u8bfb\u5b57\u6bb5\u3002"),a.a.createElement("br",null),a.a.createElement("p",null,"\u4f8b\u5b50:")),a.a.createElement(c["default"],t["descriptions-demo"].previewerProps,a.a.createElement(l,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"api"},a.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement("h3",{id:"descriptions"},a.a.createElement(r["AnchorLink"],{to:"#descriptions","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Descriptions"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),a.a.createElement("th",null,"\u7248\u672c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"bordered"),a.a.createElement("td",null,"\u662f\u5426\u5c55\u793a\u8fb9\u6846"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"colon"),a.a.createElement("td",null,"\u914d\u7f6e ",a.a.createElement("code",null,"Descriptions.Item")," \u7684 ",a.a.createElement("code",null,"colon")," \u7684\u9ed8\u8ba4\u503c"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"true"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"column"),a.a.createElement("td",null,"\u4e00\u884c\u7684 ",a.a.createElement("code",null,"DescriptionItems")," \u6570\u91cf\uff0c\u53ef\u4ee5\u5199\u6210\u50cf\u7d20\u503c\u6216\u652f\u6301\u54cd\u5e94\u5f0f\u7684\u5bf9\u8c61\u5199\u6cd5 ",a.a.createElement("code",null,"{"," xs: 8, sm: 16, md: 24","}")),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"3"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"contentStyle"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u5185\u5bb9\u6837\u5f0f"),a.a.createElement("td",null,"CSSProperties"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"extra"),a.a.createElement("td",null,"\u63cf\u8ff0\u5217\u8868\u7684\u64cd\u4f5c\u533a\u57df\uff0c\u663e\u793a\u5728\u53f3\u4e0a\u65b9"),a.a.createElement("td",null,"ReactNode"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"labelStyle"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u6807\u7b7e\u6837\u5f0f"),a.a.createElement("td",null,"CSSProperties"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"layout"),a.a.createElement("td",null,"\u63cf\u8ff0\u5e03\u5c40"),a.a.createElement("td",null,a.a.createElement("code",null,"horizontal")," | ",a.a.createElement("code",null,"vertical")),a.a.createElement("td",null,a.a.createElement("code",null,"horizontal")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"size"),a.a.createElement("td",null,"\u8bbe\u7f6e\u5217\u8868\u7684\u5927\u5c0f\u3002\u53ef\u4ee5\u8bbe\u7f6e\u4e3a ",a.a.createElement("code",null,"middle")," \u3001",a.a.createElement("code",null,"small"),", \u6216\u4e0d\u586b\uff08\u53ea\u6709\u8bbe\u7f6e ",a.a.createElement("code",null,"bordered=","{","true","}")," \u751f\u6548\uff09"),a.a.createElement("td",null,a.a.createElement("code",null,"default")," | ",a.a.createElement("code",null,"middle")," | ",a.a.createElement("code",null,"small")),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"title"),a.a.createElement("td",null,"\u63cf\u8ff0\u5217\u8868\u7684\u6807\u9898\uff0c\u663e\u793a\u5728\u6700\u9876\u90e8"),a.a.createElement("td",null,"ReactNode"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)))),a.a.createElement("h3",{id:"descriptionitem"},a.a.createElement(r["AnchorLink"],{to:"#descriptionitem","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"DescriptionItem"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),a.a.createElement("th",null,"\u7248\u672c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"contentStyle"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u5185\u5bb9\u6837\u5f0f"),a.a.createElement("td",null,"CSSProperties"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"label"),a.a.createElement("td",null,"\u5185\u5bb9\u7684\u63cf\u8ff0"),a.a.createElement("td",null,"ReactNode"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"labelStyle"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u6807\u7b7e\u6837\u5f0f"),a.a.createElement("td",null,"CSSProperties"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"span"),a.a.createElement("td",null,"\u5305\u542b\u5217\u7684\u6570\u91cf"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"1"),a.a.createElement("td",null)))),a.a.createElement("blockquote",null,a.a.createElement("p",null,"span \u662f Description.Item \u7684\u6570\u91cf\u3002 span=","{","2","}"," \u4f1a\u5360\u7528\u4e24\u4e2a DescriptionItem \u7684\u5bbd\u5ea6\u3002\u5f53\u540c\u65f6\u914d\u7f6e ",a.a.createElement("code",null,"style")," \u548c ",a.a.createElement("code",null,"labelStyle"),"\uff08\u6216 ",a.a.createElement("code",null,"contentStyle"),"\uff09\u65f6\uff0c\u4e24\u8005\u4f1a\u540c\u65f6\u4f5c\u7528\u3002\u6837\u5f0f\u51b2\u7a81\u65f6\uff0c\u540e\u8005\u4f1a\u8986\u76d6\u524d\u8005\u3002")))))}));t["default"]=function(e){var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((function(){var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(m,{demos:l})}}}]);