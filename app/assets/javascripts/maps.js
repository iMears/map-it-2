$(document).ready(function(){
  initialize();
  resizeView();

  $(window).resize(function () {
    resizeView();
  })
})

function initialize() {
  var mapOptions = {
    zoom: 9,
    center: new google.maps.LatLng(28.9285745, 77.09149350000007),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  window.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
    map: map,
    draggable: false,
    position: new google.maps.LatLng(28.9285745, 77.09149350000007)
  });
}

google.maps.event.addDomListener(window, 'resize', initialize);
google.maps.event.addDomListener(window, 'load', initialize)

function resizeView() {
  if (!window.canvasWrapper) {
    window.canvasWrapper = $('#canvas-wrapper'); // Store the canvas on the window
  }

  if (!window.mapCanvas) {
    window.mapCanvas = $('#map-canvas'); // Store the canvas on the window
  }

  console.log(window)

  var hh = 50;
  var sidebarWidth = 635;
  var winW = window.innerWidth;
  var winH = window.innerHeight;

  window.canvasWrapper.css("height", (winH - hh) + "px");
  window.canvasWrapper.css("width", (winW - sidebarWidth) + "px");
  window.mapCanvas.css("height", (winH - hh) + "px");
}