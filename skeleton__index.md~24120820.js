(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[83],{"9kvl":function(e,t,l){"use strict";var n=l("FfOG");l.d(t,"a",(function(){return n["b"]}));l("bCY9")},Pg6R:function(e,t,l){},RIZa:function(e,t,l){"use strict";var n=l("kM82"),a=l.n(n),r=l("rgW5"),c=l("IujW"),u=function(e){for(var t=e.split("\n"),l=[],n=null,a=0;a<t.length;a+=1)/\s*##.*/.test(t[a])?(null!==n&&l.push(n),n="".concat(t[a])):null!==n&&(n+="\n".concat(t[a]));return null!==n&&l.push(n),l},o=function(){var e="## 0.28.2\n\n`2022-8-1`\n\n- \u26a1\ufe0f \u91c7\u7528 `react/jsx-runtime` \u8fdb\u884c\u8f6c\u4e49, \u7565\u5fae\u6539\u5584 bundle \u7684\u5927\u5c0f [#243](https://github.com/Web-Lif/fast-ui/pull/243) [@robothot](https://github.com/robothot)\n\n## 0.28.1\n\n`2022-8-1`\n\n- \ud83d\udc1e \u4fee\u590d `Table` \u8868\u683c\u7684 `rowSelection.clickModel` \u6a21\u5f0f\u5728 `single` \u6a21\u5f0f\u4e0b\u672a\u751f\u6548\u7684\u95ee\u9898 [#242](https://github.com/Web-Lif/fast-ui/pull/242) [@robothot](https://github.com/robothot)\n\n## 0.28.0\n\n`2022-8-1`\n\n- Collapse\n  - \ud83c\udd95 \u6dfb\u52a0 `Collapse` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#228](https://github.com/Web-Lif/fast-ui/pull/228) [@robothot](https://github.com/robothot)\n- Card\n  - \ud83c\udd95 \u6dfb\u52a0 `Card` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#235](https://github.com/Web-Lif/fast-ui/pull/235) [@robothot](https://github.com/robothot)\n- Tabs\n  - \ud83c\udd95 \u6dfb\u52a0 `Tabs` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#240](https://github.com/Web-Lif/fast-ui/pull/240) [@robothot](https://github.com/robothot)\n",t=u(e),l=function(){return t.map((function(e,t){return a.a.createElement(r["a"].Item,{key:t},a.a.createElement(c["a"],{className:"markdown"},e))}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(r["a"],{style:{marginTop:"3rem",marginLeft:13}},l()))};t["a"]=o},WtSh:function(e,t,l){"use strict";var n=l("kM82"),a=l.n(n),r=l("hKI/"),c=l.n(r);l("Pg6R");function u(e,t){return i(e)||d(e,t)||m(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return E(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?E(e,t):void 0}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function d(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,u=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(o){u=!0,a=o}finally{try{c||null==l["return"]||l["return"]()}finally{if(u)throw a}}return r}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(n["useRef"])(),r=Object(n["useState"])(!1),o=u(r,2),m=o[0],E=o[1],d=Object(n["useState"])(!1),i=u(d,2),s=i[0],h=i[1];return Object(n["useEffect"])((function(){var e=l.current,t=c()((function(){E(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":m||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},k3g2:function(e,t,l){"use strict";l.r(t);var n=l("kM82"),a=l.n(n),r=l("dEAq"),c=(l("RIZa"),l("DSWR")),u=l("WtSh"),o=a.a.memo((function(e){var t=e.demos,l=t["skeleton-demo"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"skeleton-\u9aa8\u67b6\u5c4f"},a.a.createElement(r["AnchorLink"],{to:"#skeleton-\u9aa8\u67b6\u5c4f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Skeleton \u9aa8\u67b6\u5c4f"),a.a.createElement("p",null,"\u5728\u9700\u8981\u7b49\u5f85\u52a0\u8f7d\u5185\u5bb9\u7684\u4f4d\u7f6e\u63d0\u4f9b\u4e00\u4e2a\u5360\u4f4d\u56fe\u5f62\u7ec4\u5408\u3002"),a.a.createElement("br",null),a.a.createElement("p",null,"\u4f8b\u5b50:")),a.a.createElement(c["default"],t["skeleton-demo"].previewerProps,a.a.createElement(l,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"api"},a.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement("h3",{id:"skeleton"},a.a.createElement(r["AnchorLink"],{to:"#skeleton","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Skeleton"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"active"),a.a.createElement("td",null,"\u662f\u5426\u5c55\u793a\u52a8\u753b\u6548\u679c"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"avatar"),a.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u5934\u50cf\u5360\u4f4d\u56fe"),a.a.createElement("td",null,"boolean | ",a.a.createElement(r["AnchorLink"],{to:"#SkeletonAvatarProps"},"SkeletonAvatarProps")),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"loading"),a.a.createElement("td",null,"\u4e3a true \u65f6\uff0c\u663e\u793a\u5360\u4f4d\u56fe\u3002\u53cd\u4e4b\u5219\u76f4\u63a5\u5c55\u793a\u5b50\u7ec4\u4ef6"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"paragraph"),a.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u6bb5\u843d\u5360\u4f4d\u56fe"),a.a.createElement("td",null,"boolean | ",a.a.createElement(r["AnchorLink"],{to:"#SkeletonParagraphProps"},"SkeletonParagraphProps")),a.a.createElement("td",null,"true")),a.a.createElement("tr",null,a.a.createElement("td",null,"round"),a.a.createElement("td",null,"\u4e3a true \u65f6\uff0c\u6bb5\u843d\u548c\u6807\u9898\u663e\u793a\u5706\u89d2"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"title"),a.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u6807\u9898\u5360\u4f4d\u56fe"),a.a.createElement("td",null,"boolean | ",a.a.createElement(r["AnchorLink"],{to:"#SkeletonTitleProps"},"SkeletonTitleProps")),a.a.createElement("td",null,"true")))),a.a.createElement("h3",{id:"skeletonavatarprops"},a.a.createElement(r["AnchorLink"],{to:"#skeletonavatarprops","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"SkeletonAvatarProps"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"active"),a.a.createElement("td",null,"\u662f\u5426\u5c55\u793a\u52a8\u753b\u6548\u679c\uff0c\u4ec5\u5728\u5355\u72ec\u4f7f\u7528\u5934\u50cf\u9aa8\u67b6\u65f6\u751f\u6548"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"shape"),a.a.createElement("td",null,"\u6307\u5b9a\u5934\u50cf\u7684\u5f62\u72b6"),a.a.createElement("td",null,a.a.createElement("code",null,"circle")," | ",a.a.createElement("code",null,"square")),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"size"),a.a.createElement("td",null,"\u8bbe\u7f6e\u5934\u50cf\u5360\u4f4d\u56fe\u7684\u5927\u5c0f"),a.a.createElement("td",null,"number | ",a.a.createElement("code",null,"large")," | ",a.a.createElement("code",null,"small")," | ",a.a.createElement("code",null,"default")),a.a.createElement("td",null,"-")))),a.a.createElement("h3",{id:"skeletontitleprops"},a.a.createElement(r["AnchorLink"],{to:"#skeletontitleprops","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"SkeletonTitleProps"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"width"),a.a.createElement("td",null,"\u8bbe\u7f6e\u6807\u9898\u5360\u4f4d\u56fe\u7684\u5bbd\u5ea6"),a.a.createElement("td",null,"number | string"),a.a.createElement("td",null,"-")))),a.a.createElement("h3",{id:"skeletonparagraphprops"},a.a.createElement(r["AnchorLink"],{to:"#skeletonparagraphprops","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"SkeletonParagraphProps"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"rows"),a.a.createElement("td",null,"\u8bbe\u7f6e\u6bb5\u843d\u5360\u4f4d\u56fe\u7684\u884c\u6570"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"width"),a.a.createElement("td",null,"\u8bbe\u7f6e\u6bb5\u843d\u5360\u4f4d\u56fe\u7684\u5bbd\u5ea6\uff0c\u82e5\u4e3a\u6570\u7ec4\u65f6\u5219\u4e3a\u5bf9\u5e94\u7684\u6bcf\u884c\u5bbd\u5ea6\uff0c\u53cd\u4e4b\u5219\u662f\u6700\u540e\u4e00\u884c\u7684\u5bbd\u5ea6"),a.a.createElement("td",null,"number | string | Array<number | string>"),a.a.createElement("td",null,"-")))),a.a.createElement("h3",{id:"skeletonbuttonprops"},a.a.createElement(r["AnchorLink"],{to:"#skeletonbuttonprops","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"SkeletonButtonProps"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),a.a.createElement("th",null,"\u7248\u672c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"active"),a.a.createElement("td",null,"\u662f\u5426\u5c55\u793a\u52a8\u753b\u6548\u679c"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"block"),a.a.createElement("td",null,"\u5c06\u6309\u94ae\u5bbd\u5ea6\u8c03\u6574\u4e3a\u5176\u7236\u5bbd\u5ea6\u7684\u9009\u9879"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"shape"),a.a.createElement("td",null,"\u6307\u5b9a\u6309\u94ae\u7684\u5f62\u72b6"),a.a.createElement("td",null,a.a.createElement("code",null,"circle")," | ",a.a.createElement("code",null,"round")," | ",a.a.createElement("code",null,"default")),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"size"),a.a.createElement("td",null,"\u8bbe\u7f6e\u6309\u94ae\u7684\u5927\u5c0f"),a.a.createElement("td",null,a.a.createElement("code",null,"large")," | ",a.a.createElement("code",null,"small")," | ",a.a.createElement("code",null,"default")),a.a.createElement("td",null,"-"),a.a.createElement("td",null)))),a.a.createElement("h3",{id:"skeletoninputprops"},a.a.createElement(r["AnchorLink"],{to:"#skeletoninputprops","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"SkeletonInputProps"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"active"),a.a.createElement("td",null,"\u662f\u5426\u5c55\u793a\u52a8\u753b\u6548\u679c"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"size"),a.a.createElement("td",null,"\u8bbe\u7f6e\u8f93\u5165\u6846\u7684\u5927\u5c0f"),a.a.createElement("td",null,a.a.createElement("code",null,"large")," | ",a.a.createElement("code",null,"small")," | ",a.a.createElement("code",null,"default")),a.a.createElement("td",null,"-")))))))}));t["default"]=function(e){var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((function(){var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(o,{demos:l})}}}]);