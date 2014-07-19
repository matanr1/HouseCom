/// <reference path="https://maps.googleapis.com/maps/api/js?key=AIzaSyBMxXXx_oaTw-wxmFL5I-W8jR-Y3eJYtbA&language=he">

// Map Vars
var map;
var startCenter = new google.maps.LatLng(31.300512587896986, 35.020294314452656);
var startZoom = 8;
// UI items



function initialize() {
    var mapOptions = {
        zoom: startZoom,
        center: startCenter
    };

    map = new google.maps.Map(document.getElementById('map-api'), mapOptions);


    setInitializeValues();
    eventListeners();
}


function setInitializeValues() {
    $(document).ready(function () {
        $('input#tbLat').get(0).value = map.getCenter().lat();
        $('input#tbLng').get(0).value = map.getCenter().lng();

        $('input#tbZoom').get(0).value = map.getZoom();

        //$('input#tbNorthEastLat').get(0).value = map.getBounds().getNorthEast().lat();
        //$('input#tbNorthEastLng').get(0).value = map.getBounds().getNorthEast().lng();

        //$('input#tbSouthWestLat').get(0).value = map.getBounds().getSouthWest().lat();
        //$('input#tbSouthWestLng').get(0).value = map.getBounds().getSouthWest().lng();
    })
}

function eventListeners() {
    if (map != null) {
        google.maps.event.addListener(map, 'click', mapClick);
        google.maps.event.addListener(map, 'center_changed', mapCenterChanged);
        google.maps.event.addListener(map, 'zoom_changed', mapZoomChanged);
    }
}

google.maps.event.addDomListener(window, 'load', initialize);


// Event functions

function mapClick(e) {
    $('#tbNewMarkerLat').get(0).value = e.latLng.lat();
    $('#tbNewMarkerLng').get(0).value = e.latLng.lng();
}

function mapCenterChanged() {
    if (!$.isReady) return;

    $('input#tbLat').get(0).value = map.getCenter().lat();
    $('input#tbLng').get(0).value = map.getCenter().lng();

    $('input#tbNorthEastLat').get(0).value = map.getBounds().getNorthEast().lat();
    $('input#tbNorthEastLng').get(0).value = map.getBounds().getNorthEast().lng();

    $('input#tbSouthWestLat').get(0).value = map.getBounds().getSouthWest().lat();
    $('input#tbSouthWestLng').get(0).value = map.getBounds().getSouthWest().lng();
}

function mapZoomChanged() {
    if (!$.isReady) return;

    $('input#tbZoom').get(0).value = map.getZoom();
}

$(document).ready(function () {
    $('button').click(function (e) {
        switch (e.target.id) {
            case "set-new-marker": setNewMarker(); break;
            case "set-center-marker": setCenterMarker(); break;
            case "clear-all-marker": clearAllMarker(); break;
            case "get-bounds": getBounds(); break;
            case "set-random-markers": setRandomMarkers(); break;
        }
    });
});


// Marker functions

function setNewMarker() {
    var lat = Number($('#tbNewMarkerLat').get(0).value);
    var lng = Number($('#tbNewMarkerLng').get(0).value);
    var pos = new google.maps.LatLng(lat, lng);
    var marker = new google.maps.Marker({
        position: pos,
    });

    marker.setMap(map);
}

function setCenterMarker() {
    var marker = new google.maps.Marker({
        position: map.getCenter(),
    });

    marker.setMap(map);
}

function clearAllMarker() {
    map.clearMarkers();
}

function getBounds() {
    $('#tbNewNorthEastLat').get(0).value = map.getBounds().getNorthEast().lat();
    $('#tbNewNorthEastLng').get(0).value = map.getBounds().getNorthEast().lng();
    $('#tbNewSouthWestLat').get(0).value = map.getBounds().getSouthWest().lat();
    $('#tbNewSouthWestLng').get(0).value = map.getBounds().getSouthWest().lng();
}

function setRandomMarkers() {
    var many = Number($('#tbHowManyMarkers').get(0).value);
    var neLat = $('#tbNewNorthEastLat').get(0).value;
    var neLng = $('#tbNewNorthEastLng').get(0).value;
    var swLat = $('#tbNewSouthWestLat').get(0).value;
    var swLng = $('#tbNewSouthWestLng').get(0).value;
    var ne = new google.maps.LatLng(neLat, neLng);
    var sw = new google.maps.LatLng(swLat, swLng);
    var bounds = new google.maps.LatLngBounds(ne, sw);

    for (var i = 0; i < many; i++) {
        var marker = new google.maps.Marker({
            position: getRandomLatLng(bounds)
        });
        marker.setMap(map);
    }
}

function getRandomLatLng(bounds) {
    var latMin = bounds.getSouthWest().lat();
    var lngMin = bounds.getSouthWest().lng();
    var latRange = bounds.getNorthEast().lat() - latMin;
    var lngRange = bounds.getNorthEast().lng() - lngMin;

    var lat = latMin + Math.random() * latRange;
    var lng = lngMin + Math.random() * lngRange;

    return new google.maps.LatLng(lat, lng);
}