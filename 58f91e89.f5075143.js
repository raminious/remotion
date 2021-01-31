(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(n),d=o,u=l["".concat(r,".").concat(d)]||l[d]||m[d]||i;return n?a.a.createElement(u,c(c({ref:t},s),{},{components:n})):a.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),i=(n(0),n(106)),r={id:"composition",title:"<Composition />"},c={unversionedId:"composition",id:"composition",isDocsHomePage:!1,title:"<Composition />",description:"This is the component to use to register a video to make it renderable and make it show up in the sidebar of the Remotion Player.",source:"@site/docs/composition.md",slug:"/composition",permalink:"/docs/composition",editUrl:"https://github.com/JonnyBurger/remotion/edit/master/packages/docs/docs/composition.md",version:"current",sidebar:"someSidebar",previous:{title:"<Audio /> (experimental)",permalink:"/docs/audio"},next:{title:"<Sequence />",permalink:"/docs/sequence"}},p=[{value:"API",id:"api",children:[]},{value:"Example using <code>component</code>",id:"example-using-component",children:[]},{value:"Example using <code>lazyComponent</code>",id:"example-using-lazycomponent",children:[]},{value:"See also",id:"see-also",children:[]}],s={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is the component to use to register a video to make it renderable and make it show up in the sidebar of the Remotion Player."),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"<Composition />")," should be placed within a fragment of the root component (which is registered using ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"register-root"}),Object(i.b)("inlineCode",{parentName:"a"},"registerRoot()")),")."),Object(i.b)("p",null,"The component takes the following props:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"id"),": ID of the composition, as shown in the sidebar and also a unique identifier of the composition that you need to specify if you want to render it. The ID can only contain letters, numbers and ",Object(i.b)("inlineCode",{parentName:"p"},"-"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"fps"),": At how many frames the composition should be rendered.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"durationInFrames"),": How many frames the composition should be long.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"height"),": Height of the composition in pixels.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"width"),": Width of the composition in pixels.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"component")," ",Object(i.b)("strong",{parentName:"p"},"or")," ",Object(i.b)("inlineCode",{parentName:"p"},"lazyComponent"),": Pass the component in directly ",Object(i.b)("strong",{parentName:"p"},"or")," pass a function that returns a dynamic import. Passing neither or both of the props is an error."))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you use ",Object(i.b)("inlineCode",{parentName:"p"},"lazyComponent"),", Remotion will use React Suspense to load the component. This can help bring down the weight of the webpage if you have a lot of compositions. However, these components will still be bundled using Webpack, let us know if you know how to improve this!"))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you use ",Object(i.b)("inlineCode",{parentName:"p"},"lazyComponent"),", you need to use a default export for your component. This is a restriction of React Suspense."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"defaultProps")," ",Object(i.b)("em",{parentName:"li"},"optional"),": Give your component default props that will be shown in the preview. You can override these props during render using a CLI flag.")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Type your components using the ",Object(i.b)("inlineCode",{parentName:"p"},"React.FC<{}>")," type and the ",Object(i.b)("inlineCode",{parentName:"p"},"defaultProps")," prop will be typesafe."))),Object(i.b)("h2",{id:"example-using-component"},"Example using ",Object(i.b)("inlineCode",{parentName:"h2"},"component")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"import {MyComp} from './MyComp';\n\nexport const MyVideo = () => {\n  return (\n    <>\n      <Composition\n        id=\"my-comp\"\n        component={MyComp}\n        width={1080}\n        height={1080}\n        fps={30}\n        durationInFrames={3 * 30}\n      />\n    </>\n  );\n}\n")),Object(i.b)("h2",{id:"example-using-lazycomponent"},"Example using ",Object(i.b)("inlineCode",{parentName:"h2"},"lazyComponent")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"export const MyVideo = () => {\n  return (\n    <>\n      <Composition\n        id=\"my-comp\"\n        lazyComponent={() => import('./LazyComponent')}\n        width={1080}\n        height={1080}\n        fps={30}\n        durationInFrames={3 * 30}\n      />\n    </>\n  );\n}\n")),Object(i.b)("h2",{id:"see-also"},"See also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"register-root"}),"registerRoot()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"the-fundamentals"}),"The fundamentals")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"cli"}),"CLI options"))))}b.isMDXComponent=!0}}]);