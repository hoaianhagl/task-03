/* eslint-disable linebreak-style */

//function to open menu mobile
$(document).ready(function(){
    $(".c-gnavicon").click(function(){
        console.log("click");
        $(".c-gnavmobile").toggleClass("u-display--block");
        $(".c-gnavicon__open").toggleClass("u-display--block");
        $(".c-gnavicon__close").toggleClass("u-display--none");
    });
});

//animation when scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > 5) {
        $(".c-header__droplayer").addClass("u-top2");
    } else {
        $(".c-header__droplayer").removeClass("u-top2");
    }
});

//button more in p-top1
$(".p-top1__btnmore").click(function(){
    $(this).parent().parent().parent().find(".p-top1__pointover").css("display","none");
    console.log($(this));
    $(this).parent().next().css("display","flex");
});
