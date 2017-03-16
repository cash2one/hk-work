var form1 = document.getElementById('form1');
form1.onsubmit = function() {
    var youName = form1.you_name,
        youTel = form1.you_tel,
        youPor = form1.you_por;
    youTime = form1.you_time;
    if (youName.value.replace(/\s*/g, '') == "" || youName.value == "请输入您的姓名") {
        window.scrollTo(0, getTop(youName));
        tipDubble(youName, '姓名不能为空<br/>用于登记你的预约信息');
        setTimeout(tipBreak, 2000);
        youName.focus();
        youName.value = '';
        return false;
    }

    var sjreg = /^(0[3-9]\d{2}-)?([2-9][0-9]{6})(-[0-9]{1,4})?$|^(0(10|2[0-9])-)?([2-9][0-9]{7})(-[0-9]{1,4})?$|^1([3,8][0-9]|4[5,7,9]|5[012356789]|7[0,5,6,7,8])\d{8}$/;
    if (!sjreg.test(youTel.value)) {
        tipDubble(youTel, '请输入正确的号码<br/>方便专家联系您');
        setTimeout(tipBreak, 2000);
        youTel.focus();
        return false;
    }
    if (youTime.value.replace(/\s*/g, '') == "" || youTime.value == "请输入您的就诊时间") {
        window.scrollTo(0, getTop(youPor));
        tipDubble(youTime, '就诊时间不能为空<br/>我们将为你预约专家');
        setTimeout(tipBreak, 2000);
        youTime.focus();
        youTime.value = '';
        return false;
    }
    if (youPor.value.replace(/\s*/g, '') == "" || youPor.value == "请输入您的病情描述") {
        window.scrollTo(0, getTop(youPor));
        tipDubble(youPor, '病情不能为空<br/>我们将为您推荐专家');
        setTimeout(tipBreak, 2000);
        youPor.focus();
        youPor.value = '';
        return false;
    }
    var xm = youName.value;
    var tel = youTel.value;
    var bqms = youPor.value;

    $.post('/plus/diy.php', { 'xm': xm, 'tel': tel, 'bqms': bqms, 'wid': form1.wid.value, 'action': 'post', 'type': 'ajax' }, function(result) {
        var mesg = result == 'success' ? '提交成功!<br />稍后我们会联系您。' : '信息提交失败请稍后重试!';
        tipDubble(true, mesg);
        setTimeout(tipBreak, 2000);
    });
    return false;
};

function tipDubble(obj, msg) {
    var flag = document.createElement('div');
    flag.id = 'tip-dubble';
    flag.className = 'tip-box';
    flag.innerHTML = msg;
    flag.style.cssText = 'width:200px;padding:10px 20px;font-size:16px;color:#fff;text-align:center;text-decoration:none;border-radius:6px;z-index:9999;';
    document.body.appendChild(flag);
    var cssText;
    if (typeof obj == 'boolean') {
        cssText = 'position:fixed;top:50%;left:50%;margin:-' + flag.offsetHeight / 2 + 'px 0 0 -100px;width:200px;padding:10px 20px;color:#fff;text-align:center;text-decoration:none;background: #d32b2b;border-radius:6px;z-index:9999;'
    } else {
        var offsetTop = getTop(obj),
            offsetLeft = getLeft(obj),
            arrow = document.createElement('div');
        flag.appendChild(arrow);
        if ((offsetTop - document.body.scrollTop - document.documentElement.scrollTop) > (flag.offsetHeight + 11)) {
            cssText = 'position: absolute;top:' + (offsetTop - flag.offsetHeight - 11) + 'px;left:' + (offsetLeft + (obj.offsetWidth - flag.offsetWidth) / 2) + 'px;background:#edb800;';
            arrow.style.cssText = 'position:absolute;top:100%;left:50%;margin-left:-8px;width:0;height:0;border:8px solid transparent;border-top-color:#edb800;pointer-events:none;'
        } else {
            cssText = 'position: absolute;top:' + (offsetTop + obj.offsetHeight + 11) + 'px;left:' + (offsetLeft + (obj.offsetWidth - flag.offsetWidth) / 2) + 'px;background:#edb800;';
            arrow.style.cssText = 'position:absolute;bottom:100%;left:50%;margin-left:-8px;width:0;height:0;border:8px solid transparent;border-bottom-color:#edb800;pointer-events:none;'
        }
    }

    flag.style.cssText += cssText;

}

function tipBreak() {
    document.body.removeChild(document.getElementById('tip-dubble'));
}

function getTop(e) {
    var offset = e.offsetTop;
    if (e.offsetParent != null) offset += getTop(e.offsetParent);
    return offset;
}

function getLeft(e) {
    var offset = e.offsetLeft;
    if (e.offsetParent != null) offset += getLeft(e.offsetParent);
    return offset;
}