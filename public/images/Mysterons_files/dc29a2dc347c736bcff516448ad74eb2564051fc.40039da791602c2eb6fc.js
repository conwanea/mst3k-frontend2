(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"061g":function(e,t,n){"use strict";var o=n("1LhI"),r={"text/plain":"Text","text/html":"Url",default:"Text"},i="Copy to clipboard: #{key}, Enter";e.exports=function(e,t){var n,a,c,u,s,l,d=!1;t||(t={}),n=t.debug||!1;try{if(c=o(),u=document.createRange(),s=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=r[t.format]||r.default;window.clipboardData.setData(i,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(l),u.selectNodeContents(l),s.addRange(u),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(f){n&&console.error("unable to copy using execCommand: ",f),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:i),window.prompt(a,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(u):s.removeAllRanges()),l&&document.body.removeChild(l),c()}return d}},"1LhI":function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},EMob:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=i(n("ERkP")),r=i(n("061g"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(){var e,n,i,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,s=new Array(u),f=0;f<u;f++)s[f]=arguments[f];return i=this,c=(e=l(t)).call.apply(e,[this].concat(s)),n=!c||"object"!==a(c)&&"function"!==typeof c?d(i):c,p(d(n),"onClick",(function(e){var t=n.props,i=t.text,a=t.onCopy,c=t.children,u=t.options,s=o.default.Children.only(c),l=(0,r.default)(i,u);a&&a(i,l),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)})),n}var n,i,b;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(i=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=u(e,["text","onCopy","options","children"]),r=o.default.Children.only(t);return o.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&s(n.prototype,i),b&&s(n,b),t}(o.default.PureComponent);t.CopyToClipboard=b,p(b,"defaultProps",{onCopy:void 0,options:void 0})},KYZq:function(e,t,n){"use strict";var o=n("EMob").CopyToClipboard;o.CopyToClipboard=o,e.exports=o},LfYr:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var o=n("ERkP"),r=n.n(o),i=r.a.createElement,a=r.a.createContext({type:void 0,subType:void 0,id:void 0}),c=function(e){var t=e.value,n=e.children;return i(a.Provider,{value:t},n)},u=function(){return r.a.useContext(a)}},c0Ac:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var o=n("ERkP"),r=n.n(o),i=r.a.createElement,a=r.a.createContext({shareBody:void 0,emailSubject:void 0,URLPostfix:void 0,URLPrefix:void 0}),c=function(e){var t=e.value,n=e.children;return i(a.Provider,{value:t},n)},u=function(){return r.a.useContext(a)}},gCbH:function(e,t,n){"use strict";var o,r,i,a,c,u,s,l,d,f,p,b,m,h,y,E,g,I;n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return E})),function(e){e.Domestic="DOMESTIC",e.International="INTERNATIONAL",e.Worldwide="WORLDWIDE"}(o||(o={})),function(e){e.ProInDevTitle="PRO_IN_DEV_TITLE",e.ProAnnouncedTitle="PRO_ANNOUNCED_TITLE"}(r||(r={})),function(e){e.CreditedOnly="CREDITED_ONLY",e.UncreditedOnly="UNCREDITED_ONLY"}(i||(i={})),function(e){e.ReleaseDate="RELEASE_DATE",e.Rating="RATING"}(a||(a={})),function(e){e.Exclude="EXCLUDE",e.Include="INCLUDE"}(c||(c={})),function(e){e.SpoilersOnly="SPOILERS_ONLY",e.ExcludeSpoilers="EXCLUDE_SPOILERS"}(u||(u={})),function(e){e.CheckIns="CHECK_INS",e.FavoriteActors="FAVORITE_ACTORS",e.FavoriteTheatres="FAVORITE_THEATRES",e.Internal="INTERNAL",e.List="LIST",e.NotInterested="NOT_INTERESTED",e.ProList="PRO_LIST",e.Seen="SEEN",e.WatchList="WATCH_LIST"}(s||(s={})),function(e){e.CreatedDate="CREATED_DATE",e.ListOrder="LIST_ORDER",e.ModifiedDate="MODIFIED_DATE",e.Popularity="POPULARITY"}(l||(l={})),function(e){e.Galleries="GALLERIES",e.Images="IMAGES",e.Lists="LISTS",e.People="PEOPLE",e.Theatres="THEATRES",e.Titles="TITLES",e.Videos="VIDEOS"}(d||(d={})),function(e){e.Android="ANDROID",e.AndroidFire="ANDROID_FIRE",e.Ios="IOS",e.Mdot="MDOT",e.Web="WEB"}(f||(f={})),function(e){e.Outline="OUTLINE",e.Summary="SUMMARY",e.Synopsis="SYNOPSIS"}(p||(p={})),function(e){e.NotPublished="NOT_PUBLISHED",e.Published="PUBLISHED",e.Redirected="REDIRECTED"}(b||(b={})),function(e){e.HelpfulnessScore="HELPFULNESS_SCORE",e.SubmissionDate="SUBMISSION_DATE",e.SubmitterReviewCount="SUBMITTER_REVIEW_COUNT",e.TotalVotes="TOTAL_VOTES",e.UserRating="USER_RATING"}(m||(m={})),function(e){e.Asc="ASC",e.Desc="DESC"}(h||(h={})),function(e){e.Seconds="SECONDS"}(y||(y={})),function(e){e.All="ALL",e.Editorial="EDITORIAL"}(E||(E={})),function(e){e.Interview="INTERVIEW",e.Trailer="TRAILER"}(g||(g={})),function(e){e.WinsOnly="WINS_ONLY",e.ExcludeWins="EXCLUDE_WINS"}(I||(I={}))},gYIA:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"g",(function(){return b}));var o=n("KD1n"),r=n("H5qd"),i=n.n(r);function a(){var e=Object(o.a)(["\n    fragment MediaSheetListItemMeta on ListItemNode {\n        description {\n            originalText {\n                plaidHtml\n            }\n        }\n    }\n"]);return a=function(){return e},e}function c(){var e=Object(o.a)(['\n    fragment MediaSheetImageMeta on Image {\n        copyright\n        createdBy\n        caption {\n            plaidHtml\n        }\n        titles {\n            id\n            titleText {\n                text\n            }\n        }\n        source {\n            attributionUrl\n            text\n            banner {\n                url\n                attributionUrl\n            }\n        }\n        names {\n            id\n            nameText {\n                text\n            }\n        }\n        countries {\n            text\n        }\n        languages {\n            text\n        }\n        # On mobile, we need to refetch correctionLink and reportingLink\n        # data with isInIframe: false.\n        #\n        # This refetching is handled by the ContributeActionButton component.\n        correctionLink(\n            relatedId: $id\n            contributionContext: {\n                isInIframe: true\n                returnUrl: "','"\n                business: "consumer"\n            }\n        ) {\n            url\n        }\n        reportingLink(\n            relatedId: $id\n            contributionContext: {\n                isInIframe: true\n                returnUrl: "','"\n                business: "consumer"\n            }\n        ) {\n            url\n        }\n    }\n']);return c=function(){return e},e}var u={CLOSE:"media-sheet__close",OPEN:"media-sheet__open",EDIT:"media-sheet__edit",REPORT:"media-sheet__report"},s={PARENT:"media-sheet",ATTR_BANNER:"media-sheet__attr-banner"},l={email:"share-eml",facebook:"share-fb",twitter:"share-tw",link:"share-lnk"},d="https://www.imdb.com/close_me",f=i()(c(),d,d),p=i()(a()),b={closeSheetAriaLabel:{id:"mediaSheet_ariaLabel_closeSheet",defaultMessage:"Close"},openSheetAriaLabel:{id:"mediaSheet_ariaLabel_openSheet",defaultMessage:"Open"},editAriaLabel:{id:"mediaSheet_ariaLabel_edit",defaultMessage:"Edit tags"},reportAriaLabel:{id:"mediaSheet_ariaLabel_report",defaultMessage:"Report image"},nameLabel:{id:"mediaSheet_label_name",defaultMessage:"People"},titleLabel:{id:"mediaSheet_label_title",defaultMessage:"Titles"},countryLabel:{id:"mediaSheet_label_country",defaultMessage:"Countries"},languageLabel:{id:"mediaSheet_label_language",defaultMessage:"Languages"},photoByAttributionPrefix:{id:"mediaSheet_attribution_photoBy",defaultMessage:"Photo by"},courtesyAttributionPrefix:{id:"mediaSheet_attribution_courtesy",defaultMessage:"Image courtesy"}}},hBFL:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return!("undefined"===typeof window||!("ontouchstart"in window||window.DocumentTouch&&"undefined"!==typeof document&&document instanceof window.DocumentTouch))||!("undefined"===typeof navigator||!navigator.maxTouchPoints&&!navigator.msMaxTouchPoints)},e.exports=t.default},iKHq:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var o=n("ERkP"),r=n.n(o),i=n("hBFL"),a=n.n(i),c=n("WFZG"),u=n("KYZq"),s=n.n(u),l=n("9fIP"),d=n("zjfJ"),f={video:"Watch this video on IMDb!",image:"View this image on IMDb!"},p={video:"Watch this video on IMDb!",image:"View this image on IMDb!"},b={video:"Watch this video on IMDb!",image:"View this image on IMDb!"},m=function e(t,n,o,r){Object(l.a)(this,e),Object(d.a)(this,"mediaType",void 0),Object(d.a)(this,"shareLabelText",void 0),Object(d.a)(this,"shareLinkUrl",void 0),Object(d.a)(this,"shareIconName",void 0),Object(d.a)(this,"shareLinkTarget",void 0),this.shareLabelText=t,this.shareLinkUrl=n,this.shareIconName=o,this.shareLinkTarget=r},h=n("kTR4"),y=n("JeX9"),E=n("gYIA"),g=n("LfYr"),I=n("c0Ac"),O=r.a.createElement,v=function(e){var t=e.interactionHandler,n=Object(g.b)(),o=Object(I.b)();return O(r.a.Fragment,null,O(c.List,{className:"sharemenu-list"},function(e,t,n,o,r,i){var a=e&&new URLSearchParams(e.search);a&&a.delete("ref_");var c=r||e.origin,u="".concat(c).concat(e.pathname).concat(a.toString()?"?".concat(a.toString()).replace(/\?item=gf\d+/gi,""):""),s=i?u+i:u,l="".concat("https://www.facebook.com/sharer.php","?u=").concat(encodeURIComponent(s)),d="".concat("https://twitter.com/intent/tweet","?text=").concat(encodeURIComponent(n||f[t])," - ").concat(encodeURIComponent(s)),h="mailto:?subject=".concat(encodeURIComponent(o||b[t]),"&body=").concat(encodeURIComponent(n||p[t])," - ").concat(encodeURIComponent(s));return[new m("Facebook",l,"facebook","_blank"),new m("Twitter",d,"twitter","_blank"),new m("Email Link",h,"email","_blank"),new m("Copy Link",s,"link","_copy")]}(window.location,"image",o.shareBody,o.emailSubject,o.URLPrefix,o.URLPostfix).map((function(e){var o=e.shareLabelText,r=e.shareLinkUrl,i=e.shareIconName,a=e.shareLinkTarget;return"_copy"===a?O(s.a,{text:r},O(c.ListItem,{preIconName:"link",onClick:function(e){e.stopPropagation(),Object(y.t)(E.e[i]),n.type&&Object(y.s)(n,E.e[i],y.a.ACTION_ONLY),t()}},O(h.a,{id:"shareMenu_copyLink",defaultMessage:"Copy Link"}))):O(c.ListItem,{key:o,preIconName:i,href:r,target:a,className:"sharemenu-listitem",onClick:function(e){e.stopPropagation(),Object(y.t)(E.e[i]),n.type&&Object(y.s)(n,E.e[i],y.a.ACTION_ONLY),t()}},o)}))))},S=n("j/s1").default.div.withConfig({displayName:"ShareMenuFlyoutstyles__ShareMenuContainer",componentId:"iwhjlz-0"})(["position:relative;right:0;top:0;text-align:left;"]),L=r.a.createElement,T=function(e){var t=e.menuVisibility,n=e.interactionHandler;return Object(o.useEffect)((function(){return window.addEventListener("click",n),function(){return window.removeEventListener("click",n)}}),[]),L(S,{onMouseLeave:n,"data-testid":"share-container"},L(c.Menu,{menuID:"media-details-share-button",isVisible:t,mode:"anchored"},L(v,{interactionHandler:n})))},C=r.a.createElement,_=function(e){var t=e.menuVisibility,n=e.interactionHandler;return C(c.BottomSheet,{isOpen:t,onCloseClicked:n,"data-testid":"share-bottom-sheet"},C(v,{interactionHandler:n}))},w=n("2gxx"),R=r.a.createElement,D=function(e){var t=e.label,n=e.iconButtonName,i=e.onColor,u=e.forceBottomSheet,s=Object(o.useState)(!1),l=s[0],d=s[1],f=function(){d(!1)},p=Object(w.a)({id:"mediaViewer_ariaLabel_shareOnSocialMedia",defaultMessage:"share on social media"});return R(r.a.Fragment,null,R(c.IconButton,{name:n||"share",label:t||p,onClick:function(e){e.stopPropagation(),d(!l)},className:"sharemenu-iconbutton",onColor:i}),a()()||u?R(_,{interactionHandler:f,menuVisibility:l}):R(T,{interactionHandler:f,menuVisibility:l}))}}}]);