(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[91],{"9kvl":function(e,t,l){"use strict";var a=l("FfOG");l.d(t,"a",(function(){return a["b"]}));l("bCY9")},GvAC:function(e,t,l){"use strict";var a=l("kM82"),n=l.n(a),r=l("dEAq"),c={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,l=e["export"],o=Object(r["useApiData"])(t),i=Object(a["useContext"])(r["context"]),m=i.locale,u=/^zh|cn$/i.test(m)?c["zh-CN"]:c["en-US"];return n.a.createElement(n.a.Fragment,null,o&&n.a.createElement("table",{style:{marginTop:24}},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,u.name),n.a.createElement("th",null,u.description),n.a.createElement("th",null,u.type),n.a.createElement("th",null,u["default"]))),n.a.createElement("tbody",null,o[l].map((function(e){return n.a.createElement("tr",{key:e.identifier},n.a.createElement("td",null,e.identifier),n.a.createElement("td",null,e.description||"--"),n.a.createElement("td",null,n.a.createElement("code",null,e.type)),n.a.createElement("td",null,n.a.createElement("code",null,e["default"]||e.required&&u.required||"--")))})))))}},Pg6R:function(e,t,l){},RIZa:function(e,t,l){"use strict";var a=l("kM82"),n=l.n(a),r=l("rgW5"),c=l("IujW"),o=function(e){for(var t=e.split("\n"),l=[],a=null,n=0;n<t.length;n+=1)/\s*##.*/.test(t[n])?(null!==a&&l.push(a),a="".concat(t[n])):null!==a&&(a+="\n".concat(t[n]));return null!==a&&l.push(a),l},i=function(){var e="## 0.28.3\n\n`2022-8-2`\n\n- \ud83d\udc1e \u4fee\u590d `Input` \u4e2d\u65e0\u6cd5\u6b63\u786e\u83b7\u53d6 `ref` \u5bf9\u8c61 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)\n- \ud83d\udc1e \u4fee\u590d `TextArea` \u4e2d\u65e0\u6cd5\u6b63\u786e\u83b7\u53d6 `ref` \u5bf9\u8c61 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)\n- \ud83d\udc1e \u4fee\u590d `Button` \u4e2d\u65e0\u6cd5\u6b63\u786e\u83b7\u53d6 `ref` \u5bf9\u8c61 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)\n- \ud83d\udc1e \u4fee\u590d `Card` \u4e2d\u65e0\u6cd5\u6b63\u786e\u83b7\u53d6 `ref` \u5bf9\u8c61 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)\n- \ud83d\udc1e \u4fee\u590d `InputNumber` \u4e2d\u65e0\u6cd5\u6b63\u786e\u83b7\u53d6 `ref` \u5bf9\u8c61 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)\n- \ud83d\udc1e \u4fee\u590d `Radio` \u4e2d\u65e0\u6cd5\u6b63\u786e\u83b7\u53d6 `ref` \u5bf9\u8c61 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)\n- \ud83d\udc1e \u4fee\u590d `Rate` \u4e2d\u65e0\u6cd5\u6b63\u786e\u83b7\u53d6 `ref` \u5bf9\u8c61 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)\n- \ud83d\udc1e \u4fee\u590d `Switch` \u4e2d\u65e0\u6cd5\u6b63\u786e\u83b7\u53d6 `ref` \u5bf9\u8c61 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)\n\n## 0.28.2\n\n`2022-8-1`\n\n- \u26a1\ufe0f \u91c7\u7528 `react/jsx-runtime` \u8fdb\u884c\u8f6c\u4e49, \u7565\u5fae\u6539\u5584 bundle \u7684\u5927\u5c0f [#243](https://github.com/Web-Lif/fast-ui/pull/243) [@robothot](https://github.com/robothot)\n\n## 0.28.1\n\n`2022-8-1`\n\n- \ud83d\udc1e \u4fee\u590d `Table` \u8868\u683c\u7684 `rowSelection.clickModel` \u6a21\u5f0f\u5728 `single` \u6a21\u5f0f\u4e0b\u672a\u751f\u6548\u7684\u95ee\u9898 [#242](https://github.com/Web-Lif/fast-ui/pull/242) [@robothot](https://github.com/robothot)\n\n## 0.28.0\n\n`2022-8-1`\n\n- Collapse\n  - \ud83c\udd95 \u6dfb\u52a0 `Collapse` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#228](https://github.com/Web-Lif/fast-ui/pull/228) [@robothot](https://github.com/robothot)\n- Card\n  - \ud83c\udd95 \u6dfb\u52a0 `Card` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#235](https://github.com/Web-Lif/fast-ui/pull/235) [@robothot](https://github.com/robothot)\n- Tabs\n  - \ud83c\udd95 \u6dfb\u52a0 `Tabs` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#240](https://github.com/Web-Lif/fast-ui/pull/240) [@robothot](https://github.com/robothot)\n",t=o(e),l=function(){return t.map((function(e,t){return n.a.createElement(r["a"].Item,{key:t},n.a.createElement(c["a"],{className:"markdown"},e))}))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(r["a"],{style:{marginTop:"3rem",marginLeft:13}},l()))};t["a"]=i},WtSh:function(e,t,l){"use strict";var a=l("kM82"),n=l.n(a),r=l("hKI/"),c=l.n(r);l("Pg6R");function o(e,t){return s(e)||d(e,t)||m(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return u(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,a=new Array(t);l<t;l++)a[l]=e[l];return a}function d(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var a,n,r=[],c=!0,o=!1;try{for(l=l.call(e);!(c=(a=l.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(i){o=!0,n=i}finally{try{c||null==l["return"]||l["return"]()}finally{if(o)throw n}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,l=Object(a["useRef"])(),r=Object(a["useState"])(!1),i=o(r,2),m=i[0],u=i[1],d=Object(a["useState"])(!1),s=o(d,2),E=s[0],h=s[1];return Object(a["useEffect"])((function(){var e=l.current,t=c()((function(){u(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":m||void 0,"data-right-folded":E||void 0},n.a.createElement("table",null,t)))};t["a"]=E},eEam:function(e,t,l){"use strict";l.r(t);var a=l("kM82"),n=l.n(a),r=l("dEAq"),c=(l("RIZa"),l("GvAC")),o=l("DSWR"),i=l("WtSh"),m=n.a.memo((function(e){var t=e.demos,l=t["__demo__-simple-2"].component,a=t["__demo__-selectrow"].component,m=t["__demo__-pagination"].component,u=t["__demo__-row-edit"].component,d=t["__demo__-sort"].component,s=t["__demo__-emptyrows"].component,E=t["__demo__-virtualscroll"].component;return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"table-\u8868\u683c"},n.a.createElement(r["AnchorLink"],{to:"#table-\u8868\u683c","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Table \u8868\u683c"),n.a.createElement("p",null,"\u5c55\u793a\u884c\u5217\u6570\u636e\u3002"),n.a.createElement("h3",{id:"\u4f55\u65f6\u4f7f\u7528"},n.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u5f53\u6709\u5927\u91cf\u7ed3\u6784\u5316\u7684\u6570\u636e\u9700\u8981\u5c55\u73b0\u65f6\uff1b"),n.a.createElement("li",null,"\u5f53\u9700\u8981\u5bf9\u6570\u636e\u8fdb\u884c\u6392\u5e8f\u3001\u641c\u7d22\u3001\u5206\u9875\u3001\u81ea\u5b9a\u4e49\u64cd\u4f5c\u7b49\u590d\u6742\u884c\u4e3a\u65f6\u3002")),n.a.createElement("h3",{id:"\u529f\u80fd"},n.a.createElement(r["AnchorLink"],{to:"#\u529f\u80fd","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u529f\u80fd"),n.a.createElement("ul",{className:"contains-task-list"},n.a.createElement("li",{className:"task-list-item"},n.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u865a\u62df\u6eda\u52a8"),n.a.createElement("li",{className:"task-list-item"},n.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u56fa\u5b9a\u5217\u5de6\u8fb9/\u53f3\u8fb9"),n.a.createElement("li",{className:"task-list-item"},n.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u8868\u683c\u884c\u7684\u5355\u9009/\u591a\u9009\u6a21\u5f0f"),n.a.createElement("li",{className:"task-list-item"},n.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u7a7a\u6570\u636e\u663e\u793a\u6e32\u67d3"),n.a.createElement("li",{className:"task-list-item"},n.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u70b9\u51fb\u8868\u683c\u5934\u90e8\u8fdb\u884c\u5355\u5217\u6392\u5e8f"),n.a.createElement("li",{className:"task-list-item"},n.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u70b9\u51fb\u5355\u5143\u683c\u8fdb\u884c\u7f16\u8f91"),n.a.createElement("li",{className:"task-list-item"},n.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u8868\u683c\u5206\u9875\u914d\u7f6e"),n.a.createElement("li",{className:"task-list-item"},n.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u81ea\u5b9a\u4e49\u663e\u793a/\u9690\u85cf\u5217\u4fe1\u606f"),n.a.createElement("li",{className:"task-list-item"},n.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u8868\u683c\u83dc\u5355\u680f\u7684\u56fa\u5b9a\u5217\u914d\u7f6e"),n.a.createElement("li",{className:"task-list-item"},n.a.createElement("input",{type:"checkbox",defaultChecked:!0,disabled:!0})," \u8868\u683c\u884c\u5728\u591a\u9009\u6a21\u5f0f\u8fdb\u884c\u5168\u9009/\u53cd\u9009"),n.a.createElement("li",{className:"task-list-item"},n.a.createElement("input",{type:"checkbox",disabled:!0})," \u8868\u683c\u8fdb\u884c\u672c\u5730/\u8fdc\u7a0b\u7b5b\u9009"),n.a.createElement("li",{className:"task-list-item"},n.a.createElement("input",{type:"checkbox",disabled:!0})," \u8868\u5934\u5206\u7ec4"),n.a.createElement("li",{className:"task-list-item"},n.a.createElement("input",{type:"checkbox",disabled:!0})," \u603b\u7ed3\u680f"),n.a.createElement("li",{className:"task-list-item"},n.a.createElement("input",{type:"checkbox",disabled:!0})," \u8868\u683c\u7684\u884c/\u5217\u5408\u5e76"),n.a.createElement("li",{className:"task-list-item"},n.a.createElement("input",{type:"checkbox",disabled:!0})," \u8868\u683c\u53ef\u5c55\u5f00\u884c")),n.a.createElement("br",null),n.a.createElement("p",null,"\u4f8b\u5b50:")),n.a.createElement(o["default"],t["__demo__-simple-2"].previewerProps,n.a.createElement(l,null)),n.a.createElement(o["default"],t["__demo__-selectrow"].previewerProps,n.a.createElement(a,null)),n.a.createElement(o["default"],t["__demo__-pagination"].previewerProps,n.a.createElement(m,null)),n.a.createElement(o["default"],t["__demo__-row-edit"].previewerProps,n.a.createElement(u,null)),n.a.createElement(o["default"],t["__demo__-sort"].previewerProps,n.a.createElement(d,null)),n.a.createElement(o["default"],t["__demo__-emptyrows"].previewerProps,n.a.createElement(s,null)),n.a.createElement(o["default"],t["__demo__-virtualscroll"].previewerProps,n.a.createElement(E,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("br",null),n.a.createElement("h2",{id:"api"},n.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement(c["a"],{identifier:"table",export:"default"}),n.a.createElement("h2",{id:"column"},n.a.createElement(r["AnchorLink"],{to:"#column","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Column"),n.a.createElement(i["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027\u540d"),n.a.createElement("th",null,"\u63cf\u8ff0"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"name"),n.a.createElement("td",null,"\u5b57\u6bb5\u540d\u79f0"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,n.a.createElement("code",null,"\u5fc5\u9009"))),n.a.createElement("tr",null,n.a.createElement("td",null,"title"),n.a.createElement("td",null,"\u663e\u793a\u7684\u6807\u9898"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,n.a.createElement("code",null,"\u5fc5\u9009"))),n.a.createElement("tr",null,n.a.createElement("td",null,"width"),n.a.createElement("td",null,"\u5217\u7684\u5bbd\u5ea6\u4fe1\u606f"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"fixed"),n.a.createElement("td",null,"\u56fa\u5b9a\u5217\u7684\u65b9\u5411"),n.a.createElement("td",null,n.a.createElement("code",null,"'left'")," | ",n.a.createElement("code",null,"'right'")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"readOnly"),n.a.createElement("td",null,"\u662f\u5426\u53ea\u8bfb"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"resizable"),n.a.createElement("td",null,"\u662f\u5426\u53ef\u62d6\u62fd\u6539\u53d8\u5bbd\u5ea6"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"align"),n.a.createElement("td",null,"\u5217\u7684\u5bf9\u9f50\u65b9\u5f0f"),n.a.createElement("td",null,n.a.createElement("code",null,"{"," header?: AlignType, body?: AlignType | ((row: T) => AlignType) ","}")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"editor"),n.a.createElement("td",null,"\u7f16\u8f91\u5668"),n.a.createElement("td",null,n.a.createElement("code",null,"(renderType: EditRenderType<T>) => ReactElement")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"render"),n.a.createElement("td",null,"\u6e32\u67d3\u5355\u5143\u683c"),n.a.createElement("td",null,n.a.createElement("code",null,"(renderType: RenderType<T>) => ReactElement")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"allowCellSelectBorder"),n.a.createElement("td",null,"\u662f\u5426\u5141\u8bb8\u5355\u5143\u683c\u88ab\u9009\u4e2d"),n.a.createElement("td",null,n.a.createElement("code",null,"((param: AllowCellSelectBorderParam<T>) => boolean) | boolean")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"hidden"),n.a.createElement("td",null,"\u662f\u5426\u9690\u85cf\u6b64\u5217"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"-")))))))}));t["default"]=function(e){var t=n.a.useContext(r["context"]),l=t.demos;return n.a.useEffect((function(){var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(m,{demos:l})}}}]);