(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{"9kvl":function(e,t,n){"use strict";var a=n("FfOG");n.d(t,"a",(function(){return a["b"]}));n("bCY9")},Og9I:function(e,t,n){"use strict";n.r(t);var a=n("kM82"),l=n.n(a),r=n("dEAq"),c=(n("RIZa"),n("DSWR")),u=n("WtSh"),o=l.a.memo((function(e){var t=e.demos,n=t["comment-demo"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"comment-\u8bc4\u8bba"},l.a.createElement(r["AnchorLink"],{to:"#comment-\u8bc4\u8bba","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Comment \u8bc4\u8bba"),l.a.createElement("p",null,"\u5bf9\u7f51\u7ad9\u5185\u5bb9\u7684\u53cd\u9988\u3001\u8bc4\u4ef7\u548c\u8ba8\u8bba\u3002")),l.a.createElement(c["default"],t["comment-demo"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(u["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),l.a.createElement("th",null,"\u7248\u672c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"actions"),l.a.createElement("td",null,"\u5728\u8bc4\u8bba\u5185\u5bb9\u4e0b\u9762\u5448\u73b0\u7684\u64cd\u4f5c\u9879\u5217\u8868"),l.a.createElement("td",null,"Array<ReactNode>"),l.a.createElement("td",null,"-"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"author"),l.a.createElement("td",null,"\u8981\u663e\u793a\u4e3a\u6ce8\u91ca\u4f5c\u8005\u7684\u5143\u7d20"),l.a.createElement("td",null,"ReactNode"),l.a.createElement("td",null,"-"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"avatar"),l.a.createElement("td",null,"\u8981\u663e\u793a\u4e3a\u8bc4\u8bba\u5934\u50cf\u7684\u5143\u7d20 - \u901a\u5e38\u662f antd Avatar \u6216\u8005 src"),l.a.createElement("td",null,"ReactNode"),l.a.createElement("td",null,"-"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"children"),l.a.createElement("td",null,"\u5d4c\u5957\u6ce8\u91ca\u5e94\u4f5c\u4e3a\u6ce8\u91ca\u7684\u5b50\u9879\u63d0\u4f9b"),l.a.createElement("td",null,"ReactNode"),l.a.createElement("td",null,"-"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"content"),l.a.createElement("td",null,"\u8bc4\u8bba\u7684\u4e3b\u8981\u5185\u5bb9"),l.a.createElement("td",null,"ReactNode"),l.a.createElement("td",null,"-"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"datetime"),l.a.createElement("td",null,"\u5c55\u793a\u65f6\u95f4\u63cf\u8ff0"),l.a.createElement("td",null,"ReactNode"),l.a.createElement("td",null,"-"),l.a.createElement("td",null)))))))}));t["default"]=function(e){var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((function(){var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:n})}},Pg6R:function(e,t,n){},RIZa:function(e,t,n){"use strict";var a=n("kM82"),l=n.n(a),r=n("rgW5"),c=n("IujW"),u=function(e){for(var t=e.split("\n"),n=[],a=null,l=0;l<t.length;l+=1)/\s*##.*/.test(t[l])&&(null!==a&&n.push(a),a="".concat(t[l])),null!==a&&(a+="\n".concat(t[l]));return null!==a&&n.push(a),n},o=function(){var e="",t=u(e),n=function(){return t.map((function(e,t){return l.a.createElement(r["a"].Item,{key:t},l.a.createElement(c["a"],{className:"markdown"},e))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(r["a"],{style:{marginTop:"3rem",marginLeft:13}},n()))};t["a"]=o},WtSh:function(e,t,n){"use strict";var a=n("kM82"),l=n.n(a),r=n("hKI/"),c=n.n(r);n("Pg6R");function u(e,t){return E(e)||i(e,t)||m(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function i(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(o){u=!0,l=o}finally{try{c||null==n["return"]||n["return"]()}finally{if(u)throw l}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),o=u(r,2),m=o[0],d=o[1],i=Object(a["useState"])(!1),E=u(i,2),s=E[0],f=E[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){d(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":m||void 0,"data-right-folded":s||void 0},l.a.createElement("table",null,t)))};t["a"]=s}}]);