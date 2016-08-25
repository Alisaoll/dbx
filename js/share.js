
    /* 新浪微博分享 */
    function weiboShare() {
        var wbUrl = document.URL;
        var wbAppkey = "";
        var wbTitle = "大博鑫财富- 最大、最安全的网络理财平台";
        var wbRalateUid = "";
        var wbPic = "";
        var wbLanguage = "zh_cn";
        var url = "http://service.weibo.com/share/share.php?url=" + wbUrl + "&appkey=" + wbAppkey + "&title=" + wbTitle + "&pic=" + wbPic + "&ralateUid=" + wbRalateUid + "&language=" + wbLanguage + "";
        window.open(url);
    }

    /*qq空间分享*/
    function qzoneShare() {
        var wbUrl = document.URL;
        var wbTitle = "大博鑫财富- 最大、最安全的网络理财平台";
        var wbSummary = "大博鑫财富- 最大、最安全的网络借贷、理财平台。提供便捷、安全、低门槛的个人信用贷款和个人理财服务。";
        var wbPic = "";
        var url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=" + wbSummary + "&title=" + wbTitle + "&url=" + wbUrl + "&pics=" + wbPic + "";
        window.open(url);
    }

    /*腾讯微博分享*/
    function tqqShare() {
        var wbUrl = document.URL;
        var wbTitle = "大博鑫财富- 最大、最安全的网络理财平台";
        var wbAppkey = "";
        var wbSite = "www.freecaifu.com";
        var wbPic = "";
        var url = "http://share.v.t.qq.com/index.php?c=share&a=index&title=" + wbTitle + "&url=" + wbUrl + "&appkey=" + wbAppkey + "&site=" + wbSite + "pic=" + wbPic + "";
        window.open(url);
    }

    /*人人网分享*/
    function renrenShare() {
        var wbUrl = document.URL;
        var wbTitle = "大博鑫财富- 最大、最安全的网络理财平台";
        var wbSummary = "大博鑫财富- 最大、最安全的网络借贷、理财平台。提供便捷、安全、低门槛的个人信用贷款和个人理财服务。";
        var wbPic = "";
        var url = "http://widget.renren.com/dialog/share?resourceUrl=" + wbUrl + "&srcUrl=" + wbUrl + "&title=" + wbTitle + "&pic=" + wbPic + "&description=" + wbSummary + "";
        window.open(url);
    }
