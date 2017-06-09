function myMap() {
                var mapCanvas = document.getElementById("map");
                var mapOptions = {
                    center: new google.maps.LatLng(37.9, -91.8)
                    , zoom: 5
                }
                var map = new google.maps.Map(mapCanvas, mapOptions);
}
