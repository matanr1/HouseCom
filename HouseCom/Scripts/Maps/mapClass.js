/// <reference path="https://maps.googleapis.com/maps/api/js?key=AIzaSyBMxXXx_oaTw-wxmFL5I-W8jR-Y3eJYtbA&language=he">


google.maps.Map.prototype.markers = [];

google.maps.Map.prototype.getMarkers = function () {
    return this.markers
};

google.maps.Map.prototype.clearMarkers = function () {
    for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
    }
    this.markers = [];
};

google.maps.Marker.prototype._setMap = google.maps.Marker.prototype.setMap;

google.maps.Marker.prototype.setMap = function (map) {
    if (map) {
        if (this.getVisible())
            map.markers.push(this);
    }
    this._setMap(map);
}