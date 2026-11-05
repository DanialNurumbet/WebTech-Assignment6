$(document).ready(function() {
    $("#btn-append").click(function() { $("#list").append("<li> A candy at the end </li>"); });
    $("#btn-prepend").click(function() { $("#list").prepend("<li> A candy at the start </li>"); });
    $("#btn-remove").click(function(){ $("#list li:last").remove(); });

});