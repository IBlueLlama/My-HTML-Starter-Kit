console.log("Hello Mortal Human! How are thy doing?");
$("#hewo").text("Hello Human o/");
// Main Menu Dropdown(Probably a better way to do this)
$(".aboutMeBtn").click(function () { 
    $(".whyMade").hide();
    $(".whereTo").hide();
    $(".aboutMe").toggle();
    $(".aboutMeBtn").toggleClass("clickedBtn");
    $(".whyMadeBtn").removeClass("clickedBtn");
    $(".whereToBtn").removeClass("clickedBtn");
});
$("header").mouseover(function () {
    $("#colan3").show();
});
$("header").mouseleave(function () { 
    $("#colan3").hide();
});
$(".whyMadeBtn").click(function () { 
    $(".aboutMe").hide();
    $(".whereTo").hide();
    $(".whyMade").toggle();
    $(".whyMadeBtn").toggleClass("clickedBtn");
    $(".aboutMeBtn").removeClass("clickedBtn");
    $(".whereToBtn").removeClass("clickedBtn");
});
$(".whereToBtn").click(function () { 
    $(".aboutMe").hide();
    $(".whyMade").hide();
    $(".whereTo").toggle();
    $(".whereToBtn").toggleClass("clickedBtn");
    $(".aboutMeBtn").removeClass("clickedBtn");
    $(".whyMadeBtn").removeClass("clickedBtn");
});
$("#sus").mouseenter (function () { 
    $("#red").show();
});
$("#sus").mouseleave(function () { 
    $("#red").hide();
});
$("#infoBoxesBtn").click(function (){
    $("#infoBoxes").slideToggle();
    $("#infoBoxesBtn i").toggleClass("rotated");
    $("nav").fadeIn();
});
$("#setupInfoBtn").click(function (){
    $("#setupInfo").slideToggle();
    $("#setupInfoBtn i").toggleClass("rotated");
});
$("#htmlInfoBtn").click(function (){
    $("#htmlInfo").slideToggle();
    $("#htmlInfoBtn i").toggleClass("rotated");
});
$("#cssInfoBtn").click(function (){
    $("#cssInfo").slideToggle();
    $("#cssInfoBtn i").toggleClass("rotated");
});
$("#jqueryInfoBtn").click(function (){
    $("#jqueryInfo").slideToggle();
    $("#jqueryInfoBtn i").toggleClass("rotated");
});
$("#setupBtn").click(function (){
    $(".setup").slideToggle();
    $("#setupBtn i").toggleClass("rotated");
});
$("#toggleExBtn").click(function () { 
    $("#toggleEx").toggle();
});