
// 复制的方法
function copyText(text, callback) { // text: 要复制的内容， callback: 回调
    var tag = document.createElement('input');
    tag.setAttribute('id', 'cp_hgz_input');
    tag.value = text;
    document.getElementsByTagName('body')[0].appendChild(tag);
    document.getElementById('cp_hgz_input').select();
    document.execCommand('copy');
    document.getElementById('cp_hgz_input').remove();
    if (callback) { callback(text) }
}
//获取get参数的方法
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return ("");
}

function DownSoft() {
    let gameId = getQueryVariable("from_gameid")
    let code = getQueryVariable("channelCode")
    let copyObj = {
        from_gameid: gameId,  //上级ID 动态渠道包填gameId,固定渠道包填 "" 即可
        channelCode:10000  //渠道号 动态渠道填code,固定渠道填渠道号,如 "10000"
    }
    if(document.domain.indexOf('g668.club') >= 0){
        copyObj.channelCode = 10001;
    }
    if(document.domain.indexOf('m668.club') >= 0){
        copyObj.channelCode = 10002;
    }
    let copyStr = JSON.stringify(copyObj)
    copyText(copyStr, function () { console.log('复制成功', copyStr) })

    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        //苹果端
        window.location.href = "https://down.shsx66.com/Nd8R.app"
    } else if (/(Android)/i.test(navigator.userAgent)) {
        //安卓端
        window.location.href = "https://bucket-xjp02.oss-ap-southeast-1.aliyuncs.com/vndAPK/668CLub.apk"
    } else {
        //pc端
        window.location.href = "https://bucket-xjp02.oss-ap-southeast-1.aliyuncs.com/vndAPK/668CLub.apk"
    };
}
