function addCss(fileName) {
    var link = $("<link />", {
        rel: "stylesheet",
        type: "text/css",
        href: fileName
    })
    $('head').append(link);
}
function addJs(fileName) {
    var link = $("<script />", {
        type: "text/javascript",
        src: fileName
    })
    $('head').append(link);
}

function appendText() {
    var txt3 = document.createElement("div");
    txt3.innerHTML = '<div id="myModal" style="display: none;position: fixed;z-index: 1;padding-top: 100px;left: 0;top: 0;width: 100%;height: 100%;overflow: auto;background-color: rgba(0,0,0,0.4);" class="modal"><div style="background-color: #fefefe;margin: auto;padding: 20px;border: 1px solid #888;width: 80%;" class="modal-content"><span style="color: #aaa;float: right;font-size: 28px;font-weight: bold;cursor:pointer;" id="closemodal">&times;</span><span class="K3JSBVB-Q-i"><button onclick="minifyhtml()" class="closethis blogg-button blogg-primary">Minify HTML</button><button onclick="minifycss()" class="closethis blogg-button blogg-primary">Minify CSS</button><button onclick="maxifyhtml()" class="closethis blogg-button blogg-primary">Maxify HTML</button><button onclick="maxifycss()" class="closethis blogg-button blogg-primary">Maxify CSS</button><button onclick="typewriter()" class="closethis blogg-button blogg-primary">Start Typing</button><button onclick="makedownloadsection()" class="closethis blogg-button blogg-primary">Make Download Section</button><button onclick="decode()" class="closethis blogg-button blogg-primary">Decode HTML Entities</button><button onclick="encode()" class="closethis blogg-button blogg-primary">Encode HTML Entities</button><br /><br /><button onclick="youtubevideo()" class="closethis blogg-button blogg-primary">Youtube Video</button><button onclick="capWords()" class="closethis blogg-button blogg-primary">Capitalize</button><button onclick="removefirstwhitespace()" class="closethis blogg-button blogg-primary">Remove White Spaces</button><button onclick="removeextralines()" class="closethis blogg-button blogg-primary">Remove Extra Lines</button><button onclick="removecommentedtext()" class="closethis blogg-button blogg-primary">Remove Comments</button><button onclick="keywordsf()" class="closethis blogg-button blogg-primary">Make Post Tags & Description</button><button onclick="removeallattr()" class="closethis blogg-button blogg-primary">Remove All Attributes</button><br /><br /><button onclick="removestyleattr()" class="closethis blogg-button blogg-primary">Remove Style Attributes</button><button onclick="myattributes()" class="closethis blogg-button blogg-primary">Costume Attributes</button></span></div></div>';
    $("body").append(txt3);
    $("#myModal").css("display", "block");
    $("#closemodal, .closethis").click(function () {
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
function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("postingHtmlBox");
    while (iRow < iIndex) {
        sContents += aText[iRow++] + "\n";
    }
    destination.value = sContents + aText[iIndex].substring(0, iTextPos) + "|";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}
function minifyhtml() {
    var text = document.getElementById("postingHtmlBox");
    text.value = text.value.replace(/\<\!--\s*?[^\s?\[][\s\S]*?--\>/g, '').replace(/\>\s*\</g, '><');
}
function minifycss() {
    var text = document.getElementById("postingHtmlBox");
    text.value = text.value.replace(/\/\*.*\*\/|\/\*[\s\S]*?\*\/|\n|\t|\v|\s{2,}/g, '').replace(/\s*\{\s*/g, '{').replace(/\s*\}\s*/g, '}').replace(/\s*\:\s*/g, ':').replace(/\s*\;\s*/g, ';').replace(/\s*\,\s*/g, ',').replace(/\s*\~\s*/g, '~').replace(/\s*\>\s*/g, '>').replace(/\s*\+\s*/g, '+').replace(/\s*\!\s*/g, '!');
}
function maxifyhtml() {
    var text = document.getElementById("postingHtmlBox");
    text.value = text.value.replace(/\>\</g, '>\n<');
}
function maxifycss() {
    var text = document.getElementById("postingHtmlBox");
    text.value = text.value.replace(/\,/g, ', ').replace(/\{/g, ' {\n\t').replace(/\}/g, '}\n').replace(/\;/g, ';\n\t');
}
function makelink() {
    var text = document.getElementById("postingHtmlBox").value;
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    var text1 = text.replace(exp, "<a target='_blank' href='$1'>$1</a>");
    var exp2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    document.getElementById("postingHtmlBox").value = text1.replace(exp2, '$1<a target="_blank" href="http://$2">$2</a>');
}
function encodeString(string) {
    return string.replace(/&?!nbsp;/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/�/g, "&iexcl;").replace(/�/g, "&cent;").replace(/�/g, "&pound;").replace(/�/g, "&curren;").replace(/�/g, "&yen;").replace(/�/g, "&brvbar;").replace(/�/g, "&sect;").replace(/�/g, "&uml;").replace(/�/g, "&copy;").replace(/�/g, "&ordf;").replace(/�/g, "&laquo;").replace(/�/g, "&not;").replace(/�/g, "&reg;").replace(/�/g, "&macr;").replace(/�/g, "&deg;").replace(/�/g, "&plusmn;").replace(/�/g, "&sup2;").replace(/�/g, "&sup3;").replace(/�/g, "&acute;").replace(/�/g, "&micro;").replace(/�/g, "&para;").replace(/�/g, "&middot;").replace(/�/g, "&cedil;").replace(/�/g, "&sup1;").replace(/�/g, "&ordm;").replace(/�/g, "&raquo;").replace(/�/g, "&frac14;").replace(/�/g, "&frac12;").replace(/�/g, "&frac34;").replace(/�/g, "&iquest;").replace(/�/g, "&times;").replace(/�/g, "&divide;").replace(/�/g, "&Agrave;").replace(/�/g, "&Aacute;").replace(/�/g, "&Acirc;").replace(/�/g, "&Atilde;").replace(/�/g, "&Auml;").replace(/�/g, "&Aring;").replace(/�/g, "&AElig;").replace(/�/g, "&Ccedil;").replace(/�/g, "&Egrave;").replace(/�/g, "&Eacute;").replace(/�/g, "&Ecirc;").replace(/�/g, "&Euml;").replace(/�/g, "&Igrave;").replace(/�/g, "&Iacute;").replace(/�/g, "&Icirc;").replace(/�/g, "&Iuml;").replace(/�/g, "&ETH;").replace(/�/g, "&Ntilde;").replace(/�/g, "&Ograve;").replace(/�/g, "&Oacute;").replace(/�/g, "&Ocirc;").replace(/�/g, "&Otilde;").replace(/�/g, "&Ouml;").replace(/�/g, "&Oslash;").replace(/�/g, "&Ugrave;").replace(/�/g, "&Uacute;").replace(/�/g, "&Ucirc;").replace(/�/g, "&Uuml;").replace(/�/g, "&Yacute;").replace(/�/g, "&THORN;").replace(/�/g, "&szlig;").replace(/�/g, "&agrave;").replace(/�/g, "&aacute;").replace(/�/g, "&acirc;").replace(/�/g, "&atilde;").replace(/�/g, "&auml;").replace(/�/g, "&aring;").replace(/�/g, "&aelig;").replace(/�/g, "&ccedil;").replace(/�/g, "&egrave;").replace(/�/g, "&eacute;").replace(/�/g, "&ecirc;").replace(/�/g, "&euml;").replace(/�/g, "&igrave;").replace(/�/g, "&iacute;").replace(/�/g, "&icirc;").replace(/�/g, "&iuml;").replace(/�/g, "&eth;").replace(/�/g, "&ntilde;").replace(/�/g, "&ograve;").replace(/�/g, "&oacute;").replace(/�/g, "&ocirc;").replace(/�/g, "&otilde;").replace(/�/g, "&ouml;").replace(/�/g, "&oslash;").replace(/�/g, "&ugrave;").replace(/�/g, "&uacute;").replace(/�/g, "&ucirc;").replace(/�/g, "&uuml;").replace(/�/g, "&yacute;").replace(/�/g, "&thorn;").replace(/�/g, "&yuml;").replace(/ /g, " ")
}
function encode() {
    var stringtext = document.getElementById("postingHtmlBox").value;
    document.getElementById("postingHtmlBox").value = encodeString(stringtext);
}
function decodeString(string) {
    return string
        .replace(/&nbsp;/g, " ").replace(/&quot;/g, "\"").replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&iexcl;/g, "�").replace(/&cent;/g, "�").replace(/&pound;/g, "�").replace(/&curren;/g, "�").replace(/&yen;/g, "�").replace(/&brvbar;/g, "�").replace(/&sect;/g, "�").replace(/&uml;/g, "�").replace(/&copy;/g, "�").replace(/&ordf;/g, "�").replace(/&laquo;/g, "�").replace(/&not;/g, "�").replace(/&reg;/g, "�").replace(/&macr;/g, "�").replace(/&deg;/g, "�").replace(/&plusmn;/g, "�").replace(/&sup2;/g, "�").replace(/&sup3;/g, "�").replace(/&acute;/g, "�").replace(/&micro;/g, "�").replace(/&para;/g, "�").replace(/&middot;/g, "�").replace(/&cedil;/g, "�").replace(/&sup1;/g, "�").replace(/&ordm;/g, "�").replace(/&raquo;/g, "�").replace(/&frac14;/g, "�").replace(/&frac12;/g, "�").replace(/&frac34;/g, "�").replace(/&iquest;/g, "�").replace(/&times;/g, "�").replace(/&divide;/g, "�").replace(/&Agrave;/g, "�").replace(/&Aacute;/g, "�").replace(/&Acirc;/g, "�").replace(/&Atilde;/g, "�").replace(/&Auml;/g, "�").replace(/&Aring;/g, "�").replace(/&AElig;/g, "�").replace(/&Ccedil;/g, "�").replace(/&Egrave;/g, "�").replace(/&Eacute;/g, "�").replace(/&Ecirc;/g, "�").replace(/&Euml;/g, "�").replace(/&Igrave;/g, "�").replace(/&Iacute;/g, "�").replace(/&Icirc;/g, "�").replace(/&Iuml;/g, "�").replace(/&ETH;/g, "�").replace(/&Ntilde;/g, "�").replace(/&Ograve;/g, "�").replace(/&Oacute;/g, "�").replace(/&Ocirc;/g, "�").replace(/&Otilde;/g, "�").replace(/&Ouml;/g, "�").replace(/&Oslash;/g, "�").replace(/&Ugrave;/g, "�").replace(/&Uacute;/g, "�").replace(/&Ucirc;/g, "�").replace(/&Uuml;/g, "�").replace(/&Yacute;/g, "�").replace(/&THORN;/g, "�").replace(/&szlig;/g, "�").replace(/&agrave;/g, "�").replace(/&aacute;/g, "�").replace(/&acirc;/g, "�").replace(/&atilde;/g, "�").replace(/&auml;/g, "�").replace(/&aring;/g, "�").replace(/&aelig;/g, "�").replace(/&ccedil;/g, "�").replace(/&egrave;/g, "�").replace(/&eacute;/g, "�").replace(/&ecirc;/g, "�").replace(/&euml;/g, "�").replace(/&igrave;/g, "�").replace(/&iacute;/g, "�").replace(/&icirc;/g, "�").replace(/&iuml;/g, "�").replace(/&eth;/g, "�").replace(/&ntilde;/g, "�").replace(/&ograve;/g, "�").replace(/&oacute;/g, "�").replace(/&ocirc;/g, "�").replace(/&otilde;/g, "�").replace(/&ouml;/g, "�").replace(/&oslash;/g, "�").replace(/&ugrave;/g, "�").replace(/&uacute;/g, "�").replace(/&ucirc;/g, "�").replace(/&uuml;/g, "�").replace(/&yacute;/g, "�").replace(/&thorn;/g, "�").replace(/&yuml;/g, "�").replace(/&amp;/g, "&")
}
function decode() {
    var stringtext = document.getElementById("postingHtmlBox").value;
    document.getElementById("postingHtmlBox").value = decodeString(stringtext);
}
function marktext() {
    var text = document.getElementById("postingHtmlBox").value;
    var exp = /mark\[(.*?)\]/ig;
    var text1 = text.replace(exp, '<span class="mark">$1</span>');
    document.getElementById("postingHtmlBox").value = text1;
}
function removeextrabrtags() {
    var text = document.getElementById("postingHtmlBox").value;
    var exp = /(<br\s*\/?>){2,}/ig;
    var text1 = text.replace(exp, '<br>');
    document.getElementById("postingHtmlBox").value = text1;
}
function youtubevideo() {
    var text = document.getElementById("postingHtmlBox").value;
    var exp = /video\[.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?].*)\]/ig;
    var text1 = text.replace(exp, '<div class="wrapper"><div class="youtube" data-embed="$7"><div class="play-button"></div></div></div><br />');
    // usage ===  [videolink] eg = video[https://www.youtube.com/watch?v=y9w7CI3k9SU]
    document.getElementById("postingHtmlBox").value = text1;
}
function makedownloadsection() {
    var posttitle = $(".titleField").val();
    var text = document.getElementById("postingHtmlBox").value;
    var exp = /download\[(.*?),(.*?),(.*?),(.*?),(.*?)\]/ig;
    var text1 = text.replace(exp, '<h2>Download ' + posttitle + '</h2><br><div class="paling-jobo"><div class="bungkus-down"><div class="embuh"><div class="file-info">$4</div><button onclick=\'generate("download-$1", "btn-$2", "https://www.raufgraphics.com/p/download.html?download_link=$3&file_name=$4&file_size=$5", 5)\' class="btn" id="btn-$2"><i class="fa fa-cloud-download" aria-hidden="true"></i> Download</button><a id="download-$1" class="download" style="display:none"><i class="fa fa-cloud-download" aria-hidden="true"></i> Download Started<br/><small> ( If Not Click Me ) </small></a></div><div class="file-deskripsi"><span class="uploader"><i class="fa fa-file" aria-hidden="true"></i> File Size</span> <span class="file-size"> $5 </span></div></div><div class="catatan-sikil">Click the download button above and your download will be started in few ( 10 ) seconds. If your download does not start automatically then click <b><strong>Download Started Button</strong></b> Above to download it manually.</div></div><br/>');
    // usage ===  download[download,btn,https://bit.ly/2CoT49X,Softwebtuts.exe,25 MB]
    document.getElementById("postingHtmlBox").value = text1;
}

