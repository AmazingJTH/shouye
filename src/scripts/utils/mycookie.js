var common={
	load:function(str){
		$("body").prepend(str);
	},
	setCookie:function(key,value,day){
		var cValue = key + "=" + encodeURIComponent(value) + ";";
		if(day){
			cValue += "expires=" + addDays(day);
		}
		document.cookie = cValue;
	},
	getCookie:function(key){
		var cValue = document.cookie;
		var cList = cValue.split('; ');
		var result = "";
		for(var i = 0; i<cList.length; i++){
			var kv = cList[i].split('=');
			if(kv[0] == key){
				result = kv[1];
			}
		}
		return decodeURIComponent(result);
	},
	delCookie:function(key){
		setCookie(key,"",new Date(0));
	},
	addDays:function(days){
		var now = new Date();
		var time = now.getTime();
		time = time + days * 1000 * 3600 * 24 ;
		return new Date(time);
	}
}
module.exports=common;






