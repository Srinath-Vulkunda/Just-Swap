// Initialize map function
function initMap() {
    // Map options
    const options = {
        zoom: 10,
        center: { lat: 40.73061, lng: -73.935242 } // Default to New York City
    };

    // Create map
    const map = new google.maps.Map(document.getElementById('map'), options);

    // Array of stations
    const stations = [
        {
            name: "Station 1",
            location: { lat: 40.73061, lng: -73.935242 }
        },
        {
            name: "Station 2",
            location: { lat: 40.74061, lng: -73.945242 }
        },
        {
            name: "Station 3",
            location: { lat: 40.75061, lng: -73.955242 }
        }
    ];

    // Add markers
    stations.forEach(station => {
        addMarker(station, map);
    });

    // Display stations in list
    displayStationList(stations, map);
}

// Add marker function
function addMarker(station, map) {
    const marker = new google.maps.Marker({
        position: station.location,
        map: map,
        title: station.name
    });

    // Info window
    const infoWindow = new google.maps.InfoWindow({
        content: `<h3>${station.name}</h3>`
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}

// Display stations in list
function displayStationList(stations, map) {
    const stationList = document.getElementById('stations');
    stations.forEach((station, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = station.name;
        listItem.addEventListener('click', () => {
            map.setCenter(station.location);
            google.maps.event.trigger(map.markers[index], 'click');
        });
        stationList.appendChild(listItem);
    });
}
