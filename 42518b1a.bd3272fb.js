(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{101:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),b=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=b(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=b(t),s=r,O=u["".concat(l,".").concat(s)]||u[s]||d[s]||i;return t?a.a.createElement(O,c(c({ref:n},o),{},{components:t})):a.a.createElement(O,c({ref:n},o))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var o=2;o<i;o++)l[o]=t[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),i=(t(0),t(101)),l={title:"\u81ea\u52a8\u63a5\u5165Qiankun"},c={unversionedId:"plugins/qiankun",id:"plugins/qiankun",isDocsHomePage:!1,title:"\u81ea\u52a8\u63a5\u5165Qiankun",description:"\u63d2\u4ef6\u8bf4\u660e",source:"@site/docs/plugins/qiankun.md",slug:"/plugins/qiankun",permalink:"/reskript/docs/plugins/qiankun",version:"current",sidebar:"docs",previous:{title:"\u5355\u72ec\u7f16\u8bd1JavaScript",permalink:"/reskript/docs/cli/babel"},next:{title:"FAQ",permalink:"/reskript/docs/faq"}},p=[{value:"\u63d2\u4ef6\u8bf4\u660e",id:"\u63d2\u4ef6\u8bf4\u660e",children:[]},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u589e\u52a0\u63d2\u4ef6",id:"\u589e\u52a0\u63d2\u4ef6",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]}]}],o={toc:p};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u63d2\u4ef6\u8bf4\u660e"},"\u63d2\u4ef6\u8bf4\u660e"),Object(i.b)("p",null,"\u5728\u6784\u5efa\u65f6\u671f\u5904\u7406\u4e0e",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://qiankun.umijs.org/"}),"qiankun"),"\u7684\u6574\u5408\u95ee\u9898\u3002"),Object(i.b)("p",null,"\u8fd9\u4e2a\u63d2\u4ef6\u4f1a\u505a\u4ee5\u4e0b\u51e0\u4ef6\u4e8b\uff1a"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u628a\u4ea7\u51fa\u7684\u683c\u5f0f\u4fee\u6539\u4e3aUMD\u683c\u5f0f\uff0c\u5141\u8bb8\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u52a0\u8f7d\u3002"),Object(i.b)("li",{parentName:"ol"},"\u5728",Object(i.b)("inlineCode",{parentName:"li"},"dev-server"),"\u4e0a\u589e\u52a0\u4e00\u4e2a\u4ee3\u7406\uff0c\u672c\u5730\u8c03\u8bd5\u65f6\u4f1a\u6253\u5f00\u4e00\u4e2a",Object(i.b)("inlineCode",{parentName:"li"},"qiankun"),"\u7684\u5bb9\u5668\u9875\u9762\uff0c\u5e76\u5728\u8be5\u9875\u9762\u4e2d\u52a0\u8f7d\u5b9e\u9645\u7684\u4ea7\u54c1\u4ee3\u7801\u3002")),Object(i.b)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u63d2\u4ef6\uff0c\u53ef\u4ee5\u5728\u672c\u5730\u8c03\u8bd5\u7684\u65f6\u5019\u4e5f\u57fa\u4e8e",Object(i.b)("inlineCode",{parentName:"p"},"qiankun"),"\uff0c\u5c3d\u65e9\u5730\u53d1\u73b0\u4e0e\u5176\u751f\u547d\u5468\u671f\u76f8\u5173\u7684\u517c\u5bb9\u6027\u95ee\u9898\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u8fd9\u4e2a\u63d2\u4ef6\u5e76\u4e0d\u4f1a\u5e2e\u4f60\u5199",Object(i.b)("inlineCode",{parentName:"strong"},"qiankun"),"\u7684\u751f\u547d\u5468\u671f\u51fd\u6570\uff0c\u4f60\u4f9d\u7136\u9700\u8981",Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"https://qiankun.umijs.org/guide/getting-started#1-exports-lifecycles-from-sub-app-entry"}),"\u53c2\u8003\u6587\u6863"),"\u5b9e\u73b0\u8fd9\u4e9b\u51fd\u6570\u3002")),Object(i.b)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),Object(i.b)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npm i -D @reskript/plugin-qiankun\n")),Object(i.b)("h3",{id:"\u589e\u52a0\u63d2\u4ef6"},"\u589e\u52a0\u63d2\u4ef6"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// reskript.config.js\nconst {default: qiankun} = require('@reskript/plugin-qiankun');\n\nexports.plugins = [\n    qiankun('myApp'),\n];\n")),Object(i.b)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"interface PlaceholderConfig {\n    size: number;\n    backgroundColor: string;\n}\n\ninterface TemplateConfig {\n    header?: number | PlaceholderConfig;\n    sidebarLeft?: number | PlaceholderConfig;\n    footer?: number | PlaceholderConfig;\n}\n\ninterface Options {\n    template?: string | TemplateConfig;\n}\n\nexport default (appName: string, options?: Options): SettingsPlugin;\n")),Object(i.b)("p",null,"\u63d2\u4ef6\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570",Object(i.b)("inlineCode",{parentName:"p"},"appName"),"\uff0c\u6307\u5b9a\u5e94\u7528\u7684\u540d\u79f0\uff0c\u8fd9\u4e2a\u540d\u79f0\u4f1a\u88ab\u7528\u5728\uff1a"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u6784\u5efa\u7684\u7684UMD\u5305\u7684\u5168\u5c40\u51fd\u6570\u540d\u79f0\u4e0a\uff0c\u8fd9\u4e2a\u51fd\u6570\u7684\u540d\u79f0\u4f1a\u662f",Object(i.b)("inlineCode",{parentName:"li"},"${appName}-[name]"),"\uff0c\u5176\u4e2d",Object(i.b)("inlineCode",{parentName:"li"},"[name]"),"\u7531",Object(i.b)("inlineCode",{parentName:"li"},"webpack"),"\u8d1f\u8d23\u5904\u7406\uff0c\u662f\u5165\u53e3\u6587\u4ef6\u7684\u540d\u5b57\uff0c\u901a\u5e38\u662f",Object(i.b)("inlineCode",{parentName:"li"},"index"),"\u3002"),Object(i.b)("li",{parentName:"ol"},"\u5e94\u7528\u5728",Object(i.b)("inlineCode",{parentName:"li"},"qiankun"),"\u7684\u8def\u7531\u4e2d\u6ce8\u518c\u7684\u540d\u79f0\uff0c\u5b9e\u9645\u6ca1\u5565\u7528\u3002"),Object(i.b)("li",{parentName:"ol"},"\u672c\u5730\u8c03\u8bd5\u65f6\u7684\u5bb9\u5668\u9875\u7684\u6807\u9898\uff0c\u6807\u9898\u5185\u5bb9\u4f1a\u662f",Object(i.b)("inlineCode",{parentName:"li"},"${appName} - Qiankun"),"\u3002\u5982\u679c\u6ca1\u6709\u770b\u5230",Object(i.b)("inlineCode",{parentName:"li"}," - Qiankun"),"\u7684\u540e\u7f00\uff0c\u8bf4\u660e\u8fd9\u4e2a\u63d2\u4ef6\u5931\u6548\u4e86\uff0c\u53ef\u4ee5\u53cd\u9988\u95ee\u9898\u3002")),Object(i.b)("p",null,"\u7b2c\u4e8c\u4e2a\u53c2\u6570",Object(i.b)("inlineCode",{parentName:"p"},"options"),"\uff0c\u53ef\u9009\uff0c\u53ef\u4ee5\u63d0\u4f9b\u4ee5\u4e0b\u529f\u80fd\uff1a"),Object(i.b)("h4",{id:"\u914d\u7f6e\u6a21\u677f"},"\u914d\u7f6e\u6a21\u677f"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"options.template"),"\u53ef\u4ee5\u7528\u4e8e\u914d\u7f6e\u5bb9\u5668\u9875\u9762\u7684\u6a21\u677f\u3002"),Object(i.b)("p",null,"\u5f53\u8fd9\u4e2a\u9009\u9879\u7684\u503c\u4e3a\u5b57\u7b26\u4e32\u65f6\uff0c\u6839\u636e\u5b57\u7b26\u4e32\u7684\u8868\u73b0\u5f62\u5f0f\uff0c\u6709\u4ee5\u4e0b\u7684\u529f\u80fd\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5f53\u5b57\u7b26\u4e32\u4ee5",Object(i.b)("inlineCode",{parentName:"li"},"/"),"\u8d77\u59cb\u65f6\uff0c\u8ba4\u4e3a\u662f\u4e00\u4e2a\u6a21\u677f\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u63d2\u4ef6\u4f1a\u8bfb\u53d6\u8be5\u6587\u4ef6\u7684\u5185\u5bb9\u4f5c\u4e3a\u6700\u7ec8\u7684HTML\u5185\u5bb9\u3002\u540c\u65f6\u63d2\u4ef6\u4f1a\u81ea\u52a8\u6ce8\u5165",Object(i.b)("inlineCode",{parentName:"li"},"qiankun"),"\u7684\u542f\u52a8\u811a\u672c\uff0c\u5e76\u5c06\u5176\u4e2d",Object(i.b)("inlineCode",{parentName:"li"},"{appName}"),"\u8fd9\u4e2a\u5b57\u7b26\u4e32\u66ff\u6362\u4e3a\u771f\u5b9e\u7684\u5e94\u7528\u540d\u79f0\u3002"),Object(i.b)("li",{parentName:"ul"},"\u5176\u5b83\u60c5\u51b5\u4e0b\uff0c\u8ba4\u4e3a\u5b57\u7b26\u4e32\u662f\u4e00\u6bb5\u5408\u6cd5\u7684HTML\u5185\u5bb9\uff0c\u76f4\u63a5\u7528\u4f5c\u6700\u7ec8\u8f93\u51fa\uff0c\u5e76\u81ea\u52a8\u6ce8\u5165",Object(i.b)("inlineCode",{parentName:"li"},"qiankun"),"\u7684\u542f\u52a8\u811a\u672c\u3002")),Object(i.b)("p",null,"\u540c\u65f6\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"options.template"),"\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7ed3\u6784\u53c2\u8003\u4e0a\u6587\u7684",Object(i.b)("inlineCode",{parentName:"p"},"TemplateConfig"),"\u7c7b\u578b\u5b9a\u4e49\u3002\u5728\u5bf9\u8c61\u4e2d\uff0c\u53ef\u4ee5\u5206\u522b\u5b9a\u4e49\u9876\u90e8\u3001\u4fa7\u8fb9\u680f\u3001\u5e95\u90e8\u4e09\u4e2a\u5360\u4f4d\u533a\u57df\uff0c\u6700\u7ec8\u9875\u9762\u5448\u73b0\u7684\u6548\u679c\u5927\u81f4\u5982\u4e0b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"--------------------------------------------\n|                  header                  |\n--------------------------------------------\n|             |                            |\n|             |                            |\n|             |                            |\n| sidebarLeft |            apps            |\n|             |                            |\n|             |                            |\n|             |                            |\n--------------------------------------------\n|                  footer                  |\n--------------------------------------------\n")),Object(i.b)("p",null,"\u5176\u4e2d",Object(i.b)("inlineCode",{parentName:"p"},"apps"),"\u7528\u6765\u6e32\u67d3\u771f\u6b63\u7684\u5e94\u7528\u5185\u5bb9\uff0c\u5176\u5b833\u5757\u5206\u522b\u53ef\u4ee5\u6307\u5b9a",Object(i.b)("inlineCode",{parentName:"p"},"size"),"\u548c",Object(i.b)("inlineCode",{parentName:"p"},"backgroundColor"),"\uff0c\u80cc\u666f\u8272\u9ed8\u8ba4\u4f7f\u7528\u4e00\u4e2a\u6d45\u7070\u8272\u3002"),Object(i.b)("p",null,"\u4f8b\u5982\u5e0c\u671b\u6709\u4e00\u4e2a\u9ad8\u5ea6\u4e3a60\u7684\u5934\u90e8\uff0c\u4ee5\u53ca\u4e00\u4e2a\u5bbd\u5ea6\u4e3a140\u7684\u5de6\u8fb9\u680f\uff0c\u4e14\u5934\u90e8\u4f7f\u7528\u6df1\u9ed1\u8272\uff0c\u8fb9\u680f\u4fdd\u6301\u9ed8\u8ba4\u989c\u8272\uff0c\u53ef\u4ee5\u5982\u4e0b\u914d\u7f6e\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"{\n    header: {\n        size: 60,\n        backgroundColor: '#000',\n    },\n    sidebarLeft: 140\n}\n")),Object(i.b)("p",null,"\u5982\u679c\u4e0d\u914d\u7f6e\u5176\u4e2d\u4e00\u5757\uff0c\u5bf9\u5e94\u7684HTML\u5143\u7d20\u4e5f\u4f1a\u51fa\u73b0\u5728\u6700\u7ec8\u7684\u5bb9\u5668\u9875\u9762\u4e0a\uff0c\u4f46\u5c3a\u5bf8\u4e3a0\u5bfc\u81f4\u4e0d\u53ef\u89c1\uff0c\u6700\u7ec8HTML\u7684\u7ed3\u6784\u5927\u81f4\u5982\u4e0b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<header id="header"></header>\n<div id="content">\n    <aside id="sidebar-left"></aside>\n    <main id="apps"></main>\n</div>\n<footer id="footer"></footer>\n')),Object(i.b)("p",null,"\u8fd9\u4e2a\u7ed3\u6784\u5e76\u4e0d\u4ee3\u8868\u5e94\u7528\u6700\u7ec8\u53d1\u5e03\u5230\u7ebf\u4e0a\u65f6\u7684\u6837\u5b50\uff0c\u6240\u4ee5\u5728\u5e94\u7528\u7684\u4ee3\u7801\u4e2d\uff0c\u4e0d\u8981\u4f9d\u8d56\u8fd9\u4e2a\u7ed3\u6784\u4e0a\u7684\u4efb\u4f55\u4fe1\u606f\u53bb\u505a\u5b9e\u73b0\u3002"))}b.isMDXComponent=!0}}]);