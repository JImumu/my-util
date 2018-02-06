function setCookie(i, e, o, d) {
	var d = d || null;
	var domain = d != null ? 'domain='+d+';' : '';

	if(o){
		var t = getsec(o),
		a = new Date;
		a.setTime(a.getTime() + 1 * t),
		document.cookie = i + "=" + escape(e) + ";"+domain+"path=/;expires=" + a.toGMTString();
	}else{
		document.cookie = i + "=" + escape(e);
	}
}
function getCookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg)){
		return unescape(decodeURI(arr[2]));
	}else{
		return null;
	}	
}
function getsec(i) {
	var e = 1 * i.substring(1, i.length),
		o = i.substring(0, 1);
	return "s" == o ? 1e3 * e: "h" == o ? 60 * e * 60 * 1e3: "d" == o ? 24 * e * 60 * 60 * 1e3: void 0
}
function getUrl(path){
	return domain + path;
}
function removeCookie(i){
	setCookie(i,null,"d0")
}
/**
 * 获得cookie的json值
 * @param name
 * @returns
 */
function getJsonCookie(name){
	var value = getCookie(name);
	if(value != null){
		return eval('(' + value + ')');
	}else{
		return null;
	}
}
