const secrets = require('./secrets');
const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = secrets.mapboxKey;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/basic-v9',
    zoom: 13,
    center: [4.899, 52.372]
});

const layerList = document.getElementById('menu');
const inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    const layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}