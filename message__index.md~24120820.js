(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[70],{"9kvl":function(e,t,n){"use strict";var l=n("FfOG");n.d(t,"a",(function(){return l["b"]}));n("bCY9")},Pg6R:function(e,t,n){},RIZa:function(e,t,n){"use strict";var l=n("kM82"),a=n.n(l),r=n("rgW5"),c=n("IujW"),o=function(e){for(var t=e.split("\n"),n=[],l=null,a=0;a<t.length;a+=1)/\s*##.*/.test(t[a])?(null!==l&&n.push(l),l="".concat(t[a])):null!==l&&(l+="\n".concat(t[a]));return null!==l&&n.push(l),n},u=function(){var e="## 0.28.2\n\n`2022-8-1`\n\n- \u26a1\ufe0f \u91c7\u7528 `react/jsx-runtime` \u8fdb\u884c\u8f6c\u4e49, \u7565\u5fae\u6539\u5584 bundle \u7684\u5927\u5c0f [#243](https://github.com/Web-Lif/fast-ui/pull/243) [@robothot](https://github.com/robothot)\n\n## 0.28.1\n\n`2022-8-1`\n\n- \ud83d\udc1e \u4fee\u590d `Table` \u8868\u683c\u7684 `rowSelection.clickModel` \u6a21\u5f0f\u5728 `single` \u6a21\u5f0f\u4e0b\u672a\u751f\u6548\u7684\u95ee\u9898 [#242](https://github.com/Web-Lif/fast-ui/pull/242) [@robothot](https://github.com/robothot)\n\n## 0.28.0\n\n`2022-8-1`\n\n- Collapse\n  - \ud83c\udd95 \u6dfb\u52a0 `Collapse` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#228](https://github.com/Web-Lif/fast-ui/pull/228) [@robothot](https://github.com/robothot)\n- Card\n  - \ud83c\udd95 \u6dfb\u52a0 `Card` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#235](https://github.com/Web-Lif/fast-ui/pull/235) [@robothot](https://github.com/robothot)\n- Tabs\n  - \ud83c\udd95 \u6dfb\u52a0 `Tabs` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#240](https://github.com/Web-Lif/fast-ui/pull/240) [@robothot](https://github.com/robothot)\n",t=o(e),n=function(){return t.map((function(e,t){return a.a.createElement(r["a"].Item,{key:t},a.a.createElement(c["a"],{className:"markdown"},e))}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(r["a"],{style:{marginTop:"3rem",marginLeft:13}},n()))};t["a"]=u},WtSh:function(e,t,n){"use strict";var l=n("kM82"),a=n.n(l),r=n("hKI/"),c=n.n(r);n("Pg6R");function o(e,t){return s(e)||d(e,t)||m(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(u){o=!0,a=u}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw a}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(l["useRef"])(),r=Object(l["useState"])(!1),u=o(r,2),m=u[0],i=u[1],d=Object(l["useState"])(!1),s=o(d,2),E=s[0],f=s[1];return Object(l["useEffect"])((function(){var e=n.current,t=c()((function(){i(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":m||void 0,"data-right-folded":E||void 0},a.a.createElement("table",null,t)))};t["a"]=E},x8z3:function(e,t,n){"use strict";n.r(t);var l=n("kM82"),a=n.n(l),r=n("dEAq"),c=(n("RIZa"),n("DSWR")),o=n("6T1g"),u=n("WtSh"),m=a.a.memo((function(e){var t=e.demos,n=t["message-demo"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"message-\u5168\u5c40\u63d0\u793a"},a.a.createElement(r["AnchorLink"],{to:"#message-\u5168\u5c40\u63d0\u793a","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Message \u5168\u5c40\u63d0\u793a"),a.a.createElement("p",null,"\u5168\u5c40\u5c55\u793a\u64cd\u4f5c\u53cd\u9988\u4fe1\u606f\u3002")),a.a.createElement(c["default"],t["message-demo"].previewerProps,a.a.createElement(n,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"api"},a.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement("p",null,"\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e00\u4e9b\u9759\u6001\u65b9\u6cd5\uff0c\u4f7f\u7528\u65b9\u5f0f\u548c\u53c2\u6570\u5982\u4e0b\uff1a"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"message.success(content, [duration], onClose)")),a.a.createElement("li",null,a.a.createElement("code",null,"message.error(content, [duration], onClose)")),a.a.createElement("li",null,a.a.createElement("code",null,"message.info(content, [duration], onClose)")),a.a.createElement("li",null,a.a.createElement("code",null,"message.warning(content, [duration], onClose)")),a.a.createElement("li",null,a.a.createElement("code",null,"message.warn(content, [duration], onClose)")," // alias of warning"),a.a.createElement("li",null,a.a.createElement("code",null,"message.loading(content, [duration], onClose)"))),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"content"),a.a.createElement("td",null,"\u63d0\u793a\u5185\u5bb9"),a.a.createElement("td",null,"ReactNode | config"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"duration"),a.a.createElement("td",null,"\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6\uff0c\u5355\u4f4d\u79d2\u3002\u8bbe\u4e3a 0 \u65f6\u4e0d\u81ea\u52a8\u5173\u95ed"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"3")),a.a.createElement("tr",null,a.a.createElement("td",null,"onClose"),a.a.createElement("td",null,"\u5173\u95ed\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"),a.a.createElement("td",null,"function"),a.a.createElement("td",null,"-")))),a.a.createElement("p",null,"\u7ec4\u4ef6\u540c\u65f6\u63d0\u4f9b promise \u63a5\u53e3\u3002"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"message[level](content, [duration]).then(afterClose)")),a.a.createElement("li",null,a.a.createElement("code",null,"message[level](content, [duration], onClose).then(afterClose)"))),a.a.createElement("p",null,"\u5176\u4e2d ",a.a.createElement("code",null,"message[level]")," \u662f\u7ec4\u4ef6\u5df2\u7ecf\u63d0\u4f9b\u7684\u9759\u6001\u65b9\u6cd5\u3002",a.a.createElement("code",null,"then")," \u63a5\u53e3\u8fd4\u56de\u503c\u662f Promise\u3002"),a.a.createElement("p",null,"\u4e5f\u53ef\u4ee5\u5bf9\u8c61\u7684\u5f62\u5f0f\u4f20\u9012\u53c2\u6570\uff1a"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"message.open(config)")),a.a.createElement("li",null,a.a.createElement("code",null,"message.success(config)")),a.a.createElement("li",null,a.a.createElement("code",null,"message.error(config)")),a.a.createElement("li",null,a.a.createElement("code",null,"message.info(config)")),a.a.createElement("li",null,a.a.createElement("code",null,"message.warning(config)")),a.a.createElement("li",null,a.a.createElement("code",null,"message.warn(config)")," // alias of warning"),a.a.createElement("li",null,a.a.createElement("code",null,"message.loading(config)"))),a.a.createElement("p",null,a.a.createElement("code",null,"config")," \u5bf9\u8c61\u5c5e\u6027\u5982\u4e0b\uff1a"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"className"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49 CSS class"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"content"),a.a.createElement("td",null,"\u63d0\u793a\u5185\u5bb9"),a.a.createElement("td",null,"ReactNode"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"duration"),a.a.createElement("td",null,"\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6\uff0c\u5355\u4f4d\u79d2\u3002\u8bbe\u4e3a 0 \u65f6\u4e0d\u81ea\u52a8\u5173\u95ed"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"3")),a.a.createElement("tr",null,a.a.createElement("td",null,"icon"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u56fe\u6807"),a.a.createElement("td",null,"ReactNode"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"key"),a.a.createElement("td",null,"\u5f53\u524d\u63d0\u793a\u7684\u552f\u4e00\u6807\u5fd7"),a.a.createElement("td",null,"string | number"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"style"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u5185\u8054\u6837\u5f0f"),a.a.createElement("td",null,a.a.createElement(r["Link"],{to:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794"},"CSSProperties")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"onClick"),a.a.createElement("td",null,"\u70b9\u51fb message \u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"),a.a.createElement("td",null,"function"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"onClose"),a.a.createElement("td",null,"\u5173\u95ed\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"),a.a.createElement("td",null,"function"),a.a.createElement("td",null,"-")))),a.a.createElement("h3",{id:"\u5168\u5c40\u65b9\u6cd5"},a.a.createElement(r["AnchorLink"],{to:"#\u5168\u5c40\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5168\u5c40\u65b9\u6cd5"),a.a.createElement("p",null,"\u8fd8\u63d0\u4f9b\u4e86\u5168\u5c40\u914d\u7f6e\u548c\u5168\u5c40\u9500\u6bc1\u65b9\u6cd5\uff1a"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"message.config(options)")),a.a.createElement("li",null,a.a.createElement("code",null,"message.destroy()"))),a.a.createElement("blockquote",null,a.a.createElement("p",null,"\u4e5f\u53ef\u901a\u8fc7 ",a.a.createElement("code",null,"message.destroy(key)")," \u6765\u5173\u95ed\u4e00\u6761\u6d88\u606f\u3002")),a.a.createElement("h4",{id:"messageconfig"},a.a.createElement(r["AnchorLink"],{to:"#messageconfig","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"message.config"),a.a.createElement("blockquote",null,a.a.createElement("p",null,"\u5f53\u4f60\u4f7f\u7528 ",a.a.createElement("code",null,"ConfigProvider")," \u8fdb\u884c\u5168\u5c40\u5316\u914d\u7f6e\u65f6\uff0c\u7cfb\u7edf\u4f1a\u9ed8\u8ba4\u81ea\u52a8\u5f00\u542f RTL \u6a21\u5f0f\u3002"),a.a.createElement("p",null,"\u5f53\u4f60\u60f3\u5355\u72ec\u4f7f\u7528\uff0c\u53ef\u901a\u8fc7\u5982\u4e0b\u8bbe\u7f6e\u5f00\u542f RTL \u6a21\u5f0f\u3002")),a.a.createElement(o["a"],{code:"message.config({\n  top: 100,\n  duration: 2,\n  maxCount: 3,\n  rtl: true,\n  prefixCls: 'my-message',\n})",lang:"js"}),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),a.a.createElement("th",null,"\u7248\u672c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"duration"),a.a.createElement("td",null,"\u9ed8\u8ba4\u81ea\u52a8\u5173\u95ed\u5ef6\u65f6\uff0c\u5355\u4f4d\u79d2"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"3"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"getContainer"),a.a.createElement("td",null,"\u914d\u7f6e\u6e32\u67d3\u8282\u70b9\u7684\u8f93\u51fa\u4f4d\u7f6e"),a.a.createElement("td",null,"() => HTMLElement"),a.a.createElement("td",null,"() => document.body"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"maxCount"),a.a.createElement("td",null,"\u6700\u5927\u663e\u793a\u6570, \u8d85\u8fc7\u9650\u5236\u65f6\uff0c\u6700\u65e9\u7684\u6d88\u606f\u4f1a\u88ab\u81ea\u52a8\u5173\u95ed"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"prefixCls"),a.a.createElement("td",null,"\u6d88\u606f\u8282\u70b9\u7684 className \u524d\u7f00"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,a.a.createElement("code",null,"ant-message")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"rtl"),a.a.createElement("td",null,"\u662f\u5426\u5f00\u542f RTL \u6a21\u5f0f"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"top"),a.a.createElement("td",null,"\u6d88\u606f\u8ddd\u79bb\u9876\u90e8\u7684\u4f4d\u7f6e"),a.a.createElement("td",null,"number"),a.a.createElement("td",null),a.a.createElement("td",null)))),a.a.createElement("h2",{id:"faq"},a.a.createElement(r["AnchorLink"],{to:"#faq","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"FAQ"),a.a.createElement("h3",{id:"\u4e3a\u4ec0\u4e48-message-\u4e0d\u80fd\u83b7\u53d6-contextredux-\u7684\u5185\u5bb9\u548c-configprovider-\u7684-localeprefixcls-\u914d\u7f6e"},a.a.createElement(r["AnchorLink"],{to:"#\u4e3a\u4ec0\u4e48-message-\u4e0d\u80fd\u83b7\u53d6-contextredux-\u7684\u5185\u5bb9\u548c-configprovider-\u7684-localeprefixcls-\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4e3a\u4ec0\u4e48 message \u4e0d\u80fd\u83b7\u53d6 context\u3001redux \u7684\u5185\u5bb9\u548c ConfigProvider \u7684 ",a.a.createElement("code",null,"locale/prefixCls")," \u914d\u7f6e\uff1f"),a.a.createElement("p",null,"\u76f4\u63a5\u8c03\u7528 message \u65b9\u6cd5\uff0cantd \u4f1a\u901a\u8fc7 ",a.a.createElement("code",null,"ReactDOM.render")," \u52a8\u6001\u521b\u5efa\u65b0\u7684 React \u5b9e\u4f53\u3002\u5176 context \u4e0e\u5f53\u524d\u4ee3\u7801\u6240\u5728 context \u5e76\u4e0d\u76f8\u540c\uff0c\u56e0\u800c\u65e0\u6cd5\u83b7\u53d6 context \u4fe1\u606f\u3002"),a.a.createElement("p",null,"\u5f53\u4f60\u9700\u8981 context \u4fe1\u606f\uff08\u4f8b\u5982 ConfigProvider \u914d\u7f6e\u7684\u5185\u5bb9\uff09\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",a.a.createElement("code",null,"message.useMessage")," \u65b9\u6cd5\u4f1a\u8fd4\u56de ",a.a.createElement("code",null,"api")," \u5b9e\u4f53\u4ee5\u53ca ",a.a.createElement("code",null,"contextHolder")," \u8282\u70b9\u3002\u5c06\u5176\u63d2\u5165\u5230\u4f60\u9700\u8981\u83b7\u53d6 context \u4f4d\u7f6e\u5373\u53ef\uff1a"),a.a.createElement(o["a"],{code:'const [api, contextHolder] = message.useMessage()\nreturn (\n  <Context1.Provider value="Ant">\n    {/* contextHolder \u5728 Context1 \u5185\uff0c\u5b83\u53ef\u4ee5\u83b7\u5f97 Context1 \u7684 context */}\n    {contextHolder}\n    <Context2.Provider value="Design">\n      {/* contextHolder \u5728 Context2 \u5916\uff0c\u56e0\u800c\u4e0d\u4f1a\u83b7\u5f97 Context2 \u7684 context */}\n    </Context2.Provider>\n  </Context1.Provider>\n)',lang:"tsx"}),a.a.createElement("p",null,"**\u5f02\u540c\uff1a**\u901a\u8fc7 hooks \u521b\u5efa\u7684 ",a.a.createElement("code",null,"contextHolder")," \u5fc5\u987b\u63d2\u5165\u5230\u5b50\u5143\u7d20\u8282\u70b9\u4e2d\u624d\u4f1a\u751f\u6548\uff0c\u5f53\u4f60\u4e0d\u9700\u8981\u4e0a\u4e0b\u6587\u4fe1\u606f\u65f6\u8bf7\u76f4\u63a5\u8c03\u7528\u3002"),a.a.createElement("h3",{id:"\u9759\u6001\u65b9\u6cd5\u5982\u4f55\u8bbe\u7f6e-prefixcls-"},a.a.createElement(r["AnchorLink"],{to:"#\u9759\u6001\u65b9\u6cd5\u5982\u4f55\u8bbe\u7f6e-prefixcls-","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u9759\u6001\u65b9\u6cd5\u5982\u4f55\u8bbe\u7f6e prefixCls \uff1f"),a.a.createElement("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",a.a.createElement(r["AnchorLink"],{to:"/components/config-provider/#ConfigProvider.config()-4.13.0+"},a.a.createElement("code",null,"ConfigProvider.config"))," \u8fdb\u884c\u8bbe\u7f6e\u3002"))))}));t["default"]=function(e){var t=a.a.useContext(r["context"]),n=t.demos;return a.a.useEffect((function(){var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(m,{demos:n})}}}]);