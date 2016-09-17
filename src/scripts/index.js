var $=require('./libs/jquery.js');
var ma=require('./mods/main.js');

var common=require('./utils/mycookie.js');

var strhead=require('./tpls/head.string');
var strtop=require('./tpls/top.string');
var strnav=require('./tpls/nav.string');
var strlist=require('./tpls/list.string');
var strfoot=require('./tpls/foot.string');
var strkf=require('./tpls/kf.string');

$(function(){
	common.load(strhead+strtop+strnav+strlist+strfoot+strkf);
	ma();
});
