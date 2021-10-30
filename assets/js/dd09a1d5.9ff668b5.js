(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7578],{30876:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=o,f=m["".concat(c,".").concat(p)]||m[p]||s[p]||i;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89159:function(e,n,t){"use strict";t.d(n,{n:function(){return o}});var r=t(2784),o=function(e){var n=function(e){var n=(0,r.useState)(null),o=n[0],i=n[1];return(0,r.useEffect)((function(){var n=!1;return t(29351)("./"+e+".json").then((function(e){n||(n=!0,i(e.default))})).catch(console.error),function(){n=!0}}),[e]),o}(e.name);return n?r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default Value"),r.createElement("th",null,"Required"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,Object.keys(n).map((function(e){var t;return r.createElement("tr",{key:e},r.createElement("td",null,r.createElement("code",null,e)),r.createElement("td",null,r.createElement("code",null,null==(t=n[e].type)?void 0:t.name)),r.createElement("td",null,n[e].defaultValue&&r.createElement("code",null,n[e].defaultValue.value)),r.createElement("td",null,n[e].required?"Yes":"No"),r.createElement("td",null,n[e].description))})))):null}},40979:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var r=t(7560),o=t(98283),i=(t(2784),t(30876)),a=t(89159),l=["components"],c={sidebar_position:1},u="ControlledTreeEnvironment",d={unversionedId:"react/ControlledTreeEnvironment",id:"react/ControlledTreeEnvironment",isDocsHomePage:!1,title:"ControlledTreeEnvironment",description:"More details on using the ControlledTreeEnvironment component are provided",source:"@site/docs/react/ControlledTreeEnvironment.mdx",sourceDirName:"react",slug:"/react/ControlledTreeEnvironment",permalink:"/docs/react/ControlledTreeEnvironment",editUrl:"https://github.com/lukasbach/react-complex-tree/edit/main/packages/docs/docs/react/ControlledTreeEnvironment.mdx",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Auto Demo Component",permalink:"/docs/guides/autodemo"},next:{title:"UncontrolledTreeEnvironment",permalink:"/docs/react/UncontrolledTreeEnvironment"}},s=[{value:"Import",id:"import",children:[]},{value:"Props",id:"props",children:[]}],m={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"controlledtreeenvironment"},"ControlledTreeEnvironment"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"More details on using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ControlledTreeEnvironment")," component are provided\nin the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/controlled-environment"},"Guide on Controlled Environments"),"."))),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"")),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)(a.n,{name:"ControlledTreeEnvironment",mdxType:"PropTable"}))}p.isMDXComponent=!0},29351:function(e,n,t){var r={"./ControlledTreeEnvironment.json":[96435,6435],"./DragAndDropProvider.json":[49919,9919],"./DragBetweenLine.json":[82614,2614],"./EnvironmentActionsProvider.json":[69304,9304],"./InteractionManagerProvider.json":[6155,6155],"./LiveDescription.json":[26020,6020],"./SearchInput.json":[86393,6393],"./Tree.json":[7398,7398],"./TreeActionsProvider.json":[37093,7093],"./TreeItem.json":[9565,9565],"./TreeItemChildren.json":[22050,2050],"./TreeItemRenamingInput.json":[55861,5861],"./UncontrolledTreeEnvironment.json":[73159,3159],"./createDefaultRenderers.json":[45466,5466]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((function(){return t.t(o,19)}))}o.keys=function(){return Object.keys(r)},o.id=29351,e.exports=o}}]);