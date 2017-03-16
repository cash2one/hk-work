

//中间弹窗
//暖冬弹窗
/* document.writeln("<style>");
document.writeln(".midswt{ width:500px; height:390px; background:url(/include/images/tc_bg.jpg) no-repeat; position:relative; position:fixed; left:10%; top:30%;z-index:9999;border-radius: 15px;-webkit-box-shadow: 0 0 20px rgba(10,2,4,0.75);box-shadow: 0 0 20px rgba(10,2,4,0.75); display:none;}");
document.writeln(".closebt{ width:88px; height:88px; position:absolute; top:-40px; right:-40px;}");
document.writeln(".botline{ width:500px; height:90px; position:absolute; bottom:1px; left:0;}");
document.writeln(".hottel{ width:250px; height:90px; float:left;}");
document.writeln(".zxzx{ width:250px; height:90px; float:right;}    ");
document.writeln("</style>");
document.writeln("");
document.writeln("<div class=\"midswt\">");
document.writeln("    <div class=\"closebt\"><a href=\"javascript:void(0);\" onClick=\"hidecenterd();\"><img src=\"/include/images/closebt.png\"></a></div>");
document.writeln("    <div class=\"botline\">");
document.writeln("   <a href=\"tel:021-62150089\"><div class=\"hottel\"></div></a>");
document.writeln("   <a onclick=\"openZoosUrl();return false;\" style=\"cursor:pointer\" target=\"_blank\"><div class=\"zxzx\"></div></a>");
document.writeln("     </div>");
document.writeln("</div>");

$('#tel_btn').click(function(){$('#form1').submit()})
	setTimeout(showcenterd,5000);	
	
	function showcenterd(){
		$(".midswt").fadeIn();
		//document.getElementsByClassName('swtCenter')[0].style.display='block';
	}	
	function hidecenterd(){
		$(".midswt").fadeOut();
		//document.getElementsByClassName('swtCenter')[0].style.display='none';
		setTimeout("showcenterd()",20000);
	}	 */
	



document.writeln("<div id=\"swtCenter\" class=\"swtCenter\">");
document.writeln("    <div class=\"swtClose\"><a onclick=\"hidecenter()\"></a></div>");
document.writeln("    <div class=\"h3\">在线预约挂号平台</div>");
document.writeln("    <div class=\"h4\">ONLINE BOOKING REGISTRATION PLATFORM</div>");
document.writeln("    <div class=\"callBack clearFix\">");
document.writeln("<form method=\"post\" action=\"http://tel.kuaishang.com.cn/calld.php\" id=\"form1\" target=\"i\">");
document.writeln("<input type=\"hidden\" name=\"fromurl\" id=\"call_fromurl1\" value=\"\" />");
document.writeln("<input type=\"hidden\" name=\"sid\" value=\"2013191655\" />");
document.writeln("<input type=\"hidden\" name=\"did\" value=\"1009900\" />");
document.writeln("        <input type=\"tel\" id=\"tell_num\"  name=\"tel\" value=\"请输入您的电话号码\" onFocus=\"value=\'\'\" onBlur=\"if(!value)value=defaultValue\" />");
document.writeln("        <input name=\"shubmitdh\" type=\"submit\"  id=\"sub_btn\" value=\"免费回电\" />");
document.writeln("</form>");
document.writeln("<iframe name=\"i\" style=\"display:none\"></iframe>");
document.writeln("    </div>");
document.writeln("    <div class=\"swtList\">");
document.writeln("    	<p><a class=\"telphone\" href=\"tel:021-62150089\"><i></i><em>拨打电话</em></a></p>");
document.writeln("        <p><a class=\"question\" href=\"javascript:;\" onclick=\"openZoosUrl();return false;\"><i></i><em>悄悄提问</em></a></p>");
document.writeln("    </div>");
document.writeln("</div>");

	function showcenter(){
		$(".swtCenter").fadeIn();
		//document.getElementsByClassName('swtCenter')[0].style.display='block';
		setTimeout("hidecenter()",5000);
	}	
	function hidecenter(){
		$(".swtCenter").fadeOut();
		//document.getElementsByClassName('swtCenter')[0].style.display='none';
		setTimeout("showcenter()",15000);
	}	
	
	
	


//加载商务通路径代码
document.write('<script language="javascript" src="http://awt.zoossoft.com:88/JS/LsJS.aspx?siteid=AWT28314554&float=1&lng=cn"></script>');
var LR_showminiDiv_no=1;


//商务通代码
function swt(){  
	  LR_HideInvite();
	  openZoosUrl();
	  return false;
//var swt="http://pbt.zoosnet.net/LR/Chatpre.aspx?id=PBT58485970&r="+document.referrer+"&p="+window.location.href;
//window.open(swt);
}








	
	