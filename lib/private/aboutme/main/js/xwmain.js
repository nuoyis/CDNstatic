console.log(`
  ╔╗──╔╦═══╦═══╦╗──╔╗─╔╦╗──╔╦═╗─╔╗
║╚╗╔╝║╔═╗║╔══╣║──║║─║║╚╗╔╝║║╚╗║║
╚╗╚╝╔╣║─╚╣╚══╣║──║╚═╝╠╗╚╝╔╣╔╗╚╝║
─╚╗╔╝║║─╔╣╔══╣║─╔╣╔═╗║╚╗╔╝║║╚╗║║
──║║─║╚═╝║║──║╚═╝║║─║║─║║─║║─║║║
──╚╝─╚═══╩╝──╚═══╩╝─╚╝─╚╝─╚╝─╚═╝
欢迎访问诺依阁介绍
`);
    
    var _hmt = _hmt || [];
    
    //函数集合
    function xwNewDate(str) {
        var xwtime3 = new Date();
        str = str.split('-');
        xwtime3.setUTCFullYear(str[0], str[1] - 1, str[2]);
        xwtime3.setUTCHours(0, 0, 0, 0);
        return xwtime3;
    }

    function xwjianzhantime() {
        var xwtime1 = new Date();
        var birthDay = xwNewDate("2020-03-17");
        var timeold = xwtime1.getTime() - birthDay.getTime();
        var sectimeold = timeold / 1000
        var secondsold = Math.floor(sectimeold);
        var msPerDay = 24 * 60 * 60 * 1000;
        var e_daysold = timeold / msPerDay;
        var daysold = Math.floor(e_daysold);
        var e_hrsold = (daysold - e_daysold) * -24;
        var hrsold = Math.floor(e_hrsold);
        var e_minsold = (hrsold - e_hrsold) * -60;
        var minsold = Math.floor((hrsold - e_hrsold) * -60);
        var seconds = Math.floor((minsold - e_minsold) * -60).toString();
        document.getElementById("sitetime").innerHTML = "本站已安全运行" + daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
        setTimeout(xwjianzhantime, 1000);
    }
    
    function xwtx(){
        var xwtime2 = new Date();
        var hour = xwtime2.getHours();
        var xwtx = "未知情况";
        if ((hour>5)&&(hour<=7))
            xwtx = "惟仪涵提醒您：早上好,美好的一天开始了";			
        else if ((hour>7)&&(hour<=11))
            xwtx = "惟仪涵提醒您：上午好，一定会干劲十足的";	
        else if ((hour>11)&&(hour<=13))
            xwtx = "惟仪涵提醒您：中午好,注意吃饭和休息哦";		
        else if ((hour>13)&&(hour<=17)) 
            xwtx = "惟仪涵提醒您：下午好！记得来杯下午茶哦";
        else if ((hour>17)&&(hour<=19)) 
            xwtx = "惟仪涵提醒您：傍晚了，休闲娱乐开始喽";	
        else if ((hour>19)&&(hour<=22)) 
        	xwtx ="惟仪涵提醒您：晚上好，注意少熬夜了哦";	
        else  
            xwtx = "惟仪涵提醒您：夜深了，该休息了哦";
        document.getElementById("xwtx").innerHTML = xwtx;
    }
		
	//动态壁纸
    function bv() {
       var bv = new Bideo();
       bv.init({
         videoEl: document.querySelector('#background_video'),
         container: document.querySelector('body'),
         resize: true,
         isMobile: window.matchMedia('(max-width: 768px)').matches,
         playButton: document.querySelector('#play'),
         pauseButton: document.querySelector('#pause'),
         src: [
           {
             src: 'https://lovablewyh.zinet.top/static/lovablewyh-library/aboutme/main/video/background.mp4',
             type: 'video/mp4'
           },
         ],
         onLoad: function () {
           document.querySelector('#xw-backgroud').style.display = 'none';
         }
       });
     }
	function htmlScroll() {
	    var top = document.body.scrollTop || document.documentElement.scrollTop;
	    if (elFix.data_top < top) {
	        elFix.style.position = 'fixed';
	        elFix.style.top = 0;
	        elFix.style.left = elFix.data_left;
	    }
	    else {
	        elFix.style.position = 'static';
	    }
	}
	
	function htmlPosition(obj) {
	    var o = obj;
	    var a = o.offsetParent;
	    var t = o.offsetTop;
	    var l = o.offsetLeft;
	    while (o = a) {
	        t += o.offsetTop;
	        l += o.offsetLeft;
	    }
	    obj.data_top = t;
	    obj.data_left = l;
	}
	
    function baidusearch(baiduzhanzhang) {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?"+baiduzhanzhang;
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
    }
		var a_idx = 0;
		var b_idx = 0;
		var a = new Array("自由", "和谐", "平等", "法制", "爱国", "敬业", "公平", "和平", "进步", "友爱", "友善", "共进");
		var b = new Array("#FF0000", "#66CCFF", " #FFFF00", "#00FF00", "#66CCFF", "#0000FF", "#8B00FF", "#FF0000", "#FF7F00", " #FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#8B00FF");
		jQuery(document).ready(function($) {
		    $("body").click(function(e) {
		        var i = $("<span/>").text(a[a_idx]);
		        a_idx = parseInt(12 * Math.random());
		        b_idx = parseInt(14 * Math.random());
		        var x = e.pageX,
		            y = e.pageY;
		        i.css({
		            "z-index": 999,
		            "font-size": "1.3em",
		            "top": y - 20,
		            "left": x,
		            "position": "absolute",
		            "font-weight": "bold",
		            "color": b[b_idx]
		        });
		        $("body").append(i);
		        i.animate({
		            "top": y - 180,
		            "opacity": 0
		        }, 1500, function() {
		            i.remove()
		        })
		    })
		});
		
		//公共执行区域
		xwjianzhantime();
		xwtx();
		bv();
		baidusearch("fbe3086e6a1fc0819626bbd0a25b72f3");