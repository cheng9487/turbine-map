var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_generalmap_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://maps.nlsc.gov.tw/S_Maps/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "PHOTO2",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'generalmap',
                            popuplayertitle: 'generalmap',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_generalmap_1, 0]);
var format_Address_2 = new ol.format.GeoJSON();
var features_Address_2 = format_Address_2.readFeatures(json_Address_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Address_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Address_2.addFeatures(features_Address_2);
var lyr_Address_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Address_2, 
                style: style_Address_2,
                popuplayertitle: 'Address',
                interactive: false,
                title: '<img src="styles/legend/Address_2.png" /> Address'
            });
var format_Buffer_3 = new ol.format.GeoJSON();
var features_Buffer_3 = format_Buffer_3.readFeatures(json_Buffer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_3.addFeatures(features_Buffer_3);
var lyr_Buffer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer_3, 
                style: style_Buffer_3,
                popuplayertitle: 'Buffer',
                interactive: false,
                title: '<img src="styles/legend/Buffer_3.png" /> Buffer'
            });
var format_Points_4 = new ol.format.GeoJSON();
var features_Points_4 = format_Points_4.readFeatures(json_Points_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Points_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Points_4.addFeatures(features_Points_4);
var lyr_Points_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Points_4, 
                style: style_Points_4,
                popuplayertitle: 'Points',
                interactive: true,
                title: '<img src="styles/legend/Points_4.png" /> Points'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_generalmap_1.setVisible(false);lyr_Address_2.setVisible(false);lyr_Buffer_3.setVisible(false);lyr_Points_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_generalmap_1,lyr_Address_2,lyr_Buffer_3,lyr_Points_4];
lyr_Address_2.set('fieldAliases', {'fid': 'fid', '省市縣市代碼': '省市縣市代碼', '鄉鎮市區代碼': '鄉鎮市區代碼', '村里': '村里', '鄰': '鄰', '街（路段）': '街（路段）', '地區': '地區', '巷': '巷', '弄': '弄', '號': '號', '橫座標': '橫座標', '縱座標': '縱座標', });
lyr_Buffer_3.set('fieldAliases', {'fid': 'fid', 'station': 'station', 'WGS84_E': 'WGS84_E', 'WGS84_N': 'WGS84_N', 'TWD97_X': 'TWD97_X', 'TWD97_Y': 'TWD97_Y', 'ringId': 'ringId', 'distance': 'distance', });
lyr_Points_4.set('fieldAliases', {'station': 'station', 'WGS84_E': 'WGS84_E', 'WGS84_N': 'WGS84_N', 'TWD97_X': 'TWD97_X', 'TWD97_Y': 'TWD97_Y', });
lyr_Address_2.set('fieldImages', {'fid': 'TextEdit', '省市縣市代碼': 'Range', '鄉鎮市區代碼': 'Range', '村里': 'TextEdit', '鄰': 'Range', '街（路段）': 'TextEdit', '地區': 'TextEdit', '巷': 'TextEdit', '弄': 'TextEdit', '號': 'TextEdit', '橫座標': 'TextEdit', '縱座標': 'TextEdit', });
lyr_Buffer_3.set('fieldImages', {'fid': 'TextEdit', 'station': 'TextEdit', 'WGS84_E': 'TextEdit', 'WGS84_N': 'TextEdit', 'TWD97_X': 'TextEdit', 'TWD97_Y': 'TextEdit', 'ringId': 'Range', 'distance': 'TextEdit', });
lyr_Points_4.set('fieldImages', {'station': 'TextEdit', 'WGS84_E': 'TextEdit', 'WGS84_N': 'TextEdit', 'TWD97_X': 'TextEdit', 'TWD97_Y': 'TextEdit', });
lyr_Address_2.set('fieldLabels', {'fid': 'no label', '省市縣市代碼': 'no label', '鄉鎮市區代碼': 'no label', '村里': 'no label', '鄰': 'no label', '街（路段）': 'no label', '地區': 'no label', '巷': 'no label', '弄': 'no label', '號': 'no label', '橫座標': 'no label', '縱座標': 'no label', });
lyr_Buffer_3.set('fieldLabels', {'fid': 'no label', 'station': 'no label', 'WGS84_E': 'no label', 'WGS84_N': 'no label', 'TWD97_X': 'no label', 'TWD97_Y': 'no label', 'ringId': 'no label', 'distance': 'no label', });
lyr_Points_4.set('fieldLabels', {'station': 'no label', 'WGS84_E': 'no label', 'WGS84_N': 'no label', 'TWD97_X': 'no label', 'TWD97_Y': 'no label', });
lyr_Points_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});