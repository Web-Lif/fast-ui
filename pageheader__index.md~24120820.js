(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[72],{"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},Pg6R:function(e,t,a){},RIZa:function(e,t,a){"use strict";var n=a("kM82"),l=a.n(n),r=a("rgW5"),c=a("IujW"),u=function(e){for(var t=e.split("\n"),a=[],n=null,l=0;l<t.length;l+=1)/\s*##.*/.test(t[l])&&(null!==n&&a.push(n),n="".concat(t[l])),null!==n&&(n+="\n".concat(t[l]));return null!==n&&a.push(n),a},m=function(){var e="",t=u(e),a=function(){return t.map((function(e,t){return l.a.createElement(r["a"].Item,{key:t},l.a.createElement(c["a"],{className:"markdown"},e))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(r["a"],{style:{marginTop:"3rem",marginLeft:13}},a()))};t["a"]=m},WtSh:function(e,t,a){"use strict";var n=a("kM82"),l=a.n(n),r=a("hKI/"),c=a.n(r);a("Pg6R");function u(e,t){return i(e)||E(e,t)||o(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function E(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,u=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(m){u=!0,l=m}finally{try{c||null==a["return"]||a["return"]()}finally{if(u)throw l}}return r}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),m=u(r,2),o=m[0],d=m[1],E=Object(n["useState"])(!1),i=u(E,2),s=i[0],f=i[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){d(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":o||void 0,"data-right-folded":s||void 0},l.a.createElement("table",null,t)))};t["a"]=s},oawU:function(e,t,a){"use strict";a.r(t);var n=a("kM82"),l=a.n(n),r=a("dEAq"),c=(a("RIZa"),a("DSWR")),u=a("WtSh"),m=l.a.memo((function(e){var t=e.demos,a=t["pageheader-demo"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"pageheader-\u9875\u5934"},l.a.createElement(r["AnchorLink"],{to:"#pageheader-\u9875\u5934","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"PageHeader \u9875\u5934"),l.a.createElement("p",null,"\u9875\u5934\u4f4d\u4e8e\u9875\u5bb9\u5668\u4e2d\uff0c\u9875\u5bb9\u5668\u9876\u90e8\uff0c\u8d77\u5230\u4e86\u5185\u5bb9\u6982\u89c8\u548c\u5f15\u5bfc\u9875\u7ea7\u64cd\u4f5c\u7684\u4f5c\u7528\u3002\u5305\u62ec\u7531\u9762\u5305\u5c51\u3001\u6807\u9898\u3001\u9875\u9762\u5185\u5bb9\u7b80\u4ecb\u3001\u9875\u9762\u7ea7\u64cd\u4f5c\u7b49\u3001\u9875\u9762\u7ea7\u5bfc\u822a\u7ec4\u6210"),l.a.createElement("br",null),l.a.createElement("p",null,"\u4f8b\u5b50:")),l.a.createElement(c["default"],t["pageheader-demo"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(u["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),l.a.createElement("th",null,"\u7248\u672c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"avatar"),l.a.createElement("td",null,"\u6807\u9898\u680f\u65c1\u7684\u5934\u50cf"),l.a.createElement("td",null,l.a.createElement(r["Link"],{to:"/components/avatar/"},"AvatarProps")),l.a.createElement("td",null,"-"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"backIcon"),l.a.createElement("td",null,"\u81ea\u5b9a\u4e49 back icon \uff0c\u5982\u679c\u4e3a false \u4e0d\u6e32\u67d3 back icon"),l.a.createElement("td",null,"ReactNode | boolean"),l.a.createElement("td",null,"<ArrowLeft />"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"breadcrumb"),l.a.createElement("td",null,"\u9762\u5305\u5c51\u7684\u914d\u7f6e"),l.a.createElement("td",null,l.a.createElement(r["Link"],{to:"/components/breadcrumb/"},"Breadcrumb")),l.a.createElement("td",null,"-"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"breadcrumbRender"),l.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u9762\u5305\u5c51\u533a\u57df\u7684\u5185\u5bb9"),l.a.createElement("td",null,l.a.createElement("code",null,"(props, originBreadcrumb) => ReactNode")),l.a.createElement("td",null,"-"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"extra"),l.a.createElement("td",null,"\u64cd\u4f5c\u533a\uff0c\u4f4d\u4e8e title \u884c\u7684\u884c\u5c3e"),l.a.createElement("td",null,"ReactNode"),l.a.createElement("td",null,"-"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"footer"),l.a.createElement("td",null,"PageHeader \u7684\u9875\u811a\uff0c\u4e00\u822c\u7528\u4e8e\u6e32\u67d3 TabBar"),l.a.createElement("td",null,"ReactNode"),l.a.createElement("td",null,"-"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"ghost"),l.a.createElement("td",null,"pageHeader \u7684\u7c7b\u578b\uff0c\u5c06\u4f1a\u6539\u53d8\u80cc\u666f\u989c\u8272"),l.a.createElement("td",null,"boolean"),l.a.createElement("td",null,"true"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"subTitle"),l.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u7684\u4e8c\u7ea7\u6807\u9898\u6587\u5b57"),l.a.createElement("td",null,"ReactNode"),l.a.createElement("td",null,"-"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"tags"),l.a.createElement("td",null,"title \u65c1\u7684 tag \u5217\u8868"),l.a.createElement("td",null,l.a.createElement(r["Link"],{to:"/components/tag/"},"Tag"),"[] | ",l.a.createElement(r["Link"],{to:"/components/tag/"},"Tag")),l.a.createElement("td",null,"-"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"title"),l.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u6807\u9898\u6587\u5b57"),l.a.createElement("td",null,"ReactNode"),l.a.createElement("td",null,"-"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"onBack"),l.a.createElement("td",null,"\u8fd4\u56de\u6309\u94ae\u7684\u70b9\u51fb\u4e8b\u4ef6"),l.a.createElement("td",null,"() => void"),l.a.createElement("td",null,"-"),l.a.createElement("td",null)))))))}));t["default"]=function(e){var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((function(){var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(m,{demos:a})}}}]);