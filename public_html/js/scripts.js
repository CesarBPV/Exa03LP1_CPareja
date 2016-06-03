/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var i = 1;
$(document).ready(function () {
    var user = "admin";
    var pass = "123";
    var usuario = "";
    var contraseña = "";
    $("#incorrect").hide();
    $(".AjaxContent").hide();
    $(".CSSContent").hide();
    $(".EventsContent").hide();
    $(".FormsContent").hide();
    $(".HtmlContent").hide();
    $(".enviar").click(function () {
        usuario = $(".user").val();
        contraseña = $(".pass").val();
        if (usuario === user && contraseña === pass) {
            window.location = "index.html";
        } else {
            $("#incorrect").show();
        }
    });
    $(".ajax").click(function () {
        $(".contents").hide();
        $(".AjaxContent").show();
    });
    $(".css").click(function () {
        $(".contents").hide();
        $(".CSSContent").show();
    });
    $(".inicio").click(function () {
        $(".contents").hide();
        $(".InicioContent").show();
    });
    $(".html").click(function () {
        $(".contents").hide();
        $(".HtmlContent").show();
    });
    $(".forms").click(function () {
        $(".contents").hide();
        $(".FormsContent").show();
    });
    $(".events").click(function () {
        $(".contents").hide();
        $(".EventsContent").show();
    });
    $("#animacion1").click(function () {
        $("#animacion1").animate({
            opacity: 0.8,
            height: "toggle"
        }, 2000, function () {
            $("#animacion1").show()
        });
    });
    $("#animacion2").click(function () {
        $("#animacion2").animate({
            top: "200px"
        });
    });
    $("#animacion3").click(function () {
        $("#animacion3").animate({width: "200px"}, "slow");
        $("#animacion3").animate({right: "200px"}, "slow");
        $("#animacion3").animate({bottom: "200px"}, "slow");
    });
    $("#animacion4").click(function () {
        $(".p1").toggle(1000);
    });
    $("#animacion5").click(function () {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
    $("#animacion6").click(function(){
        $("#panel").slideToggle("slow");
    });
    $("#slider").height($(".slide").height() + "px");
    $(window).resize(function () {
        $("#slider").height($(".slide").height() + "px");
    });
    function change() {
        if (i <= 5) {
            $(".slide").removeClass("slideCurrent");
            $("#img" + i).addClass("slideCurrent");
            i++;
        } else {
            i = 1;
        }
    }
    function autoplay() {
        interval = setInterval(function () {
            change();
        }, 3000);
    }
    autoplay();
    $(".menuBar div a").click(function(){
        $(".menuBar ul").fadeToggle(1000);
    });
//    $(".inicio").hover(function(){
//       $(".inicio a").css("color","green"); 
//    },function(){
//        $(".inicio a").css("color","white");
//    });
});

