function addCss(fileName) {
var link = $("<link />",{
rel: "stylesheet",
type: "text/css",
href: fileName
})
$('head').append(link);
}
function addJs(fileName) {
var link = $("<script />",{
type: "text/javascript",
src: fileName
})
$('head').append(link);
}

function appendText() {
var txt3 = document.createElement("div");
txt3.innerHTML = '<div id="myModal" style="display: none;position: fixed;z-index: 1;padding-top: 100px;left: 0;top: 0;width: 100%;height: 100%;overflow: auto;background-color: rgba(0,0,0,0.4);" class="modal"><div style="background-color: #fefefe;margin: auto;padding: 20px;border: 1px solid #888;width: 80%;" class="modal-content"><span style="color: #aaa;float: right;font-size: 28px;font-weight: bold;cursor:pointer;" id="closemodal">&times;</span><span class="K3JSBVB-Q-i"><button onclick="minifyhtml()" class="closethis blogg-button blogg-primary">Minify HTML</button><button onclick="minifycss()" class="closethis blogg-button blogg-primary">Minify CSS</button><button onclick="maxifyhtml()" class="closethis blogg-button blogg-primary">Maxify HTML</button><button onclick="maxifycss()" class="closethis blogg-button blogg-primary">Maxify CSS</button><button onclick="typewriter()" class="closethis blogg-button blogg-primary">Start Typing</button><button onclick="makedownloadsection()" class="closethis blogg-button blogg-primary">Make Download Section</button><button onclick="decode()" class="closethis blogg-button blogg-primary">Decode HTML Entities</button><button onclick="encode()" class="closethis blogg-button blogg-primary">Encode HTML Entities</button><br /><br /><button onclick="youtubevideo()" class="closethis blogg-button blogg-primary">Youtube Video</button><button onclick="capWords()" class="closethis blogg-button blogg-primary">Capitalize</button></span></div></div>';
$("body").append(txt3);
$("#myModal").css("display", "block");
$("#closemodal, .closethis").click(function() {
$("#myModal").css("display", "none");
txt3.remove();
});
}
var aText = new Array(
'<h2>Download Dulhan</h2><br><div class="paling-jobo"><div class="bungkus-down"><div class="embuh"><div class="file-info">name</div><button onclick=\'generate("download-1", "btn-1", "download link", 10)\' class="btn" id="btn-1"><i class="fa fa-cloud-download" aria-hidden="true"></i> Download</button><a id="download-1" class="download" style="display:none"><i class="fa fa-cloud-download" aria-hidden="true"></i> Download Started<br/><small> ( If Not Click Me ) </small></a></div><div class="file-deskripsi"><span class="uploader"><i class="fa fa-file" aria-hidden="true"></i> File Size</span> <span class="file-size"> size </span></div></div><div class="catatan-sikil">Click the download button above and your download will be started in few ( 10 ) seconds. If your download does not start automatically then click <b><strong>Download Started Button</strong></b> Above to download it manually.</div></div><br/>'
);
var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 200000; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
sContents =  ' ';
iRow = Math.max(0, iIndex-iScrollAt);
var destination = document.getElementById("postingHtmlBox");

