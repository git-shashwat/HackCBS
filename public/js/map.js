/* Current Location */
window.onload = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(markPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function markPosition(position) {
    const currentLocation = position.coords.longitude + "," + position.coords.latitude
    // const currentLocation = [position.coords.longitude, position.coords.lattitude];

    /* MapBox API to fetch location of smart bins*/

    mapboxgl.accessToken = 'pk.eyJ1IjoicnhzaGFzaHdhdCIsImEiOiJjazBkbGNidHAwMTExM25rZnJpamdsNDF6In0.gw4VuFWLXxk6kdY_zxTPgw';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: currentLocation.split(','),
    zoom: 14.15
    });
    map.on('load', function () {
        // Add a layer showing the places.
        map.loadImage('https://img.icons8.com/metro/52/000000/trash.png', function(error, image) {
        if (error) throw error
        map.addImage('trash', image)    
        map.addLayer({
                "id": "places",
                "type": "symbol",
                "source": {
                "type": "geojson",
                "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {
                    "description": "<strong>SB-101</strong>",
                    "icon": "recycling"
                    },
                    "geometry": {
                    "type": "Point",
                    "coordinates": currentLocation.split(',')
                    }
                },
            ]
                }
                },
                "layout": {
                "icon-image": "trash",
                "icon-size": 0.50,
                "icon-allow-overlap": true
                }
            });
        
            map.on('click', 'places', function (e) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = e.features[0].properties.description;
        
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
        
            new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
            });
        
            map.on('mouseenter', 'places', function () {
            map.getCanvas().style.cursor = 'pointer';
            });
        
            map.on('mouseleave', 'places', function () {
            map.getCanvas().style.cursor = '';
            });
            });
        })
}
