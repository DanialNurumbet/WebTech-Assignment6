$(document).ready(function() {
    $("#btn-start-basic").click(function(){
        $("#box-basic").animate({ left:"38px", width:"170px", height:"170px" }, 700); 
    });

    $("#btn-reset-basic").click(function(){
        $("#box-basic").css({ top: "12px", left: "12px", width: "100px", height: "100px" }, 700); 
    });

    $("#btn-start-seq").click(function(){
        $("#box-seq")
            .animate({ left:"170px" }, 700)
            .animate({ top:"80px" }, 700)
            .animate({ width:"25px", height:"25px" }, 700)
            .animate({ left:"12px", top:"12px", width:"100px", height:"100px" }, 700);
    });

    $("#btn-start-com").click(function(){
        $("#box-com").animate({ left:"120px", opacity: "0.5", width:"150px", height:"150px" }, 700); 
    });
    $("#btn-reset-com").click(function(){
        $("#box-com").css({ top: "12px", left: "12px", width: "100px", height: "100px" }, 700); 
    });
});