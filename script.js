$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#btn").click(function() {
        $("p").text("<p> tag is selected and text is changed via .text()");
        $(".p-class").html("<b> .p-class </b> is selected and text is changed via <code> .html() </code>");
        $("#p-id").text("p-id is selected and text is changed via .text() + .css()").css("color", "#d16b36");
    });
    
});