function makealert() {
    var text = document.getElementById("postingHtmlBox").value;
    var exp = /alert\[(.*?),(.*?),(.*?)\]/ig;
    var text1 = text.replace(exp, '<div class="alert $1"><span class=\'alert-close\' onclick="this.parentElement.style.display=\'none\';">&times;</span><b>$2 : </b><br>$3</div><br/>');
    // usage ===  alert[success-info-warning-success,heading,content]
    document.getElementById("postingHtmlBox").value = text1;
}
function makebquote() {
    var text = document.getElementById("postingHtmlBox").value;
    var exp = /blockquote\[(.*?),(.*?)\]/ig;
    var text1 = text.replace(exp, '<blockquote class="$1">$2</blockquote><br/>');
    // usage ===  alert[success-info-warning-success,content]
    document.getElementById("postingHtmlBox").value = text1;
}
function makeimage() {
    var posttitle = $(".titleField").val();
    var text = document.getElementById("postingHtmlBox").value;
    var exp = /<a (.*?)><img\s(.*?)src="http(\D+)(.*?)\/(.\d+)\/(.*?)(.png|.jpg|.gif|.webp)" (.*?)\/><\/a>/ig;
    var text1 = text.replace(exp, '<img alt="' + posttitle + '" title="' + posttitle + '" src="http$3$4/$5/$6$7"/></br>');
    document.getElementById("postingHtmlBox").value = text1;
}
function makecode() {
    var text = document.getElementById("postingHtmlBox").value;
    var exp = /code\[(.*?),(.*?)\]/ig;
    var text1 = text.replace(exp, '<pre><code class="language-$1">$2</code></pre>');
    document.getElementById("postingHtmlBox").value = text1;
}
function makebutton() {
    var text = document.getElementById("postingHtmlBox").value;
    var exp = /btn\[(.*?),(.*?)\]/ig;
    var text1 = text.replace(exp, '<a href="$1" target="_blank"><button class="btn">$2</button></a>');
    document.getElementById("postingHtmlBox").value = text1;
}

