function initialize() {
var mapCanvas = document.getElementById('map');
var mapOptions = {
  center: new google.maps.LatLng(41.6320718,2.1639137),
  zoom: 18,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(mapCanvas, mapOptions)
}
google.maps.event.addDomListener(window, 'load', initialize);