(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[89],{"+Udc":function(e,t,l){"use strict";var n=l("rgW5");t["a"]=n["a"]},"9kvl":function(e,t,l){"use strict";var n=l("FfOG");l.d(t,"a",(function(){return n["b"]}));l("bCY9")},GvAC:function(e,t,l){"use strict";var n=l("kM82"),a=l.n(n),r=l("dEAq"),c=l("WtSh"),o={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,l=e["export"],u=Object(r["useApiData"])(t),m=Object(n["useContext"])(r["context"]),i=m.locale,d=/^zh|cn$/i.test(i)?o["zh-CN"]:o["en-US"];return a.a.createElement(a.a.Fragment,null,u&&a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,d.name),a.a.createElement("th",null,d.description),a.a.createElement("th",null,d.type),a.a.createElement("th",null,d["default"]))),a.a.createElement("tbody",null,u[l].map((function(e){return a.a.createElement("tr",{key:e.identifier},a.a.createElement("td",null,e.identifier),a.a.createElement("td",null,e.description||"--"),a.a.createElement("td",null,a.a.createElement("code",null,e.type)),a.a.createElement("td",null,a.a.createElement("code",null,e["default"]||e.required&&d.required||"--")))})))))}},Pg6R:function(e,t,l){},RIZa:function(e,t,l){"use strict";var n=l("kM82"),a=l.n(n),r=l("+Udc"),c=l("IujW"),o=function(e){for(var t=e.split("\n"),l=[],n=null,a=0;a<t.length;a+=1)/\s*##.*/.test(t[a])?(null!==n&&l.push(n),n="".concat(t[a])):null!==n&&(n+="\n".concat(t[a]));return null!==n&&l.push(n),l},u=function(){var e="## 0.29.8\n\n`2022-11-10`\n\n- Table\n  - \ud83d\udc1e \u4fee\u590d\u8868\u683c\u5237\u65b0\u540e,\u6eda\u52a8\u6761\u5bfc\u81f4\u8868\u683c\u767d\u5c4f\u7684\u95ee\u9898\n\n## 0.29.7\n\n`2022-11-9`\n\n- Button\n  - \ud83d\udc1e \u4fee\u590d\u70b9\u51fb\u7684\u65f6\u5019\u4f1a\u548c disabled \u5c5e\u6027\u51b2\u7a81, \u5bfc\u81f4 disabled \u5c5e\u6027\u6ca1\u6709\u6309\u7167\u9884\u671f\u884c\u4e3a\u751f\u6548\n\n## 0.29.6\n\n`2022-10-27`\n\n- Table\n  - \ud83d\udc1e \u4fee\u590d\u8868\u683c\u5237\u65b0\u540e,\u6eda\u52a8\u6761\u5bfc\u81f4\u8868\u683c\u767d\u5c4f\u7684\u95ee\u9898\n\n## 0.29.5\n\n`2022-9-15`\n\n- Table\n  - \ud83d\udc1e \u5220\u9664 `debugger` \u5173\u952e\u5b57\n\n## 0.29.4\n\n`2022-9-15`\n\n- Table\n  - \ud83d\udc1e \u4fee\u590d\u7981\u7528\u9009\u4e2d\u540e, \u4ecd\u7136\u53ef\u4ee5\u70b9\u51fb\u884c\u8fdb\u884c\u4fee\u6539\u72b6\u6001\n  - \ud83c\udd95 \u6dfb\u52a0 `allowSingleSelectNonEmpty` \u6765\u63a7\u5236\u5355\u9009\u662f\u5426\u5141\u8bb8\u4e0d\u4e3a\u7a7a\n\n## 0.29.3\n\n`2022-9-9`\n\n- Table\n  - \ud83d\udc1e \u4fee\u590d\u8868\u683c\u70b9\u51fb\u5934\u90e8\u7684\u65f6\u5019\u4f1a\u89e6\u53d1\u9009\u62e9\u4e8b\u4ef6 [#275](https://github.com/Web-Lif/fast-ui/pull/275) [@robothot](https://github.com/robothot)\n\n## 0.29.2\n\n`2022-8-8`\n\n- Table\n  - \ud83d\udc1e \u4fee\u590d\u8868\u683c\u6eda\u52a8\u7684\u65f6\u5019\uff0c\u5355\u5143\u683c\u6ca1\u6709\u6b63\u5e38\u663e\u793a\u7684\u95ee\u9898 [#255](https://github.com/Web-Lif/fast-ui/pull/255) [@robothot](https://github.com/robothot)\n\n## 0.29.1\n\n`2022-8-8`\n\n- Table\n  - \ud83c\udd95 \u5728\u8868\u683c\u4e2d, \u53ef\u4ee5\u4f7f\u7528 CSS var \u6765\u8fdb\u884c\u81ea\u5b9a\u4e49\u8868\u683c\u6837\u5f0f [#254](https://github.com/Web-Lif/fast-ui/pull/254) [@robothot](https://github.com/robothot)\n\n## 0.29.0\n\n`2022-8-3`\n\n- Table\n  - \ud83c\udd95 \u6dfb\u52a0\u6c47\u603b\u680f\u7684\u529f\u80fd [#249](https://github.com/Web-Lif/fast-ui/pull/249) [@robothot](https://github.com/robothot)\n  - \ud83d\udd25 \u5c06 `Column` \u7c7b\u578b\u4e2d\u7684 `summary`, `editor`, `render` \u8fd4\u56de\u503c\u6539\u6210 `ReactNode` [#249](https://github.com/Web-Lif/fast-ui/pull/249) [@robothot](https://github.com/robothot)\n\n## 0.28.3\n\n`2022-8-2`\n\n- \ud83d\udc1e \u4fee\u590d `Input` \u4e2d\u65e0\u6cd5\u6b63\u786e\u83b7\u53d6 `ref` \u5bf9\u8c61 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)\n- \ud83d\udc1e \u4fee\u590d `TextArea` \u4e2d\u65e0\u6cd5\u6b63\u786e\u83b7\u53d6 `ref` \u5bf9\u8c61 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)\n- \ud83d\udc1e \u4fee\u590d `Button` \u4e2d\u65e0\u6cd5\u6b63\u786e\u83b7\u53d6 `ref` \u5bf9\u8c61 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)\n- \ud83d\udc1e \u4fee\u590d `Card` \u4e2d\u65e0\u6cd5\u6b63\u786e\u83b7\u53d6 `ref` \u5bf9\u8c61 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)\n- \ud83d\udc1e \u4fee\u590d `InputNumber` \u4e2d\u65e0\u6cd5\u6b63\u786e\u83b7\u53d6 `ref` \u5bf9\u8c61 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)\n- \ud83d\udc1e \u4fee\u590d `Radio` \u4e2d\u65e0\u6cd5\u6b63\u786e\u83b7\u53d6 `ref` \u5bf9\u8c61 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)\n- \ud83d\udc1e \u4fee\u590d `Rate` \u4e2d\u65e0\u6cd5\u6b63\u786e\u83b7\u53d6 `ref` \u5bf9\u8c61 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)\n- \ud83d\udc1e \u4fee\u590d `Switch` \u4e2d\u65e0\u6cd5\u6b63\u786e\u83b7\u53d6 `ref` \u5bf9\u8c61 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)\n\n## 0.28.2\n\n`2022-8-1`\n\n- \u26a1\ufe0f \u91c7\u7528 `react/jsx-runtime` \u8fdb\u884c\u8f6c\u4e49, \u7565\u5fae\u6539\u5584 bundle \u7684\u5927\u5c0f [#243](https://github.com/Web-Lif/fast-ui/pull/243) [@robothot](https://github.com/robothot)\n\n## 0.28.1\n\n`2022-8-1`\n\n- \ud83d\udc1e \u4fee\u590d `Table` \u8868\u683c\u7684 `rowSelection.clickModel` \u6a21\u5f0f\u5728 `single` \u6a21\u5f0f\u4e0b\u672a\u751f\u6548\u7684\u95ee\u9898 [#242](https://github.com/Web-Lif/fast-ui/pull/242) [@robothot](https://github.com/robothot)\n\n## 0.28.0\n\n`2022-8-1`\n\n- Collapse\n  - \ud83c\udd95 \u6dfb\u52a0 `Collapse` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#228](https://github.com/Web-Lif/fast-ui/pull/228) [@robothot](https://github.com/robothot)\n- Card\n  - \ud83c\udd95 \u6dfb\u52a0 `Card` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#235](https://github.com/Web-Lif/fast-ui/pull/235) [@robothot](https://github.com/robothot)\n- Tabs\n  - \ud83c\udd95 \u6dfb\u52a0 `Tabs` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#240](https://github.com/Web-Lif/fast-ui/pull/240) [@robothot](https://github.com/robothot)\n",t=o(e),l=function(){return t.map((function(e,t){return a.a.createElement(r["a"].Item,{key:t},a.a.createElement(c["a"],{className:"markdown"},e))}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(r["a"],{style:{marginTop:"3rem",marginLeft:13}},l()))};t["a"]=u},WtSh:function(e,t,l){"use strict";var n=l("kM82"),a=l.n(n),r=l("hKI/"),c=l.n(r);l("Pg6R");function o(e,t){return s(e)||d(e,t)||m(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return i(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function d(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,o=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(u){o=!0,a=u}finally{try{c||null==l["return"]||l["return"]()}finally{if(o)throw a}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,l=Object(n["useRef"])(),r=Object(n["useState"])(!1),u=o(r,2),m=u[0],i=u[1],d=Object(n["useState"])(!1),s=o(d,2),E=s[0],h=s[1];return Object(n["useEffect"])((function(){var e=l.current,t=c()((function(){i(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":m||void 0,"data-right-folded":E||void 0},a.a.createElement("table",null,t)))};t["a"]=E},eEam:function(e,t,l){"use strict";l.r(t);var n=l("kM82"),a=l.n(n),r=l("dEAq"),c=(l("RIZa"),l("GvAC")),o=l("DSWR"),u=l("WtSh"),m=a.a.memo((function(e){var t=e.demos,l=t["__demo__-simple-2"].component,n=t["__demo__-selectrow"].component,m=t["__demo__-pagination"].component,i=t["__demo__-row-edit"].component,d=t["__demo__-sort"].component,s=t["__demo__-emptyrows"].component,E=t["__demo__-virtualscroll"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"table-\u8868\u683c"},a.a.createElement(r["AnchorLink"],{to:"#table-\u8868\u683c","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Table \u8868\u683c"),a.a.createElement("p",null,"\u5c55\u793a\u884c\u5217\u6570\u636e\u3002"),a.a.createElement("h3",{id:"\u4f55\u65f6\u4f7f\u7528"},a.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5f53\u6709\u5927\u91cf\u7ed3\u6784\u5316\u7684\u6570\u636e\u9700\u8981\u5c55\u73b0\u65f6\uff1b"),a.a.createElement("li",null,"\u5f53\u9700\u8981\u5bf9\u6570\u636e\u8fdb\u884c\u6392\u5e8f\u3001\u641c\u7d22\u3001\u5206\u9875\u3001\u81ea\u5b9a\u4e49\u64cd\u4f5c\u7b49\u590d\u6742\u884c\u4e3a\u65f6\u3002")),a.a.createElement("h3",{id:"\u529f\u80fd"},a.a.createElement(r["AnchorLink"],{to:"#\u529f\u80fd","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u529f\u80fd"),a.a.createElement("ul",{className:"contains-task-list"},a.a.createElement("li",{className:"task-list-item"},a.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u865a\u62df\u6eda\u52a8"),a.a.createElement("li",{className:"task-list-item"},a.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u56fa\u5b9a\u5217\u5de6\u8fb9/\u53f3\u8fb9"),a.a.createElement("li",{className:"task-list-item"},a.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u8868\u683c\u884c\u7684\u5355\u9009/\u591a\u9009\u6a21\u5f0f"),a.a.createElement("li",{className:"task-list-item"},a.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u7a7a\u6570\u636e\u663e\u793a\u6e32\u67d3"),a.a.createElement("li",{className:"task-list-item"},a.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u70b9\u51fb\u8868\u683c\u5934\u90e8\u8fdb\u884c\u5355\u5217\u6392\u5e8f"),a.a.createElement("li",{className:"task-list-item"},a.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u70b9\u51fb\u5355\u5143\u683c\u8fdb\u884c\u7f16\u8f91"),a.a.createElement("li",{className:"task-list-item"},a.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u8868\u683c\u5206\u9875\u914d\u7f6e"),a.a.createElement("li",{className:"task-list-item"},a.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u81ea\u5b9a\u4e49\u663e\u793a/\u9690\u85cf\u5217\u4fe1\u606f"),a.a.createElement("li",{className:"task-list-item"},a.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u8868\u683c\u83dc\u5355\u680f\u7684\u56fa\u5b9a\u5217\u914d\u7f6e"),a.a.createElement("li",{className:"task-list-item"},a.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u8868\u683c\u884c\u5728\u591a\u9009\u6a21\u5f0f\u8fdb\u884c\u5168\u9009/\u53cd\u9009"),a.a.createElement("li",{className:"task-list-item"},a.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u603b\u7ed3\u680f"),a.a.createElement("li",{className:"task-list-item"},a.a.createElement("input",{type:"checkbox",disabled:!0})," \u8868\u683c\u8fdb\u884c\u672c\u5730/\u8fdc\u7a0b\u7b5b\u9009"),a.a.createElement("li",{className:"task-list-item"},a.a.createElement("input",{type:"checkbox",disabled:!0})," \u8868\u5934\u5206\u7ec4"),a.a.createElement("li",{className:"task-list-item"},a.a.createElement("input",{type:"checkbox",disabled:!0})," \u8868\u683c\u7684\u884c/\u5217\u5408\u5e76"),a.a.createElement("li",{className:"task-list-item"},a.a.createElement("input",{type:"checkbox",disabled:!0})," \u8868\u683c\u53ef\u5c55\u5f00\u884c")),a.a.createElement("br",null),a.a.createElement("p",null,"\u4f8b\u5b50:")),a.a.createElement(o["default"],t["__demo__-simple-2"].previewerProps,a.a.createElement(l,null)),a.a.createElement(o["default"],t["__demo__-selectrow"].previewerProps,a.a.createElement(n,null)),a.a.createElement(o["default"],t["__demo__-pagination"].previewerProps,a.a.createElement(m,null)),a.a.createElement(o["default"],t["__demo__-row-edit"].previewerProps,a.a.createElement(i,null)),a.a.createElement(o["default"],t["__demo__-sort"].previewerProps,a.a.createElement(d,null)),a.a.createElement(o["default"],t["__demo__-emptyrows"].previewerProps,a.a.createElement(s,null)),a.a.createElement(o["default"],t["__demo__-virtualscroll"].previewerProps,a.a.createElement(E,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("br",null),a.a.createElement("h2",{id:"api"},a.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement(c["a"],{identifier:"table",export:"default"}),a.a.createElement("h2",{id:"column"},a.a.createElement(r["AnchorLink"],{to:"#column","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Column"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027\u540d"),a.a.createElement("th",null,"\u63cf\u8ff0"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"name"),a.a.createElement("td",null,"\u5b57\u6bb5\u540d\u79f0"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,a.a.createElement("code",null,"\u5fc5\u9009"))),a.a.createElement("tr",null,a.a.createElement("td",null,"title"),a.a.createElement("td",null,"\u663e\u793a\u7684\u6807\u9898"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,a.a.createElement("code",null,"\u5fc5\u9009"))),a.a.createElement("tr",null,a.a.createElement("td",null,"width"),a.a.createElement("td",null,"\u5217\u7684\u5bbd\u5ea6\u4fe1\u606f"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"fixed"),a.a.createElement("td",null,"\u56fa\u5b9a\u5217\u7684\u65b9\u5411"),a.a.createElement("td",null,a.a.createElement("code",null,"'left'")," | ",a.a.createElement("code",null,"'right'")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"readOnly"),a.a.createElement("td",null,"\u662f\u5426\u53ea\u8bfb"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"resizable"),a.a.createElement("td",null,"\u662f\u5426\u53ef\u62d6\u62fd\u6539\u53d8\u5bbd\u5ea6"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"align"),a.a.createElement("td",null,"\u5217\u7684\u5bf9\u9f50\u65b9\u5f0f"),a.a.createElement("td",null,a.a.createElement("code",null,"{"," header?: AlignType, body?: AlignType | ((row: T) => AlignType) ","}")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"editor"),a.a.createElement("td",null,"\u7f16\u8f91\u5668"),a.a.createElement("td",null,a.a.createElement("code",null,"(renderType: EditRenderType<T>) => ReactElement")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"render"),a.a.createElement("td",null,"\u6e32\u67d3\u5355\u5143\u683c"),a.a.createElement("td",null,a.a.createElement("code",null,"(renderType: RenderType<T>) => ReactElement")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"allowCellSelectBorder"),a.a.createElement("td",null,"\u662f\u5426\u5141\u8bb8\u5355\u5143\u683c\u88ab\u9009\u4e2d"),a.a.createElement("td",null,a.a.createElement("code",null,"((param: AllowCellSelectBorderParam<T>) => boolean) | boolean")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"hidden"),a.a.createElement("td",null,"\u662f\u5426\u9690\u85cf\u6b64\u5217"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,"-")))),a.a.createElement("h2",{id:"css-\u53d8\u91cf"},a.a.createElement(r["AnchorLink"],{to:"#css-\u53d8\u91cf","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"CSS \u53d8\u91cf"),a.a.createElement("th",null,"\u63cf\u8ff0"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("code",null,"--rctbl-border-color")),a.a.createElement("td",null,"\u8868\u683c\u8fb9\u6846\u7684\u989c\u8272"),a.a.createElement("td",null,a.a.createElement("code",null,"#dddddd"))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("code",null,"--rctbl-body-row-background-color")),a.a.createElement("td",null,"\u8868\u683c\u884c\u7684\u989c\u8272"),a.a.createElement("td",null,a.a.createElement("code",null,"#ffffff"))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("code",null,"--rctbl-body-row-background-color-hover")),a.a.createElement("td",null,"\u8868\u683c\u884c\u7684 ",a.a.createElement("code",null,"hover")," \u989c\u8272"),a.a.createElement("td",null,a.a.createElement("code",null,"#f5f5f5"))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("code",null,"--rctbl-body-row-select-background-color")),a.a.createElement("td",null,"\u8868\u683c\u9009\u4e2d\u7684\u989c\u8272"),a.a.createElement("td",null,a.a.createElement("code",null,"#f5f5f5"))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("code",null,"--rctbl-body-cell-select-border-color")),a.a.createElement("td",null,"\u8868\u683c\u5355\u5143\u683c\u8fb9\u6846\u9009\u4e2d\u7684\u989c\u8272"),a.a.createElement("td",null,a.a.createElement("code",null,"#1890ff"))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("code",null,"--rctbl-header-row-background-color")),a.a.createElement("td",null,"\u8868\u683c\u5934\u90e8\u884c\u7684\u989c\u8272"),a.a.createElement("td",null,a.a.createElement("code",null,"#f9f9f9"))))))))}));t["default"]=function(e){var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((function(){var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(m,{demos:l})}}}]);