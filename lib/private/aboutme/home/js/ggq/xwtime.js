function data(){		
 var xwzs = new Date();
 var hour = xwzs.getHours();
	if ((hour>5)&&(hour<=7))
		document.write("惟仪涵提醒您：早上好,美好的一天开始了");			
	else if ((hour>7)&&(hour<11))
		document.write("惟仪涵提醒您：上午好，一定会干劲十足的");	
	else if ((hour=>11)&&(hour<13))
		document.write("惟仪涵提醒您：中午好,注意吃饭和休息哦");		
	else if ((hour=>13)&&(hour<17)) 
		document.write("惟仪涵提醒您：下午好！记得来杯下午茶哦");
	else if ((hour=>17)&&(hour<=19)) 
		document.write("惟仪涵提醒您：傍晚了，休闲娱乐开始喽");	
	else if ((hour>19)&&(hour<=22)) 
		document.write("惟仪涵提醒您：晚上好，注意少熬夜了哦");	
	else  document.write("惟仪涵提醒您：夜深了，该休息了哦");	
}
data();//调用函数