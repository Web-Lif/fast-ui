(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[93],{"9kvl":function(e,t,n){"use strict";var l=n("FfOG");n.d(t,"a",(function(){return l["b"]}));n("bCY9")},Pg6R:function(e,t,n){},RIZa:function(e,t,n){"use strict";var l=n("kM82"),a=n.n(l),r=n("rgW5"),c=n("IujW"),o=function(e){for(var t=e.split("\n"),n=[],l=null,a=0;a<t.length;a+=1)/\s*##.*/.test(t[a])?(null!==l&&n.push(l),l="".concat(t[a])):null!==l&&(l+="\n".concat(t[a]));return null!==l&&n.push(l),n},u=function(){var e="## 0.28.2\n\n`2022-8-1`\n\n- \u26a1\ufe0f \u91c7\u7528 `react/jsx-runtime` \u8fdb\u884c\u8f6c\u4e49, \u7565\u5fae\u6539\u5584 bundle \u7684\u5927\u5c0f [#243](https://github.com/Web-Lif/fast-ui/pull/243) [@robothot](https://github.com/robothot)\n\n## 0.28.1\n\n`2022-8-1`\n\n- \ud83d\udc1e \u4fee\u590d `Table` \u8868\u683c\u7684 `rowSelection.clickModel` \u6a21\u5f0f\u5728 `single` \u6a21\u5f0f\u4e0b\u672a\u751f\u6548\u7684\u95ee\u9898 [#242](https://github.com/Web-Lif/fast-ui/pull/242) [@robothot](https://github.com/robothot)\n\n## 0.28.0\n\n`2022-8-1`\n\n- Collapse\n  - \ud83c\udd95 \u6dfb\u52a0 `Collapse` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#228](https://github.com/Web-Lif/fast-ui/pull/228) [@robothot](https://github.com/robothot)\n- Card\n  - \ud83c\udd95 \u6dfb\u52a0 `Card` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#235](https://github.com/Web-Lif/fast-ui/pull/235) [@robothot](https://github.com/robothot)\n- Tabs\n  - \ud83c\udd95 \u6dfb\u52a0 `Tabs` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#240](https://github.com/Web-Lif/fast-ui/pull/240) [@robothot](https://github.com/robothot)\n",t=o(e),n=function(){return t.map((function(e,t){return a.a.createElement(r["a"].Item,{key:t},a.a.createElement(c["a"],{className:"markdown"},e))}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(r["a"],{style:{marginTop:"3rem",marginLeft:13}},n()))};t["a"]=u},WtSh:function(e,t,n){"use strict";var l=n("kM82"),a=n.n(l),r=n("hKI/"),c=n.n(r);n("Pg6R");function o(e,t){return s(e)||d(e,t)||m(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(u){o=!0,a=u}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw a}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(l["useRef"])(),r=Object(l["useState"])(!1),u=o(r,2),m=u[0],i=u[1],d=Object(l["useState"])(!1),s=o(d,2),E=s[0],h=s[1];return Object(l["useEffect"])((function(){var e=n.current,t=c()((function(){i(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":m||void 0,"data-right-folded":E||void 0},a.a.createElement("table",null,t)))};t["a"]=E},Z9SU:function(e,t,n){"use strict";n.r(t);var l=n("kM82"),a=n.n(l),r=n("dEAq"),c=(n("RIZa"),n("DSWR")),o=n("WtSh"),u=a.a.memo((function(e){var t=e.demos,n=t["tag-demo"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"tag-\u6807\u7b7e"},a.a.createElement(r["AnchorLink"],{to:"#tag-\u6807\u7b7e","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Tag \u6807\u7b7e"),a.a.createElement("p",null,"\u8fdb\u884c\u6807\u8bb0\u548c\u5206\u7c7b\u7684\u5c0f\u6807\u7b7e\u3002")),a.a.createElement(c["default"],t["tag-demo"].previewerProps,a.a.createElement(n,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h3",{id:"tag"},a.a.createElement(r["AnchorLink"],{to:"#tag","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Tag"),a.a.createElement(o["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"closable"),a.a.createElement("td",null,"\u6807\u7b7e\u662f\u5426\u53ef\u4ee5\u5173\u95ed\uff08\u70b9\u51fb\u9ed8\u8ba4\u5173\u95ed\uff09"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"closeIcon"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u5173\u95ed\u6309\u94ae"),a.a.createElement("td",null,a.a.createElement("code",null,"ReactNode")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"color"),a.a.createElement("td",null,"\u6807\u7b7e\u8272"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"icon"),a.a.createElement("td",null,"\u8bbe\u7f6e\u56fe\u6807"),a.a.createElement("td",null,a.a.createElement("code",null,"ReactNode")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"visible"),a.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u6807\u7b7e"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"onClose"),a.a.createElement("td",null,"\u5173\u95ed\u65f6\u7684\u56de\u8c03\uff08\u53ef\u901a\u8fc7 ",a.a.createElement("code",null,"e.preventDefault()")," \u6765\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a\uff09"),a.a.createElement("td",null,a.a.createElement("code",null,"(e) => void")),a.a.createElement("td",null,"-")))),a.a.createElement("h3",{id:"tagcheckabletag"},a.a.createElement(r["AnchorLink"],{to:"#tagcheckabletag","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Tag.CheckableTag"),a.a.createElement(o["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"checked"),a.a.createElement("td",null,"\u8bbe\u7f6e\u6807\u7b7e\u7684\u9009\u4e2d\u72b6\u6001"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"onChange"),a.a.createElement("td",null,"\u70b9\u51fb\u6807\u7b7e\u65f6\u89e6\u53d1\u7684\u56de\u8c03"),a.a.createElement("td",null,a.a.createElement("code",null,"(checked) => void")),a.a.createElement("td",null,"-")))))))}));t["default"]=function(e){var t=a.a.useContext(r["context"]),n=t.demos;return a.a.useEffect((function(){var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(u,{demos:n})}}}]);