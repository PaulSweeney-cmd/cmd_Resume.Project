function initMap() { /* create a new map object inside this function*/

var map = new google.maps.Map(document.getElementById("map"), {  /* Use the object to retrieve the ID of map and set the coordinates below with a zoom initial of 3 */
    zoom: 3,  
    center: {
        lat: 46.619261,
        lng: -33.134766
    }
});

/* Adding the markers */
var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var locations = [ /* Adding an array with a set of objects for the latitude and longitude*/
    { lat: 40.785091, lng: -73.968285 },
    { lat: 41.084045, lng: -73.874245 },
    { lat: 40.754932, lng: -73.984016 }
];

/* iterate through that array and create a new marker that has the label from our string. */
var markers = locations.map(function(location, i) { /* map method is a built in javaScript method and not associated with google maps, it can take up to 3 arguments and works similarly to a for loop */
return new google.maps.Marker({
    position: location, /* position value is set to the current location */
    label: labels[i % labels.length] /* % operator is so that if we have more than 26 locations, then it will loop around to the start of our string again and go from Z back to A, instead of throwing an error */
    });
});
var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}