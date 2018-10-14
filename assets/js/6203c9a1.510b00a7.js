"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7217],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>g});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,f=d["".concat(s,".").concat(g)]||d[g]||c[g]||i;return n?t.createElement(f,o(o({ref:r},p),{},{components:n})):t.createElement(f,o({ref:r},p))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(7294),a=n(6010);const i="tabItem_Ymn6";function o(e){var r=e.children,n=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},r)}},5488:(e,r,n)=>{n.d(r,{Z:()=>g});var t=n(7462),a=n(7294),i=n(6010),o=n(2389),l=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var r,n,o=e.lazy,d=e.block,g=e.defaultValue,f=e.values,b=e.groupId,m=e.className,w=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:w.map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes}})),v=(0,l.l)(h,(function(e,r){return e.value===r.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===g?g:null!=(r=null!=g?g:null==(n=w.find((function(e){return e.props.default})))?void 0:n.props.value)?r:w[0].props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.U)(),C=k.tabGroupChoices,T=k.setTabGroupChoices,O=(0,a.useState)(y),x=O[0],P=O[1],N=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var E=C[b];null!=E&&E!==x&&h.some((function(e){return e.value===E}))&&P(E)}var Z=function(e){var r=e.currentTarget,n=N.indexOf(r),t=h[n].value;t!==x&&(j(r),P(t),null!=b&&T(b,String(t)))},I=function(e){var r,n=null;switch(e.key){case"ArrowRight":var t,a=N.indexOf(e.currentTarget)+1;n=null!=(t=N[a])?t:N[0];break;case"ArrowLeft":var i,o=N.indexOf(e.currentTarget)-1;n=null!=(i=N[o])?i:N[N.length-1]}null==(r=n)||r.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},m)},h.map((function(e){var r=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,t.Z)({role:"tab",tabIndex:x===r?0:-1,"aria-selected":x===r,key:r,ref:function(e){return N.push(e)},onKeyDown:I,onFocus:Z,onClick:Z},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":x===r})}),null!=n?n:r)}))),o?(0,a.cloneElement)(w.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},w.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==x})}))))}function g(e){var r=(0,o.Z)();return a.createElement(d,(0,t.Z)({key:String(r)},e))}},5314:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>g,contentTitle:()=>c,default:()=>m,frontMatter:()=>p,metadata:()=>d,toc:()=>f});var t=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(5488),l=n(5162),s=n(1435);var u=["components"],p={id:"avoid-blocking",title:"Avoid getting blocked",description:"How to avoid getting blocked when scraping"},c=void 0,d={unversionedId:"guides/avoid-blocking",id:"guides/avoid-blocking",title:"Avoid getting blocked",description:"How to avoid getting blocked when scraping",source:"@site/../docs/guides/avoid_blocking.mdx",sourceDirName:"guides",slug:"/guides/avoid-blocking",permalink:"/docs/next/guides/avoid-blocking",draft:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1668215478,formattedLastUpdatedAt:"Nov 12, 2022",frontMatter:{id:"avoid-blocking",title:"Avoid getting blocked",description:"How to avoid getting blocked when scraping"},sidebar:"docs",previous:{title:"Scaling our crawlers",permalink:"/docs/next/guides/scaling-crawlers"},next:{title:"JSDOMCrawler",permalink:"/docs/next/guides/jsdom-crawler-guide"}},g={},f=[{value:"Using browser fingerprints",id:"using-browser-fingerprints",level:2},{value:"Customizing browser fingerprints",id:"customizing-browser-fingerprints",level:2},{value:"Disabling browser fingerprints",id:"disabling-browser-fingerprints",level:2}],b={toc:f};function m(e){var r=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,t.Z)({},b,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A scraper might get blocked for numerous reasons. Let's narrow it down to two main ones. The first one is a bad or blocked IP address. This topic is covered in the ",(0,i.kt)("a",{parentName:"p",href:"./proxy-management",target:null,rel:null},"proxy management guide"),". The second reason we will explore more in this guide is ",(0,i.kt)("a",{parentName:"p",href:"https://pixelprivacy.com/resources/browser-fingerprinting/",target:"_blank",rel:"noopener"},"browser fingerprints")," (or signatures)."),(0,i.kt)("p",null,"Browser fingerprint is a collection of browser attributes and significant features that can show if our browser is a bot or a real user. Moreover, most browsers have these unique features that allow the website to track the browser even within different IP addresses. This is the main reason why scrapers should change browser fingerprints while doing browser-based scraping. In return, it should significantly reduce the blocking."),(0,i.kt)("h2",{id:"using-browser-fingerprints"},"Using browser fingerprints"),(0,i.kt)("p",null,"Changing browser fingerprints can be a tedious job. Luckily, Crawlee provides this feature with zero configuration necessary - the usage of fingerprints is enabled by default and available in ",(0,i.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),". So whenever we build a scraper that is using one of these crawlers - the fingerprints are going to be generated for the default browser and the operating system out of the box."),(0,i.kt)("h2",{id:"customizing-browser-fingerprints"},"Customizing browser fingerprints"),(0,i.kt)("p",null,"In certain cases we want to narrow down the fingerprints used - e.g. specify a certain operating system, locale or browser. This is also possible with Crawlee - the crawler can have the generation algorithm customized to reflect the particular browser version and many more. Let's take a look at the examples bellow:"),(0,i.kt)(o.Z,{groupId:"avoid_blocking",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"playwright",label:"PlaywrightCrawler",default:!0,mdxType:"TabItem"},(0,i.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},"import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    browserPoolOptions: {\n        useFingerprints: true, // this is the default\n        fingerprintOptions: {\n            fingerprintGeneratorOptions: {\n                browsers: [{\n                    name: 'edge',\n                    minVersion: 96,\n                }],\n                devices: [\n                    'desktop',\n                ],\n                operatingSystems: [\n                    'windows',\n                ],\n            },\n        },\n    },\n    // ...\n});\n")),(0,i.kt)(l.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,i.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},"import { PuppeteerCrawler } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    browserPoolOptions: {\n        useFingerprints: true, // this is the default\n        fingerprintOptions: {\n            fingerprintGeneratorOptions: {\n                browsers: [\n                    'chrome',\n                    'firefox',\n                ],\n                devices: [\n                    'mobile',\n                ],\n                locales: [\n                    'en-US',\n                ],\n            },\n        },\n    },\n    // ...\n});\n"))),(0,i.kt)("h2",{id:"disabling-browser-fingerprints"},"Disabling browser fingerprints"),(0,i.kt)("p",null,"On the contrary, sometimes we want to entirely disable the usage of browser fingerprints. This is easy to do with Crawlee too. All we have to do is set the ",(0,i.kt)("inlineCode",{parentName:"p"},"useFingerprints")," option of the ",(0,i.kt)("inlineCode",{parentName:"p"},"browserPoolOptions")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,i.kt)(o.Z,{groupId:"avoid_blocking",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"playwright",label:"PlaywrightCrawler",default:!0,mdxType:"TabItem"},(0,i.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},"import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    browserPoolOptions: {\n        useFingerprints: false,\n    },\n    // ...\n});\n")),(0,i.kt)(l.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,i.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},"import { PuppeteerCrawler } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    browserPoolOptions: {\n        useFingerprints: false,\n    },\n    // ...\n});\n"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Related links")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apify/fingerprint-suite",target:"_blank",rel:"noopener"},"Fingerprint Suite Docs"))))}m.isMDXComponent=!0}}]);