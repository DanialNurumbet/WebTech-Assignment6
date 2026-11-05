$(document).ready(function() {
    $(".btn-title").click(function() {
        $(this).next(".content").slideToggle(300);
    });
});
