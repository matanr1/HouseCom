
$(document).ready(function () {
    $('button#feedback').click(function (e) {
        $('form#feedback').slideToggle();
    });


    $('button#rate').click(function (e) {
        $('div#rate').slideToggle();
        $('form#feedback').slideToggle();
    });

    $('#rank-1, #rank-2, #rank-3, #rank-4, #rank-5').hover(function (e) { $(this).toggleClass('btn-warning'); });
    $('#rank-2, #rank-3, #rank-4, #rank-5').hover(function (e) { $('#rank-1').toggleClass('btn-warning'); });
    $('#rank-3, #rank-4, #rank-5').hover(function (e) { $('#rank-2').toggleClass('btn-warning'); });
    $('#rank-4, #rank-5').hover(function (e) { $('#rank-3').toggleClass('btn-warning'); });
    $('#rank-5').hover(function (e) { $('#rank-4').toggleClass('btn-warning'); });

    $('#rank-1, #rank-2, #rank-3, #rank-4, #rank-5').click(function (e) {
        $('#rank-1, #rank-2, #rank-3, #rank-4, #rank-5').removeClass('btn-default, btn-default');
        $('#rank-1, #rank-2, #rank-3, #rank-4, #rank-5').addClass('btn-default');
        $(this).addClass('btn-warning');
    });
    $('#rank-2, #rank-3, #rank-4, #rank-5').click(function (e) {
        $('#rank-1').addClass('btn-warning');
    });
    $('#rank-3, #rank-4, #rank-5').click(function (e) {
        $('#rank-2').addClass('btn-warning');
    });
    $('#rank-4, #rank-5').click(function (e) {
        $('#rank-3').addClass('btn-warning');
    });
    $('#rank-5').click(function (e) {
        $('#rank-4').addClass('btn-warning');
    });

});