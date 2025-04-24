var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_RioBlancopredial_1 = new ol.format.GeoJSON();
var features_RioBlancopredial_1 = format_RioBlancopredial_1.readFeatures(json_RioBlancopredial_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RioBlancopredial_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RioBlancopredial_1.addFeatures(features_RioBlancopredial_1);
var lyr_RioBlancopredial_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RioBlancopredial_1, 
                style: style_RioBlancopredial_1,
                popuplayertitle: 'RioBlanco predial',
                interactive: true,
    title: 'RioBlanco predial<br />\
    <img src="styles/legend/RioBlancopredial_1_0.png" /> 0 - 3483000<br />\
    <img src="styles/legend/RioBlancopredial_1_1.png" /> 3483000 - 9716000<br />\
    <img src="styles/legend/RioBlancopredial_1_2.png" /> 9716000 - 22274000<br />\
    <img src="styles/legend/RioBlancopredial_1_3.png" /> 22274000 - 41857000<br />\
    <img src="styles/legend/RioBlancopredial_1_4.png" /> 41857000 - 76370000<br />' });

lyr_GoogleTerrain_0.setVisible(true);lyr_RioBlancopredial_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_RioBlancopredial_1];
lyr_RioBlancopredial_1.set('fieldAliases', {'codigo_nue': 'codigo_nue', 'NOMBRE': 'NOMBRE', 'ESTADO CIV': 'ESTADO CIV', 'COMUNA': 'COMUNA', 'DESTINO EC': 'DESTINO EC', 'AREA TERRE': 'AREA TERRE', 'AREA CONST': 'AREA CONST', 'AVALUO': 'AVALUO', });
lyr_RioBlancopredial_1.set('fieldImages', {'codigo_nue': 'TextEdit', 'NOMBRE': 'TextEdit', 'ESTADO CIV': 'TextEdit', 'COMUNA': 'TextEdit', 'DESTINO EC': 'TextEdit', 'AREA TERRE': 'TextEdit', 'AREA CONST': 'TextEdit', 'AVALUO': 'TextEdit', });
lyr_RioBlancopredial_1.set('fieldLabels', {'codigo_nue': 'hidden field', 'NOMBRE': 'inline label - always visible', 'ESTADO CIV': 'hidden field', 'COMUNA': 'hidden field', 'DESTINO EC': 'inline label - visible with data', 'AREA TERRE': 'inline label - always visible', 'AREA CONST': 'hidden field', 'AVALUO': 'inline label - always visible', });
lyr_RioBlancopredial_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});