function initMap() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    /*var myLatlng = new google.maps.LatLng(25.2806246, 51.4989253);
    var mapOptions = {
        zoom: 7,
        center: myLatlng,
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var addresses = ['Tabibi'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCiJQP2xpqYZ6StYLlm6ibWiSc_Fcaz7L4&address=' + addresses[x], null, function (data) {

            if (data.results.length > 0) {
                var p = data.results[0].geometry.location;
                var latlng = new google.maps.LatLng(25.2806246, 51.4989253);
                new google.maps.Marker({
                    position: latlng,
                    map: map,
                    icon: '../images/loc.png'
                });
            }
        });
    }*/

    var tabibi = {lat: 25.2577206, lng: 51.4890403};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 16, center: tabibi});
    var marker = new google.maps.Marker({position: tabibi, map: map, icon: '/cdn/images/loc.png'});
}