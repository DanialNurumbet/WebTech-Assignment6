$(document).ready(function() {
    $("#btn-hide").click(function() {$("#text-visibility").hide(); });
    $("#btn-show").click(function() { $("#text-visibility").show(); });
    $("#btn-toggle").click(function(){ $("#text-visibility").toggle(); });

    $("#btn-fadeIn").click(function(){ $("#image").fadeIn(); });
    $("#btn-fadeOut").click(function(){ $("#image").fadeOut(); });
    $("#btn-fadeToggle").click(function(){ $("#image").fadeToggle(); });

    $("#btn-slideUp").click(function(){ $("#text-slide").slideUp(); });
    $("#btn-slideDown").click(function(){ $("#text-slide").slideDown(); });
    $("#btn-slideToggle").click(function(){ $("#text-slide").slideToggle(); });
});