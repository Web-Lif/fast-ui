(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{"9kvl":function(e,t,n){"use strict";var a=n("FfOG");n.d(t,"a",(function(){return a["b"]}));n("bCY9")},GvAC:function(e,t,n){"use strict";var a=n("kM82"),r=n.n(a),l=n("dEAq"),c={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,n=e["export"],o=Object(l["useApiData"])(t),i=Object(a["useContext"])(l["context"]),u=i.locale,m=/^zh|cn$/i.test(u)?c["zh-CN"]:c["en-US"];return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement("table",{style:{marginTop:24}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,m.name),r.a.createElement("th",null,m.description),r.a.createElement("th",null,m.type),r.a.createElement("th",null,m["default"]))),r.a.createElement("tbody",null,o[n].map((function(e){return r.a.createElement("tr",{key:e.identifier},r.a.createElement("td",null,e.identifier),r.a.createElement("td",null,e.description||"--"),r.a.createElement("td",null,r.a.createElement("code",null,e.type)),r.a.createElement("td",null,r.a.createElement("code",null,e["default"]||e.required&&m.required||"--")))})))))}},RIZa:function(e,t,n){"use strict";var a=n("kM82"),r=n.n(a),l=n("rgW5"),c=n("IujW"),o=function(e){for(var t=e.split("\n"),n=[],a=null,r=0;r<t.length;r+=1)/\s*##.*/.test(t[r])&&(null!==a&&n.push(a),a="".concat(t[r])),null!==a&&(a+="\n".concat(t[r]));return null!==a&&n.push(a),n},i=function(){var e="",t=o(e),n=function(){return t.map((function(e,t){return r.a.createElement(l["a"].Item,{key:t},r.a.createElement(c["a"],{className:"markdown"},e))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l["a"],{style:{marginTop:"3rem",marginLeft:13}},n()))};t["a"]=i},sbJL:function(e,t,n){"use strict";n.r(t);var a=n("kM82"),r=n.n(a),l=n("dEAq"),c=(n("RIZa"),n("GvAC")),o=n("DSWR"),i=r.a.memo((function(e){var t=e.demos,n=t["color-picker-demo"].component,a=t["color-picker-demo-1"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"colorpicker-\u989c\u8272\u9009\u62e9\u5668"},r.a.createElement(l["AnchorLink"],{to:"#colorpicker-\u989c\u8272\u9009\u62e9\u5668","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"ColorPicker \u989c\u8272\u9009\u62e9\u5668"),r.a.createElement("p",null,"\u7528\u4e8e\u8f93\u5165\u989c\u8272\u4fe1\u606f, \u5feb\u901f\u65b9\u4fbf\u7684\u9009\u62e9\u989c\u8272"),r.a.createElement("br",null),r.a.createElement("p",null,"\u4f8b\u5b50:")),r.a.createElement(o["default"],t["color-picker-demo"].previewerProps,r.a.createElement(n,null)),r.a.createElement(o["default"],t["color-picker-demo-1"].previewerProps,r.a.createElement(a,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("br",null),r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(c["a"],{identifier:"color-picker",export:"default"}))))}));t["default"]=function(e){var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((function(){var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(i,{demos:n})}}}]);