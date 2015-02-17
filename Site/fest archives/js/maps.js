function initialize() {
  var mapProp = {
  center:new google.maps.LatLng(28.595217,77.020972),
  zoom: 17,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
var marker = new google.maps.Marker({
    position: new google.maps.LatLng(28.595217,77.020972),
    map: map,
    title:"GGSIPU,New Delhi"});
}
google.maps.event.addDomListener(window, 'load', initialize);