while ( iRow < iIndex ) {
sContents += aText[iRow++] + "\n";
}
destination.value = sContents + aText[iIndex].substring(0, iTextPos) + "|";
if ( iTextPos++ == iArrLength ) {
iTextPos = 0;
iIndex++;
if ( iIndex != aText.length ) {
iArrLength = aText[iIndex].length;
setTimeout("typewriter()", 500);
}
} else {
setTimeout("typewriter()", iSpeed);
}
}
function minifyhtml()
{
var text=document.getElementById("postingHtmlBox");
text.value = text.value.replace(/\<\!--\s*?[^\s?\[][\s\S]*?--\>/g,'').replace(/\>\s*\</g,'><');
}

function minifycss()
{
var text=document.getElementById("postingHtmlBox");
text.value = text.value.replace(/\/\*.*\*\/|\/\*[\s\S]*?\*\/|\n|\t|\v|\s{2,}/g,'').replace(/\s*\{\s*/g,'{').replace(/\s*\}\s*/g,'}').replace(/\s*\:\s*/g,':').replace(/\s*\;\s*/g,';').replace(/\s*\,\s*/g,',').replace(/\s*\~\s*/g,'~').replace(/\s*\>\s*/g,'>').replace(/\s*\+\s*/g,'+').replace(/\s*\!\s*/g,'!');
}


function maxifyhtml()
{
var text=document.getElementById("postingHtmlBox");
text.value = text.value.replace(/\>\</g,'>\n<');
}

function maxifycss()
{
var text=document.getElementById("postingHtmlBox");
text.value = text.value.replace(/\,/g,', ').replace(/\{/g,' {\n\t').replace(/\}/g,'}\n').replace(/\;/g,';\n\t');
}

function makelink()
{
var text=document.getElementById("postingHtmlBox").value;
var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
var text1=text.replace(exp, "<a target='_blank' href='$1'>$1</a>");
var exp2 =/(^|[^\/])(www\.[\S]+(\b|$))/gim;
document.getElementById("postingHtmlBox").value=text1.replace(exp2, '$1<a target="_blank" href="http://$2">$2</a>');
}
function encodeString(string){
return string .replace(/&?!nbsp;/g, "&amp;") .replace(/"/g, "&quot;") .replace(/'/g, "&apos;") .replace(/</g, "&lt;") .replace(/>/g, "&gt;") .replace(/¡/g, "&iexcl;") .replace(/¢/g, "&cent;") .replace(/£/g, "&pound;") .replace(/¤/g, "&curren;") .replace(/¥/g, "&yen;") .replace(/¦/g, "&brvbar;") .replace(/§/g, "&sect;") .replace(/¨/g, "&uml;") .replace(/©/g, "&copy;") .replace(/ª/g, "&ordf;") .replace(/«/g, "&laquo;") .replace(/¬/g, "&not;") .replace(/®/g, "&reg;") .replace(/¯/g, "&macr;") .replace(/°/g, "&deg;") .replace(/±/g, "&plusmn;") .replace(/²/g, "&sup2;") .replace(/³/g, "&sup3;") .replace(/´/g, "&acute;") .replace(/µ/g, "&micro;") .replace(/¶/g, "&para;") .replace(/·/g, "&middot;") .replace(/¸/g, "&cedil;") .replace(/¹/g, "&sup1;") .replace(/º/g, "&ordm;") .replace(/»/g, "&raquo;") .replace(/¼/g, "&frac14;") .replace(/½/g, "&frac12;") .replace(/¾/g, "&frac34;") .replace(/¿/g, "&iquest;") .replace(/×/g, "&times;") .replace(/÷/g, "&divide;") .replace(/À/g, "&Agrave;") .replace(/Á/g, "&Aacute;") .replace(/Â/g, "&Acirc;") .replace(/Ã/g, "&Atilde;") .replace(/Ä/g, "&Auml;") .replace(/Å/g, "&Aring;") .replace(/Æ/g, "&AElig;") .replace(/Ç/g, "&Ccedil;") .replace(/È/g, "&Egrave;") .replace(/É/g, "&Eacute;") .replace(/Ê/g, "&Ecirc;") .replace(/Ë/g, "&Euml;") .replace(/Ì/g, "&Igrave;") .replace(/Í/g, "&Iacute;") .replace(/Î/g, "&Icirc;") .replace(/Ï/g, "&Iuml;") .replace(/Ð/g, "&ETH;") .replace(/Ñ/g, "&Ntilde;") .replace(/Ò/g, "&Ograve;") .replace(/Ó/g, "&Oacute;") .replace(/Ô/g, "&Ocirc;") .replace(/Õ/g, "&Otilde;") .replace(/Ö/g, "&Ouml;") .replace(/Ø/g, "&Oslash;") .replace(/Ù/g, "&Ugrave;") .replace(/Ú/g, "&Uacute;") .replace(/Û/g, "&Ucirc;") .replace(/Ü/g, "&Uuml;") .replace(/Ý/g, "&Yacute;") .replace(/Þ/g, "&THORN;") .replace(/ß/g, "&szlig;") .replace(/à/g, "&agrave;") .replace(/á/g, "&aacute;") .replace(/â/g, "&acirc;") .replace(/ã/g, "&atilde;") .replace(/ä/g, "&auml;") .replace(/å/g, "&aring;") .replace(/æ/g, "&aelig;") .replace(/ç/g, "&ccedil;") .replace(/è/g, "&egrave;") .replace(/é/g, "&eacute;") .replace(/ê/g, "&ecirc;") .replace(/ë/g, "&euml;") .replace(/ì/g, "&igrave;") .replace(/í/g, "&iacute;") .replace(/î/g, "&icirc;") .replace(/ï/g, "&iuml;") .replace(/ð/g, "&eth;") .replace(/ñ/g, "&ntilde;") .replace(/ò/g, "&ograve;") .replace(/ó/g, "&oacute;") .replace(/ô/g, "&ocirc;") .replace(/õ/g, "&otilde;") .replace(/ö/g, "&ouml;") .replace(/ø/g, "&oslash;") .replace(/ù/g, "&ugrave;") .replace(/ú/g, "&uacute;") .replace(/û/g, "&ucirc;") .replace(/ü/g, "&uuml;") .replace(/ý/g, "&yacute;") .replace(/þ/g, "&thorn;") .replace(/ÿ/g, "&yuml;").replace(/ /g, "&nbsp;")
}
function encode(){
var stringtext = document.getElementById("postingHtmlBox").value;
document.getElementById("postingHtmlBox").value = encodeString(stringtext);
}

function decodeString(string) {
return string
.replace(/&nbsp;/g, " ").replace(/&quot;/g, "\"").replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&iexcl;/g, "¡").replace(/&cent;/g, "¢").replace(/&pound;/g, "£").replace(/&curren;/g, "¤").replace(/&yen;/g, "¥").replace(/&brvbar;/g, "¦").replace(/&sect;/g, "§").replace(/&uml;/g, "¨").replace(/&copy;/g, "©").replace(/&ordf;/g, "ª").replace(/&laquo;/g, "«").replace(/&not;/g, "¬").replace(/&reg;/g, "®").replace(/&macr;/g, "¯").replace(/&deg;/g, "°").replace(/&plusmn;/g, "±").replace(/&sup2;/g, "²").replace(/&sup3;/g, "³").replace(/&acute;/g, "´").replace(/&micro;/g, "µ").replace(/&para;/g, "¶").replace(/&middot;/g, "·").replace(/&cedil;/g, "¸").replace(/&sup1;/g, "¹").replace(/&ordm;/g, "º").replace(/&raquo;/g, "»").replace(/&frac14;/g, "¼").replace(/&frac12;/g, "½").replace(/&frac34;/g, "¾").replace(/&iquest;/g, "¿").replace(/&times;/g, "×").replace(/&divide;/g, "÷").replace(/&Agrave;/g, "À").replace(/&Aacute;/g, "Á").replace(/&Acirc;/g, "Â").replace(/&Atilde;/g, "Ã").replace(/&Auml;/g, "Ä").replace(/&Aring;/g, "Å").replace(/&AElig;/g, "Æ").replace(/&Ccedil;/g, "Ç").replace(/&Egrave;/g, "È").replace(/&Eacute;/g, "É").replace(/&Ecirc;/g, "Ê").replace(/&Euml;/g, "Ë").replace(/&Igrave;/g, "Ì").replace(/&Iacute;/g, "Í").replace(/&Icirc;/g, "Î").replace(/&Iuml;/g, "Ï").replace(/&ETH;/g, "Ð").replace(/&Ntilde;/g, "Ñ").replace(/&Ograve;/g, "Ò").replace(/&Oacute;/g, "Ó").replace(/&Ocirc;/g, "Ô").replace(/&Otilde;/g, "Õ").replace(/&Ouml;/g, "Ö").replace(/&Oslash;/g, "Ø").replace(/&Ugrave;/g, "Ù").replace(/&Uacute;/g, "Ú").replace(/&Ucirc;/g, "Û").replace(/&Uuml;/g, "Ü").replace(/&Yacute;/g, "Ý").replace(/&THORN;/g, "Þ").replace(/&szlig;/g, "ß").replace(/&agrave;/g, "à").replace(/&aacute;/g, "á").replace(/&acirc;/g, "â").replace(/&atilde;/g, "ã").replace(/&auml;/g, "ä").replace(/&aring;/g, "å").replace(/&aelig;/g, "æ").replace(/&ccedil;/g, "ç").replace(/&egrave;/g, "è").replace(/&eacute;/g, "é").replace(/&ecirc;/g, "ê").replace(/&euml;/g, "ë").replace(/&igrave;/g, "ì").replace(/&iacute;/g, "í").replace(/&icirc;/g, "î").replace(/&iuml;/g, "ï").replace(/&eth;/g, "ð").replace(/&ntilde;/g, "ñ").replace(/&ograve;/g, "ò").replace(/&oacute;/g, "ó").replace(/&ocirc;/g, "ô").replace(/&otilde;/g, "õ").replace(/&ouml;/g, "ö").replace(/&oslash;/g, "ø").replace(/&ugrave;/g, "ù").replace(/&uacute;/g, "ú").replace(/&ucirc;/g, "û").replace(/&uuml;/g, "ü").replace(/&yacute;/g, "ý").replace(/&thorn;/g, "þ").replace(/&yuml;/g, "ÿ").replace(/&amp;/g, "&")
}
function decode(){
var stringtext = document.getElementById("postingHtmlBox").value;
document.getElementById("postingHtmlBox").value = decodeString(stringtext);
}

function marktext()
{
var text=document.getElementById("postingHtmlBox").value;
var exp = /mark\[(.*?)\]/ig;
var text1=text.replace(exp, '<span class="mark">$1</span>');
document.getElementById("postingHtmlBox").value=text1;
}

function youtubevideo()
{
var text=document.getElementById("postingHtmlBox").value;
var exp = /video\[(https:\/\/www.youtube.com\/watch\?v=(.*?))\]/ig;
var text1=text.replace(exp, '<div class="separator" style="clear: both; text-align: center;"><iframe class="YOUTUBE-iframe-video" data-thumbnail-src="https://i.ytimg.com/vi/$2/maxresdefault.jpg" src="https://www.youtube.com/embed/$2?feature=player_embedded" frameborder="0" allowfullscreen></iframe></div><br />');
// usage ===  [videolink] eg = video[https://www.youtube.com/watch?v=y9w7CI3k9SU]
document.getElementById("postingHtmlBox").value=text1;
}

function makedownloadsection()
{
var posttitle = $(".titleField").val();
var text=document.getElementById("postingHtmlBox").value;
var exp = /download\[(.*?),(.*?),(.*?),(.*?),(.*?)\]/ig;
var text1=text.replace(exp, '<h2>Download ' + posttitle + '</h2><br><div class="paling-jobo"><div class="bungkus-down"><div class="embuh"><div class="file-info">$4</div><button onclick=\'generate("download-$1", "btn-$2", "$3", 10)\' class="btn" id="btn-$2"><i class="fa fa-cloud-download" aria-hidden="true"></i> Download</button><a id="download-$1" class="download" style="display:none"><i class="fa fa-cloud-download" aria-hidden="true"></i> Download Started<br/><small> ( If Not Click Me ) </small></a></div><div class="file-deskripsi"><span class="uploader"><i class="fa fa-file" aria-hidden="true"></i> File Size</span> <span class="file-size"> $5 </span></div></div><div class="catatan-sikil">Click the download button above and your download will be started in few ( 10 ) seconds. If your download does not start automatically then click <b><strong>Download Started Button</strong></b> Above to download it manually.</div></div><br/>');
// usage ===  download[download,btn,https://bit.ly/2CoT49X,Softwebtuts.exe,25 MB]
document.getElementById("postingHtmlBox").value=text1;
}

function makealert()
{
var text=document.getElementById("postingHtmlBox").value;
var exp = /alert\[(.*?),(.*?),(.*?)\]/ig;
var text1=text.replace(exp, '<div class="alert $1"><span class=\'alert-close\' onclick="this.parentElement.style.display=\'none\';">&times;</span><b>$2 : </b><br>$3</div><br/>');
// usage ===  alert[success-info-warning-success,heading,content]
document.getElementById("postingHtmlBox").value=text1;
}

function makebquote()
{
var text=document.getElementById("postingHtmlBox").value;
var exp = /blockquote\[(.*?),(.*?)\]/ig;
var text1=text.replace(exp, '<blockquote class="$1">$2</blockquote><br/>');
// usage ===  alert[success-info-warning-success,content]
document.getElementById("postingHtmlBox").value=text1;
}


function makeimage()
{
var posttitle = $(".titleField").val();
var text=document.getElementById("postingHtmlBox").value;
var exp = /<a (.*?)><img\s(.*?)src="http(\D+)(.*?)\/(.\d+)\/(.*?)(.png|.jpg|.gif|.webp)" (.*?)\/><\/a>/ig;
var text1=text.replace(exp, '<img alt="' + posttitle + '" title="' + posttitle + '" src="http$3$4/$5/$6$7"/></br>');
document.getElementById("postingHtmlBox").value=text1;
}

function makecode()
{
var text=document.getElementById("postingHtmlBox").value;
var exp = /code\[(.*?),(.*?)\]/ig;
var text1=text.replace(exp, '<pre><code class="language-$1">$2</code></pre>');
document.getElementById("postingHtmlBox").value=text1;
}
function makebutton()
{
var text=document.getElementById("postingHtmlBox").value;
var exp = /btn\[(.*?),(.*?)\]/ig;
var text1=text.replace(exp, '<a href="$1" target="_blank"><button class="btn">$2</button></a>');
document.getElementById("postingHtmlBox").value=text1;
}
function maketooltip()
{
var text=document.getElementById("postingHtmlBox").value;
var exp = /tooltip\[(.*?),(.*?)\]/ig;
var text1=text.replace(exp, '<span class="tooltiper" data-tooltip="$1">$2</span>');
document.getElementById("postingHtmlBox").value=text1;
}

function formatText(el,tagstart,tagend,tag) {
if (el.setSelectionRange)
{
el.value = el.value.substring(0,el.selectionStart) + tagstart + el.value.substring(el.selectionStart,el.selectionEnd) + tagend + el.value.substring(el.selectionEnd,el.value.length)
}
else
{
//Bloody IE specific code !!!! whihc results in undefined//
var selectedText = document.selection.createRange().text;
if (selectedText != "")
{
var newText = "<" + tag + ">" + selectedText + "</" + tag + ">";
document.selection.createRange().text = newText;
}
}
}
function keywords(){
var keywordsf = $(".titleField").val();
var finalw = keywordsf.replace(/(\||-|\(|\)|\'|\,|\.|\!|\@|\#|\$|\%|\^|\&|\*|\+|\=|\+|\:|\;|\"|\'|\?|\/|\`|\~|\_|\\)/g, '');
var words = finalw.toLowerCase().split(" ");
$(".K3JSBVB-dc-a").click();
$(".K3JSBVB-T-d, textarea.K3JSBVB-U-c").val(words + ",bollywood," + keywordsf);
}


function capWords(){
var str = document.getElementById('postingHtmlBox').value;
words = str.split("\n");
for (i=0 ; i < words.length ; i++){
testwd = words[i];
firLet = testwd.substr(0,1); //lop off first letter
rest = testwd.substr(1, testwd.length -1)
words[i] = firLet.toUpperCase() + rest
}
document.getElementById('postingHtmlBox').value = words.join("\n");
}


function removeWhitespaceUsingReplaceMethod() {
var text=document.getElementById("postingHtmlBox").value;
var wsr = text.replace(/^\s+|\s+$/g, '');
document.getElementById("postingHtmlBox").value = wsr;
}

function countChar(val, limit) {
var len = val.value.length;
if (len >= limit) {
val.value = val.value.substring(0, limit);
} else {
$('#charNum').text(limit - len);
}
};

function allfunction()
{
makeimage();
marktext();
keywords();
makedownloadsection();
youtubevideo();
makecode();
makebutton()
maketooltip();
makealert();
makebquote();
removeWhitespaceUsingReplaceMethod();
capWords();
}

setTimeout(function(){
addCss("https://use.fontawesome.com/releases/v5.6.3/css/all.css");
$(".fas").css("font-size", "15px");
$("#BLOCKQUOTE").after('<span id="charNum">500</span>');
var starttag = '<div class="goog-inline-block goog-toolbar-button" title="Type" role="button" id="TYPE" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="user-select: none;">';
var closetag = "</div></div></div>";
$("#BLOCKQUOTE").after(starttag + '<span onclick="appendText()"><i class="fas fa-caret-square-down"></i></span>' + closetag);
var linkstart = '<div class="goog-inline-block goog-toolbar-button" title="Make Link" role="button" id="MAKELINK" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="user-select: none;">';
$("#BLOCKQUOTE").after(linkstart + '<span onclick="makelink()"><i class="fas fa-link"></i></span>' + closetag);
var makeimage = '<div class="goog-inline-block goog-toolbar-button" title="Make Image" role="button" id="MAKEIMAGE" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="user-select: none;">';
$("#BLOCKQUOTE").after(makeimage + '<span onclick="makeimage()"><i class="fas fa-image"></i></span>' + closetag);
var h2 = '<div class="goog-inline-block goog-toolbar-button" title="Heading 2" role="button" id="Heading2" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="user-select: none;">';
var strong = '<div class="goog-inline-block goog-toolbar-button" title="Strong" role="button" id="Strong" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="user-select: none;">';
var list = '<div class="goog-inline-block goog-toolbar-button" title="List" role="button" id="List" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="user-select: none;">';
$("#BLOCKQUOTE").after(strong + '<span id="wrapstrong"><i class="fas fa-heading"></i></span>' + closetag);
$("#wrapstrong").attr("onclick", "formatText(document.getElementById('postingHtmlBox'),'<strong>','</strong>')");
$("#BLOCKQUOTE").after(h2 + '<span id="wrapheading2"><i class="fas fa-heading"></i></span>' + closetag);
$("#wrapheading2").attr("onclick", "formatText(document.getElementById('postingHtmlBox'),'<h2>','</h2>')");
$("#BLOCKQUOTE").after(list + '<span id="wraplist"><i class="fas fa-heading"></i></span>' + closetag);
$("#wraplist").attr("onclick", "formatText(document.getElementById('postingHtmlBox'),'<li>','</li>')");
var keywordswrap = '<div class="goog-inline-block goog-toolbar-button" title="Keywords" role="button" id="KEYWORDS" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="user-select: none;">';
$("#BLOCKQUOTE").after(keywordswrap + '<span onclick="keywords()" id="keywords"><i class="fas fa-tags"></i></span>' + closetag);
var allfunctionwrap = '<div class="goog-inline-block goog-toolbar-button" title="All Functions" role="button" id="ALLFUNNCTIONS" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="user-select: none;">';
$("#BLOCKQUOTE").after(allfunctionwrap + '<span onclick="allfunction()" id="allfunctions"><i class="fas fa-cog"></i></span>' + closetag);
var speakwrap = '<div class="goog-inline-block goog-toolbar-button" title="Speak" role="button" id="Speak" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="user-select: none;">';
$("#BLOCKQUOTE").after(speakwrap + '<span onclick="webSpeech.listen()" id="Speak"><i class="fas fa-microphone-alt"></i></span>' + closetag);
}, 5000);
var webSpeech = function() {
var recognition = new webkitSpeechRecognition();
var pixelAmount = 500;
var commands = {
//'scroll down': animator.scrollDown,
//'scroll up': animator.scrollUp
};

function voiceStart(event) {
$('h1.input').html("Speech Input: Listening (" + count + ")");
$('h1.input').toggleClass("recording", true);
//document.getElementById('constructor').style.display = 'block';
}


function voiceEnd(event) {
var html = "<a href='#'>Speech Input</a>";
var jHtml = $(html).click(function(event){
event.preventDefault();
sayInput();
});

$('h1.input').html(jHtml);

count = 0;
$('h1.input').toggleClass("recording", false);

//document.getElementById('constructor').style.display = 'none';
}

var count = 0;
function detect(event) {
count++;



$(".titleField").val("listening ... " + count );
//console.log(event);

for (var i = event.resultIndex; i < event.results.length; i++) {
if (event.results[i].isFinal) {

var command = event.results[i][0].transcript.replace(/^\s+|\s+$/g, '');

$(".titleField").val(command);

if ( command == "clear" ) {

// clear the text
$('textarea#postingHtmlBox').val("");
}
else if ( command == "say it" ) {
sayInput();
}
else
{
// add text
$('textarea#postingHtmlBox').val($('textarea#postingHtmlBox').val() + " " + command);
}

// void command ended
voiceEnd(event);
/*
if (command.match(/scroll to [0-9]+ percent/g) != null) {
animator.scrollToPercent(command.split(' ')[2]);
}
else if(commands[command] != undefined) {
commands[command](pixelAmount);
}
*/
} else {
voiceStart();
}
}
}

return {
listen: function() {
recognition.continuous = true;
recognition.interimResults = true;
//recognition.lang = "en-UK";
recognition.onresult = detect;
recognition.start();
}
};
}();
setTimeout(function(){
$(".titleField").attr("onkeyup", "countChar(this, 60)");
$(".K3JSBVB-T-d").attr("onkeyup", "countChar(this, 200)");
$(".K3JSBVB-U-c").attr("onkeyup", "countChar(this, 160)");
$("textarea#postingHtmlBox").focus();
}, 5000);
