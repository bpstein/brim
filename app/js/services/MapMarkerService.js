angular.module("brimApp")
.service('mapMarkerService', function () {
  const GoogleOverlayView = function(element, latlng) {
    this.element = element;
    this.latlng = latlng;
  };
  GoogleOverlayView.prototype = new google.maps.OverlayView();
  GoogleOverlayView.prototype.draw = function() {
    let panes = this.getPanes();
    let point = this.getProjection().fromLatLngToDivPixel(this.latlng);
    panes.overlayImage.appendChild(this.element[0]);
    if (point) {
      this.element.css('left', point.x + 'px');
      this.element.css('top', point.y + 'px');
    }
  };
  GoogleOverlayView.prototype.onRemove = function() {};
  this.GoogleOverlayView = GoogleOverlayView;
})