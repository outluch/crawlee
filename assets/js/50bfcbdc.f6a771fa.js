(self.webpackChunk=self.webpackChunk||[]).push([[7992],{2503:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var n=r(7462),a=r(3366),o=r(7294),s=r(6010),l=r(5999),i=r(6668);const u="anchorWithStickyNavbar_LWe7",c="anchorWithHideOnScrollNavbar_WYt5";var d=["as","id"];function f(e){var t=e.as,r=e.id,f=(0,a.Z)(e,d),m=(0,i.L)().navbar.hideOnScroll;return"h1"!==t&&r?o.createElement(t,(0,n.Z)({},f,{className:(0,s.Z)("anchor",m?c:u),id:r}),f.children,o.createElement("a",{className:"hash-link",href:"#"+r,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,(0,n.Z)({},f,{id:void 0}))}},5130:(e,t,r)=>{"use strict";r.d(t,{b:()=>s,k:()=>l});var n=r(7294),a=r(9688),o=n.createContext(null);function s(e){var t=e.children,r=function(e){return(0,n.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return n.createElement(o.Provider,{value:r},t)}function l(){var e=(0,n.useContext)(o);if(null===e)throw new a.i6("DocProvider");return e}},4353:(e,t,r)=>{"use strict";r.d(t,{D:()=>l,f:()=>i});var n=r(7294),a=r(9688),o=Symbol("EmptyContext"),s=n.createContext(o);function l(e){var t=e.children,r=(0,n.useState)(null),a=r[0],o=r[1],l=(0,n.useMemo)((function(){return{expandedItem:a,setExpandedItem:o}}),[a]);return n.createElement(s.Provider,{value:l},t)}function i(){var e=(0,n.useContext)(s);if(e===o)throw new a.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,t,r)=>{"use strict";r.d(t,{a:()=>s});var n=r(7294),a=r(2466),o=r(5936);function s(e){var t=e.threshold,r=(0,n.useState)(!1),s=r[0],l=r[1],i=(0,n.useRef)(!1),u=(0,a.Ct)(),c=u.startScroll,d=u.cancelScroll;return(0,a.RF)((function(e,r){var n=e.scrollY,a=null==r?void 0:r.scrollY;a&&(i.current?i.current=!1:n>=a?(d(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,o.S)((function(e){e.location.hash&&(i.current=!0,l(!1))})),{shown:s,scrollToTop:function(){return c(0)}}}},5448:(e,t,r)=>{"use strict";r.d(t,{F:()=>l});var n=r(7294),a=r(9688),o={attributes:!0,characterData:!0,childList:!0,subtree:!0};function s(e,t){var r=(0,n.useState)(),s=r[0],l=r[1],i=(0,n.useCallback)((function(){var t;l(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,l]);(0,n.useEffect)((function(){i()}),[i]),function(e,t,r){void 0===r&&(r=o);var s=(0,a.zX)(t),l=(0,a.Ql)(r);(0,n.useEffect)((function(){var t=new MutationObserver(s);return e&&t.observe(e,l),function(){return t.disconnect()}}),[e,s,l])}(s,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function l(){var e=(0,n.useState)(!1),t=e[0],r=e[1],a=(0,n.useState)(!1),o=a[0],l=a[1],i=(0,n.useRef)(null),u=(0,n.useCallback)((function(){var e=i.current.querySelector("code");t?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),r((function(e){return!e}))}),[i,t]),c=(0,n.useCallback)((function(){var e=i.current,t=e.scrollWidth>e.clientWidth||i.current.querySelector("code").hasAttribute("style");l(t)}),[i]);return s(i,c),(0,n.useEffect)((function(){c()}),[t,c]),(0,n.useEffect)((function(){return window.addEventListener("resize",c,{passive:!0}),function(){window.removeEventListener("resize",c)}}),[c]),{codeBlockRef:i,isEnabled:t,isCodeScrollable:o,toggle:u}}},6412:(e,t,r)=>{"use strict";r.d(t,{p:()=>o});var n=r(2949),a=r(6668);function o(){var e=(0,a.L)().prism,t=(0,n.I)().colorMode,r=e.theme,o=e.darkTheme||r;return"dark"===t?o:r}},6841:(e,t,r)=>{"use strict";r.d(t,{S:()=>i});var n=r(7294),a=r(6668);function o(e){var t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function s(e,t){var r,n,a=t.anchorTopOffset,s=e.find((function(e){return o(e).top>=a}));return s?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:null!=(n=e[e.indexOf(s)-1])?n:null:null!=(r=e[e.length-1])?r:null}function l(){var e=(0,n.useRef)(0),t=(0,a.L)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function i(e){var t=(0,n.useRef)(void 0),r=l();(0,n.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,a=e.linkActiveClassName,o=e.minHeadingLevel,l=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),i=function(e){for(var t=e.minHeadingLevel,r=e.maxHeadingLevel,n=[],a=t;a<=r;a+=1)n.push("h"+a+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),u=s(i,{anchorTopOffset:r.current}),c=e.find((function(e){return u&&u.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,r){r?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,r])}},8754:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Collapsible:()=>i.z,HtmlClassNameProvider:()=>d.FG,NavbarSecondaryMenuFiller:()=>m.Zo,PageMetadata:()=>d.d,ReactContextError:()=>c.i6,ThemeClassNames:()=>u.k,composeProviders:()=>c.Qc,createStorageSlot:()=>a.W,duplicates:()=>E.l,isMultiColumnFooterLinks:()=>b,isRegexpStringMatch:()=>C.F,listStorageKeys:()=>a._,listTagsByLetters:()=>g,translateTagsPageTitle:()=>h,uniq:()=>E.j,useCollapsible:()=>i.u,useColorMode:()=>f.I,useContextualSearchFilters:()=>o._q,useCurrentSidebarCategory:()=>s.jA,useDocsPreferredVersion:()=>S.J,useEvent:()=>c.zX,useIsomorphicLayoutEffect:()=>c.LI,usePluralForm:()=>l.c,usePrevious:()=>c.D9,usePrismTheme:()=>P.p,useThemeConfig:()=>n.L,useWindowSize:()=>v.i});var n=r(6668),a=r(12),o=r(3320),s=r(3791),l=r(8824),i=r(6043),u=r(5281),c=r(9688),d=r(833),f=r(2949),m=r(3102),v=r(7524),p=r(5999),h=function(){return(0,p.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function g(e){var t={};return Object.values(e).forEach((function(e){var r=function(e){return e[0].toUpperCase()}(e.label);null!=t[r]||(t[r]=[]),t[r].push(e)})),Object.entries(t).sort((function(e,t){var r=e[0],n=t[0];return r.localeCompare(n)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}function b(e){return"title"in e[0]}var C=r(8022),E=r(7392),P=r(6412),S=r(373)},2974:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AnnouncementBarProvider:()=>v.pl,BlogPostProvider:()=>d,Collapsible:()=>n.Collapsible,ColorModeProvider:()=>b.S,DEFAULT_SEARCH_TAG:()=>P.HX,DocProvider:()=>l.b,DocSidebarItemsExpandedStateProvider:()=>a.D,DocsPreferredVersionContextProvider:()=>m.L5,DocsSidebarProvider:()=>s.b,DocsVersionProvider:()=>o.q,HtmlClassNameProvider:()=>n.HtmlClassNameProvider,NavbarProvider:()=>F.V,NavbarSecondaryMenuFiller:()=>n.NavbarSecondaryMenuFiller,PageMetadata:()=>n.PageMetadata,PluginHtmlClassNameProvider:()=>w.VC,ReactContextError:()=>n.ReactContextError,ScrollControllerProvider:()=>T.OC,TabGroupChoiceProvider:()=>p.z,ThemeClassNames:()=>n.ThemeClassNames,composeProviders:()=>n.composeProviders,containsLineNumbers:()=>E.nt,createStorageSlot:()=>n.createStorageSlot,docVersionSearchTag:()=>P.os,duplicates:()=>n.duplicates,findFirstCategoryLink:()=>S.Wl,findSidebarCategory:()=>S.em,getPrismCssVariables:()=>E.QC,isActiveSidebarItem:()=>S._F,isDocsPluginEnabled:()=>S.cE,isMultiColumnFooterLinks:()=>n.isMultiColumnFooterLinks,isRegexpStringMatch:()=>n.isRegexpStringMatch,isSamePath:()=>M.Mg,keyboardFocusedClassName:()=>I.h,listStorageKeys:()=>n.listStorageKeys,listTagsByLetters:()=>n.listTagsByLetters,parseCodeBlockTitle:()=>E.bc,parseLanguage:()=>E.Vo,parseLines:()=>E.nZ,splitNavbarItems:()=>F.A,translateTagsPageTitle:()=>n.translateTagsPageTitle,uniq:()=>n.uniq,useAlternatePageUtils:()=>C.l,useAnnouncementBar:()=>v.nT,useBackToTopButton:()=>R.a,useBlogPost:()=>f,useCodeWordWrap:()=>H.F,useCollapsible:()=>n.useCollapsible,useColorMode:()=>n.useColorMode,useContextualSearchFilters:()=>n.useContextualSearchFilters,useCurrentSidebarCategory:()=>n.useCurrentSidebarCategory,useDoc:()=>l.k,useDocById:()=>S.xz,useDocRouteMetadata:()=>S.hI,useDocSidebarItemsExpandedState:()=>a.f,useDocsPreferredVersion:()=>n.useDocsPreferredVersion,useDocsPreferredVersionByPluginId:()=>m.Oh,useDocsSidebar:()=>s.V,useDocsVersion:()=>o.E,useDocsVersionCandidates:()=>S.lO,useEvent:()=>n.useEvent,useFilteredAndTreeifiedTOC:()=>x.b,useHideableNavbar:()=>D.c,useHistoryPopHandler:()=>L.R,useHomePageRoute:()=>M.Ns,useIsomorphicLayoutEffect:()=>n.useIsomorphicLayoutEffect,useKeyboardNavigation:()=>I.t,useLayoutDoc:()=>S.vY,useLayoutDocsSidebar:()=>S.oz,useLocalPathname:()=>N.b,useLocationChange:()=>k.S,useLockBodyScroll:()=>B.N,useNavbarMobileSidebar:()=>h.e,useNavbarSecondaryMenu:()=>g.Y,usePluralForm:()=>n.usePluralForm,usePrevious:()=>n.usePrevious,usePrismTheme:()=>n.usePrismTheme,useScrollController:()=>T.sG,useScrollPosition:()=>T.RF,useScrollPositionBlocker:()=>T.o5,useSearchPage:()=>O.O,useSidebarBreadcrumbs:()=>S.s1,useSkipToContent:()=>V.a,useSmoothScrollTo:()=>T.Ct,useTOCHighlight:()=>j.S,useTabGroupChoice:()=>p.U,useThemeConfig:()=>n.useThemeConfig,useTitleFormatter:()=>y.p,useTreeifiedTOC:()=>x.a,useWindowSize:()=>n.useWindowSize});var n=r(8754),a=r(4353),o=r(4477),s=r(1116),l=r(5130),i=r(7294),u=r(9688),c=i.createContext(null);function d(e){var t=e.children,r=e.content,n=e.isBlogPostPage,a=function(e){var t=e.content,r=e.isBlogPostPage;return(0,i.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:r}}),[t,r])}({content:r,isBlogPostPage:void 0!==n&&n});return i.createElement(c.Provider,{value:a},t)}function f(){var e=(0,i.useContext)(c);if(null===e)throw new u.i6("BlogPostProvider");return e}var m=r(373),v=r(9689),p=r(7094),h=r(3163),g=r(6857),b=r(2949),C=r(4711),E=r(7016),P=r(3320),S=r(3791),y=r(2128),k=r(5936),N=r(1753),L=r(1980),x=r(9665),T=r(2466),M=r(8596),w=r(833),F=r(8978),j=r(6841),D=r(9445),I=r(9727),B=r(9800),O=r(6177),H=r(5448),V=r(8721),R=r(2730)},7016:(e,t,r)=>{"use strict";r.d(t,{QC:()=>v,Vo:()=>f,bc:()=>c,nZ:()=>m,nt:()=>d});var n=r(6528),a=r(7594),o=r.n(a),s=(0,n.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),l=(0,n.Z)(/\{([\d,-]+)\}/,{range:1}),i={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function u(e,t){var r=e.map((function(e){var r=i[e],n=r.start,a=r.end;return"(?:"+n+"\\s*("+t.flatMap((function(e){var t,r;return[e.line,null==(t=e.block)?void 0:t.start,null==(r=e.block)?void 0:r.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")}function c(e){var t,r;return null!=(t=null==e||null==(r=e.match(s))?void 0:r.groups.title)?t:""}function d(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}function f(e){var t=e.split(" ").find((function(e){return e.startsWith("language-")}));return null==t?void 0:t.replace(/language-/,"")}function m(e,t){var r=e.replace(/\n$/,""),n=t.language,a=t.magicComments,s=t.metastring;if(s&&l.test(s)){var c=s.match(l).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+s+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var d=a[0].className,f=o()(c).filter((function(e){return e>0})).map((function(e){return[e-1,[d]]}));return{lineClassNames:Object.fromEntries(f),code:r}}if(void 0===n)return{lineClassNames:{},code:r};for(var m=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return u(["js","jsBlock"],t);case"jsx":case"tsx":return u(["js","jsBlock","jsx"],t);case"html":return u(["js","jsBlock","html"],t);case"python":case"py":case"bash":return u(["bash"],t);case"markdown":case"md":return u(["html","jsx","bash"],t);default:return u(Object.keys(i),t)}}(n,a),v=r.split("\n"),p=Object.fromEntries(a.map((function(e){return[e.className,{start:0,range:""}]}))),h=Object.fromEntries(a.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),g=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),b=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),C=0;C<v.length;){var E=v[C].match(m);if(E){var P=E.slice(1).find((function(e){return void 0!==e}));h[P]?p[h[P]].range+=C+",":g[P]?p[g[P]].start=C:b[P]&&(p[b[P]].range+=p[b[P]].start+"-"+(C-1)+","),v.splice(C,1)}else C+=1}r=v.join("\n");var S={};return Object.entries(p).forEach((function(e){var t=e[0],r=e[1].range;o()(r).forEach((function(e){null!=S[e]||(S[e]=[]),S[e].push(t)}))})),{lineClassNames:S,code:r}}function v(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},r={};return Object.entries(e.plain).forEach((function(e){var n=e[0],a=e[1],o=t[n];o&&"string"==typeof a&&(r[o]=a)})),r}},9665:(e,t,r)=>{"use strict";r.d(t,{a:()=>l,b:()=>u});var n=r(3366),a=r(7294),o=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),r=Array(7).fill(-1);t.forEach((function(e,t){var n=r.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),r[e.level]=t}));var a=[];return t.forEach((function(e){var r=e.parentIndex,s=(0,n.Z)(e,o);r>=0?t[r].children.push(s):a.push(s)})),a}function l(e){return(0,a.useMemo)((function(){return s(e)}),[e])}function i(e){var t=e.toc,r=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=i({toc:e.children,minHeadingLevel:r,maxHeadingLevel:n});return function(e){return e.level>=r&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}function u(e){var t=e.toc,r=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,a.useMemo)((function(){return i({toc:s(t),minHeadingLevel:r,maxHeadingLevel:n})}),[t,r,n])}},8824:(e,t,r)=>{"use strict";r.d(t,{c:()=>u});var n=r(7294),a=r(2263),o=["zero","one","two","few","many","other"];function s(e){return o.filter((function(t){return e.includes(t)}))}var l={locale:"en",pluralForms:s(["one","other"]),select:function(e){return 1===e?"one":"other"}};function i(){var e=(0,a.default)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:s(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),l}var t,r}),[e])}function u(){var e=i();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var a=r.select(t),o=r.pluralForms.indexOf(a);return n[Math.min(o,n.length-1)]}(r,t,e)}}}},538:(e,t,r)=>{"use strict";var n=r(7294),a=r(9960),o=r(8754),s=r(2974),l=r(2503),i=r(6892),u=r(5845),c=r(7850),d=function(e){return e&&e.__esModule?e:{default:e}},f=d(n),m=d(a),v=d(l);function p(e,t,r){if(!e.match(/api\/([\d.]+)/)&&!e.includes("api/next")&&r&&r.name!==t.version){var n="current"===r.name?"next":r.name;return e.endsWith("/api")?e+"/"+n:e.replace("/api/","/api/"+n+"/")}return e}e.exports=function(e){var t=e.options,r=e.packages,a=e.history,l=s.useDocsVersion(),d=o.useDocsPreferredVersion(l.pluginId).preferredVersion;return n.useEffect((function(){1===r.length?a.replace(p(r[0].entryPoints[0].reflection.permalink,l,d)):d&&a.replace(p(a.location.pathname,l,d))}),[r,a,l,d]),f.default.createElement("div",{className:"row"},f.default.createElement("div",{className:"col apiItemCol"},t.banner&&f.default.createElement("div",{className:"alert alert--info margin-bottom--md",role:"alert"},f.default.createElement("div",{dangerouslySetInnerHTML:{__html:t.banner}})),f.default.createElement(c.VersionBanner,null),f.default.createElement("div",{className:"apiItemContainer"},f.default.createElement("article",null,f.default.createElement("div",{className:"markdown"},f.default.createElement("header",null,f.default.createElement(v.default,{as:"h1"},"API")),f.default.createElement("section",{className:"tsd-panel"},f.default.createElement("h3",{className:"tsd-panel-header"},"Packages"),f.default.createElement("div",{className:"tsd-panel-content"},f.default.createElement("ul",{className:"tsd-index-list"},r.map((function(e){return f.default.createElement("li",{key:e.packageName,className:"tsd-truncate"},f.default.createElement(m.default,{className:"tsd-kind-icon",to:e.entryPoints[0].reflection.permalink},f.default.createElement("span",{className:"tsd-signature-symbol"},"v",e.packageVersion)," ",f.default.createElement("span",null,i.removeScopes(e.packageName,t.scopes))))})))))),f.default.createElement(u.Footer,null)))))}},5845:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(7294));t.Footer=function(){return n.default.createElement("footer",{className:"tsd-footer"},"Powered by"," ",n.default.createElement("a",{href:"https://github.com/milesj/docusaurus-plugin-typedoc-api"},"docusaurus-plugin-typedoc-api")," ","and ",n.default.createElement("a",{href:"https://typedoc.org/"},"TypeDoc"))}},7850:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(7294),a=r(9960),o=r(143),s=r(8754),l=r(2974),i=function(e){return e&&e.__esModule?e:{default:e}},u=i(n),c=i(a);t.VersionBanner=function(){var e=l.useDocsVersion(),t=e.banner,r=e.docs,a=e.pluginId,i=e.version,d=o.useDocVersionSuggestions(a).latestVersionSuggestion,f=s.useDocsPreferredVersion(a).savePreferredVersionName,m=n.useCallback((function(){f(d.name)}),[d.name,f]);if(!t||!d)return null;var v=r[d.label];return u.default.createElement("div",{className:s.ThemeClassNames.docs.docVersionBanner+" alert alert--warning margin-bottom--md",role:"alert"},u.default.createElement("div",null,"unreleased"===t&&u.default.createElement(u.default.Fragment,null,"This is documentation for an unreleased version."),"unmaintained"===t&&u.default.createElement(u.default.Fragment,null,"This is documentation for version ",u.default.createElement("b",null,i),".")," ","For the latest API, see version"," ",u.default.createElement("b",null,u.default.createElement(c.default,{to:v.id,onClick:m},v.title)),"."))}},6892:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeScopes=function(e,t){return 0===t.length?e:t.reduce((function(e,t){return e.replace(new RegExp("^("+t+"-|@"+t+"/)"),"")}),e)}},7594:(e,t)=>{function r(e){let t,r=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))r.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,a,o]=t;if(n&&o){n=parseInt(n),o=parseInt(o);const e=n<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=n;t!==o;t+=e)r.push(t)}}return r}t.default=r,e.exports=r}}]);