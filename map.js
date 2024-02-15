// Coordonnées initiales pour centrer la carte
const initialCoords = [43.6007, 1.4329]; // Coordonnées de Toulouse, France

// Map comparison
// Create Leaflet maps
const map1 = L.map('map1').setView(initialCoords, 10);
const map2 = L.map('map2').setView(initialCoords, 10);
const map3 = L.map('map3').setView(initialCoords, 10);

// Add OpenStreetMap tile layers
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
  { attribution: '© Esri, HERE, Garmin, FAO, USGS, NGA, EPA, NPS'
}).addTo(map1);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
{ attribution: '© Esri, HERE, Garmin, FAO, USGS, NGA, EPA, NPS'
}).addTo(map2);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
{ attribution: '© Esri, HERE, Garmin, FAO, USGS, NGA, EPA, NPS'
}).addTo(map3);

// Add your GeoServer WMS GeoTIFF layers
L.tileLayer.wms('https://www.geotests.net/geoserver/ASPinna/wms?service=WMS', {
    layers: 'carte_essences_lvl1',
    format: 'image/png',
    transparent: true,
    attribution: 'Une carte de K. Andrianarivony, A. Germain, C. Morgat et A-S. Pinna'
}).addTo(map1);
L.tileLayer.wms('https://www.geotests.net/geoserver/ASPinna/wms?service=WMS', {
    layers: 'carte_essences_lvl2',
    format: 'image/png',
    transparent: true,
    attribution: 'Une carte de K. Andrianarivony, A. Germain, C. Morgat et A-S. Pinna'
}).addTo(map2);
L.tileLayer.wms('https://www.geotests.net/geoserver/ASPinna/wms?service=WMS', {
    layers: 'carte_essences_lvl3',
    format: 'image/png',
    transparent: true,
    attribution: 'Une carte de K. Andrianarivony, A. Germain, C. Morgat et A-S. Pinna'
}).addTo(map3);

// Add a scale control to each map
L.control.scale().addTo(map1);
L.control.scale().addTo(map2);
L.control.scale().addTo(map3);

// Synchronize map movements
function synchronizeMaps(sourceMap, targetMaps) {
  sourceMap.on('move', function (event) {
      const center = sourceMap.getCenter();
      const zoom = sourceMap.getZoom();

      // Apply the same view to all target maps
      targetMaps.forEach(function (targetMap) {
          if (targetMap !== sourceMap) {
              targetMap.setView(center, zoom, { animate: false });
          }
      });
  });
}

// Call the synchronizeMaps function for each map
synchronizeMaps(map1, [map2, map3]);
synchronizeMaps(map2, [map1, map3]);
synchronizeMaps(map3, [map1, map2]);

// Add a fullscreen control to all three maps
map1.addControl(new L.Control.Fullscreen());
map2.addControl(new L.Control.Fullscreen());
map3.addControl(new L.Control.Fullscreen());

// Add Legend
var legend_simple_1 = L.control({ position: 'bottomright' });

legend_simple_1.onAdd = function (map1) {
  let divlegend = L.DomUtil.create('div', 'legend'); // Added 'legend' as the second parameter
  divlegend.innerHTML = (
    '<div id="legend-content1">' +
    '<strong>Essences forestière (nv. 1)</strong><br>' +
    '<img id="leg_map1" src="https://www.geotests.net/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&transparent=true&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=ASPinna:carte_essences_lvl1" alt="">' +
    '</div>' +
    '<style>#leg_map1 {width: 55%; display: block; padding: 5px; border-radius: 5px;}</style>' + // Adjusted the styles
    '<style>#legend-content1 {font-size: 9.5px; width: 140px; display: block; background-color: rgba(255, 255, 255, 0.8); padding: 5px; border-radius: 5px;}</style>'
  );

  return divlegend;
};

legend_simple_1.addTo(map1);

var legend_simple_2 = L.control({ position: 'bottomright' });

legend_simple_2.onAdd = function (map2) {
  let divlegend = L.DomUtil.create('div', 'legend'); // Added 'legend' as the second parameter
  divlegend.innerHTML = (
    '<div id="legend-content2">' +
    '<strong>Essences forestière (nv. 2)</strong><br>' +
    '<img id="leg_map2" src="https://www.geotests.net/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&transparent=true&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=ASPinna:carte_essences_lvl2" alt="">' +
    '</div>' +
    '<style>#leg_map2 {width: 100%; display: block; padding: 5px; border-radius: 5px;}</style>' + // Adjusted the styles
    '<style>#legend-content2 {font-size: 9.5px; width: 200px; display: block; background-color: rgba(255, 255, 255, 0.8); padding: 5px; border-radius: 5px;}</style>'
  );

  return divlegend;
};

legend_simple_2.addTo(map2);

var legend_simple_3 = L.control({ position: 'bottomright' });

legend_simple_3.onAdd = function (map3) {
  let divlegend = L.DomUtil.create('div', 'legend'); // Added 'legend' as the second parameter
  divlegend.innerHTML = (
    '<div id="legend-content3">' +
    '<strong>Essences forestière (nv. 3)</strong><br>' +
    '<img id="leg_map3" src="https://www.geotests.net/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&transparent=true&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=ASPinna:carte_essences_lvl3" alt="">' +
    '</div>' +
    '<style>#leg_map3 {width: 100%; display: block; padding: 5px; border-radius: 5px;}</style>' + // Adjusted the styles
    '<style>#legend-content3 {font-size: 9.5px; width: 200px; display: block; background-color: rgba(255, 255, 255, 0.8); padding: 5px; border-radius: 5px;}</style>'
  );

  return divlegend;
};

legend_simple_3.addTo(map3);






