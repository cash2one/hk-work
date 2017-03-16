/*Author:ZhangYin JavaScriptUpdated:(Mon March 07, 2016@09:40)*/
$(function() {
    var box1W = parseInt($('#box1-wrapper').css('width'));
    if (box1W <= 1260) {
        box1W = box1W / 3;
    } else {
        box1W = (box1W - 260) / 3;
    }
    $('#box1-wrapper li img').width(box1W);
    var box1ImgH = $('#box1-img').css('height');
    $('#box1-wrapper div.list').each(function() {
        var _ = $(this);
        _.css({ 'width': box1W, 'height': box1ImgH });
    });
    $('#film-inner').html($('#film-inner').html() + $('#film-inner').html()).css('width', 2 * $('#film-inner').width());
    var roll2 = {
        ini: function(id, id2) {
            this.con = document.getElementById(id);
            this.wrap = document.getElementById(id2);
            this.con.onmouseenter = function() { clearTimeout(roll2.clock); }
            this.con.onmouseleave = function() { roll2.main(); }
            this.main();
        },
        temp: 0,
        con: 0,
        distance: 0,
        wrap: 0,
        main: function() {
            this.temp = this.wrap.children.item(0);
            this.distance = this.temp.clientWidth;
            (function() {
                if (roll2.con.scrollLeft < roll2.distance) {
                    roll2.con.scrollLeft++;
                    roll2.clock = setTimeout(arguments.callee, 10);
                } else {
                    roll2.con.scrollLeft -= this.distance;
                    roll2.wrap.removeChild(roll2.temp);
                    roll2.wrap.appendChild(roll2.temp);
                    roll2.main();
                }
            })()
        }
    }
    roll2.ini('film', 'film-inner');
});

function ZoomPic() {
    this.initialize.apply(this, arguments)
}
ZoomPic.prototype = {
    initialize: function(id) {
        var _ = this,
            w = this.wrap = document.getElementById(id),
            aLi = this.aLi = w.getElementsByTagName("li"),
            o = this.options = [
                { width: 180, height: 255, top: 127, left: -180, zIndex: 1, backgroundImage: 'none' },
                { width: 180, height: 255, top: 127, left: -180, zIndex: 1, backgroundImage: 'none' },
                { width: 252, height: 357, top: 76, left: 0, zIndex: 2, backgroundImage: 'none' },
                { width: 360, height: 510, top: 0, left: 252, zIndex: 3, backgroundImage: 'url(images/bg_box4_expert.png)' },
                { width: 252, height: 357, top: 76, left: 610, zIndex: 2, backgroundImage: 'none' },
                { width: 180, height: 255, top: 127, left: 864, zIndex: 1, backgroundImage: 'none' },
                { width: 180, height: 255, top: 127, left: 864, zIndex: 1, backgroundImage: 'none' }
            ];

    },

    move: function(step) {
        var i, v, a = this.aLi;
        for (var k = 5; k--;) {
            v = a[k];
            i = parseInt(v.getAttribute('index')) + step;
            i < 0 && (i += 5);
            i > 4 && (i -= 5);
            v.setAttribute('index', '');
        }
    }
};

function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, false)[name];
    }
}

function startMove(obj, json, fnEnd) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var bStop = true;
        for (var attr in json) {
            var cur = 0;

            if (attr == 'opacity') {
                cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                cur = parseInt(getStyle(obj, attr));
            }

            var speed = (json[attr] - cur) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (cur != json[attr]) bStop = false;

            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                obj.style.opacity = (cur + speed) / 100;
            } else {
                obj.style[attr] = cur + speed + 'px';
            }
        }

        if (bStop) {
            clearInterval(obj.timer);
            if (fnEnd) fnEnd();
        }

    }, 30)

}


window.onload = function() {
    var oPic = document.getElementById('focus-box');
    var oPrev = document.getElementById('box4-prev');
    var oNext = document.getElementById('box4-next');
    var oClock;
    var aLi = oPic.getElementsByTagName('li');
    var name = document.getElementById('box4-wrap').getElementsByTagName('div');
    var arr = [];

    for (var i = 0; i < aLi.length; i++) {
        var oImg = aLi[i].getElementsByTagName('img')[0];
        arr.push([parseInt(getStyle(aLi[i], 'left')), parseInt(getStyle(aLi[i], 'top')),
            getStyle(aLi[i], 'zIndex'), oImg.width, parseFloat(getStyle(aLi[i], 'opacity') * 100)
        ]);
    }

    oClock = setInterval(function() {
        oNext.click();
    }, 3000);
    oPic.onmouseover = function() {
        clearInterval(oClock);
    };
    oPic.onmouseout = function() {
        oClock = setInterval(function() {
            oNext.click();
        }, 3000);
    };
    oPrev.onclick = function() {
        arr.push(arr[0]);
        arr.shift();
        for (var i = 0; i < aLi.length; i++) {
            var oImg = aLi[i].getElementsByTagName('img')[0];

            aLi[i].style.zIndex = arr[i][2];
            if (arr[i][2] == 3) {
                aLi[i].style.backgroundImage = 'url(../images/bg_box4_expert.png)';
                $(name[i]).animate({ width: 270, height: 100, opacity: 1 });
            } else {
                aLi[i].style.backgroundImage = 'none';
                $(name[i]).animate({ width: 0, height: 0, opacity: 1 });
            }
            startMove(aLi[i], { left: arr[i][0], top: arr[i][1], opacity: 1 });

        }

    }

    oNext.onclick = function() {
        arr.unshift(arr[arr.length - 1]);
        arr.pop();
        for (var i = 0; i < aLi.length; i++) {
            var oImg = aLi[i].getElementsByTagName('img')[0];

            aLi[i].style.zIndex = arr[i][2];
            if (arr[i][2] == 3) {
                aLi[i].style.backgroundImage = 'url(../images/bg_box4_expert.png)';
                $(name[i]).animate({ width: 270, height: 100, opacity: 1 });
            } else {
                aLi[i].style.backgroundImage = 'none';
                $(name[i]).animate({ width: 130, height: 80, opacity: 1 });
            }
            startMove(aLi[i], { left: arr[i][0], top: arr[i][1], opacity: arr[i][4] });
            startMove(oImg, { width: arr[i][3] });
        }
    }

    function getStyle(obj, name) {
        if (obj.currentStyle) { return obj.currentStyle[name]; } else { return getComputedStyle(obj, false)[name]; }
    }
}

function getByClass(oParent, sClass) {
    var aResult = [];
    var aEle = oParent.getElementsByTagName('*');

    for (var i = 0; i < aEle.length; i++) {
        if (aEle[i].className == sClass) {
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}