function myattributes() {
    var text = document.getElementById("postingHtmlBox").value;
    var classname = /<(\w+)\.(\w+)\s/ig;
	var id = /<(\w+)\#(\w+)\s/ig;
	var classid = /<(\w+)\.(\w+)\#(\w+)\s/ig;
	var idclass = /<(\w+)\#(\w+)\.(\w+)\s/ig;
    var text1 = text.replace(classname, '<$1 class="$2" ');
	 var text2 = text1.replace(id, '<$1 id="$2" ');
	  var text3 = text2.replace(classid, '<$1 class="$2" id="$3" ');
	   var text4 = text3.replace(idclass, '<$1 id="$2" class="$3" ');
    document.getElementById("postingHtmlBox").value = text4;
}

function maketooltip() {
    var text = document.getElementById("postingHtmlBox").value;
    var exp = /tooltip\[(.*?),(.*?)\]/ig;
    var text1 = text.replace(exp, '<span class="tooltiper" data-tooltip="$1">$2</span>');
    document.getElementById("postingHtmlBox").value = text1;
}
function formatText(el, tagstart, tagend, tag) {
    if (el.setSelectionRange) {
        el.value = el.value.substring(0, el.selectionStart) + tagstart + el.value.substring(el.selectionStart, el.selectionEnd) + tagend + el.value.substring(el.selectionEnd, el.value.length)
    } else {
        //Bloody IE specific code !!!! whihc results in undefined//
        var selectedText = document.selection.createRange().text;
        if (selectedText != "") {
            var newText = "<" + tag + ">" + selectedText + "</" + tag + ">";
            document.selection.createRange().text = newText;
        }
    }
}
function removecommentedtext() {
     var text = document.getElementById("postingHtmlBox").value;
    var exp = /(\/\*[\w\'\s\r\n\*]*\*\/)|(\/\/[\w\s\']*)|(\<![\-\-\s\w\>\/]*\>)/g;
    var text1 = text.replace(exp, '');
    document.getElementById("postingHtmlBox").value = text1;
}
function keywords() {
    var keywordsf = $(".titleField").val();
   /* var finalw = keywordsf.replace(/(\||-|\(|\)|\'|\,|\.|\!|\@|\#|\$|\%|\^|\&|\*|\+|\=|\+|\:|\;|\"|\'|\?|\/|\`|\~|\_|\\)/g, '');
    var words = finalw.toLowerCase().split(" ");
    $(".K3JSBVB-dc-a").click();
    $(".K3JSBVB-T-d, textarea.K3JSBVB-U-c").val(words + "," + keywordsf);*/
	
	var sentence = keywordsf,
    common = 'the,it is,we all,a,an,by,to,you,me,he,she,they,we,how,it,are,to,for,of,i,a,about,an,and,are,as,at,be,by,com,de,en,for,from,how,in,is,it,la,of,on,or,that,the,this,to,was,what,when,where,who,will,with,und,the,www,remove,add,before,after,top,bottom,left,right,sticky,fixed,code,from,form,input,deesign,edit,free,pc,computer,';

function getUncommon(sentence, common) {
    var wordArr = sentence.match(/\w+/g),
        commonObj = {},
        uncommonArr = [],
        word, i;
    
    common = common.split(',');
    for ( i = 0; i < common.length; i++ ) {
        commonObj[ common[i].trim() ] = true;
    }
    
    for ( i = 0; i < wordArr.length; i++ ) {
        word = wordArr[i].trim().toLowerCase();
        if ( !commonObj[word] ) {
            uncommonArr.push(word);
        }
    }
    
    return uncommonArr;
}

$(".K3JSBVB-T-d, textarea.K3JSBVB-U-c").val( getUncommon(sentence, common) );
}
function removefirstwhitespace() {
	var text = document.getElementById("postingHtmlBox").value;
    var text1 = text.replace(/^\s+|\s+$/gm, '');
    document.getElementById("postingHtmlBox").value = text1;
}

function removeallattr() {
	var text = document.getElementById("postingHtmlBox").value;
    var text1 = text.replace(/\s(id|class|style|srcset|rel|width|height)="[^"]+"/gm, '<$1>');
    document.getElementById("postingHtmlBox").value = text1;
}

function removestyleattr() {
	var text = document.getElementById("postingHtmlBox").value;
    var text1 = text.replace(/\s(style)="[^"]+"/gm, '');
    document.getElementById("postingHtmlBox").value = text1;
}

function removeextralines() {
	var text = document.getElementById("postingHtmlBox").value;
    var text1 = text.replace(/(\n\s*?\n)\s*\n/g, '\n\n');
    document.getElementById("postingHtmlBox").value = text1;
}

function capWords() {
    var str = document.getElementById('postingHtmlBox').value;
    words = str.split("\n");
    for (i = 0; i < words.length; i++) {
        testwd = words[i];
        firLet = testwd.substr(0, 1); //lop off first letter
        rest = testwd.substr(1, testwd.length - 1)
        words[i] = firLet.toUpperCase() + rest
    }
    document.getElementById('postingHtmlBox').value = words.join("\n");
}
function countChar(val, limit) {
    var len = val.value.length;
    if (len >= limit) {
        val.value = val.value.substring(0, limit);
    } else {
        $('#charNum').text(limit - len);
    }
};


function encodecode() {
  // obtain the object reference for the textarea>
  var txtarea = document.getElementById("postingHtmlBox");
  // obtain the index of the first selected character
  var start = txtarea.selectionStart;
  // obtain the index of the last selected character
  var finish = txtarea.selectionEnd;
  //obtain all Text
  var allText = txtarea.value;

  // obtain the selected text
  var sel = allText.substring(start, finish);
  //append te text;
  var newText =
    allText.substring(0, start) +
    "<pre><code>" + encodeString(sel) + "</code></pre>" + allText.substring(finish, allText.length);
  txtarea.value = newText;
}


function decodecode() {
  // obtain the object reference for the textarea>
  var txtarea = document.getElementById("postingHtmlBox");
  // obtain the index of the first selected character
  var start = txtarea.selectionStart;
  // obtain the index of the last selected character
  var finish = txtarea.selectionEnd;
  //obtain all Text
  var allText = txtarea.value;

  // obtain the selected text
  var sel = allText.substring(start, finish);
  //append te text;
  var newText =
    allText.substring(0, start) +
    "" + decodeString(sel) + "" + allText.substring(finish, allText.length);
  txtarea.value = newText;
}


function allfunction() {
	removefirstwhitespace();
    makeimage();
    marktext();
    keywords();
    makedownloadsection();
    youtubevideo();
	youtubevideo();
    makecode();
    makebutton();
    maketooltip();
    makealert();
    makebquote();
    capWords();
	removeextralines();
	removeextrabrtags();
	removecommentedtext();
}
var webSpeech = function () {
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
        var jHtml = $(html).click(function (event) {
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
        $("#statusbar").val("listening ... " + count);
        //console.log(event);
        for (var i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                var command = event.results[i][0].transcript.replace(/^\s+|\s+$/g, '');
                $("#statusbar").val(command);
                if (command == "clear") {
                    // clear the text
                    $('textarea#postingHtmlBox').val("");
                } else if (command == "say it") {
                    sayInput();
                } else {
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
        listen: function () {
            recognition.continuous = true;
            recognition.interimResults = true;
            //recognition.lang = "en-UK";
            recognition.onresult = detect;
            recognition.start();
        }
    };
}();

jQuery.fn.extend({
insertAtCaret: function(myValue){
  return this.each(function(i) {
    if (document.selection) {
      //For browsers like Internet Explorer
      this.focus();
      var sel = document.selection.createRange();
      sel.text = myValue;
      this.focus();
    }
    else if (this.selectionStart || this.selectionStart == '0') {
      //For browsers like Firefox and Webkit based
      var startPos = this.selectionStart;
      var endPos = this.selectionEnd;
      var scrollTop = this.scrollTop;
      this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
      this.focus();
      this.selectionStart = startPos + myValue.length;
      this.selectionEnd = startPos + myValue.length;
      this.scrollTop = scrollTop;
    } else {
      this.value += myValue;
      this.focus();
    }
  });
}
});
setTimeout(function () {
if ( $("#wrapmark").length != '1' ) {
	$('head').append('<style type="text/css">.editor{margin-top:30px;overflow: visible;}.tooltiper { position: relative; display: inline-block; color: tomato; perspective:600px; transform-style: preserve-3d; }  .tooltiper .tooltip { min-width: 100px; max-width:350px; position: absolute; font-size: 0.7rem; text-align: left; background: tomato; color: white; padding: 5px 10px; border-radius: 5px; display: block; top: 0;left: 0; line-height: 1.4em; transform: rotateX(90deg) translateZ(0px); opacity: 0; transition: transform 0.4s cubic-bezier(0.64, 0.57, 0.67, 1.53), opacity 0.1s ease-out 0.1s; } .tooltiper:hover .tooltip { transform: rotateX(0) translateZ(20px); opacity: 1; transition: transform 0.4s cubic-bezier(0.64, 0.57, 0.67, 1.53), opacity 0.1s ease-out; } .tooltiper .tooltip:after { content:""; position: absolute; left: 20px; bottom: -7px; height: 0; border-style: solid; border-width: 7px 7px 0 7px; border-color: tomato transparent transparent transparent; }</style>');
    addCss("https://use.fontawesome.com/releases/v5.6.3/css/all.css");
    $(".fas").css("font-size", "15px");
    $("#BLOCKQUOTE").after('<span id="charNum">500</span>');
    var starttag = '<div class="goog-inline-block goog-toolbar-button" role="button" id="buttonadded" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="user-select: none;">';
    var closetag = "</div></div></div>";
	$("#BLOCKQUOTE").after(starttag + '<span class="tooltiper" data-tooltip="More Tools" onclick="appendText()"><i class="fas fa-caret-square-down"></i></span>' + closetag);
    $("#BLOCKQUOTE").after(starttag + '<span class="tooltiper" data-tooltip="Make links" onclick="makelink()"><i class="fas fa-link"></i></span>' + closetag);
    $("#BLOCKQUOTE").after(starttag + '<span class="tooltiper" data-tooltip="Set Images" onclick="makeimage()"><i class="fas fa-image"></i></span>' + closetag);
    $("#BLOCKQUOTE").after(starttag + '<span class="tooltiper" data-tooltip="Strong" id="wrapstrong"><i class="fas fa-heading"></i></span>' + closetag);
    $("#wrapstrong").attr("onclick", "formatText(document.getElementById('postingHtmlBox'),'<strong>','</strong>')");
    $("#BLOCKQUOTE").after(starttag + '<span class="tooltiper" data-tooltip="H2" id="wrapheading2"><i class="fas fa-heading"></i></span>' + closetag);
    $("#wrapheading2").attr("onclick", "formatText(document.getElementById('postingHtmlBox'),'<h2>','</h2>')");
    $("#BLOCKQUOTE").after(starttag + '<span class="tooltiper" data-tooltip="List" id="wraplist"><i class="fas fa-list-alt"></i></span>' + closetag);
    $("#wraplist").attr("onclick", "formatText(document.getElementById('postingHtmlBox'),'<li>','</li>')");
    $("#BLOCKQUOTE").after(starttag + '<span class="tooltiper" data-tooltip="Run All Functions" onclick="allfunction()" id="allfunctions"><i class="fas fa-cog"></i></span>' + closetag);
    $("#BLOCKQUOTE").after(starttag + '<span class="tooltiper" data-tooltip="Speech Recognition" onclick="webSpeech.listen()" id="Speak"><i class="fas fa-microphone-alt"></i></span>' + closetag);
	$("#BLOCKQUOTE").after(starttag + '<span class="tooltiper" data-tooltip="Highlight Text" id="wrapmark"><i class="fas fa-highlighter"></i></span>' + closetag);
    $("#wrapmark").attr("onclick", "formatText(document.getElementById('postingHtmlBox'),'<mark>','</mark>')");
	$("#BLOCKQUOTE").after(starttag + '<span class="tooltiper" data-tooltip="Decode code"onclick="decodecode()" id="wrapcode"><i class="fas fa-code"></i></span>' + closetag);
	$("#BLOCKQUOTE").after(starttag + '<span class="tooltiper" data-tooltip="Wrap and encode code"onclick="encodecode()" id="wrapcode"><i class="fas fa-code"></i></span>' + closetag);
	$(".optionHolder").prepend('<textarea id="statusbar" readonly style="width: 95%;height: 30%;border: none;resize: none;outline: none;"></textarea>');
	
    $(".titleField").attr("onkeyup", "countChar(this, 60)");
    $(".K3JSBVB-T-d").attr("onkeyup", "countChar(this, 200)");
    $(".K3JSBVB-U-c").attr("onkeyup", "countChar(this, 160)");
    $("textarea#postingHtmlBox").focus();
	document.addEventListener("keydown", function() {
	if (event.ctrlKey && event.keyCode == 13) {
		$('#postingHtmlBox').insertAtCaret('<br>');
	}},false);

$(document).ready(function(){
  toolTiper();
});


function toolTiper() {
  $('.tooltiper').each(function(){
    var eLcontent = $(this).attr('data-tooltip'),
        eLtop = $(this).position().top,
        eLleft = $(this).position().left;
    $(this).append('<span class="tooltip">'+eLcontent+'</span>');
    var eLtw = $(this).find('.tooltip').width(),
        eLth = $(this).find('.tooltip').height();
    $(this).find('.tooltip').css({
      "top": (0 - eLth - 20)+'px',
      "left":'-20px'
    });
  });
}
}
}, 6000);