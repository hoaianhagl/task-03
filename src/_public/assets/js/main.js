/* eslint-disable linebreak-style */

//function to open menu mobile
$(document).ready(function(){
    $(".c-gnavicon").click(function(){
        console.log("click");
        $(".c-gnavmobile").toggleClass("u-display--block");
        $(".c-gnavicon__open").toggleClass("u-display--block");
        $(".c-gnavicon__close").toggleClass("u-display--none");
    });

    $(".c-gnavmobile").find("li").click(function(){
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
        $(".l-leaves__first").addClass("u-trans1");
        $(".l-leaves__second").addClass("u-trans2");
    } else {
        $(".c-header__droplayer").removeClass("u-top2");
        $(".l-leaves__first").removeClass("u-trans1");
        $(".l-leaves__second").removeClass("u-trans2");
    }
});

//button more in p-top1
$(".p-top1__btnmore").click(function(){
    $(this).parent().parent().parent().find(".p-top1__pointover").css("display","none");
    console.log($(this));
    $(this).parent().next().css("display","flex");
});


//display content 
$(".p-top3__arrow--mb").click(function(){
    $(this).parent().find(".p-top3__open").fadeToggle();
    console.log($(this));
    if($(this).hasClass("c-active")){
        $(this).removeClass("c-active");
        $(this).find(".c-arrowup").show();
        $(this).find(".c-arrowdown").hide();
    } else {
        $(this).addClass("c-active");
        $(this).find(".c-arrowup").hide();
        $(this).find(".c-arrowdown").show();
    }
    // $(this).next().removeClass("u-display--none");
});