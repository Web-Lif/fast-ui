(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[92],{"9kvl":function(e,t,l){"use strict";var a=l("FfOG");l.d(t,"a",(function(){return a["b"]}));l("bCY9")},Pg6R:function(e,t,l){},RIZa:function(e,t,l){"use strict";var a=l("kM82"),n=l.n(a),r=l("rgW5"),c=l("IujW"),u=function(e){for(var t=e.split("\n"),l=[],a=null,n=0;n<t.length;n+=1)/\s*##.*/.test(t[n])?(null!==a&&l.push(a),a="".concat(t[n])):null!==a&&(a+="\n".concat(t[n]));return null!==a&&l.push(a),l},m=function(){var e="## 0.28.2\n\n`2022-8-1`\n\n- \u26a1\ufe0f \u91c7\u7528 `react/jsx-runtime` \u8fdb\u884c\u8f6c\u4e49, \u7565\u5fae\u6539\u5584 bundle \u7684\u5927\u5c0f [#243](https://github.com/Web-Lif/fast-ui/pull/243) [@robothot](https://github.com/robothot)\n\n## 0.28.1\n\n`2022-8-1`\n\n- \ud83d\udc1e \u4fee\u590d `Table` \u8868\u683c\u7684 `rowSelection.clickModel` \u6a21\u5f0f\u5728 `single` \u6a21\u5f0f\u4e0b\u672a\u751f\u6548\u7684\u95ee\u9898 [#242](https://github.com/Web-Lif/fast-ui/pull/242) [@robothot](https://github.com/robothot)\n\n## 0.28.0\n\n`2022-8-1`\n\n- Collapse\n  - \ud83c\udd95 \u6dfb\u52a0 `Collapse` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#228](https://github.com/Web-Lif/fast-ui/pull/228) [@robothot](https://github.com/robothot)\n- Card\n  - \ud83c\udd95 \u6dfb\u52a0 `Card` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#235](https://github.com/Web-Lif/fast-ui/pull/235) [@robothot](https://github.com/robothot)\n- Tabs\n  - \ud83c\udd95 \u6dfb\u52a0 `Tabs` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#240](https://github.com/Web-Lif/fast-ui/pull/240) [@robothot](https://github.com/robothot)\n",t=u(e),l=function(){return t.map((function(e,t){return n.a.createElement(r["a"].Item,{key:t},n.a.createElement(c["a"],{className:"markdown"},e))}))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(r["a"],{style:{marginTop:"3rem",marginLeft:13}},l()))};t["a"]=m},WtSh:function(e,t,l){"use strict";var a=l("kM82"),n=l.n(a),r=l("hKI/"),c=l.n(r);l("Pg6R");function u(e,t){return i(e)||E(e,t)||o(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return d(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,a=new Array(t);l<t;l++)a[l]=e[l];return a}function E(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var a,n,r=[],c=!0,u=!1;try{for(l=l.call(e);!(c=(a=l.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(m){u=!0,n=m}finally{try{c||null==l["return"]||l["return"]()}finally{if(u)throw n}}return r}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(a["useRef"])(),r=Object(a["useState"])(!1),m=u(r,2),o=m[0],d=m[1],E=Object(a["useState"])(!1),i=u(E,2),s=i[0],b=i[1];return Object(a["useEffect"])((function(){var e=l.current,t=c()((function(){d(e.scrollLeft>0),b(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":o||void 0,"data-right-folded":s||void 0},n.a.createElement("table",null,t)))};t["a"]=s},bR9O:function(e,t,l){"use strict";l.r(t);var a=l("kM82"),n=l.n(a),r=l("dEAq"),c=(l("RIZa"),l("DSWR")),u=l("WtSh"),m=n.a.memo((function(e){var t=e.demos,l=t["tabs-demo"].component;return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"tabs-\u6807\u7b7e\u9875"},n.a.createElement(r["AnchorLink"],{to:"#tabs-\u6807\u7b7e\u9875","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Tabs \u6807\u7b7e\u9875"),n.a.createElement("p",null,"\u9009\u9879\u5361\u5207\u6362\u7ec4\u4ef6\u3002"),n.a.createElement("br",null),n.a.createElement("p",null,"\u4f8b\u5b50:")),n.a.createElement(c["default"],t["tabs-demo"].previewerProps,n.a.createElement(l,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"api"},n.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement("h3",{id:"tabs"},n.a.createElement(r["AnchorLink"],{to:"#tabs","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Tabs"),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53c2\u6570"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),n.a.createElement("th",null,"\u7248\u672c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"activeKey"),n.a.createElement("td",null,"\u5f53\u524d\u6fc0\u6d3b tab \u9762\u677f\u7684 key"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"-"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"addIcon"),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u6dfb\u52a0\u6309\u94ae"),n.a.createElement("td",null,"ReactNode"),n.a.createElement("td",null,"-"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"animated"),n.a.createElement("td",null,"\u662f\u5426\u4f7f\u7528\u52a8\u753b\u5207\u6362 Tabs, \u4ec5\u751f\u6548\u4e8e ",n.a.createElement("code",null,'tabPosition="top"')),n.a.createElement("td",null,"boolean | ","{"," inkBar: boolean, tabPane: boolean ","}"),n.a.createElement("td",null,"{"," inkBar: true, tabPane: false ","}"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"centered"),n.a.createElement("td",null,"\u6807\u7b7e\u5c45\u4e2d\u5c55\u793a"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"false"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"defaultActiveKey"),n.a.createElement("td",null,"\u521d\u59cb\u5316\u9009\u4e2d\u9762\u677f\u7684 key\uff0c\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e activeKey"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,n.a.createElement("code",null,"\u7b2c\u4e00\u4e2a\u9762\u677f")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"hideAdd"),n.a.createElement("td",null,"\u662f\u5426\u9690\u85cf\u52a0\u53f7\u56fe\u6807\uff0c\u5728 ",n.a.createElement("code",null,'type="editable-card"')," \u65f6\u6709\u6548"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"false"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"moreIcon"),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u6298\u53e0 icon"),n.a.createElement("td",null,"ReactNode"),n.a.createElement("td",null,"<EllipsisOutlined />"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"renderTabBar"),n.a.createElement("td",null,"\u66ff\u6362 TabBar\uff0c\u7528\u4e8e\u4e8c\u6b21\u5c01\u88c5\u6807\u7b7e\u5934"),n.a.createElement("td",null,"(props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement"),n.a.createElement("td",null,"-"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"size"),n.a.createElement("td",null,"\u5927\u5c0f\uff0c\u63d0\u4f9b ",n.a.createElement("code",null,"large")," ",n.a.createElement("code",null,"default")," \u548c ",n.a.createElement("code",null,"small")," \u4e09\u79cd\u5927\u5c0f"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,n.a.createElement("code",null,"default")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"tabBarExtraContent"),n.a.createElement("td",null,"tab bar \u4e0a\u989d\u5916\u7684\u5143\u7d20"),n.a.createElement("td",null,"ReactNode | ","{","left?: ReactNode, right?: ReactNode","}"),n.a.createElement("td",null,"-"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"tabBarGutter"),n.a.createElement("td",null,"tabs \u4e4b\u95f4\u7684\u95f4\u9699"),n.a.createElement("td",null,"number"),n.a.createElement("td",null,"-"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"tabBarStyle"),n.a.createElement("td",null,"tab bar \u7684\u6837\u5f0f\u5bf9\u8c61"),n.a.createElement("td",null,"object"),n.a.createElement("td",null,"-"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"tabPosition"),n.a.createElement("td",null,"\u9875\u7b7e\u4f4d\u7f6e\uff0c\u53ef\u9009\u503c\u6709 ",n.a.createElement("code",null,"top")," ",n.a.createElement("code",null,"right")," ",n.a.createElement("code",null,"bottom")," ",n.a.createElement("code",null,"left")),n.a.createElement("td",null,"string"),n.a.createElement("td",null,n.a.createElement("code",null,"top")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"destroyInactiveTabPane"),n.a.createElement("td",null,"\u88ab\u9690\u85cf\u65f6\u662f\u5426\u9500\u6bc1 DOM \u7ed3\u6784"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"false"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"type"),n.a.createElement("td",null,"\u9875\u7b7e\u7684\u57fa\u672c\u6837\u5f0f\uff0c\u53ef\u9009 ",n.a.createElement("code",null,"line"),"\u3001",n.a.createElement("code",null,"card")," ",n.a.createElement("code",null,"editable-card")," \u7c7b\u578b"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,n.a.createElement("code",null,"line")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"onChange"),n.a.createElement("td",null,"\u5207\u6362\u9762\u677f\u7684\u56de\u8c03"),n.a.createElement("td",null,"function(activeKey) ","{","}"),n.a.createElement("td",null,"-"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"onEdit"),n.a.createElement("td",null,"\u65b0\u589e\u548c\u5220\u9664\u9875\u7b7e\u7684\u56de\u8c03\uff0c\u5728 ",n.a.createElement("code",null,'type="editable-card"')," \u65f6\u6709\u6548"),n.a.createElement("td",null,"(targetKey, action): void"),n.a.createElement("td",null,"-"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"onTabClick"),n.a.createElement("td",null,"tab \u88ab\u70b9\u51fb\u7684\u56de\u8c03"),n.a.createElement("td",null,"function(key: string, event: MouseEvent)"),n.a.createElement("td",null,"-"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"onTabScroll"),n.a.createElement("td",null,"tab \u6eda\u52a8\u65f6\u89e6\u53d1"),n.a.createElement("td",null,"function(","{"," direction: ",n.a.createElement("code",null,"left")," | ",n.a.createElement("code",null,"right")," | ",n.a.createElement("code",null,"top")," | ",n.a.createElement("code",null,"bottom")," ","}",")"),n.a.createElement("td",null,"-"),n.a.createElement("td",null)))),n.a.createElement("h3",{id:"tabstabpane"},n.a.createElement(r["AnchorLink"],{to:"#tabstabpane","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Tabs.TabPane"),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53c2\u6570"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"closeIcon"),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u5173\u95ed\u56fe\u6807\uff0c",n.a.createElement("code",null,'\u5728 type="editable-card"'),"\u65f6\u6709\u6548"),n.a.createElement("td",null,"ReactNode"),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"forceRender"),n.a.createElement("td",null,"\u88ab\u9690\u85cf\u65f6\u662f\u5426\u6e32\u67d3 DOM \u7ed3\u6784"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"key"),n.a.createElement("td",null,"\u5bf9\u5e94 activeKey"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"tab"),n.a.createElement("td",null,"\u9009\u9879\u5361\u5934\u663e\u793a\u6587\u5b57"),n.a.createElement("td",null,"ReactNode"),n.a.createElement("td",null,"-")))))))}));t["default"]=function(e){var t=n.a.useContext(r["context"]),l=t.demos;return n.a.useEffect((function(){var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(m,{demos:l})}}}]);