



function initMap() {

    var map, marker, request, service;

    var infoWindow = new google.maps.InfoWindow;
    
     map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -31.776, lng: -52.3594},
      zoom: 15,
      styles: [
        
        {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "hue": "#6600ff"
                },
                {
                    "lightness": "76"
                },
                {
                    "saturation": "2"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#e1ccfe"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#a7a7a7"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
                {
                    "saturation": "100"
                },
                {
                    "lightness": "34"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#875dc1"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#f3eff9"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "hue": "#b100ff"
                },
                {
                    "saturation": "20"
                },
                {
                    "lightness": "40"
                },
                {
                    "gamma": "1"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ddd2ee"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#875dc1"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#bca7de"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#bca7de"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "weight": 1.8
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#bca7de"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#bca7de"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#bca7de"
                }
            ]
        }


      ]
    });

    
    

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

     
      map.setCenter(pos);
            
        

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    
            
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  var signPlacesTab = document.getElementById("signPlacesTab");

  var markers = [];

  signPlacesTab.addEventListener("click", function (e) {

    // Sets the map on all markers in the array.
    function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }

      // Removes the markers from the map, but keeps them in the array.
      function clearMarkers() {
        setMapOnAll(null);
        markers = [];
      }

    clearMarkers();

    var typeOfSign = (e.target.innerText == "Áries" ? "gym" : "bakery");


    request = {
        location: {lat: -31.776, lng: -52.3594},
        radius: 5000,
        type: typeOfSign
  
    };



    service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);



    function callback(results, status) {
        if(status == google.maps.places.PlacesServiceStatus.OK){
            for(var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }


    function createMarker(place) {
        var placeLoc = place.geometry.location;
            marker = new google.maps.Marker({
            map: map,
            position: placeLoc,
            animation: google.maps.Animation.DROP
        });

        markers.push(marker);
    
        google.maps.event.addListener(marker, 'click', function() {
            var info = new google.maps.InfoWindow;

            var placeInfo = place.name + (place.opening_hours.open_now ? " - ABERTO" : " - FECHADO");
    
            info.setContent(placeInfo);
            info.open(map, this);
          });
    }










  });

 

   


}









function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}




  

  