!function(t,n,a,e){"use strict";var o=t(n),i=function(t,n){var a,e;return function(){var o=this,i=arguments,r=+new Date;a&&r<a+t?(clearTimeout(e),e=setTimeout(function(){a=r,n.apply(o,i)},t)):(a=r,n.apply(o,i))}},r="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",s=!1,d=250,l=t([]),c=t([]),u=t([]),f=function(t){(adsbygoogle=n.adsbygoogle||[]).push({});var a=t.data("alOptions").onLoad;"function"==typeof a&&t.find("iframe").one("load",function(){a(t)})},h=function(t){return parseInt(n.getComputedStyle(t,":before").getPropertyValue("content").slice(1,-1)||9999)},g=function(){if(!c.length)return!0;var n=o.scrollTop(),a=o.height();c.each(function(){var e=t(this),o=e.data("alOptions").laziness+1,i=e.offset().top;if(i-n>a*o||n-i-e.outerHeight()-a*o>0)return!0;c=c.not(e),l=l.add(e),e.data("alOriginalHTML",e.html()).data("alWidth",h(this)).children(":first").addClass("adsbygoogle"),"undefined"!=typeof adsbygoogle?f(e):u=u.add(e),s||(s=!0,t.ajax({url:r,async:!0,cache:!0,dataType:"script",success:function(){u.each(function(){f(t(this))}),u=t([])}}))})};o.on("scroll resize",i(d,g)).on("resize",i(d,function(){if(!l.length)return!0;var n=!1;l.each(function(){var a=t(this);a.data("alWidth")!=h(this)&&(l=l.not(a),a.html(a.data("alOriginalHTML")),c=c.add(a),n=!0)}),n&&g()})),t.fn.adsenseLoader=function(n){return"string"!=typeof n&&(n=t.extend({},{laziness:1,onLoad:!1},n)),this.each(function(){var a=t(this);"destroy"===n?(a.html(a.data("alOriginalHTML")),c=c.not(a),l=l.not(a),u=u.not(a)):(a.data("alOptions",n),c=c.add(a))}),"destroy"!==n&&g(),this},t.adsenseLoaderConfig=function(t){void 0!==t.scriptUrl&&(r=t.scriptUrl),void 0!==t.throttle&&(d=t.throttle)}}(jQuery,window,document);$(".adsense").adsenseLoader({onLoad:function(d){d.addClass("adsense--loaded")}});var options={laziness:0,onLoad:!1};$.adsenseLoaderConfig(options);$('.adsense').adsenseLoader(options);
