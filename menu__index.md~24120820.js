(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[69],{"9kvl":function(e,t,l){"use strict";var n=l("FfOG");l.d(t,"a",(function(){return n["b"]}));l("bCY9")},Pg6R:function(e,t,l){},RIZa:function(e,t,l){"use strict";var n=l("kM82"),a=l.n(n),r=l("rgW5"),c=l("IujW"),u=function(e){for(var t=e.split("\n"),l=[],n=null,a=0;a<t.length;a+=1)/\s*##.*/.test(t[a])?(null!==n&&l.push(n),n="".concat(t[a])):null!==n&&(n+="\n".concat(t[a]));return null!==n&&l.push(n),l},m=function(){var e="## 0.28.0\n\n`2022-28-07`\n\n- Collapse\n  - \ud83c\udd95 \u6dfb\u52a0 `Collapse` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#228](https://github.com/Web-Lif/fast-ui/pull/228) [@robothot](https://github.com/robothot)\n- Card\n  - \ud83c\udd95 \u6dfb\u52a0 `Card` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#235](https://github.com/Web-Lif/fast-ui/pull/235) [@robothot](https://github.com/robothot)\n- Tabs\n  - \ud83c\udd95 \u6dfb\u52a0 `Tabs` \u652f\u6301\u767e\u5206\u6bd4\u9ad8\u5ea6\u5e03\u5c40 [#240](https://github.com/Web-Lif/fast-ui/pull/240) [@robothot](https://github.com/robothot)\n",t=u(e),l=function(){return t.map((function(e,t){return a.a.createElement(r["a"].Item,{key:t},a.a.createElement(c["a"],{className:"markdown"},e))}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(r["a"],{style:{marginTop:"3rem",marginLeft:13}},l()))};t["a"]=m},WtSh:function(e,t,l){"use strict";var n=l("kM82"),a=l.n(n),r=l("hKI/"),c=l.n(r);l("Pg6R");function u(e,t){return i(e)||o(e,t)||d(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return E(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?E(e,t):void 0}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function o(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,u=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(m){u=!0,a=m}finally{try{c||null==l["return"]||l["return"]()}finally{if(u)throw a}}return r}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(n["useRef"])(),r=Object(n["useState"])(!1),m=u(r,2),d=m[0],E=m[1],o=Object(n["useState"])(!1),i=u(o,2),s=i[0],h=i[1];return Object(n["useEffect"])((function(){var e=l.current,t=c()((function(){E(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":d||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},"j+g9":function(e,t,l){"use strict";l.r(t);var n=l("kM82"),a=l.n(n),r=l("dEAq"),c=(l("RIZa"),l("DSWR")),u=l("6T1g"),m=l("WtSh"),d=a.a.memo((function(e){var t=e.demos,l=t["menu-demo"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"menu-\u5bfc\u822a\u83dc\u5355"},a.a.createElement(r["AnchorLink"],{to:"#menu-\u5bfc\u822a\u83dc\u5355","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Menu \u5bfc\u822a\u83dc\u5355"),a.a.createElement("p",null,"\u4e3a\u9875\u9762\u548c\u529f\u80fd\u63d0\u4f9b\u5bfc\u822a\u7684\u83dc\u5355\u5217\u8868\u3002"),a.a.createElement("p",null,"\u4f8b\u5b50:")),a.a.createElement(c["default"],t["menu-demo"].previewerProps,a.a.createElement(l,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"api"},a.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement(u["a"],{code:'<Menu>\n  <Menu.Item>\u83dc\u5355\u9879</Menu.Item>\n  <SubMenu title="\u5b50\u83dc\u5355">\n    <Menu.Item>\u5b50\u83dc\u5355\u9879</Menu.Item>\n  </SubMenu>\n</Menu>',lang:"jsx"}),a.a.createElement("h3",{id:"menu"},a.a.createElement(r["AnchorLink"],{to:"#menu","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Menu"),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),a.a.createElement("th",null,"\u7248\u672c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"defaultOpenKeys"),a.a.createElement("td",null,"\u521d\u59cb\u5c55\u5f00\u7684 SubMenu \u83dc\u5355\u9879 key \u6570\u7ec4"),a.a.createElement("td",null,"string[]"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"defaultSelectedKeys"),a.a.createElement("td",null,"\u521d\u59cb\u9009\u4e2d\u7684\u83dc\u5355\u9879 key \u6570\u7ec4"),a.a.createElement("td",null,"string[]"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"expandIcon"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u5c55\u5f00\u56fe\u6807"),a.a.createElement("td",null,"ReactNode | ",a.a.createElement("code",null,"(props: SubMenuProps & ","{"," isSubMenu: boolean ","}",") => ReactNode")),a.a.createElement("td",null,"-"),a.a.createElement("td",null,"4.9.0")),a.a.createElement("tr",null,a.a.createElement("td",null,"forceSubMenuRender"),a.a.createElement("td",null,"\u5728\u5b50\u83dc\u5355\u5c55\u793a\u4e4b\u524d\u5c31\u6e32\u67d3\u8fdb DOM"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"inlineCollapsed"),a.a.createElement("td",null,"inline \u65f6\u83dc\u5355\u662f\u5426\u6536\u8d77\u72b6\u6001"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"inlineIndent"),a.a.createElement("td",null,"inline \u6a21\u5f0f\u7684\u83dc\u5355\u7f29\u8fdb\u5bbd\u5ea6"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"24"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"mode"),a.a.createElement("td",null,"\u83dc\u5355\u7c7b\u578b\uff0c\u73b0\u5728\u652f\u6301\u5782\u76f4\u3001\u6c34\u5e73\u3001\u548c\u5185\u5d4c\u6a21\u5f0f\u4e09\u79cd"),a.a.createElement("td",null,a.a.createElement("code",null,"vertical")," | ",a.a.createElement("code",null,"horizontal")," | ",a.a.createElement("code",null,"inline")),a.a.createElement("td",null,a.a.createElement("code",null,"vertical")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"multiple"),a.a.createElement("td",null,"\u662f\u5426\u5141\u8bb8\u591a\u9009"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"openKeys"),a.a.createElement("td",null,"\u5f53\u524d\u5c55\u5f00\u7684 SubMenu \u83dc\u5355\u9879 key \u6570\u7ec4"),a.a.createElement("td",null,"string[]"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"overflowedIndicator"),a.a.createElement("td",null,"\u7528\u4e8e\u81ea\u5b9a\u4e49 Menu \u6c34\u5e73\u7a7a\u95f4\u4e0d\u8db3\u65f6\u7684\u7701\u7565\u6536\u7f29\u7684\u56fe\u6807"),a.a.createElement("td",null,"ReactNode"),a.a.createElement("td",null,a.a.createElement("code",null,"<EllipsisOutlined />")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"selectable"),a.a.createElement("td",null,"\u662f\u5426\u5141\u8bb8\u9009\u4e2d"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"true"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"selectedKeys"),a.a.createElement("td",null,"\u5f53\u524d\u9009\u4e2d\u7684\u83dc\u5355\u9879 key \u6570\u7ec4"),a.a.createElement("td",null,"string[]"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"style"),a.a.createElement("td",null,"\u6839\u8282\u70b9\u6837\u5f0f"),a.a.createElement("td",null,"CSSProperties"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"subMenuCloseDelay"),a.a.createElement("td",null,"\u7528\u6237\u9f20\u6807\u79bb\u5f00\u5b50\u83dc\u5355\u540e\u5173\u95ed\u5ef6\u65f6\uff0c\u5355\u4f4d\uff1a\u79d2"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"0.1"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"subMenuOpenDelay"),a.a.createElement("td",null,"\u7528\u6237\u9f20\u6807\u8fdb\u5165\u5b50\u83dc\u5355\u540e\u5f00\u542f\u5ef6\u65f6\uff0c\u5355\u4f4d\uff1a\u79d2"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"0"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"theme"),a.a.createElement("td",null,"\u4e3b\u9898\u989c\u8272"),a.a.createElement("td",null,a.a.createElement("code",null,"light")," | ",a.a.createElement("code",null,"dark")),a.a.createElement("td",null,a.a.createElement("code",null,"light")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"triggerSubMenuAction"),a.a.createElement("td",null,"SubMenu \u5c55\u5f00/\u5173\u95ed\u7684\u89e6\u53d1\u884c\u4e3a"),a.a.createElement("td",null,a.a.createElement("code",null,"hover")," | ",a.a.createElement("code",null,"click")),a.a.createElement("td",null,a.a.createElement("code",null,"hover")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"onClick"),a.a.createElement("td",null,"\u70b9\u51fb MenuItem \u8c03\u7528\u6b64\u51fd\u6570"),a.a.createElement("td",null,"function(","{"," item, key, keyPath, domEvent ","}",")"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"onDeselect"),a.a.createElement("td",null,"\u53d6\u6d88\u9009\u4e2d\u65f6\u8c03\u7528\uff0c\u4ec5\u5728 multiple \u751f\u6548"),a.a.createElement("td",null,"function(","{"," item, key, keyPath, selectedKeys, domEvent ","}",")"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"onOpenChange"),a.a.createElement("td",null,"SubMenu \u5c55\u5f00/\u5173\u95ed\u7684\u56de\u8c03"),a.a.createElement("td",null,"function(openKeys: string[])"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"onSelect"),a.a.createElement("td",null,"\u88ab\u9009\u4e2d\u65f6\u8c03\u7528"),a.a.createElement("td",null,"function(","{"," item, key, keyPath, selectedKeys, domEvent ","}",")"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)))),a.a.createElement("blockquote",null,a.a.createElement("p",null,"\u66f4\u591a\u5c5e\u6027\u67e5\u770b ",a.a.createElement(r["Link"],{to:"https://github.com/react-component/menu#api"},"rc-menu"))),a.a.createElement("h3",{id:"menuitem"},a.a.createElement(r["AnchorLink"],{to:"#menuitem","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Menu.Item"),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),a.a.createElement("th",null,"\u7248\u672c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"danger"),a.a.createElement("td",null,"\u5c55\u793a\u9519\u8bef\u72b6\u6001\u6837\u5f0f"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null,"4.3.0")),a.a.createElement("tr",null,a.a.createElement("td",null,"disabled"),a.a.createElement("td",null,"\u662f\u5426\u7981\u7528"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"icon"),a.a.createElement("td",null,"\u83dc\u5355\u56fe\u6807"),a.a.createElement("td",null,"ReactNode"),a.a.createElement("td",null,"-"),a.a.createElement("td",null,"4.2.0")),a.a.createElement("tr",null,a.a.createElement("td",null,"key"),a.a.createElement("td",null,"item \u7684\u552f\u4e00\u6807\u5fd7"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"title"),a.a.createElement("td",null,"\u8bbe\u7f6e\u6536\u7f29\u65f6\u5c55\u793a\u7684\u60ac\u6d6e\u6807\u9898"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)))),a.a.createElement("h3",{id:"menusubmenu"},a.a.createElement(r["AnchorLink"],{to:"#menusubmenu","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Menu.SubMenu"),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),a.a.createElement("th",null,"\u7248\u672c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"children"),a.a.createElement("td",null,"\u5b50\u83dc\u5355\u7684\u83dc\u5355\u9879"),a.a.createElement("td",null,"Array<MenuItem | SubMenu>"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"disabled"),a.a.createElement("td",null,"\u662f\u5426\u7981\u7528"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"icon"),a.a.createElement("td",null,"\u83dc\u5355\u56fe\u6807"),a.a.createElement("td",null,"ReactNode"),a.a.createElement("td",null,"-"),a.a.createElement("td",null,"4.2.0")),a.a.createElement("tr",null,a.a.createElement("td",null,"key"),a.a.createElement("td",null,"\u552f\u4e00\u6807\u5fd7"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"popupClassName"),a.a.createElement("td",null,"\u5b50\u83dc\u5355\u6837\u5f0f\uff0c",a.a.createElement("code",null,'mode="inline"')," \u65f6\u65e0\u6548"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"popupOffset"),a.a.createElement("td",null,"\u5b50\u83dc\u5355\u504f\u79fb\u91cf\uff0c",a.a.createElement("code",null,'mode="inline"')," \u65f6\u65e0\u6548"),a.a.createElement("td",null,"[number, number]"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"title"),a.a.createElement("td",null,"\u5b50\u83dc\u5355\u9879\u503c"),a.a.createElement("td",null,"ReactNode"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"onTitleClick"),a.a.createElement("td",null,"\u70b9\u51fb\u5b50\u83dc\u5355\u6807\u9898"),a.a.createElement("td",null,"function(","{"," key, domEvent ","}",")"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)))),a.a.createElement("h3",{id:"menuitemgroup"},a.a.createElement(r["AnchorLink"],{to:"#menuitemgroup","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Menu.ItemGroup"),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),a.a.createElement("th",null,"\u7248\u672c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"children"),a.a.createElement("td",null,"\u5206\u7ec4\u7684\u83dc\u5355\u9879"),a.a.createElement("td",null,"MenuItem[]"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"title"),a.a.createElement("td",null,"\u5206\u7ec4\u6807\u9898"),a.a.createElement("td",null,"ReactNode"),a.a.createElement("td",null,"-"),a.a.createElement("td",null)))),a.a.createElement("h3",{id:"menudivider"},a.a.createElement(r["AnchorLink"],{to:"#menudivider","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Menu.Divider"),a.a.createElement("p",null,"\u83dc\u5355\u9879\u5206\u5272\u7ebf\uff0c\u53ea\u7528\u5728\u5f39\u51fa\u83dc\u5355\u5185\u3002"),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),a.a.createElement("th",null,"\u7248\u672c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"dashed"),a.a.createElement("td",null,"\u662f\u5426\u865a\u7ebf"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"false"),a.a.createElement("td",null,"4.17.0")))),a.a.createElement("h2",{id:"faq"},a.a.createElement(r["AnchorLink"],{to:"#faq","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"FAQ"),a.a.createElement("h3",{id:"\u4e3a\u4f55-menu-\u7684\u5b50\u5143\u7d20\u4f1a\u6e32\u67d3\u4e24\u6b21"},a.a.createElement(r["AnchorLink"],{to:"#\u4e3a\u4f55-menu-\u7684\u5b50\u5143\u7d20\u4f1a\u6e32\u67d3\u4e24\u6b21","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4e3a\u4f55 Menu \u7684\u5b50\u5143\u7d20\u4f1a\u6e32\u67d3\u4e24\u6b21\uff1f"),a.a.createElement("p",null,"Menu \u901a\u8fc7",a.a.createElement(r["Link"],{to:"https://github.com/react-component/menu/blob/f4684514096d6b7123339cbe72e7b0f68db0bce2/src/Menu.tsx#L543"},"\u4e8c\u6b21\u6e32\u67d3"),"\u6536\u96c6\u5d4c\u5957\u7ed3\u6784\u4fe1\u606f\u4ee5\u652f\u6301 HOC \u7684\u7ed3\u6784\u3002\u5408\u5e76\u6210\u4e00\u4e2a\u63a8\u5bfc\u7ed3\u6784\u4f1a\u4f7f\u5f97\u903b\u8f91\u53d8\u5f97\u5341\u5206\u590d\u6742\uff0c\u6b22\u8fce PR \u4ee5\u534f\u52a9\u6539\u8fdb\u8be5\u8bbe\u8ba1\u3002"))))}));t["default"]=function(e){var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((function(){var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(d,{demos:l})}}}]);