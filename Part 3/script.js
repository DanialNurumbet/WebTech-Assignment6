$(document).ready(function() {
    $("#btn-append").click(function() { $("#list").append("<li> A candy at the end </li>"); });
    $("#btn-prepend").click(function() { $("#list").prepend("<li> A candy at the start </li>"); });
    $("#btn-remove").click(function(){ $("#list li:last").remove(); });


    $("#btn-image").click(function() { $("#image").attr("src", "https://i.pinimg.com/474x/e8/9b/a9/e89ba9acac986647347a41883e214ba0.jpg"); });
    $("#btn-link").click(function() { $("#link").attr("href", "https://www.w3schools.com/jquery/jquery_dom_set.asp"); });
    
});