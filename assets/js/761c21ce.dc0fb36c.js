(self.webpackChunk_reskript_site=self.webpackChunk_reskript_site||[]).push([[2740],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,p(p({ref:t},c),{},{components:n})):r.createElement(k,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7281:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>s,toc:()=>c,default:()=>m});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),p=["components"],l={title:"\u7528skr play\u8c03\u8bd5\u9700\u8981\u8def\u7531\u7684\u7ec4\u4ef6",date:new Date("2021-08-03T00:00:00.000Z"),author:"otakustay",author_url:"https://github.com/otakustay",author_image_url:"https://www.gravatar.com/avatar/d7479a703555cc76b277040e5be9b8ca",tags:["play","debug","router"]},i=void 0,s={permalink:"/reskript/blog/play-with-router",source:"@site/blog/play-with-router.md",title:"\u7528skr play\u8c03\u8bd5\u9700\u8981\u8def\u7531\u7684\u7ec4\u4ef6",description:"\u5728\u4f7f\u7528reSKRipt\u7684\u65f6\u5019\uff0c\u6211\u4eec\u975e\u5e38\u63a8\u8350\u4f7f\u7528skr play\u547d\u4ee4\u6765\u8c03\u8bd5\u5355\u4e2a\u7ec4\u4ef6\uff0c\u5b83\u4f1a\u4e3a\u4f60\u63d0\u4f9b\u4e00\u4e2a\u53ef\u5b9e\u65f6\u7f16\u7a0b\u7684\u754c\u9762\uff0c\u5b9e\u65f6\u770b\u5230\u5bf9\u5e94\u7ec4\u4ef6\u7684\u53ef\u4ea4\u4e92\u754c\u9762\u3002",date:"2021-08-03T00:00:00.000Z",formattedDate:"August 3, 2021",tags:[{label:"play",permalink:"/reskript/blog/tags/play"},{label:"debug",permalink:"/reskript/blog/tags/debug"},{label:"router",permalink:"/reskript/blog/tags/router"}],readingTime:.37,truncated:!1,prevItem:{title:"\u652f\u6301Reflect Metadata",permalink:"/reskript/blog/use-reflect-metadata"},nextItem:{title:"\u5bfc\u5165SVG\u6587\u4ef6\u89c4\u5219\u8c03\u6574",permalink:"/reskript/blog/svg-import-change"}},c=[{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",children:[]},{value:"\u6ce8\u5165\u5916\u90e8\u4f9d\u8d56",id:"\u6ce8\u5165\u5916\u90e8\u4f9d\u8d56",children:[]},{value:"\u4f7f\u7528\u4f9d\u8d56",id:"\u4f7f\u7528\u4f9d\u8d56",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"reSKRipt"),"\u7684\u65f6\u5019\uff0c\u6211\u4eec\u975e\u5e38\u63a8\u8350\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://reskript.vercel.app/docs/advanced/debug-component"},"skr play\u547d\u4ee4"),"\u6765\u8c03\u8bd5\u5355\u4e2a\u7ec4\u4ef6\uff0c\u5b83\u4f1a\u4e3a\u4f60\u63d0\u4f9b\u4e00\u4e2a\u53ef\u5b9e\u65f6\u7f16\u7a0b\u7684\u754c\u9762\uff0c\u5b9e\u65f6\u770b\u5230\u5bf9\u5e94\u7ec4\u4ef6\u7684\u53ef\u4ea4\u4e92\u754c\u9762\u3002"),(0,o.kt)("p",null,"\u4f46\u5e76\u4e0d\u662f\u6bcf\u4e00\u4e2a\u7ec4\u4ef6\u90fd\u7eaf\u7cb9\u5230\u53ef\u4ee5\u6ca1\u6709\u5916\u90e8\u4f9d\u8d56\u5c31\u8dd1\u8d77\u6765\u7684\uff0c\u5176\u4e2d\u5f88\u5178\u578b\u7684\u4e00\u79cd\u60c5\u51b5\u5c31\u662f",(0,o.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6\u4f9d\u8d56\u4e86\u8def\u7531"),"\uff0c\u4f8b\u5982\u6211\u4eec\u9700\u8981\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"useParams()"),"\u6765\u83b7\u53d6URL\u4e2d\u7684\u53c2\u6570\uff0c\u6216\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"useLocation()"),"\u62ff\u5230\u5177\u4f53\u7684\u8def\u5f84\u4fe1\u606f\u3002\u7531\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"skr play"),"\u9ed8\u8ba4\u7684\u8c03\u8bd5\u73af\u8282\u662f\u4e0d\u5177\u5907\u8def\u7531\u7b49\u73af\u5883\u7684\uff0c\u56e0\u6b64\u9700\u8981\u6211\u4eec\u505a\u4e00\u4e9b\u989d\u5916\u7684\u914d\u7f6e\u5de5\u4f5c\u3002"),(0,o.kt)("h2",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,o.kt)("p",null,"\u6211\u4eec\u5047\u5b9a\u6b63\u5728\u5f00\u53d1\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"Foo"),"\u7ec4\u4ef6\uff0c\u5b83\u9700\u8981\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"react-router-dom"),"\u624d\u80fd\u6b63\u5e38\u5c55\u793a\uff0c\u90a3\u4e48\u53ef\u4ee5\u6709\u4e0b\u9762\u8fd9\u6837\u7684\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/src\n    /components\n        /Foo\n            /__repl__\n                index.play.js\n            index.tsx\n")),(0,o.kt)("p",null,"\u5176\u4e2d",(0,o.kt)("inlineCode",{parentName:"p"},"src/components/Foo/index.tsx"),"\u4e3a\u7ec4\u4ef6\u7684\u5b9e\u73b0\u4ee3\u7801\u3002\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u7ed3\u6784\u4e2d\u591a\u4e86\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"src/components/Foo/__repl__/index.play.js"),"\u6587\u4ef6\uff0c\u8fd9\u4e2a\u88ab\u79f0\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"skr play"),"\u7684\u914d\u7f6e\u6587\u4ef6\u3002\u8fd9\u4e2a\u6587\u4ef6\u7684\u540d\u5b57\u4e0e\u7ec4\u4ef6\u6587\u4ef6\u540d\u540c\u540d\uff0c\u5982\u679c\u4f60\u7684\u7ec4\u4ef6\u6587\u4ef6\u540d\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"Bar.tsx"),"\uff0c\u90a3\u4e48\u5b83\u5c31\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"__repl__/Bar.play.js"),"\u3002"),(0,o.kt)("h2",{id:"\u6ce8\u5165\u5916\u90e8\u4f9d\u8d56"},"\u6ce8\u5165\u5916\u90e8\u4f9d\u8d56"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"__repl__/index.play.js"),"\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u7f16\u5199\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {MemoryRouter} from 'react-router-dom';\n\nexport const provides = {\n    MemoryRouter,\n};\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u5f15\u7528\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"react-router-dom"),"\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"MemoryRouter"),"\uff0c\u5e76\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"export const provides"),"\u5bf9\u8c61\u628a\u5b83\u5bfc\u4e86\u51fa\u53bb\u3002"),(0,o.kt)("p",null,"\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"export const provides"),"\u5bfc\u51fa\u53ef\u4ee5\u5c06\u4f60\u9700\u8981\u7684\u5185\u5bb9\u201c\u5e26\u7ed9\u201d",(0,o.kt)("inlineCode",{parentName:"p"},"skr play"),"\u7684\u8c03\u8bd5\u73b0\u573a\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528\u4f9d\u8d56"},"\u4f7f\u7528\u4f9d\u8d56"),(0,o.kt)("p",null,"\u5f53\u4f60\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"skr play src/components/Foo/index.tsx"),"\u6253\u5f00\u8c03\u8bd5\u73b0\u573a\u65f6\uff0c\u4f60\u770b\u5230\u7684\u4ee3\u7801\u4e2d\u4f9d\u7136\u6ca1\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"MemoryRouter"),"\uff0c\u6b64\u65f6\u4f60\u8fd8\u662f\u4e0d\u80fd\u6b63\u786e\u5730\u770b\u5230\u7ec4\u4ef6\u7684\u957f\u76f8\u3002\u4f60\u9700\u8981\u5c06\u5de6\u4fa7\u7f16\u8f91\u5668\u4e2d\u7684\u4ee3\u7801\u8c03\u6574\u4e3a\u8fd9\u6837\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Repl() {\n    return (\n        <I.MemoryRouter initialEntries={['/foo/bar/123']}>\n            <Foo />\n        </I.MemoryRouter>\n    );\n}\n")),(0,o.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u6240\u6709\u4f60\u5728\u914d\u7f6e\u6587\u4ef6\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"provides"),"\u5bf9\u8c61\u91cc\u63d0\u4f9b\u7684\u4e1c\u897f\uff0c\u90fd\u53ef\u4ee5\u5728\u754c\u9762\u4e2d\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"I.xxx"),"\u62ff\u6765\u7528\u3002"),(0,o.kt)("p",null,"\u5f53\u7136\uff0c\u4e3a\u4e86\u8c03\u8bd5\u65b9\u4fbf\uff0c\u4e5f\u53ef\u4ee5\u628a",(0,o.kt)("inlineCode",{parentName:"p"},"Link"),"\u4e5f\u63d0\u4f9b\u51fa\u53bb\uff0c\u5728\u8c03\u8bd5\u754c\u9762\u91cc\u52a0\u51e0\u4e2a\u94fe\u63a5\u6765\u5feb\u901f\u8df3\u5230\u67d0\u4e9bURL\u4e0b\u770b\u6548\u679c\u3002"),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u6211\u4eec\u4ecb\u7ecd\u4e86\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"__repl__/xxx.play.js"),"\u914d\u7f6e\u6587\u4ef6\u5bfc\u51fa\u4f9d\u8d56\u7ed9\u8c03\u8bd5\u73b0\u573a\u7684\u65b9\u6cd5\uff0c\u91cd\u70b9\u5728\u4e8e\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6709\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"__repl__/xxx.play.js"),"\u4f5c\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"skr play"),"\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4e0e\u7ec4\u4ef6\u4e00\u4e00\u5bf9\u5e94\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"export const provides"),"\u5bf9\u8c61\u63d0\u4f9b\u4f9d\u8d56\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u8c03\u8bd5\u73b0\u573a\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"I.xxx"),"\u4f7f\u7528\u4f9d\u8d56\u3002")),(0,o.kt)("p",null,"\u9664\u4e86\u8def\u7531\uff0c\u4f60\u4e5f\u53ef\u4ee5\u7528\u76f8\u540c\u7684\u65b9\u6cd5\u89e3\u51b3\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\u7b49\u95ee\u9898\u3002"))}m.isMDXComponent=!0}}]);