/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

!function(e,t,n){"function"==typeof define&&define.amd?define(["jquery"],function(i){return n(i,e,t),i.mobile}):n(e.jQuery,e,t)}(this,document,function(e,t,n,i){!function(e,t,i){function o(e){return"#"+(e=e||location.href).replace(/^[^#]*#?(.*)$/,"$1")}var a,r="hashchange",s=n,l=e.event.special,c=s.documentMode,u="on"+r in t&&(void 0===c||c>7);e.fn[r]=function(e){return e?this.bind(r,e):this.trigger(r)},e.fn[r].delay=50,l[r]=e.extend(l[r],{setup:function(){if(u)return!1;e(a.start)},teardown:function(){if(u)return!1;e(a.stop)}}),a=function(){function n(){var a=o(),s=h(l);a!==l?(d(l=a,s),e(t).trigger(r)):s!==l&&(location.href=location.href.replace(/#.*/,"")+s),i=setTimeout(n,e.fn[r].delay)}var i,a={},l=o(),c=function(e){return e},d=c,h=c;return a.start=function(){i||n()},a.stop=function(){i&&clearTimeout(i),i=void 0},t.attachEvent&&!t.addEventListener&&!u&&function(){var t,i;a.start=function(){t||(i=(i=e.fn[r].src)&&i+o(),t=e('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){i||d(o()),n()}).attr("src",i||"javascript:0").insertAfter("body")[0].contentWindow,s.onpropertychange=function(){try{"title"===event.propertyName&&(t.document.title=s.title)}catch(e){}})},a.stop=c,h=function(){return o(t.location.href)},d=function(n,i){var o=t.document,a=e.fn[r].domain;n!==i&&(o.title=s.title,o.open(),a&&o.write('<script>document.domain="'+a+'"<\/script>'),o.close(),t.location.hash=n)}}(),a}()}(e,this),function(e){e.mobile={}}(e),function(e,t,n){e.extend(e.mobile,{version:"1.4.5",subPageUrlKey:"ui-page",hideUrlBar:!0,keepNative:":jqmData(role='none'), :jqmData(role='nojs')",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:!0,hashListeningEnabled:!0,linkBindingEnabled:!0,defaultPageTransition:"fade",maxTransitionWidth:!1,minScrollBack:0,defaultDialogTransition:"pop",pageLoadErrorMessage:"Error Loading Page",pageLoadErrorMessageTheme:"a",phonegapNavigationEnabled:!1,autoInitializePage:!0,pushStateEnabled:!0,ignoreContentEnabled:!1,buttonMarkup:{hoverDelay:200},dynamicBaseEnabled:!0,pageContainer:e(),allowCrossDomainPages:!1,dialogHashKey:"&ui-state=dialog"})}(e),function(e,t,n){var i={},o=e.find,a=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,r=/:jqmData\(([^)]*)\)/g;e.extend(e.mobile,{ns:"",getAttribute:function(t,n){var i;(t=t.jquery?t[0]:t)&&t.getAttribute&&(i=t.getAttribute("data-"+e.mobile.ns+n));try{i="true"===i||"false"!==i&&("null"===i?null:+i+""===i?+i:a.test(i)?JSON.parse(i):i)}catch(e){}return i},nsNormalizeDict:i,nsNormalize:function(t){return i[t]||(i[t]=e.camelCase(e.mobile.ns+t))},closestPageData:function(e){return e.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")}}),e.fn.jqmData=function(t,n){var i;return void 0!==t&&(t&&(t=e.mobile.nsNormalize(t)),i=arguments.length<2||void 0===n?this.data(t):this.data(t,n)),i},e.jqmData=function(t,n,i){var o;return void 0!==n&&(o=e.data(t,n?e.mobile.nsNormalize(n):n,i)),o},e.fn.jqmRemoveData=function(t){return this.removeData(e.mobile.nsNormalize(t))},e.jqmRemoveData=function(t,n){return e.removeData(t,e.mobile.nsNormalize(n))},e.find=function(t,n,i,a){return t.indexOf(":jqmData")>-1&&(t=t.replace(r,"[data-"+(e.mobile.ns||"")+"$1]")),o.call(this,t,n,i,a)},e.extend(e.find,o)}(e),function(e,t){function i(t,n){var i,a,r,s=t.nodeName.toLowerCase();return"area"===s?(a=(i=t.parentNode).name,!(!t.href||!a||"map"!==i.nodeName.toLowerCase())&&!!(r=e("img[usemap=#"+a+"]")[0])&&o(r)):(/input|select|textarea|button|object/.test(s)?!t.disabled:"a"===s&&t.href||n)&&o(t)}function o(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,r=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"c0ab71056b936627e8a7821f03c044aec6280a40",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(n,i){return"number"==typeof n?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),i&&i.call(t)},n)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(this[0].ownerDocument||n):t},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,i){return!!e.data(t,i[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),o=isNaN(n);return(o||n>=0)&&i(t,!o)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,n){function i(t,n,i,a){return e.each(o,function(){n-=parseFloat(e.css(t,"padding"+this))||0,i&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var o="Width"===n?["Left","Right"]:["Top","Bottom"],a=n.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(t){return void 0===t?r["inner"+n].call(this):this.each(function(){e(this).css(a,i(this,t)+"px")})},e.fn["outer"+n]=function(t,o){return"number"!=typeof t?r["outer"+n].call(this,t):this.each(function(){e(this).css(a,i(this,t,!0,o)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in n.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,o,a=e(this[0]);a.length&&a[0]!==n;){if(("absolute"===(i=a.css("position"))||"relative"===i||"fixed"===i)&&(o=parseInt(a.css("zIndex"),10),!isNaN(o)&&0!==o))return o;a=a.parent()}return 0}}),e.ui.plugin={add:function(t,n,i){var o,a=e.ui[t].prototype;for(o in i)a.plugins[o]=a.plugins[o]||[],a.plugins[o].push([n,i[o]])},call:function(e,t,n,i){var o,a=e.plugins[t];if(a&&(i||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(o=0;o<a.length;o++)e.options[a[o][0]]&&a[o][1].apply(e.element,n)}}}(e),function(e,t,i){e.extend(e.mobile,{window:e(t),document:e(n),keyCode:e.ui.keyCode,behaviors:{},silentScroll:function(n){"number"!==e.type(n)&&(n=e.mobile.defaultHomeScroll),e.event.special.scrollstart.enabled=!1,setTimeout(function(){t.scrollTo(0,n),e.mobile.document.trigger("silentscroll",{x:0,y:n})},20),setTimeout(function(){e.event.special.scrollstart.enabled=!0},150)},getClosestBaseUrl:function(t){var n=e(t).closest(".ui-page").jqmData("url"),i=e.mobile.path.documentBase.hrefNoHash;return e.mobile.dynamicBaseEnabled&&n&&e.mobile.path.isPath(n)||(n=i),e.mobile.path.makeUrlAbsolute(n,i)},removeActiveLinkClass:function(t){!e.mobile.activeClickedLink||e.mobile.activeClickedLink.closest("."+e.mobile.activePageClass).length&&!t||e.mobile.activeClickedLink.removeClass(e.mobile.activeBtnClass),e.mobile.activeClickedLink=null},getInheritedTheme:function(e,t){for(var n,i,o=e[0],a="",r=/ui-(bar|body|overlay)-([a-z])\b/;o&&!((n=o.className||"")&&(i=r.exec(n))&&(a=i[2]));)o=o.parentNode;return a||t||"a"},enhanceable:function(e){return this.haveParents(e,"enhance")},hijackable:function(e){return this.haveParents(e,"ajax")},haveParents:function(t,n){if(!e.mobile.ignoreContentEnabled)return t;var i,o,a,r,s=t.length,l=e();for(r=0;r<s;r++){for(o=t.eq(r),a=!1,i=t[r];i;){if("false"===(i.getAttribute?i.getAttribute("data-"+e.mobile.ns+n):"")){a=!0;break}i=i.parentNode}a||(l=l.add(o))}return l},getScreenHeight:function(){return t.innerHeight||e.mobile.window.height()},resetActivePageHeight:function(t){var n=e("."+e.mobile.activePageClass),i=n.height(),o=n.outerHeight(!0);t=function(t,n){var i=t.parent(),o=[],a=function(){var t=e(this),n=e.mobile.toolbar&&t.data("mobile-toolbar")?t.toolbar("option"):{position:t.attr("data-"+e.mobile.ns+"position"),updatePagePadding:!1!==t.attr("data-"+e.mobile.ns+"update-page-padding")};return!("fixed"===n.position&&!0===n.updatePagePadding)},r=i.children(":jqmData(role='header')").filter(a),s=t.children(":jqmData(role='header')"),l=i.children(":jqmData(role='footer')").filter(a),c=t.children(":jqmData(role='footer')");return 0===s.length&&r.length>0&&(o=o.concat(r.toArray())),0===c.length&&l.length>0&&(o=o.concat(l.toArray())),e.each(o,function(t,i){n-=e(i).outerHeight()}),Math.max(0,n)}(n,"number"==typeof t?t:e.mobile.getScreenHeight()),n.css("min-height",""),n.height()<t&&n.css("min-height",t-(o-i))},loading:function(){var t=this.loading._widget||e(e.mobile.loader.prototype.defaultHtml).loader(),n=t.loader.apply(t,arguments);return this.loading._widget=t,n}}),e.addDependents=function(t,n){var i=e(t),o=i.jqmData("dependents")||e();i.jqmData("dependents",e(o).add(n))},e.fn.extend({removeWithDependents:function(){e.removeWithDependents(this)},enhanceWithin:function(){var t,n={},i=e.mobile.page.prototype.keepNativeSelector(),o=this;for(t in e.mobile.nojs&&e.mobile.nojs(this),e.mobile.links&&e.mobile.links(this),e.mobile.degradeInputsWithin&&e.mobile.degradeInputsWithin(this),e.fn.buttonMarkup&&this.find(e.fn.buttonMarkup.initSelector).not(i).jqmEnhanceable().buttonMarkup(),e.fn.fieldcontain&&this.find(":jqmData(role='fieldcontain')").not(i).jqmEnhanceable().fieldcontain(),e.each(e.mobile.widgets,function(t,a){if(a.initSelector){var r=e.mobile.enhanceable(o.find(a.initSelector));r.length>0&&(r=r.not(i)),r.length>0&&(n[a.prototype.widgetName]=r)}}),n)n[t][t]();return this},addDependents:function(t){e.addDependents(this,t)},getEncodedText:function(){return e("<a>").text(this.text()).html()},jqmEnhanceable:function(){return e.mobile.enhanceable(this)},jqmHijackable:function(){return e.mobile.hijackable(this)}}),e.removeWithDependents=function(t){var n=e(t);(n.jqmData("dependents")||e()).remove(),n.remove()},e.addDependents=function(t,n){var i=e(t),o=i.jqmData("dependents")||e();i.jqmData("dependents",e(o).add(n))},e.find.matches=function(t,n){return e.find(t,null,null,n)},e.find.matchesSelector=function(t,n){return e.find(n,null,null,[t]).length>0}}(e,this),function(e,i){t.matchMedia=t.matchMedia||function(e,t){var n,i=e.documentElement,o=i.firstElementChild||i.firstChild,a=e.createElement("body"),r=e.createElement("div");return r.id="mq-test-1",r.style.cssText="position:absolute;top:-100em",a.style.background="none",a.appendChild(r),function(e){return r.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',i.insertBefore(a,o),n=42===r.offsetWidth,i.removeChild(a),{matches:n,media:e}}}(n),e.mobile.media=function(e){return t.matchMedia(e).matches}}(e),function(e,t){var i={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,i),e.extend(e.mobile.support,i)}(e),function(e,n){e.extend(e.support,{orientation:"orientation"in t&&"onorientationchange"in t})}(e),function(e,i){function o(e){var t,n=e.charAt(0).toUpperCase()+e.substr(1),o=(e+" "+l.join(n+" ")+n).split(" ");for(t in o)if(s[o[t]]!==i)return!0}var a,r=e("<body>").prependTo("html"),s=r[0].style,l=["Webkit","Moz","O"],c="palmGetResource"in t,u=t.operamini&&"[object OperaMini]"==={}.toString.call(t.operamini),d=t.blackberry&&!o("-webkit-transform");e.extend(e.mobile,{browser:{}}),e.mobile.browser.oldIE=function(){var e=3,t=n.createElement("div"),i=t.all||[];do{t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><br><![endif]--\x3e"}while(i[0]);return e>4?e:!e}(),e.extend(e.support,{pushState:"pushState"in history&&"replaceState"in history&&!(t.navigator.userAgent.indexOf("Firefox")>=0&&t.top!==t)&&-1===t.navigator.userAgent.search(/CriOS/),mediaquery:e.mobile.media("only all"),cssPseudoElement:!!o("content"),touchOverflow:!!o("overflowScrolling"),cssTransform3d:function(){var o,a,s,c="transform-3d",u=e.mobile.media("(-"+l.join("-"+c+"),(-")+"-"+c+"),("+c+")");if(u)return!!u;for(s in o=n.createElement("div"),a={MozTransform:"-moz-transform",transform:"transform"},r.append(o),a)o.style[s]!==i&&(o.style[s]="translate3d( 100px, 1px, 1px )",u=t.getComputedStyle(o).getPropertyValue(a[s]));return!!u&&"none"!==u}(),boxShadow:!!o("boxShadow")&&!d,fixedPosition:function(){var e=t,n=navigator.userAgent,i=navigator.platform,o=n.match(/AppleWebKit\/([0-9]+)/),a=!!o&&o[1],r=n.match(/Fennec\/([0-9]+)/),s=!!r&&r[1],l=n.match(/Opera Mobi\/([0-9]+)/),c=!!l&&l[1];return!((i.indexOf("iPhone")>-1||i.indexOf("iPad")>-1||i.indexOf("iPod")>-1)&&a&&a<534||e.operamini&&"[object OperaMini]"==={}.toString.call(e.operamini)||l&&c<7458||n.indexOf("Android")>-1&&a&&a<533||s&&s<6||"palmGetResource"in t&&a&&a<534||n.indexOf("MeeGo")>-1&&n.indexOf("NokiaBrowser/8.5.0")>-1)}(),scrollTop:("pageXOffset"in t||"scrollTop"in n.documentElement||"scrollTop"in r[0])&&!c&&!u,dynamicBaseTag:function(){var t,n=location.protocol+"//"+location.host+location.pathname+"ui-dir/",i=e("head base"),o=null,a="";return i.length?a=i.attr("href"):i=o=e("<base>",{href:n}).appendTo("head"),t=e("<a href='testurl' />").prependTo(r)[0].href,i[0].href=a||location.pathname,o&&o.remove(),0===t.indexOf(n)}(),cssPointerEvents:function(){var e,i=n.createElement("x"),o=n.documentElement,a=t.getComputedStyle;return"pointerEvents"in i.style&&(i.style.pointerEvents="auto",i.style.pointerEvents="x",o.appendChild(i),e=a&&"auto"===a(i,"").pointerEvents,o.removeChild(i),!!e)}(),boundingRect:void 0!==n.createElement("div").getBoundingClientRect,inlineSVG:function(){var n=t,i=!(!n.document.createElementNS||!n.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||n.opera&&-1===navigator.userAgent.indexOf("Chrome")),o=function(t){t&&i||e("html").addClass("ui-nosvg")},a=new n.Image;a.onerror=function(){o(!1)},a.onload=function(){o(1===a.width&&1===a.height)},a.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}}),r.remove(),a=function(){var e=t.navigator.userAgent;return e.indexOf("Nokia")>-1&&(e.indexOf("Symbian/3")>-1||e.indexOf("Series60/5")>-1)&&e.indexOf("AppleWebKit")>-1&&e.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)}(),e.mobile.gradeA=function(){return(e.support.mediaquery&&e.support.cssPseudoElement||e.mobile.browser.oldIE&&e.mobile.browser.oldIE>=8)&&(e.support.boundingRect||null!==e.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/))},e.mobile.ajaxBlacklist=t.blackberry&&!t.WebKitPoint||u||a,a&&e(function(){e("head link[rel='stylesheet']").attr("rel","alternate stylesheet").attr("rel","stylesheet")}),e.support.boxShadow||e("html").addClass("ui-noboxshadow")}(e),function(e,t){var n,i=e.mobile.window,o=function(){};e.event.special.beforenavigate={setup:function(){i.on("navigate",o)},teardown:function(){i.off("navigate",o)}},e.event.special.navigate=n={bound:!1,pushStateEnabled:!0,originalEventName:void 0,isPushStateEnabled:function(){return e.support.pushState&&!0===e.mobile.pushStateEnabled&&this.isHashChangeEnabled()},isHashChangeEnabled:function(){return!0===e.mobile.hashListeningEnabled},popstate:function(t){var n=new e.Event("navigate"),o=new e.Event("beforenavigate"),a=t.originalEvent.state||{};o.originalEvent=t,i.trigger(o),o.isDefaultPrevented()||(t.historyState&&e.extend(a,t.historyState),n.originalEvent=t,setTimeout(function(){i.trigger(n,{state:a})},0))},hashchange:function(t){var n=new e.Event("navigate"),o=new e.Event("beforenavigate");o.originalEvent=t,i.trigger(o),o.isDefaultPrevented()||(n.originalEvent=t,i.trigger(n,{state:t.hashchangeState||{}}))},setup:function(){n.bound||(n.bound=!0,n.isPushStateEnabled()?(n.originalEventName="popstate",i.bind("popstate.navigate",n.popstate)):n.isHashChangeEnabled()&&(n.originalEventName="hashchange",i.bind("hashchange.navigate",n.hashchange)))}}}(e),function(e){e.event.special.throttledresize={setup:function(){e(this).bind("resize",o)},teardown:function(){e(this).unbind("resize",o)}};var t,n,i,o=function(){n=(new Date).getTime(),(i=n-a)>=250?(a=n,e(this).trigger("throttledresize")):(t&&clearTimeout(t),t=setTimeout(o,250-i))},a=0}(e),function(e,t){function i(){var e=o();e!==a&&(a=e,u.trigger(d))}var o,a,r,s,l,c,u=e(t),d="orientationchange",h={0:!0,180:!0};e.support.orientation&&(50,r=(l=t.innerWidth||u.width())>(c=t.innerHeight||u.height())&&l-c>50,s=h[t.orientation],(r&&s||!r&&!s)&&(h={"-90":!0,90:!0})),e.event.special.orientationchange=e.extend({},e.event.special.orientationchange,{setup:function(){if(e.support.orientation&&!e.event.special.orientationchange.disabled)return!1;a=o(),u.bind("throttledresize",i)},teardown:function(){if(e.support.orientation&&!e.event.special.orientationchange.disabled)return!1;u.unbind("throttledresize",i)},add:function(e){var t=e.handler;e.handler=function(e){return e.orientation=o(),t.apply(this,arguments)}}}),e.event.special.orientationchange.orientation=o=function(){var i=n.documentElement;return(e.support.orientation?h[t.orientation]:i&&i.clientWidth/i.clientHeight<1.1)?"portrait":"landscape"},e.fn[d]=function(e){return e?this.bind(d,e):this.trigger(d)}}(e,this),function(e,t,n,i){function o(e){for(;e&&void 0!==e.originalEvent;)e=e.originalEvent;return e}function a(t,n){var a,r,s,l,c,u,d,h,f,p=t.type;if((t=e.Event(t)).type=n,a=t.originalEvent,r=e.event.props,p.search(/^(mouse|click)/)>-1&&(r=A),a)for(d=r.length;d;)t[l=r[--d]]=a[l];if(p.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1),-1!==p.search(/^touch/)&&(p=(s=o(a)).touches,c=s.changedTouches,u=p&&p.length?p[0]:c&&c.length?c[0]:i))for(h=0,f=T.length;h<f;h++)t[l=T[h]]=u[l];return t}function r(t){for(var n,i,o={};t;){for(i in n=e.data(t,y))n[i]&&(o[i]=o.hasVirtualBinding=!0);t=t.parentNode}return o}function s(){M=!0}function l(){M=!1}function c(){u(),k=setTimeout(function(){k=0,L=0,q.length=0,O=!1,s()},e.vmouse.resetTimerDuration)}function u(){k&&(clearTimeout(k),k=0)}function d(t,n,i){var o;return(i&&i[t]||!i&&function(t,n){for(var i;t;){if((i=e.data(t,y))&&(!n||i[n]))return t;t=t.parentNode}return null}(n.target,t))&&(o=a(n,t),e(n.target).trigger(o)),o}function h(t){var n,i=e.data(t.target,x);O||L&&L===i||(n=d("v"+t.type,t))&&(n.isDefaultPrevented()&&t.preventDefault(),n.isPropagationStopped()&&t.stopPropagation(),n.isImmediatePropagationStopped()&&t.stopImmediatePropagation())}function f(t){var n,i,a,s=o(t).touches;s&&1===s.length&&((i=r(n=t.target)).hasVirtualBinding&&(L=H++,e.data(n,x,L),u(),l(),N=!1,a=o(t).touches[0],C=a.pageX,j=a.pageY,d("vmouseover",t,i),d("vmousedown",t,i)))}function p(e){M||(N||d("vmousecancel",e,r(e.target)),N=!0,c())}function m(t){if(!M){var n=o(t).touches[0],i=N,a=e.vmouse.moveDistanceThreshold,s=r(t.target);(N=N||Math.abs(n.pageX-C)>a||Math.abs(n.pageY-j)>a)&&!i&&d("vmousecancel",t,s),d("vmousemove",t,s),c()}}function v(e){if(!M){s();var t,n,i=r(e.target);d("vmouseup",e,i),N||(t=d("vclick",e,i))&&t.isDefaultPrevented()&&(n=o(e).changedTouches[0],q.push({touchID:L,x:n.clientX,y:n.clientY}),O=!0),d("vmouseout",e,i),N=!1,c()}}function g(t){var n,i=e.data(t,y);if(i)for(n in i)if(i[n])return!0;return!1}function b(){}var w,E,y="virtualMouseBindings",x="virtualTouchID",D="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),T="clientX clientY pageX pageY screenX screenY".split(" "),P=e.event.mouseHooks?e.event.mouseHooks.props:[],A=e.event.props.concat(P),S={},k=0,C=0,j=0,N=!1,q=[],O=!1,M=!1,I="addEventListener"in n,B=e(n),H=1,L=0;for(e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500},E=0;E<D.length;E++)e.event.special[D[E]]=function(t){var n=t.substr(1);return{setup:function(){g(this)||e.data(this,y,{}),e.data(this,y)[t]=!0,S[t]=(S[t]||0)+1,1===S[t]&&B.bind(n,h),e(this).bind(n,b),I&&(S.touchstart=(S.touchstart||0)+1,1===S.touchstart&&B.bind("touchstart",f).bind("touchend",v).bind("touchmove",m).bind("scroll",p))},teardown:function(){--S[t],S[t]||B.unbind(n,h),I&&(--S.touchstart||B.unbind("touchstart",f).unbind("touchmove",m).unbind("touchend",v).unbind("scroll",p));var i=e(this),o=e.data(this,y);o&&(o[t]=!1),i.unbind(n,b),g(this)||i.removeData(y)}}}(D[E]);I&&n.addEventListener("click",function(t){var n,i,o,a,r,s=q.length,l=t.target;if(s)for(n=t.clientX,i=t.clientY,w=e.vmouse.clickDistanceThreshold,o=l;o;){for(a=0;a<s;a++)if(r=q[a],o===l&&Math.abs(r.x-n)<w&&Math.abs(r.y-i)<w||e.data(o,x)===r.touchID)return t.preventDefault(),void t.stopPropagation();o=o.parentNode}},!0)}(e,0,n),function(e,t,i){function o(t,n,o,a){var r=o.type;o.type=n,a?e.event.trigger(o,i,t):e.event.dispatch.call(t,o),o.type=r}var a=e(n),r=e.mobile.support.touch,s=r?"touchstart":"mousedown",l=r?"touchend":"mouseup",c=r?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)}}),e.event.special.scrollstart={enabled:!0,setup:function(){function t(e,t){o(a,(n=t)?"scrollstart":"scrollstop",e)}var n,i,a=this;e(a).bind("touchmove scroll",function(o){e.event.special.scrollstart.enabled&&(n||t(o,!0),clearTimeout(i),i=setTimeout(function(){t(o,!1)},50))})},teardown:function(){e(this).unbind("touchmove scroll")}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),i=!1;n.bind("vmousedown",function(r){function s(){clearTimeout(u)}function l(){s(),n.unbind("vclick",c).unbind("vmouseup",s),a.unbind("vmousecancel",l)}function c(e){l(),i||d!==e.target?i&&e.preventDefault():o(t,"tap",e)}if(i=!1,r.which&&1!==r.which)return!1;var u,d=r.target;n.bind("vmouseup",s).bind("vclick",c),a.bind("vmousecancel",l),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(i=!0),o(t,"taphold",e.Event("taphold",{target:d}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),a.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,i=t.pageYOffset,o=e.clientX,a=e.clientY;return 0===e.pageY&&Math.floor(a)>Math.floor(e.pageY)||0===e.pageX&&Math.floor(o)>Math.floor(e.pageX)?(o-=n,a-=i):(a<e.pageY-i||o<e.pageX-n)&&(o=e.pageX-n,a=e.pageY-i),{x:o,y:a}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,i=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[i.x,i.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,i=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[i.x,i.y]}},handleSwipe:function(t,n,i,a){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var r=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return o(i,"swipe",e.Event("swipe",{target:a,swipestart:t,swipestop:n}),!0),o(i,r,e.Event(r,{target:a,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,i=e(n),o={};(t=e.data(this,"mobile-events"))||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=o,o.start=function(t){if(!e.event.special.swipe.eventInProgress){e.event.special.swipe.eventInProgress=!0;var i,r=e.event.special.swipe.start(t),s=t.target,u=!1;o.move=function(t){r&&!t.isDefaultPrevented()&&(i=e.event.special.swipe.stop(t),u||(u=e.event.special.swipe.handleSwipe(r,i,n,s))&&(e.event.special.swipe.eventInProgress=!1),Math.abs(r.coords[0]-i.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault())},o.stop=function(){u=!0,e.event.special.swipe.eventInProgress=!1,a.off(c,o.move),o.move=null},a.on(c,o.move).one(l,o.stop)}},i.on(s,o.start)},teardown:function(){var t,n;(t=e.data(this,"mobile-events"))&&(n=t.swipe,delete t.swipe,0==--t.length&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(s,n.start),n.move&&a.off(c,n.move),n.stop&&a.off(l,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this)});