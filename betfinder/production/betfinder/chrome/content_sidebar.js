if("undefined"==typeof J){var J={};document.URL&&H.w({action:"isSidebarSite",url:document.URL},function(a){if(1==a){H.w({action:"isAlertsSuppressed"},function(a){a&&(a=document.createElement("script"),a.id="sidebarContentScript",a.text="alert=function(){};  window['alert'] = function(msg) { //console.log('Alert:', msg); };\nwindow['confirm'] = function(msg) { //console.log('Confirm:', msg); return true;  };\nwindow['prompt'] = function(obj, defval) { //console.log('Prompt:', obj, defval); return null; };",document.body.appendChild(a))});try{try{if(0==window.locationbar.visible)return}catch(c){}(null==window.opener||-1!=document.URL.indexOf("https://localhost"))&&(J=new function(){this.ha=this.A=!1,this.q=null,this.Ld=function(a){var c;if(!document.getElementsByTagName("html")||!document.getElementsByTagName("html")[0])throw"HTML tag not found on the page";if(c=document.getElementsByTagName("html")[0],null!=document.body.getAttribute("sideBarSpaceAdded")){if(document.querySelector("body"))if(null!=J.Qb&&null!=J.Lb&&null!=J.hc)c.style.position=J.Qb,c.style.left=J.Lb,c.style.width=J.hc;else{var b=parseFloat(getComputedStyle(c).left);c.style.left=b-parseFloat(a)+"px",c.style.position="static",b=parseFloat(getComputedStyle(c).width),c.style.width=b+parseFloat(a)+"px"}document.body.removeAttribute("sideBarSpaceAdded")}},this.lc=function(a){var c;if(!document.getElementsByTagName("html")||!document.getElementsByTagName("html")[0])throw"HTML tag not found on the page";if(c=document.getElementsByTagName("html")[0],!document.body.getAttribute("sideBarSpaceAdded")){if(document.querySelector("body")){J.Qb=c.style.position,J.Lb=c.style.left,J.hc=c.style.width,"static"===getComputedStyle(c).position&&(c.style.position="relative");var b=getComputedStyle(c).left,b="auto"===b?0:parseFloat(getComputedStyle(c).left);c.style.left=b+parseFloat(a)+"px",b=parseFloat(getComputedStyle(c).width),c.style.width=b-parseFloat(a)+"px"}document.body.setAttribute("sideBarSpaceAdded",a)}},this.resize=function(){1==document.body.hasAttribute("sideBarSpaceAdded")&&document.body.getAttribute("sideBarSpaceAdded")},this.jd=function(a){var c=a||window.event;-1==[48,49,50,51,52,53,54,55,56,57,8,9,37,39,46].indexOf(c.keyCode||c.which)&&!1===a.ctrlKey&&a.target&&"INPUT"===a.target.tagName&&(c.returnValue=!1,c.preventDefault&&c.preventDefault())},this.kd=function(a){13==a.keyCode&&a.target.blur()},this.hb=function(a){var c=null;if(a.target.tagName&&("button"==a.target.tagName.toLowerCase()?c=a.target:"i"==a.target.tagName.toLowerCase()&&a.target.parentNode&&a.target.parentNode.tagName&&"button"==a.target.parentNode.tagName.toLowerCase()&&(c=a.target.parentNode)),a.target.hasAttribute("stepup")||a.target.hasAttribute("stepdown")){var b=null;0<=a.target.className.indexOf("spinner-")?b=a.target.parentNode.parentNode.querySelector("input"):0<=a.target.className.indexOf("fa-chevron-")&&(b=a.target.parentNode.parentNode.parentNode.querySelector("input")),b&&0==b.hasAttribute("disabled")&&(c=b,a.target.hasAttribute("stepup")?c.direction="up":a.target.hasAttribute("stepdown")&&(c.direction="down"))}c&&J.Rb(c)},this.ud=function(a){a.target.tagName&&"input"==a.target.tagName.toLowerCase()&&J.Rb(a.target)},this.Rb=function(a){if(a.getAttribute("action")){for(var c={},b=a.attributes,f=0;f<b.length;f++)c[b[f].name]=b[f].value;c.direction=a.direction,null!=a.checked&&(c.checked=a.checked),null!=a.value&&(null!=c.value&&(c.oldvalue=c.value),c.value=a.value),setTimeout(function(){H.w(c)},1)}},this.ga=function(){0==J.A?(J.A=!0,H.w({action:"getSideBarContent"},function(a){try{var c=J.q.contentDocument,b=function(){try{if(a.content){var b="",g=0;try{b=c.activeElement.id,g=c.activeElement.selectionStart,selEnd=c.activeElement.selectionEnd}catch(f){b=""}if(J.hd){var h=c.getElementById("arbvestorSidebar");h&&(h.innerHTML=a.content)}else c.body.innerHTML=a.content,H.cd(),H.Sd();if(b){var v=c.getElementById(b);v&&(v.focus(),v.setSelectionRange&&v.setSelectionRange(g,selEnd))}}if(a.contentscript){var k=c.getElementById("sidebarContentScript");k&&k.parentNode.removeChild(k);var p=c.createElement("script");p.id="sidebarContentScript",p.text=a.contentscript,c.body.appendChild(p)}J.Dd(a.tour),J.Ca(),J.Qa()}catch(n){J.Ca(!0),J.Qa()}};if(""!=c.head.innerHTML)b();else{c.head.innerHTML=a.head;for(var f=c.head.getElementsByTagName("script"),h=[];0<f.length;){for(var k=c.createElement("script"),p=0;p<f[0].attributes.length;p++){var n=f[0].attributes.item(p);k.setAttribute(n.nodeName,n.value)}k.text=f[0].innerHTML,h.push(k),c.head.removeChild(f[0])}if(0<h.length){var v=function(a,d){d+=1,a.length>d?(a[d].addEventListener("load",function(){v(a,d)},!1),c.head.appendChild(a[d])):b()};h[0].addEventListener("load",function(){v(h,0)},!1),c.head.appendChild(h[0])}else b()}var f=c,A=c.getElementById("arbvestorSidebar");A&&(f=A),(null==f.ib||0==f.ib)&&(f.ib=!0,f.addEventListener("keypress",J.jd,!1),f.addEventListener("keyup",J.kd,!1),f.addEventListener("click",J.hb,!1),f.addEventListener("change",J.ud,!1),f.addEventListener("mouseup",function(a){"undefined"!=typeof spinnerTimeout&&(clearTimeout(spinnerTimeout),spinnerTimeout=void 0),"undefined"!=typeof spinnerInterval&&"undefined"!=typeof spinnerTarget&&(clearInterval(spinnerInterval),a.target&&a.target.Yd==spinnerInterval||(a={},a.target=spinnerTarget,J.hb(a)),spinnerInterval=spinnerTarget=void 0)},!1),f.addEventListener("mousedown",function(a){if(a.target.hasAttribute("stepup")||a.target.hasAttribute("stepdown")){var c=null;if((c="i"==a.target.tagName.toLowerCase()?a.target.parentNode.parentNode.parentNode.querySelector("input"):a.target.parentNode.parentNode.querySelector("input"))&&!c.hasAttribute("disabled")){var b=document.getElementById("betFinder");b&&(b=b.contentDocument),b||(b=document),spinnerTarget=a.target,spinnerTimeout=setTimeout(function(){spinnerInterval=setInterval(function(){b.contains(a.target)||clearInterval(spinnerInterval);var d=parseFloat(c.value);if(!isNaN(d)){var e=0;c.hasAttribute("rounding")&&(e=parseFloat(c.getAttribute("rounding"))),(isNaN(e)||0===e)&&(e=1),c.value=a.target.hasAttribute("stepup")?d+e:d-e}},60),a.target.Yd=spinnerInterval},800),a.target.oe=spinnerTimeout}}},!1))}catch(y){J.Ca(!0)}})):J.ha=!0},this.Ca=function(a){null==a&&(a=!1),J.A=!1,1==J.ha&&(J.ha=!1,J.ga(),a=!1),1==a&&H.w({action:"isSideBarVisible"},function(a){return 1==a.visible&&J.ga(),!0})},this.aa=function(a){return"contentUpdated"==a.action&&J.ga(),"checkVisibility"==a.action&&J.nb(),"sidebarOff"==a.action&&J.Fb(a.width),!0},this.Fd=function(){(null==document.Mb||0==document.Mb)&&(document.Mb=!0,H.addListener(J.aa,"sidebar"))},this.Wd=function(a){var c=document.getElementById("container");if(document.getElementById("arbvestorSidebar")&&c)this.hd=!0,this.q={},this.q.contentDocument=document,this.ga();else if(document&&document.body&&0==document.body.hasAttribute("sideBarSpaceAdded")){this.lc(a),this.q=document.createElement(document.querySelector("body")?"iframe":"frame"),this.q.name="betFinder",this.q.id="betFinder";var b=function(){this.q.removeEventListener("load",b),this.ga()}.bind(this);this.q.addEventListener("load",b,!1),document.querySelector("body")?document.body.appendChild(this.q):document.body.insertBefore(this.q,document.body.firstChild),this.fb("resource://betfinder/sidebar.css","betFinderCSS"),L.Vd(a)}},this.fb=function(a,c){var b=document,f=H.getURL(a),h=b.createElement("link");c&&(h.id=c),h.setAttribute("rel","stylesheet"),h.setAttribute("type","text/css"),h.setAttribute("href",f),b.head.appendChild(h)},this.Fb=function(a){var c=document.createElement("script");if(c.text="if(typeof(hopscotch) != 'undefined' && hopscotch.getCurrTour()) { var betFinderOnEndDisabled=true; hopscotch.endTour();\n",J.ka)for(var b=0;b<J.ka.length;b++)c.text+="hopscotch.getCalloutManager().removeCallout('"+J.ka[b]+"');\n";if(c.text+="betFinderOnEndDisabled=false}\n",document.body.appendChild(c),document.body.removeChild(c),document.body&&document.body.hasAttribute("sideBarSpaceAdded")){if(J.Ld(a),0<document.querySelectorAll("#betFinder").length)for(c=document.querySelectorAll("#betFinder"),b=0;b<c.length;b++)document.body.removeChild(c[b]);if(0<document.querySelectorAll("#betFinderCSS").length)for(c=document.querySelectorAll("#betFinderCSS"),b=0;b<c.length;b++)document.head.removeChild(c[b]);L.bd(a)}},this.Qa=function(){var a=document.getElementById("betFinderPreLoad");a&&a.parentNode.removeChild(a)},this.nb=function(){H.w({action:"isSideBarVisible"},function(a){return 1==a.visible?(J.Wd(a.width),J.A=!1,J.ha=!1):(J.Fb(a.width),J.A=!1,J.ha=!1,J.Qa()),!0})},this.Dd=function(a){if(a)if(a.$){var c=document.getElementById("betFinder"),b=function(a){var c=document,b=document.getElementById("betFinder");for(b&&b.contentDocument&&(c=b.contentDocument),a=[].concat(a),b=0;b<a.length;b++)if("string"==typeof a[b]){var d=null,d=c.getElementById(a[b]);if(!d&&c.querySelector&&(d=c.querySelector(a[b])),d)return d}return null},f=a.tourObj;f.onClose=["close"],f.onEnd=["end"],f.onNext=["next"],f.onPrev=["prev"];for(var h=getComputedStyle(document.getElementsByTagName("html")[0]).left,k=0;k<f.steps.length;k++){var p=b(f.steps[k].target);!p&&(p=f.steps[k].onNotFound)&&(f.steps[k]=JSON.parse(JSON.stringify(f[p])),p=b(f.steps[k].target)),p=f.steps[k],p.zindex=1e7,c&&"auto"!=h&&(p.xOffset=(p.xOffset?p.xOffset:0)-400)}for(J.ka=[],k=0;k<f.callouts.length;k++)b=f.callouts[k],b.noHideIfNotVisible||J.ka.push(b.id),b.zindex=10000001,c&&"auto"!=h&&(b.xOffset=(b.xOffset?b.xOffset:0)-400);var n=function(){var c=document.createElement("script");c.text="var betFinderTour = JSON.parse('"+JSON.stringify(a).replace(/'/g,"\\'")+"');\n",c.text+="for(var i=0;i<betFinderTour.tourObj.steps.length; i++) {\n",c.text+="betFinderTour.tourObj.steps[i].target = hopscotch.findTarget(betFinderTour.tourObj.steps[i].target);\n",c.text+="}\n",c.text+="var betFinderTourId = hopscotch.getCurrTour()?hopscotch.getCurrTour().id:'null'\n",c.text+="var betFinderTourStep = hopscotch.getCurrStepNum();\n",c.text+="var betFinderOnEndDisabled=true; hopscotch.noFade=true;\n",c.text+="hopscotch.endTour(); hopscotch.startTour(betFinderTour.tourObj, betFinderTour.step);\n",c.text+="betFinderOnEndDisabled=false; hopscotch.noFade=false;",c.text+="for(var i=0;i<betFinderTour.tourObj.callouts.length; i++) {\n",c.text+="var callout = betFinderTour.tourObj.callouts[i];\n",c.text+="callout.target = hopscotch.findTarget(callout.target);\n",c.text+="var calloutManager = hopscotch.getCalloutManager();\n",c.text+="if(callout.target && callout.hideTour){ var betFinderOnEndDisabled=true; hopscotch.endTour(); betFinderOnEndDisabled=false;}\n",c.text+="if(callout.target && !calloutManager.getCallout(callout.id)){ calloutManager.createCallout(callout); }\n",c.text+="if(!callout.target && calloutManager.getCallout(callout.id)){ calloutManager.removeCallout(callout.id); }\n",c.text+="}\n",document.body.appendChild(c),document.body.removeChild(c)}.bind(this);document.getElementById("hopscotchScript")?n():(c=H.getURL("resource://betfinder/hopscotch-0.1.2.js"),f=document.createElement("script"),f.id="hopscotchScript",f.text="",f.setAttribute("type","text/javascript"),f.setAttribute("src",c),f.addEventListener("load",function(){var a=document.createElement("script");a.text="hopscotch.registerHelper('start', function(e) { window.postMessage('hopscotch:start', document.documentURI); });\n",a.text+="hopscotch.registerHelper('close', function(e) { window.postMessage('hopscotch:close', document.documentURI); });\n",a.text+="hopscotch.registerHelper('end', function(e) { if(!betFinderOnEndDisabled) window.postMessage('hopscotch:end', document.documentURI); });\n",a.text+="hopscotch.registerHelper('next', function(e) { window.postMessage('hopscotch:next', document.documentURI); });\n",a.text+="hopscotch.registerHelper('prev', function(e) { window.postMessage('hopscotch:prev', document.documentURI); });\n",a.text+="hopscotch.findTarget = function(target){var doc = document; var betfinderFrame = document.getElementById(\"betFinder\"); if (betfinderFrame && betfinderFrame.contentDocument) doc = betfinderFrame.contentDocument; var targetArray = [].concat(target); for (var i = 0; i < targetArray.length; i++){if (typeof targetArray[i] === 'string') {var queriedTarget = null; var queriedTarget = doc.getElementById(targetArray[i]); if (!queriedTarget && doc.querySelector) {queriedTarget = doc.querySelector(targetArray[i]);}if (queriedTarget) return queriedTarget;}}return null;};\n",a.text+="\n",document.body.appendChild(a),document.body.removeChild(a),n()},!1),document.head.appendChild(f),document.defaultView.addEventListener("message",function(a){0==document.documentURI.indexOf(a.origin)&&a.data&&a.data.indexOf&&0==a.data.indexOf("hopscotch:")&&H.w({action:"hopscotch",data:a.data.replace("hopscotch:","")})}))}else c=document.createElement("script"),c.text="if(typeof(hopscotch) != 'undefined' && hopscotch.getCurrTour()) { hopscotch.endTour(); }\n",document.body.appendChild(c),document.body.removeChild(c)}},J.fb("resource://betfinder/css/hopscotch-0.1.2.css","hopscotchCSS"),J.Fd(),J.nb())}catch(b){}}});var L=new function(){this.Vd=function(a){if(0<=document.domain.indexOf("msb.188bet.com")){var c=document.querySelector(".Header");c&&(c.style.width="calc(100% - "+a+")"),(c=document.querySelector(".QuickMenu_Container"))&&(c.style.left=a)}if(0<=document.domain.indexOf("betdaq")&&(c=document.body.getAttribute("onresize"))&&0<=c.indexOf("sizeIframe();")){if(null==document.getElementById("newResize")){var b=document.createElement("script");b.id="newResize",b.text="function sizeIframe2()           {               var innerframe = document.getElementById('GBE_FrameSet');               var styleStr = 'height: ' + window.innerHeight + 'px; width: ' + (window.innerWidth - WIDTH) + 'px;';               innerframe.setAttribute('style', styleStr);               html = document.getElementsByTagName('html')[0];               html.style.width = window.innerWidth - WIDTH + 'px'           }".toString().replace(/(WIDTH)/g,a.replace("px","")),document.body.appendChild(b)}c=c.replace("sizeIframe();","sizeIframe2();"),document.body.setAttribute("onresize",c),document.body.setAttribute("onload","sizeIframe2(); centreIdentityXDialogOnPage();"),c=document.createElement("script"),c.text="sizeIframe2();",document.body.appendChild(c),document.body.removeChild(c)}if(0<=document.domain.indexOf("bwin")&&((c=document.getElementById("screen-l"))&&(L.Ua=c,document.head.removeChild(c)),(c=document.getElementById("screen-xl"))&&(L.Va=c,document.head.removeChild(c))),0<=document.domain.indexOf("betvictor")){var d=document,c=H.getURL("resource://betfinder/sidebar.css"),e=new XMLHttpRequest;e.open("GET",c,!0),e.addEventListener("load",function(){var a=e.responseText.replace(/\r|\n|\t/g,"").match("{(.*)}");if(a){var c=d.getElementById("betFinder");c&&c.setAttribute("style",a[1])}},!1),e.overrideMimeType("text/plain");try{e.send()}catch(g){}}0<=document.domain.indexOf("smarkets")&&((c=document.querySelector("header"))&&c.setAttribute("style","left: "+a),c=function(){if(document.querySelector("#betFinder"))for(var c=document.querySelectorAll("nav > div"),b=parseFloat(a),d=0,e=0;e<c.length;e++)c[e].style.left=b+d+"px",d+=parseFloat(c[e].offsetWidth)},(b=document.querySelector("nav"))&&!b.hasAttribute("eventListenerAdded")&&(b.setAttribute("eventListenerAdded",!0),b.addEventListener("DOMNodeInserted",c)),c()),0<=document.domain.indexOf("intertops")&&(document.body.setAttribute("rows","*"),document.body.setAttribute("cols","400,*"),document.getElementById("dummyFrame")&&document.body.removeChild(document.getElementById("dummyFrame"))),0<=document.domain.indexOf("5dimes")&&(html=document.getElementsByTagName("html"),0<html.length&&html[0].removeAttribute("style"),(c=document.getElementById("PageElt"))&&c.setAttribute("style","left: 400px"),c&&c.setAttribute("style","left: 400px"),document.body.setAttribute("onresize",'setTimeout(function(){document.getElementsByTagName("html")[0].removeAttribute("style");},50)')),0<=document.domain.indexOf("tipico.com")&&((c=document.querySelector(".appheader"))&&(c.style.left=a),(c=document.querySelector(".appfooter"))&&(c.style.left=a)),0<=document.domain.indexOf("mnbt.jetbull.com")&&(c=document.getElementById("headerFixed"),b=document.querySelector("#accountPanel,#registryFixed"),c&&(c.style.width="calc(100% - "+a+")"),b&&(b.style.left=a,b.style.width="calc(100% - "+a+")")),0<=document.domain.indexOf("youwin.com")&&((c=document.querySelector("#header"))&&(c.style.left=a,c.style.width="calc(100% - "+a+")"),document.querySelector("#bottomBar"),bottomBar&&(bottomBar.style.left=a,bottomBar.style.width="calc(100% - "+a+")"))},this.bd=function(a){if(0<=document.domain.indexOf("msb.188bet.com")){var c=document.querySelector(".Header");c&&(c.style.width=""),(c=document.querySelector(".QuickMenu_Container"))&&(c.style.left="")}if(0<=document.domain.indexOf("betdaq")&&(c=document.body.getAttribute("onresize"))&&0<=c.indexOf("sizeIframe2()")&&(c=c.replace("sizeIframe2();","sizeIframe();"),document.body.setAttribute("onresize",c),document.body.setAttribute("onload","sizeIframe(); centreIdentityXDialogOnPage();"),c=document.createElement("script"),c.text="sizeIframe();",document.body.appendChild(c),document.body.removeChild(c)),0<=document.domain.indexOf("bwin")&&(L.Ua&&(document.head.appendChild(L.Ua),L.Ua=null),L.Va&&(document.head.appendChild(L.Va),L.Va=null)),0<=document.domain.indexOf("smarkets")){(c=document.querySelector("header"))&&c.hasAttribute("style")&&c.removeAttribute("style");for(var c=document.querySelectorAll("nav > div"),b=0;b<c.length;b++)c[b].style.left=c[b].offsetLeft-parseFloat(a)+"px"}0<=document.domain.indexOf("intertops")&&(a=document.createElement("frame"),a.id="dummyFrame",document.body.insertBefore(a,document.body.firstChild),document.body.setAttribute("cols","0,*")),0<=document.domain.indexOf("5dimes")&&((a=document.getElementById("PageElt"))&&a.removeAttribute("style"),document.body.removeAttribute("onresize")),0<=document.domain.indexOf("tipico.com")&&((a=document.querySelector(".appheader"))&&(a.style.left="0px"),(a=document.querySelector(".appfooter"))&&(a.style.left="0px")),0<=document.domain.indexOf("mnbt.jetbull.com")&&(a=document.getElementById("headerFixed"),c=document.querySelector("#accountPanel,#registryFixed"),a&&(a.style.width=""),c&&(c.style.left="0px",c.style.width="")),0<=document.domain.indexOf("youwin.com")&&((c=document.querySelector("#header"))&&(c.style.left="",c.style.width=""),document.querySelector("#bottomBar"),bottomBar&&(bottomBar.style.left="",bottomBar.style.width=""))}};if(document&&document.domain&&0<=document.domain.indexOf("www.intertops.eu")&&null==document.querySelector("body")&&(document.body.setAttribute("rows","*"),document.body.setAttribute("cols","0,*"),null==document.getElementById("newFrame"))){var M=document.createElement("frame");M.id="dummyFrame",document.body.insertBefore(M,document.body.firstChild);var N=document.querySelector("frame[name='ad']");document.querySelector("frame[name='navmenu']"),document.querySelector("frame[name='section']");var O=document.body.querySelector("frameset"),P=document.createElement("frameset");P.id="newFrame",document.body.removeChild(N),document.body.removeChild(O),P.appendChild(N),P.appendChild(O),P.setAttribute("rows","80,*"),document.body.appendChild(P)}}