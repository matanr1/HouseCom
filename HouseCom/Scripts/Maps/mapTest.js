/// <reference path="https://maps.googleapis.com/maps/api/js?key=AIzaSyBMxXXx_oaTw-wxmFL5I-W8jR-Y3eJYtbA&language=he">

// Map Vars
var map;
var geocoder;
var infowindow = new google.maps.InfoWindow();
var startCenter = new google.maps.LatLng(31.300512587896986, 35.020294314452656);
var startZoom = 8;
var markerCluster = null;
// UI items



function initialize() {
    var mapOptions = {
        zoom: startZoom,
        center: startCenter
    };

    map = new google.maps.Map(document.getElementById('map-api'), mapOptions);
    geocoder = new google.maps.Geocoder();

    setInitializeValues();
    eventListeners();
}

function clusterTest() {
    var markers = map.getMarkers();
    var a = markers[0].getPosition();
    //for (var i = 0; i < 100; i++) {
    //    var dataPhoto = data.photos[i];
    //    var latLng = new google.maps.LatLng(dataPhoto.latitude,
    //        dataPhoto.longitude);
    //    var marker = new google.maps.Marker({
    //        position: latLng
    //    });
    //    markers.push(marker);
    //}
    if (!markerCluster) {
        markerCluster = new MarkerClusterer(map, markers);
    }
    else {
        markerCluster.clearMarkers();
        markerCluster.addMarkers(markers, true);
    }
}


function setInitializeValues() {
    $(document).ready(function () {
        $('input#textbox-latitude').get(0).value = map.getCenter().lat();
        $('input#textbox-longitude').get(0).value = map.getCenter().lng();

        $('input#textbox-zoom').get(0).value = map.getZoom();

        //$('input#textbox-north-east-lat').get(0).value = map.getBounds().getNorthEast().lat();
        //$('input#textbox-north-east-lng').get(0).value = map.getBounds().getNorthEast().lng();

        //$('input#textbox-south-west-lat').get(0).value = map.getBounds().getSouthWest().lat();
        //$('input#textbox-south-west-lng').get(0).value = map.getBounds().getSouthWest().lng();
    })
}

function eventListeners() {
    if (map != null) {
        google.maps.event.addListener(map, 'click', mapClick);
        google.maps.event.addListener(map, 'dblclick', mapDoubleClick);
        google.maps.event.addListener(map, 'center_changed', mapCenterChanged);
        google.maps.event.addListener(map, 'zoom_changed', mapZoomChanged);
    }
}

google.maps.event.addDomListener(window, 'load', initialize);


// Event functions

function mapDoubleClick(e) {
    var position = e.latLng;
    $('#Latitude').val(e.latLng.lat());
    $('#Longitude').val(e.latLng.lng());
    $('.dark').show();
}

function mapClick(e) {
    $('#textbox-new-marker-lat').get(0).value = e.latLng.lat();
    $('#textbox-new-marker-lng').get(0).value = e.latLng.lng();
}

function mapCenterChanged() {
    if (!$.isReady) return;

    $('input#textbox-latitude').get(0).value = map.getCenter().lat();
    $('input#textbox-longitude').get(0).value = map.getCenter().lng();

    $('input#textbox-north-east-lat').get(0).value = map.getBounds().getNorthEast().lat();
    $('input#textbox-north-east-lng').get(0).value = map.getBounds().getNorthEast().lng();

    $('input#textbox-south-west-lat').get(0).value = map.getBounds().getSouthWest().lat();
    $('input#textbox-south-west-lng').get(0).value = map.getBounds().getSouthWest().lng();
}

function mapZoomChanged() {
    if (!$.isReady) return;

    $('input#textbox-zoom').get(0).value = map.getZoom();
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
    var lat = Number($('#textbox-new-marker-lat').get(0).value);
    var lng = Number($('#textbox-new-marker-lng').get(0).value);
    var pos = new google.maps.LatLng(lat, lng);
    addMarker(pos);
}

function setCenterMarker() {
    addMarker(map.getCenter());
}

function clearAllMarker() {
    map.clearMarkers();
    markerCluster.clearMarkers();
}

function getBounds() {
    $('#textbox-new-north-east-lat').get(0).value = map.getBounds().getNorthEast().lat();
    $('#textbox-new-north-east-lng').get(0).value = map.getBounds().getNorthEast().lng();
    $('#textbox-new-south-west-lat').get(0).value = map.getBounds().getSouthWest().lat();
    $('#textbox-new-south-west-lng').get(0).value = map.getBounds().getSouthWest().lng();
}

function setRandomMarkers() {
    var many = Number($('#textbox-how-many-markers').get(0).value);
    var neLat = $('#textbox-new-north-east-lat').get(0).value;
    var neLng = $('#textbox-new-north-east-lng').get(0).value;
    var swLat = $('#textbox-new-south-west-lat').get(0).value;
    var swLng = $('#textbox-new-south-west-lng').get(0).value;
    var ne = new google.maps.LatLng(neLat, neLng);
    var sw = new google.maps.LatLng(swLat, swLng);
    var bounds = new google.maps.LatLngBounds(ne, sw);
    for (var i = 0; i < many; i++) {
        addMarker(getRandomLatLng(bounds));
    }
    clusterTest();

}


function addMarker(position) {
    var marker = new google.maps.Marker({
        position: position
    });
    marker.setMap(map);
    marker.addListener('click', function () {
        getGeocoder(this.getPosition(), this);
    });

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


// Geocoder


function getGeocoder(latLng, marker) {
    geocoder.geocode({ 'latLng': latLng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results.length > 0) {
                infowindow.setContent(setInfoWindow(results));
            } else {
                infowindow.setContent('No results found');
            }
        }
        else {
            infowindow.setContent('Geocoder failed due to: ' + status);
        }
        infowindow.open(map, marker);
    });
}

function setInfoWindow(results) {
    var a = new Array();
    a.forEach(function (item) { });
    var html = '<ol>';
    results.forEach(function (item) { html += '<li>' + item.formatted_address + '</li>'; });
    html += '</ol>';
    return html;
}


