"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9736],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4959:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(9960),o=n(4477),i=n(2263),s=n(643).version.split("."),l=[s[0],s[1]].join(".");const c=function(e){var t=e.to,n=e.children,s=(0,o.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||s.version===l?a.createElement(r.default,{to:"/api/"+t},n):a.createElement(r.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+t},n)}},1895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>w,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(4959),s=n(1435);var l=["components"],c={id:"scaling-crawlers",title:"Scaling our crawlers",description:"To infinity and beyond! ...within limits"},d=void 0,u={unversionedId:"guides/scaling-crawlers",id:"version-3.0/guides/scaling-crawlers",title:"Scaling our crawlers",description:"To infinity and beyond! ...within limits",source:"@site/versioned_docs/version-3.0/guides/scaling_crawlers.mdx",sourceDirName:"guides",slug:"/guides/scaling-crawlers",permalink:"/docs/3.0/guides/scaling-crawlers",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1668215478,formattedLastUpdatedAt:"Nov 12, 2022",frontMatter:{id:"scaling-crawlers",title:"Scaling our crawlers",description:"To infinity and beyond! ...within limits"},sidebar:"docs",previous:{title:"Session Management",permalink:"/docs/3.0/guides/session-management"},next:{title:"Avoid getting blocked",permalink:"/docs/3.0/guides/avoid-blocking"}},p={},m=[{value:"<code>maxRequestsPerMinute</code>",id:"maxrequestsperminute",level:2},{value:"<code>minConcurrency</code> and <code>maxConcurrency</code>",id:"minconcurrency-and-maxconcurrency",level:2},{value:"Advanced options",id:"advanced-options",level:2},{value:"<code>desiredConcurrency</code>",id:"desiredconcurrency",level:3},{value:"<code>desiredConcurrencyRatio</code>",id:"desiredconcurrencyratio",level:3},{value:"<code>scaleUpStepRatio</code> and <code>scaleDownStepRatio</code>",id:"scaleupstepratio-and-scaledownstepratio",level:3},{value:"<code>maybeRunIntervalSecs</code>",id:"mayberunintervalsecs",level:3},{value:"<code>loggingIntervalSecs</code>",id:"loggingintervalsecs",level:3},{value:"<code>autoscaleIntervalSecs</code>",id:"autoscaleintervalsecs",level:3},{value:"<code>maxTasksPerMinute</code>",id:"maxtasksperminute",level:3}],h={toc:m};function w(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As we build our crawler, we might want to control how many requests we do to the website at a time. Crawlee provides several options to fine tune how many parallel requests should be made at any time, how many requests should be done per minute, and how should scaling work based on the available system resources."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"All of these options are available on all crawlers Crawlee provides, but for this guide we'll be using the ",(0,o.kt)(i.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")),". We can see all options that are available ",(0,o.kt)(i.Z,{to:"cheerio-crawler/interface/CheerioCrawlerOptions",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"here")),".")),(0,o.kt)("h2",{id:"maxrequestsperminute"},(0,o.kt)("inlineCode",{parentName:"h2"},"maxRequestsPerMinute")),(0,o.kt)("p",null,"This controls how many total requests can be made per minute. It counts the amount of requests done every second, to ensure there is not a burst of requests at the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxConcurrency")," limit followed by a long period of waiting. By default, it is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Infinity")," which means the crawler will keep going up to the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxConcurrency"),". We would set this if we wanted our crawler to work at full throughput, but also not keep hitting the website we're crawling with non-stop requests."),(0,o.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},"import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    // Let the crawler know it can run up to 100 requests concurrently at any time\n    maxConcurrency: 100,\n    // ...but also ensure the crawler never exceeds 250 requests per minute\n    maxRequestsPerMinute: 250,\n});\n"),(0,o.kt)("h2",{id:"minconcurrency-and-maxconcurrency"},(0,o.kt)("inlineCode",{parentName:"h2"},"minConcurrency")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"maxConcurrency")),(0,o.kt)("p",null,"These control how many parallel requests can be run at any time. By default, crawlers will start with one parallel request at a time and scale up over time to a maximum of 200 requests at a time."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Don't set ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"minConcurrency")," too high!"),(0,o.kt)("p",{parentName:"admonition"},"Setting this option too high compared to the available system resources will make your crawler run extremely slow or might even crash."),(0,o.kt)("p",{parentName:"admonition"},"It's recommended to leave it at the default value that is provided and letting the crawler scale up and down automatically based on available resources instead.")),(0,o.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},"import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    // Start the crawler right away and ensure there will always be 5 concurrent requests ran at any time\n    minConcurrency: 5,\n    // Ensure the crawler doesn't exceed 15 concurrent requests ran at any time\n    maxConcurrency: 15,\n});\n"),(0,o.kt)("h2",{id:"advanced-options"},"Advanced options"),(0,o.kt)("p",null,"While the options above should be enough for most users, if we wanted to get super deep into the configuration of the autoscaling pool (the internal utility in Crawlee that helps us allow crawlers to scale up and down), we can do so through the ",(0,o.kt)(i.Z,{to:"cheerio-crawler/interface/CheerioCrawlerOptions#autoscaledPoolOptions",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"autoscaledPoolOptions"))," object available on crawler options."),(0,o.kt)("admonition",{title:"Complex options up ahead!",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"This section is super advanced and, unless you test the changes extensively and know what you're doing, it's better to leave these options to their defaults, as they are most likely going to work fine without much fuss.")),(0,o.kt)("p",null,"With that warning aside, if we're feeling adventurous, this is how we would pass these options when using a crawler:"),(0,o.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},"import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    // Pass in advanced options by providing them in the autoscaledPoolOptions\n    autoscaledPoolOptions: {\n        // ...\n    },\n});\n"),(0,o.kt)("h3",{id:"desiredconcurrency"},(0,o.kt)("inlineCode",{parentName:"h3"},"desiredConcurrency")),(0,o.kt)("p",null,"This option specifies the amount of requests that should be running in parallel at the start of the crawler, assuming there are so many available. It defaults to the same value as ",(0,o.kt)("inlineCode",{parentName:"p"},"minConcurrency"),"."),(0,o.kt)("h3",{id:"desiredconcurrencyratio"},(0,o.kt)("inlineCode",{parentName:"h3"},"desiredConcurrencyRatio")),(0,o.kt)("p",null,"The minimum ratio of concurrency to reach before more scaling up is allowed (a number between ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"). By default, it is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"0.95"),"."),(0,o.kt)("p",null,"We can think of this as the point where the autoscaling pool can attempt to scale up (or down), monitor if there's any changes, and correct them if necessary."),(0,o.kt)("h3",{id:"scaleupstepratio-and-scaledownstepratio"},(0,o.kt)("inlineCode",{parentName:"h3"},"scaleUpStepRatio")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"scaleDownStepRatio")),(0,o.kt)("p",null,"These values define the fractional amount of desired concurrency to be added or subtracted as the autoscaling pool scales up or down. Both of these values default to ",(0,o.kt)("inlineCode",{parentName:"p"},"0.05"),"."),(0,o.kt)("p",null,"Every time the autoscaled pool attempts to scale up or down, this value will be added or subtracted from the current concurrency, and, based on the ",(0,o.kt)("a",{parentName:"p",href:"#desiredconcurrencyratio",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"desiredConcurrencyRatio"))," and ",(0,o.kt)("a",{parentName:"p",href:"#minconcurrency-and-maxconcurrency",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"maxConcurrency")),", determines how many requests can run concurrently."),(0,o.kt)("h3",{id:"mayberunintervalsecs"},(0,o.kt)("inlineCode",{parentName:"h3"},"maybeRunIntervalSecs")),(0,o.kt)("p",null,"Indicates how often the autoscaling pool should check if more requests can be started and, if that's true, starts a new request if there are any available. This value is represented in seconds, and defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"0.5"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Changing this has no effect for requests that are fired immediately after the previous ones are finished. However, it will influence how fast new requests will be started after the autoscaled pool scales up.")),(0,o.kt)("h3",{id:"loggingintervalsecs"},(0,o.kt)("inlineCode",{parentName:"h3"},"loggingIntervalSecs")),(0,o.kt)("p",null,"This option lets us control how often the autoscaled pool should log its current state (the current concurrency ratio, desired ratios, if the system is overloaded and so on)."),(0,o.kt)("p",null,"We can disable logging altogether by setting this to ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),". By default, it is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"60")," seconds."),(0,o.kt)("h3",{id:"autoscaleintervalsecs"},(0,o.kt)("inlineCode",{parentName:"h3"},"autoscaleIntervalSecs")),(0,o.kt)("p",null,"This option lets us control how often the autoscaling pool should check if it can and should scale up or down. This value is represented in seconds, and defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"10"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It's recommended you keep this value between ",(0,o.kt)("inlineCode",{parentName:"p"},"5")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"20")," seconds.")),(0,o.kt)("admonition",{title:"Be careful with how low, or high, you set this option",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Setting this option to a value that's too low might have a severe impact on our crawling performance. And, in reverse, setting this to a value that's too high might mean we leave performance on the table that could've been used for crawling more requests instead."),(0,o.kt)("p",{parentName:"admonition"},"With that said, if you configure this alongside ",(0,o.kt)("a",{parentName:"p",href:"#scaleupstepratio-and-scaledownstepratio",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"scaleUpStepRatio")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"scaleDownStepRatio")),", you could make your crawler scale up at a slower interval, but with more requests at a time when it does.")),(0,o.kt)("h3",{id:"maxtasksperminute"},(0,o.kt)("inlineCode",{parentName:"h3"},"maxTasksPerMinute")),(0,o.kt)("p",null,"This controls how many total requests can be made per minute. It counts the amount of requests done every second, to ensure there is not a burst of requests at the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxConcurrency")," limit followed by a long period of waiting. By default, it is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Infinity")," which means the crawler will keep going up to the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxConcurrency"),". We would set this if we wanted our crawler to work at full throughput, but also not keep hitting the website we're crawl with non-stop requests."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This option can be set by specifying ",(0,o.kt)("a",{parentName:"p",href:"#maxrequestsperminute",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"maxRequestsPerMinute"))," in your crawler options too, as it is a shortcut for visibility and ease of access.")))}w.isMDXComponent=!0},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.1.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":{"crawlee":"./src/cli.ts"},"main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"npm run clean && npm run compile && npm run copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.1.1","@crawlee/browser":"^3.1.1","@crawlee/cheerio":"^3.1.1","@crawlee/cli":"^3.1.1","@crawlee/core":"^3.1.1","@crawlee/http":"^3.1.1","@crawlee/jsdom":"^3.1.1","@crawlee/playwright":"^3.1.1","@crawlee/puppeteer":"^3.1.1","@crawlee/utils":"^3.1.1","import-local":"^3.1.0"},"peerDependencies":{"playwright":"^1.21.1","puppeteer":"<= 19.x"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);