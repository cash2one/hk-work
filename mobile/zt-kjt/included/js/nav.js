var xm = (function() {
    bindClick = function(els, mask) {
        if (!els || !els.length) {
            return;
        }
        var isMobile = "ontouchstart" in window;
        for (var i = 0, ci; ci = els[i]; i++) {
            ci.addEventListener("click", evtFn, false);
        }

        function evtFn(evt, ci) {
            ci = this;
            for (var j = 0, cj; cj = els[j]; j++) {
                if (cj != ci) {
                    console.log(cj);
                    cj.classList.remove("on");
                }
            }
            if (ci == mask) {
                mask.classList.remove("on");
                return;
            }
            switch (evt.type) {
                case "click":
                    var on = ci.classList.toggle("on");
                    mask.classList[on ? "add" : "remove"]("on");
                    break;
            }
        }
        mask.addEventListener(isMobile ? "touchstart" : "click", evtFn, false);
    }
    return { "bindClick": bindClick };
})();




$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $(".head_piao").css({ "position": "fixed", "top": "80px", "z-index": "999", "background": "#fff" });
        } else {
            $(".head_piao").css({ "position": "static", "margin-left": "0px", "background": "#fff" });
        }
    });


})










xm.bindClick(document.getElementById("xm_ul").querySelectorAll("li>a"), document.getElementById("xm_masklayer"));



// 底部弹窗
var _fSwtHtm = '<div id="toopl" class="shadow"></div>' +
    '<div id="footTool" class="float_container cf">' +
    '<div class="title_talk">咨询平台：<a href="tel:02162169919">021-6216-9919</a><a href="tel:02162169919" style="display: block;width: 40px;margin-top: -52px;margin-left:15%;position: relative;"><img src="/include/Images/tel_03.jpg" style="max-width:100%"></a><a target="_self" href="javascript:void(0);" onclick="toolclose();" class="gb" style=""><img src="/include/Images/tel_05.jpg"></a></div>' +
    '<dl id="tools2" class="cf">' +
    '<dt><img id="doc1" src="/include/Images/tel_17.jpg"></dt>' +
    '<dd>' +
    '<div id="now1" class="time1"></div>' +
    '<a onclick="openZoosUrl();LR_HideInvite();return false;"  href="javascript:void(0)" target="_blank" style="text-decoration: none;"><div class="boxx"><img src="/include/Images/tel_14.jpg" alt="smile"> 您好，这里是曙康口腔，为您解答任何口腔健康问题。请问有什么能够帮您的？</div></a>' +
    '</dd>' +
    '</dl>' +
    '<div class="btn_cf">' +
    '<a onclick="openZoosUrl();LR_HideInvite();return false;"  href="javascript:void(0)"  target="_blank" class="btn_cf1">立即回复</a>' + '<a href="tel:4000250505" target="_blank" class="btn_cf2">电话咨询</a>' +
    '</div>' +
    '</div>';

document.write(_fSwtHtm);


/*获取当前时间*/
/*var now = new Date();
var hh = now.getHours();
var mm = now.getMinutes();
var ss = now.getSeconds();
var date1 = document.getElementById("now1");
var date2 = document.getElementById("now2");

function getDateWeek(obj) {
    if (obj < 10) return "0" + obj;
    else return obj;
}
date1.innerHTML = getDateWeek(hh) + ":" + getDateWeek(mm) + ":" + getDateWeek(ss);*/

var footTool = document.getElementById("footTool");
var toopl = document.getElementById("toopl");
var tools2 = document.getElementById("tools2");
setTimeout(toolshow, 10000);

var audio = document.getElementById('chatAudio');

function testAudio() {
    audio.play();
    audio.pause();
}

function toolshow() {
    $(".swtc").hide();
    footTool.className = "float_container db cf";
    toopl.style.display = "block";
    setTimeout(toolshow2, 0);
}

function toolshow2() {
    tools2.style.display = "block";
    setTimeout(toolshow3, 2000);
}

function toolshow3() {}

function toolclose() {
    footTool.className = "float_container";
    toopl.style.display = "none";
    tools2.style.display = "none";
    setTimeout(toolshow, 20000);
}