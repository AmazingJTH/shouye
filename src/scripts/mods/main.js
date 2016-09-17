
var $=require('../libs/jquery.js');

module.exports=function(){
	$(".seaTop li").click(function () {
		$(".seaTop li").css({"background":"#fff","color":"#666"});
        $(this).css({"background":"#E31939","color":"#fff"});
    });
    $(window).scroll(function () {
        $("#kfff").css({"top":$(document).scrollTop()+120+"px"});
    });
    $.ajax({
        url:"/api/getindex",
        dataType:"json",
        success:function (data) {
            for(var i=0;i<data.length;i++){
                var dlobj=$("<dl><dt><a href='#'><img src='"+data[i].imgsrc+"'/></a></dt><dd><a href='detail.html?id="+data[i].id+"'>"+data[i].name+"</a></dd><dd>商城价:<span>"+data[i].price+"</span><a href='#' class='car'></a></dd></dl>");
                $("#ls").append(dlobj);
            }
        }
    })
    $(".btns p").click(function () {
        $(".btns p").removeClass("active");
        $(this).addClass("active");
    })
    $(".page1").click(function () {
        $("#ls dl").remove();
        loadlist(25);
    })
    $(".page2").click(function () {
        $("#ls dl").remove();
        loadlist(25);
    })
    $(".page3").click(function () {
        $("#ls dl").remove();
        loadlist(17);
    })
    function loadlist(len) {
        $.ajax({
            url:"data/list.txt",
            dataType:"json",
            success:function (data) {
                for(var i=0;i<len;i++){
                    var dlobj=$("<dl><dt><a href='#'><img src='"+data[i].imgsrc+"'/></a></dt><dd><a href='#'>"+data[i].name+"</a></dd><dd>商城价:<span>"+data[i].price+"</span><a href='#' class='car'></a></dd></dl>");
                    $("#ls").append(dlobj);
                }
            }
        })
    }
    $(document).ready(function () {
        if(getCookie("username")){
            $("#logined").html(getCookie("username"));
            $("#logined").attr("href"," ");
            $(".headleft").append("<a href='#' class='tc'>退出</a>");
        }
        $(".tc").click(function () {
            delCookie("username");
            delCookie("password");
            $("#logined").html("请登录");
            $("#logined").attr("href","login.html");
            $(".headleft .tc").remove();
        })
    })
}
