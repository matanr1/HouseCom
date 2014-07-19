/// <reference path="../jquery-ui-1.10.4.js" />

$(document).ready(function () {
    $('.draggable').draggable();

    $('button').click(function (e) {
        switch (e.target.id) {
            case "homeControlPanel": homeControlPanel();  break;
            case "mapBasic": mapBasic(); break;
            case "markerOptions": markerOptions(); break;
        }
    });

    $('div#homeControlPanel').show();
    $('div#mapBasic').hide();
    $('div#markerOptions').hide();
});


function homeControlPanel() {
    $('div#homeControlPanel').slideDown();
    $('div#mapBasic').slideUp();
    $('div#markerOptions').slideUp();
}

function mapBasic() {
    $('div#homeControlPanel').slideUp();
    $('div#mapBasic').slideDown();
    $('div#markerOptions').slideUp();
}

function markerOptions() {
    $('div#homeControlPanel').slideUp();
    $('div#mapBasic').slideUp();
    $('div#markerOptions').slideDown();
}