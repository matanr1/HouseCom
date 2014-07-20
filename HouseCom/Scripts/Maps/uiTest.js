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


$(function () {

    var saveLoaction = function () {
        var $form = $(this);
        var $dark = $('.dark');
        var options = {
            url: $form.attr('action'),
            type: $form.attr('method'),
            data: $form.serialize()
        };

        $.ajax(options).done(function (data) {
            var lat = 35; // data["Latitude"];
            var lng = 31; // data["Longitude"];
            var position = new google.maps.LatLng(lat, lng);
            addMarker(position);
            $dark.hide();
        });

        return false;
    };

    $('form[data-maps-save-loaction="true"]').submit(saveLoaction);
});