(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,f=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(106)),i={slug:"introducing-remotion",title:"Introducing Remotion",author:"Jonny Burger",author_title:"Indie Hacker",author_url:"https://github.com/JonnyBurger",author_image_url:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4"},c={permalink:"/blog/introducing-remotion",editUrl:"https://github.com/Jonnyburger/remotion/edit/master/packages/docs/blog/blog/2021-01-01-introducing-remotion.md",source:"@site/blog/2021-01-01-introducing-remotion.md",description:"I've been using After Effects for many years, but it's always been a dream of mine to code my videos instead. In the React ecosystem, I am used to being able to take advantage of powerful composition, reusability, to be able to customize the experience for every user. To use scripts, linters and external dependencies to make my life easier as a coder.",date:"2021-01-01T00:00:00.000Z",tags:[],title:"Introducing Remotion",readingTime:1.28,truncated:!1},s=[],u={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"I've been using After Effects for many years, but it's always been a dream of mine to code my videos instead. In the React ecosystem, I am used to being able to take advantage of powerful composition, reusability, to be able to customize the experience for every user. To use scripts, linters and external dependencies to make my life easier as a coder."),Object(o.b)("p",null,"So as a proof of concept I tried to make a trailer for my AnySticker app",Object(o.b)("sup",Object(r.a)({parentName:"p"},{id:"fnref-1"}),Object(o.b)("a",Object(r.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," in React, and to render each frame using Puppeteer and stitch them together using FFMPEG."),Object(o.b)("p",null,"The final result was a video that I thought was the best one I created yet. And I realized there was something to the idea."),Object(o.b)("p",null,"This is my attempt to create a tool for the community that allows you to write videos in React. Obviously this is a huge undertaking, so this is not a product with hundreds of different features built in. Rather, following the React philosophy, this is an attempt to create a minimal fundament for rendering videos in React. Basically, you get a blank canvas, and you create your motion graphics using existing web technologies built into the browser and your favorite external libraries. Remotion is so minimal in fact, it consists of only 5-6 APIs that you need to learn to get started."),Object(o.b)("p",null,"To get started is super easy. Assuming you already have ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://yarnpkg.com"}),"Yarn"),", run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn create video\n")),Object(o.b)("p",null,"and then read the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs"}),"documentation"),". ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/JNYBGR"}),"Let me know on Twitter")," what you think!"),Object(o.b)("div",{className:"footnotes"},Object(o.b)("hr",{parentName:"div"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",Object(r.a)({parentName:"ol"},{id:"fn-1"}),Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://twitter.com/JNYBGR/status/1319292595420291074"}),"AnySticker beta trailer "),Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}l.isMDXComponent=!0}}]);