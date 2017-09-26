/**
 * Created by bjwsl-001 on 2017/8/5.
 */
window.onload=function(){
    $(".bg-main").addClass("curnt");
    $("body").animate({
        scrollTop:0
    },500);
};
$(".nav").on("click","li>a",function(e){
    e.preventDefault();
    var tar=$(e.target);
    var attr=tar.attr("href");
    $("body").animate({
        scrollTop:$(attr).offset().top
    },500);
    tar.css("color","#3EC483").parent().siblings().children().css("color","black");
    tar.children("span").addClass("current").parents("li").siblings().children().children(".current").removeClass("current");
});


