function initMap() {
    var markerArray = [];
    var geocoder = new google.maps.Geocoder;
    
  
    // Instantiate a directions service.
    var directionsService = new google.maps.DirectionsService;
  
    // Create a map and center it on Manhattan.
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: saciLocation
    });

    var marker = new google.maps.Marker({
        position: saciLocation,
        map: map
      });


  
    // Create a renderer for directions and bind it to the map.
    var directionsDisplay = new google.maps.DirectionsRenderer({map});
  
    // Instantiate an info window to hold step text.
    var stepDisplay = new google.maps.InfoWindow;

    $(document).on('submit', '#form-route', function() {
        codeAddress(directionsDisplay, directionsService,
            markerArray, stepDisplay, map, saciLocation, geocoder);
          return false;
        });
}

var saciLocation = {lat: -23.551388, lng: -46.679712};
  
  function calculateAndDisplayRoute(directionsDisplay, directionsService,
      markerArray, stepDisplay, map, saciLocation, locationInit) {
    // First, remove any existing markers from the map.
    for (var i = 0; i < markerArray.length; i++) {
      markerArray[i].setMap(null);
    }
    // Retrieve the start and end locations and create a DirectionsRequest using
    // WALKING directions.
    directionsService.route({
      origin: `${locationInit.lat},${locationInit.lng}` ,//$('#origin').val(),
      destination: `${saciLocation.lat},${saciLocation.lng}`,
      travelMode: document.querySelector('input[name="driveOption"]:checked').value
    }, function(response, status) {
      // Route the directions and pass the response to a function to create
      // markers for each step.
      if (status === 'OK') {
        document.getElementById('warnings-panel').innerHTML =
            '<b>' + response.routes[0].warnings + '</b>';
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
    
  function attachInstructionText(stepDisplay, marker, text, map) {
    google.maps.event.addListener(marker, 'click', function() {
      // Open an info window when the marker is clicked on, containing the text
      // of the step.
      stepDisplay.setContent(text);
      stepDisplay.open(map, marker);
    });
} 

function codeAddress(directionsDisplay, directionsService,
    markerArray, stepDisplay, map, saciLocation, geocoder) {
    geocoder.geocode({
      componentRestrictions: {
        country: 'BR'
      },
      location: saciLocation,
      address: $('#origin').val()
    }, function(results, status) {
      if (status == 'OK') {
        let lat = (results[0].geometry.location.lat());
        let lng = (results[0].geometry.location.lng());
        var location = {lat, lng};
        calculateAndDisplayRoute(
            directionsDisplay, directionsService, markerArray, stepDisplay, map, saciLocation, location);
      } else {
        window.alert('Geocode was not successful for the following reason: ' + status);
      }
    });
    }