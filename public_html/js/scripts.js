/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
        $("#book").animate({
            opacity: 0.25,
            left: "+=50",
            height: "toggle"
        }, 5000, function () {
            // Animation complete.
        });
    });
//    $(".inicio").hover(function(){
//       $(".inicio a").css("color","green"); 
//    },function(){
//        $(".inicio a").css("color","white");
//    });
});

