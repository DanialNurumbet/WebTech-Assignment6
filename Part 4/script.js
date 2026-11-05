$(document).ready(function() {
    $("#btn-start-basic").click(function(){
        $("#box-basic").animate({ rigth:"180px", width:"170px", height:"170px" }, 700); 
    });

    $("#btn-reset-basic").click(function(){
        $("#box-basic").css({ top: "12px", left: "12px", width: "100px", height: "100px" }, 700); 
    });
});