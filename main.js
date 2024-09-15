$(function() {
    $(".project").on('click', function() { 
        $(this).parent().find('.details').slideToggle(500);
    });
});