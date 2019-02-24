///Append Style for all
$('head').append('<style type="text/css">.play-button:before{content:"";top:50%;left:50%;transform:translate3d(-50%,-50%,0);position:absolute;border-style:solid;border-width:15px 0 15px 26.0px;border-color:transparent transparent transparent #fff}.play-button{top:50px;left:50%;transform:translate3d(-50%,-50%,0);position:absolute;cursor:pointer;width:90px;height:60px;background-color:#333;box-shadow:0 0 30px rgba(0,0,0,0.6);z-index:1;opacity:0.8;border-radius:6px}.youtube img{width:100%}.modalDialog{font-family:ubuntu;position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,0.78);z-index:99999;-webkit-transition:opacity 200ms ease-in;-moz-transition:opacity 200ms ease-in;transition:opacity 200ms ease-in;}.modalDialog:target{opacity:1;pointer-events:auto;}.modalDialog:target > div{margin:8% auto;}.modalDialog > div{-webkit-transition:all 100ms ease-in;-moz-transition:all 100ms ease-in;transition:all 100ms ease-in;width:600px;position:relative;margin:5% auto;background:#fff;min-height:200px;}h2.ldemo{display:block;border-bottom:1px solid #d9e0e2;font-weight:400;text-align:center;padding:10px;}h2.signup{background:#f44336;border-bottom:1px solid #f44336;font-weight:400;text-align:center;padding:10px;color:#fff;font-size:18px;}#signup .close{position:absolute;top:10px;right:15px;width:30px;height:30px;line-height:30px;text-align:center;font-size:13px;background:#f44336;border-radius:100px;font-weight:400;}#signup .close:hover{text-decoration:none;color:#555;}.newsletter-sm{background:#fff;margin:0;padding:50px;width:500px;}.newsletter-sm h3{color:#f44336;font-size:30px;font-weight:800;text-align:center;margin-bottom:10px;font-family:ubuntu;letter-spacing:-1px;}.newsletter-sm p{font-size:14px;color:#555;line-height:20px;margin:0;}.newsletter-sm .newsletter-input-sm{border:1px solid #ddd;font-size:14px;width:70%;background-color:#fff;text-align:center;color:#999;padding:19px;border-radius:3px 0px 0px 3px;outline:none;font-family:ubuntu;}.newsletter-sm .newsletter-sm-bot , .removebutton{padding:40px;position:relative;outline:none;}.newsletter-sm .newsletter-button-sm, .removebutton{text-align:center;cursor:pointer;font-weight:700;font-size:14.5px;color:#fff;border:none;background-color:#f44336;padding:20px;border-radius:0px 3px 3px 0px;overflow:hidden;margin:0 -20px -20px;}.FollowByEmail .follow-by-email-inner .follow-by-email-address{height:40px !important;border:none;padding:5px;width:96%;outline:none;margin-bottom:5px;background:#eae9e9;font-family:"Roboto", sans-serif;}.FollowByEmail .follow-by-email-inner .follow-by-email-submit{height:40px !important;width:100%;margin-left:0;background:#f1ae28;font-size:16px;font-weight:600;text-transform:uppercase;border-radius:0;font-family:"Roboto", sans-serif;}</style>');
$('body').append('<div class="modalDialog" id="signup"> <div> <a class="close" href="#close" onclick="hide(\'.modalDialog\')" style="color:#fff;" title="Close" ><i class="fa fa-times"></i ></a> <div class="newsletter-sm"> <h3><i class="fa fa-envelope-o"></i> Subscribe for latest update</h3> <p style="text-align:center"> Sign up here with your email address to receive our all news and updates about blogger in your inbox. Its free. </p><form action="http://feedburner.google.com/fb/a/mailverify" method="post" onsubmit="window.open(\'http://feedburner.google.com/fb/a/mailverify?uri=Raufgraphics\', \'popupwindow\', \'scrollbars=yes,width=550,height=520\');return true" target="popupwindow" > <div class="newsletter-sm-bot"> <input class="newsletter-input-sm" name="email" placeholder="Enter Your Email" type="text"/> <button class="newsletter-button-sm" type="submit">Subscribe</button> </div><input name="uri" type="hidden" value="Raufgraphics"/> </form> </div></div></div>');
///Lazy Load Youtube Video
!function(){for(var e=document.querySelectorAll(".youtube"),t=0;t<e.length;t++){var r="https://img.youtube.com/vi/"+e[t].dataset.embed+"/maxresdefault.jpg",a=new Image;a.src=r,a.addEventListener("load",void e[t].appendChild(a)),e[t].addEventListener("click",function(){var e=document.createElement("iframe");e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen",""),e.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.embed+"?rel=0&showinfo=0&autoplay=1"),this.innerHTML="",this.appendChild(e)})}}();$('.play-button').css("top", $(".youtube img").height() / 2);$(".youtube img").attr({"alt": $("h2.entry-title").html(), "title": $("h2.entry-title").html()});
///Locker
document.addEventListener("keydown",function(){return 123!=event.keyCode&&((!event.ctrlKey||!event.shiftKey||73!=event.keyCode)&&((!event.ctrlKey||85!=event.keyCode)&&((!event.ctrlKey||65!=event.keyCode)&&void 0)))},!1),document.addEventListener?document.addEventListener("contextmenu",function(e){e.preventDefault()},!1):document.attachEvent("oncontextmenu",function(){window.event.returnValue=!1}),function e(){try{!function e(t){1===(""+t/t).length&&0!==t||function(){}.constructor("debugger")(),e(++t)}(0)}catch(t){setTimeout(e,5e3)}}(),navigator.onLine||(window.location.href="https://www.raufgraphics.com");
///Downloader
function generate(downloadbtn,clickbtn,link,time){var linkDL=document.getElementById(downloadbtn),btn=document.getElementById(clickbtn),direklink=link,waktu=time;var teks_waktu=document.createElement("span");linkDL.parentNode.replaceChild(teks_waktu,linkDL);var id;id=setInterval(function(){waktu--;if(waktu<0){teks_waktu.parentNode.replaceChild(linkDL,teks_waktu);clearInterval(id);var att=document.createAttribute("href");att.value=link;linkDL.setAttributeNode(att);linkDL.click();linkDL.style.display="inline"}else{teks_waktu.innerHTML="<i class='fa fa-clock-o' aria-hidden='true'></i> "+"Your Download Will Start In <b>"+waktu.toString()+"</b> Seconds...";btn.style.display="none"}},1000)}
///Disqus Parse Tools
function cdClear(){var e=document.getElementById("codes");e.value="",e.focus();for(var t=document.querySelectorAll("#cvrt3, #cvrt4, #cvrt5, #cvrt6, #cvrt7, #cvrt8, #cvrt9, #cvrt10, #cvrt11"),c=0;c<t.length;c++)t[c].disabled=!1}function preConvert(){var e=document.getElementById("codes"),t=e.value,c=document.getElementById("opt1"),l=document.getElementById("opt2"),o=document.getElementById("opt3"),n=document.getElementById("opt4"),d=document.getElementById("opt5"),r=document.getElementById("opt10");t=t.replace(/\t/g,"    "),r.checked&&(c.checked&&(t=t.replace(/&/g,"&amp;")),l.checked&&(t=t.replace(/'/g,"&#039;")),o.checked&&(t=t.replace(/"/g,"&quot;")),n.checked&&(t=t.replace(/</g,"&lt;")),d.checked&&(t=t.replace(/>/g,"&gt;")),t=t.replace(/^/,"<pre>"),t=t.replace(/$/,"</pre>"),e.value=t,e.focus(),e.select())}function codeConvert(){var e=document.getElementById("codes"),t=e.value,c=document.getElementById("opt1"),l=document.getElementById("opt2"),o=document.getElementById("opt3"),n=document.getElementById("opt4"),d=document.getElementById("opt5"),r=document.getElementById("opt11");t=t.replace(/\t/g,"    "),r.checked&&(c.checked&&(t=t.replace(/&/g,"&amp;")),l.checked&&(t=t.replace(/'/g,"&#039;")),o.checked&&(t=t.replace(/"/g,"&quot;")),n.checked&&(t=t.replace(/</g,"&lt;")),d.checked&&(t=t.replace(/>/g,"&gt;")),t=t.replace(/^/,"<code>"),t=t.replace(/$/,"</code>"),e.value=t,e.focus(),e.select())}function precodeConvert(){var e=document.getElementById("codes"),t=e.value,c=document.getElementById("opt1"),l=document.getElementById("opt2"),o=document.getElementById("opt3"),n=document.getElementById("opt4"),d=document.getElementById("opt5"),r=document.getElementById("opt12");t=t.replace(/\t/g,"    "),r.checked&&(c.checked&&(t=t.replace(/&/g,"&amp;")),l.checked&&(t=t.replace(/'/g,"&#039;")),o.checked&&(t=t.replace(/"/g,"&quot;")),n.checked&&(t=t.replace(/</g,"&lt;")),d.checked&&(t=t.replace(/>/g,"&gt;")),t=t.replace(/^/,"<pre><code>"),t=t.replace(/$/,"</code></pre>"),e.value=t,e.focus(),e.select())}function spoilerConvert(){var e=document.getElementById("codes"),t=e.value,c=document.getElementById("opt13");t=t.replace(/\t/g,"    "),c.checked&&(t=t.replace(/^/,"<spoiler>"),t=t.replace(/$/,"</spoiler>"),e.value=t,e.focus(),e.select())}function strongConvert(){var e=document.getElementById("codes"),t=e.value,c=document.getElementById("opt6");t=t.replace(/\t/g,"    "),c.checked&&(t=t.replace(/^/,"<strong>"),t=t.replace(/$/,"</strong>"),e.value=t,e.focus(),e.select())}function emConvert(){var e=document.getElementById("codes"),t=e.value,c=document.getElementById("opt7");t=t.replace(/\t/g,"    "),c.checked&&(t=t.replace(/^/,"<em>"),t=t.replace(/$/,"</em>"),e.value=t,e.focus(),e.select())}function uConvert(){var e=document.getElementById("codes"),t=e.value,c=document.getElementById("opt8");t=t.replace(/\t/g,"    "),c.checked&&(t=t.replace(/^/,"<u>"),t=t.replace(/$/,"</u>"),e.value=t,e.focus(),e.select())}function strikeConvert(){var e=document.getElementById("codes"),t=e.value,c=document.getElementById("opt9");t=t.replace(/\t/g,"    "),c.checked&&(t=t.replace(/^/,"<strike>"),t=t.replace(/$/,"</strike>"),e.value=t,e.focus(),e.select())}function embedConvert(){var e=document.getElementById("codes"),t=e.value,c=document.getElementById("opt20");t=t.replace(/\t/g,"    "),c.checked&&(t=t.replace(/^/,'<iframe src="https://embed.disqus.com/p/'),t=t.replace(/$/,'" style="border:0;width:100%;height:300px;" seamless="seamless" scrolling="no" allowtransparency="true"></iframe>'),e.value=t,e.focus(),e.select())}function toggleNavPanel(e){var t=document.getElementById(e),c=document.getElementById("tombol-pesan"),l="block";t.style.display==l?(t.style.display="none",c.innerHTML="<i class='fa fa-angle-down'></i>"):(t.style.display="block",c.innerHTML="<i class='fa fa-angle-up'></i>")}function toggleNavPanel2(e){var t=document.getElementById(e),c=document.getElementById("parser-button"),l="block";t.style.display==l?(t.style.display="none",c.innerHTML="Show Parser Box"):(t.style.display="block",c.innerHTML="Hide Parse Box")}
///Downloader
function decodeString(string) {
return string
.replace(/&nbsp;/g, " ").replace(/&quot;/g, "\"").replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&iexcl;/g, "¡").replace(/&cent;/g, "¢").replace(/&pound;/g, "£").replace(/&curren;/g, "¤").replace(/&yen;/g, "¥").replace(/&brvbar;/g, "¦").replace(/&sect;/g, "§").replace(/&uml;/g, "¨").replace(/&copy;/g, "©").replace(/&ordf;/g, "ª").replace(/&laquo;/g, "«").replace(/&not;/g, "¬").replace(/&reg;/g, "®").replace(/&macr;/g, "¯").replace(/&deg;/g, "°").replace(/&plusmn;/g, "±").replace(/&sup2;/g, "²").replace(/&sup3;/g, "³").replace(/&acute;/g, "´").replace(/&micro;/g, "µ").replace(/&para;/g, "¶").replace(/&middot;/g, "·").replace(/&cedil;/g, "¸").replace(/&sup1;/g, "¹").replace(/&ordm;/g, "º").replace(/&raquo;/g, "»").replace(/&frac14;/g, "¼").replace(/&frac12;/g, "½").replace(/&frac34;/g, "¾").replace(/&iquest;/g, "¿").replace(/&times;/g, "×").replace(/&divide;/g, "÷").replace(/&Agrave;/g, "À").replace(/&Aacute;/g, "Á").replace(/&Acirc;/g, "Â").replace(/&Atilde;/g, "Ã").replace(/&Auml;/g, "Ä").replace(/&Aring;/g, "Å").replace(/&AElig;/g, "Æ").replace(/&Ccedil;/g, "Ç").replace(/&Egrave;/g, "È").replace(/&Eacute;/g, "É").replace(/&Ecirc;/g, "Ê").replace(/&Euml;/g, "Ë").replace(/&Igrave;/g, "Ì").replace(/&Iacute;/g, "Í").replace(/&Icirc;/g, "Î").replace(/&Iuml;/g, "Ï").replace(/&ETH;/g, "Ð").replace(/&Ntilde;/g, "Ñ").replace(/&Ograve;/g, "Ò").replace(/&Oacute;/g, "Ó").replace(/&Ocirc;/g, "Ô").replace(/&Otilde;/g, "Õ").replace(/&Ouml;/g, "Ö").replace(/&Oslash;/g, "Ø").replace(/&Ugrave;/g, "Ù").replace(/&Uacute;/g, "Ú").replace(/&Ucirc;/g, "Û").replace(/&Uuml;/g, "Ü").replace(/&Yacute;/g, "Ý").replace(/&THORN;/g, "Þ").replace(/&szlig;/g, "ß").replace(/&agrave;/g, "à").replace(/&aacute;/g, "á").replace(/&acirc;/g, "â").replace(/&atilde;/g, "ã").replace(/&auml;/g, "ä").replace(/&aring;/g, "å").replace(/&aelig;/g, "æ").replace(/&ccedil;/g, "ç").replace(/&egrave;/g, "è").replace(/&eacute;/g, "é").replace(/&ecirc;/g, "ê").replace(/&euml;/g, "ë").replace(/&igrave;/g, "ì").replace(/&iacute;/g, "í").replace(/&icirc;/g, "î").replace(/&iuml;/g, "ï").replace(/&eth;/g, "ð").replace(/&ntilde;/g, "ñ").replace(/&ograve;/g, "ò").replace(/&oacute;/g, "ó").replace(/&ocirc;/g, "ô").replace(/&otilde;/g, "õ").replace(/&ouml;/g, "ö").replace(/&oslash;/g, "ø").replace(/&ugrave;/g, "ù").replace(/&uacute;/g, "ú").replace(/&ucirc;/g, "û").replace(/&uuml;/g, "ü").replace(/&yacute;/g, "ý").replace(/&thorn;/g, "þ").replace(/&yuml;/g, "ÿ").replace(/&amp;/g, "&")
}document.querySelector("#downloadme").addEventListener("click",function () {var htmlcode = $('.language-html').html();var csscode = $('.language-css').html();var javascriptcode = $('.language-javascript').html();var zip = new JSZip();zip.file("index.html", ""+decodeString(htmlcode)+"");var cssfolder = zip.folder("css");var jsfolder = zip.folder("js");cssfolder.file("style.css",""+decodeString(csscode)+"");jsfolder.file("index.js",""+decodeString(javascriptcode)+"");zip.generateAsync({type:"blob"}).then(function(zip) {saveAs(zip, "archive.zip");});});
///NewsLetters Subscription Form
function hide(e){document.querySelector(e).style.display='none';}
var days=1;var advert=document.getElementById('signup');if (readCookie('seen')){advert.style.display='none';}else{advert.style.display='block'; createCookie('seen', 'yes', days);}function createCookie(name,value,days){if (days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}else var expires="";document.cookie=name+"="+value+expires+"; path=/";}function readCookie(name){var nameEQ=name + "=";var ca=document.cookie.split(';');for(var i=0;i < ca.length;i++){var c=ca[i];while (c.charAt(0)==' ') c=c.substring(1,c.length);if (c.indexOf(nameEQ)==0) return c.substring(nameEQ.length,c.length);}return null;}function eraseCookie(name){createCookie(name,"",-1);}
/// Smooth Scroll
// smooth scroll
!function(){function e(){var e=!1;e&&c("keydown",r),v.keyboardSupport&&!e&&u("keydown",r)}function t(){if(document.body){var t=document.body,o=document.documentElement,n=window.innerHeight,r=t.scrollHeight;if(S=document.compatMode.indexOf("CSS")>=0?o:t,w=t,e(),x=!0,top!=self)y=!0;else if(r>n&&(t.offsetHeight<=n||o.offsetHeight<=n)){var a=!1,i=function(){a||o.scrollHeight==document.height||(a=!0,setTimeout(function(){o.style.height=document.height+"px",a=!1},500))};if(o.style.height="auto",setTimeout(i,10),S.offsetHeight<=n){var l=document.createElement("div");l.style.clear="both",t.appendChild(l)}}v.fixedBackground||b||(t.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll")}}function o(e,t,o,n){if(n||(n=1e3),d(t,o),1!=v.accelerationMax){var r=+new Date,a=r-C;if(a<v.accelerationDelta){var i=(1+30/a)/2;i>1&&(i=Math.min(i,v.accelerationMax),t*=i,o*=i)}C=+new Date}if(M.push({x:t,y:o,lastX:0>t?.99:-.99,lastY:0>o?.99:-.99,start:+new Date}),!T){var l=e===document.body,u=function(){for(var r=+new Date,a=0,i=0,c=0;c<M.length;c++){var s=M[c],d=r-s.start,f=d>=v.animationTime,h=f?1:d/v.animationTime;v.pulseAlgorithm&&(h=p(h));var m=s.x*h-s.lastX>>0,w=s.y*h-s.lastY>>0;a+=m,i+=w,s.lastX+=m,s.lastY+=w,f&&(M.splice(c,1),c--)}l?window.scrollBy(a,i):(a&&(e.scrollLeft+=a),i&&(e.scrollTop+=i)),t||o||(M=[]),M.length?E(u,e,n/v.frameRate+1):T=!1};E(u,e,0),T=!0}}function n(e){x||t();var n=e.target,r=l(n);if(!r||e.defaultPrevented||s(w,"embed")||s(n,"embed")&&/\.pdf/i.test(n.src))return!0;var a=e.wheelDeltaX||0,i=e.wheelDeltaY||0;return a||i||(i=e.wheelDelta||0),!v.touchpadSupport&&f(i)?!0:(Math.abs(a)>1.2&&(a*=v.stepSize/120),Math.abs(i)>1.2&&(i*=v.stepSize/120),o(r,-a,-i),void e.preventDefault())}function r(e){var t=e.target,n=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==H.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||n)return!0;if(s(t,"button")&&e.keyCode===H.spacebar)return!0;var r,a=0,i=0,u=l(w),c=u.clientHeight;switch(u==document.body&&(c=window.innerHeight),e.keyCode){case H.up:i=-v.arrowScroll;break;case H.down:i=v.arrowScroll;break;case H.spacebar:r=e.shiftKey?1:-1,i=-r*c*.9;break;case H.pageup:i=.9*-c;break;case H.pagedown:i=.9*c;break;case H.home:i=-u.scrollTop;break;case H.end:var d=u.scrollHeight-u.scrollTop-c;i=d>0?d+10:0;break;case H.left:a=-v.arrowScroll;break;case H.right:a=v.arrowScroll;break;default:return!0}o(u,a,i),e.preventDefault()}function a(e){w=e.target}function i(e,t){for(var o=e.length;o--;)z[N(e[o])]=t;return t}function l(e){var t=[],o=S.scrollHeight;do{var n=z[N(e)];if(n)return i(t,n);if(t.push(e),o===e.scrollHeight){if(!y||S.clientHeight+10<o)return i(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return i(t,e)}while(e=e.parentNode)}function u(e,t,o){window.addEventListener(e,t,o||!1)}function c(e,t,o){window.removeEventListener(e,t,o||!1)}function s(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function d(e,t){e=e>0?1:-1,t=t>0?1:-1,(k.x!==e||k.y!==t)&&(k.x=e,k.y=t,M=[],C=0)}function f(e){if(e){e=Math.abs(e),D.push(e),D.shift(),clearTimeout(A);var t=D[0]==D[1]&&D[1]==D[2],o=h(D[0],120)&&h(D[1],120)&&h(D[2],120);return!(t||o)}}function h(e,t){return Math.floor(e/t)==e/t}function m(e){var t,o,n;return e*=v.pulseScale,1>e?t=e-(1-Math.exp(-e)):(o=Math.exp(-1),e-=1,n=1-Math.exp(-e),t=o+n*(1-o)),t*v.pulseNormalize}function p(e){return e>=1?1:0>=e?0:(1==v.pulseNormalize&&(v.pulseNormalize/=m(1)),m(e))}var w,g={frameRate:150,animationTime:800,stepSize:120,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},v=g,b=!1,y=!1,k={x:0,y:0},x=!1,S=document.documentElement,D=[120,120,120],H={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},v=g,M=[],T=!1,C=+new Date,z={};setInterval(function(){z={}},1e4);var A,N=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),E=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)}}(),K=/chrome/i.test(window.navigator.userAgent),L="onmousewheel"in document;L&&K&&(u("mousedown",a),u("mousewheel",n),u("load",t))}();