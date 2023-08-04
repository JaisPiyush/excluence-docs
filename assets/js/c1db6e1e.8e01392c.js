"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[838],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="ParcelQL Introduction",l={unversionedId:"parcelQL/intro",id:"parcelQL/intro",title:"ParcelQL Introduction",description:"Reason to develop",source:"@site/docs/parcelQL/intro.md",sourceDirName:"parcelQL",slug:"/parcelQL/intro",permalink:"/excluence-docs/docs/parcelQL/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ParcelQL",permalink:"/excluence-docs/docs/category/parcelql"},next:{title:"ParcelQL Query",permalink:"/excluence-docs/docs/parcelQL/query"}},c={},s=[{value:"Reason to develop",id:"reason-to-develop",level:2},{value:"Features",id:"features",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"parcelql-introduction"},"ParcelQL Introduction"),(0,o.kt)("h2",{id:"reason-to-develop"},"Reason to develop"),(0,o.kt)("p",null,"In contrast to other event indexers that are limited in serving diverse queries and often prioritize common ones like NFT metadata or owner history, the Flow ecosystem currently lacks matured API providers catering to these unique needs. "),(0,o.kt)("p",null,"However, our team saw an exciting opportunity during the Flow to the Future Hackathon 2, where we crafted a project \u2014 a marketplace aggregator akin to OpenSea Pro. This project indexed data from multiple NFT marketplaces on the Flow blockchain, offering a plethora of valuable API endpoints. These endpoints included NFT listing data, NFT purchase data, NFT owner history, marketplace sales and volume data, NFT rarity ranking, and much more."),(0,o.kt)("p",null,"So, we thought to experiment with an API provider where developers could write their query and extract the data from the event indexers. To realize this we needed a way for the users to send their SQL queries to our database and accepting raw SQL strings was pretty much an unfeasible solution since it will never turn into a real-world product."),(0,o.kt)("p",null,"To bring the concept of customizable queries to life, we explored a novel approach. Instead of accepting raw SQL strings, which posed challenges for real-world implementation, we devised a user-friendly solution\u2014a simple Json-based query language. This language seamlessly translates into SQL statements, granting us control over what and how much data can be accessed."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"As of now, ParcelQL supports the following features:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Column selection, Distinct column with Filters."),(0,o.kt)("li",{parentName:"ol"},"JSON data type query."),(0,o.kt)("li",{parentName:"ol"},"Joins"),(0,o.kt)("li",{parentName:"ol"},"Aggregation and Window function."),(0,o.kt)("li",{parentName:"ol"},"Group by, Having, and Order by clauses."),(0,o.kt)("li",{parentName:"ol"},"Subquery and ON clause."),(0,o.kt)("li",{parentName:"ol"},"Offset and Limit."),(0,o.kt)("li",{parentName:"ol"},"Some functions like ",(0,o.kt)("inlineCode",{parentName:"li"},"DATE_TRUNC")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"interval"),".")))}d.isMDXComponent=!0}}]);