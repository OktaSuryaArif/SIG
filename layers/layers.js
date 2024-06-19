ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleRoads_0 = new ol.layer.Tile({
            'title': 'Google Roads',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z} '
            })
        });
var format_ANAK_KRAKATAU_2 = new ol.format.GeoJSON();
var features_ANAK_KRAKATAU_2 = format_ANAK_KRAKATAU_2.readFeatures(json_ANAK_KRAKATAU_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANAK_KRAKATAU_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANAK_KRAKATAU_2.addFeatures(features_ANAK_KRAKATAU_2);
var lyr_ANAK_KRAKATAU_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANAK_KRAKATAU_2, 
                style: style_ANAK_KRAKATAU_2,
                popuplayertitle: "ANAK_KRAKATAU",
                interactive: true,
                title: '<img src="styles/legend/ANAK_KRAKATAU_2.png" /> ANAK_KRAKATAU'
            });
var format_BANTEN_3 = new ol.format.GeoJSON();
var features_BANTEN_3 = format_BANTEN_3.readFeatures(json_BANTEN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANTEN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANTEN_3.addFeatures(features_BANTEN_3);
var lyr_BANTEN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANTEN_3, 
                style: style_BANTEN_3,
                popuplayertitle: "BANTEN",
                interactive: true,
    title: 'BANTEN<br />\
    <img src="styles/legend/BANTEN_3_0.png" /> Kawasan Rawan Bencana Gempabumi Menengah<br />\
    <img src="styles/legend/BANTEN_3_1.png" /> Kawasan Rawan Bencana Gempabumi Rendah<br />\
    <img src="styles/legend/BANTEN_3_2.png" /> Kawasan Rawan Bencana Gempabumi Sangat Rendah<br />\
    <img src="styles/legend/BANTEN_3_3.png" /> Kawasan Rawan Bencana Gempabumi Tinggi<br />\
    <img src="styles/legend/BANTEN_3_4.png" /> <br />'
        });
var format_LAMPUNG_4 = new ol.format.GeoJSON();
var features_LAMPUNG_4 = format_LAMPUNG_4.readFeatures(json_LAMPUNG_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAMPUNG_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAMPUNG_4.addFeatures(features_LAMPUNG_4);
var lyr_LAMPUNG_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAMPUNG_4, 
                style: style_LAMPUNG_4,
                popuplayertitle: "LAMPUNG",
                interactive: true,
    title: 'LAMPUNG<br />\
    <img src="styles/legend/LAMPUNG_4_0.png" /> Kawasan Rawan Bencana Gempabumi Menengah<br />\
    <img src="styles/legend/LAMPUNG_4_1.png" /> Kawasan Rawan Bencana Gempabumi Rendah<br />\
    <img src="styles/legend/LAMPUNG_4_2.png" /> Kawasan Rawan Bencana Gempabumi Tinggi<br />\
    <img src="styles/legend/LAMPUNG_4_3.png" /> <br />'
        });
var format_KRB_Tsunami_Teluk_Lampung_5 = new ol.format.GeoJSON();
var features_KRB_Tsunami_Teluk_Lampung_5 = format_KRB_Tsunami_Teluk_Lampung_5.readFeatures(json_KRB_Tsunami_Teluk_Lampung_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KRB_Tsunami_Teluk_Lampung_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KRB_Tsunami_Teluk_Lampung_5.addFeatures(features_KRB_Tsunami_Teluk_Lampung_5);
var lyr_KRB_Tsunami_Teluk_Lampung_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KRB_Tsunami_Teluk_Lampung_5, 
                style: style_KRB_Tsunami_Teluk_Lampung_5,
                popuplayertitle: "KRB_Tsunami_Teluk_Lampung",
                interactive: true,
    title: 'KRB_Tsunami_Teluk_Lampung<br />\
    <img src="styles/legend/KRB_Tsunami_Teluk_Lampung_5_0.png" /> Kawasan Rawan Bencana Tsunami Menengah (Daerah ini berpotensi dilanda tsunami dengan ketinggian genangan 1 - 3 m dengan skala intensitas tsunami V-VI).<br />\
    <img src="styles/legend/KRB_Tsunami_Teluk_Lampung_5_1.png" /> Kawasan Rawan Bencana Tsunami Rendah (Daerah ini berpotensi dilanda tsunami dengan ketinggian genangan kurang dari 1 m dengan skala intensitas tsunami V atau kurang).<br />\
    <img src="styles/legend/KRB_Tsunami_Teluk_Lampung_5_2.png" /> Kawasan Rawan Bencana Tsunami Tinggi (Daerah ini berpotensi dilanda tsunami dengan ketinggian genangan > 3 m dengan skala intensitas tsunami VII atau lebih).<br />\
    <img src="styles/legend/KRB_Tsunami_Teluk_Lampung_5_3.png" /> <br />'
        });
var format_KRB_Tsunami_Banten_6 = new ol.format.GeoJSON();
var features_KRB_Tsunami_Banten_6 = format_KRB_Tsunami_Banten_6.readFeatures(json_KRB_Tsunami_Banten_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KRB_Tsunami_Banten_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KRB_Tsunami_Banten_6.addFeatures(features_KRB_Tsunami_Banten_6);
var lyr_KRB_Tsunami_Banten_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KRB_Tsunami_Banten_6, 
                style: style_KRB_Tsunami_Banten_6,
                popuplayertitle: "KRB_Tsunami_Banten",
                interactive: true,
    title: 'KRB_Tsunami_Banten<br />\
    <img src="styles/legend/KRB_Tsunami_Banten_6_0.png" /> Kawasan Rawan Bencana Tsunami Menengah (Daerah ini berpotensi dilanda tsunami dengan ketinggian genangan 1 - 3 m dengan skala intensitas tsunami V-VI).<br />\
    <img src="styles/legend/KRB_Tsunami_Banten_6_1.png" /> Kawasan Rawan Bencana Tsunami Rendah (Daerah ini berpotensi dilanda tsunami dengan ketinggian genangan kurang dari 1 m dengan skala intensitas tsunami V atau kurang).<br />\
    <img src="styles/legend/KRB_Tsunami_Banten_6_2.png" /> Kawasan Rawan Bencana Tsunami Tinggi (Daerah ini berpotensi dilanda tsunami dengan ketinggian genangan > 3 m dengan skala intensitas tsunami VII atau lebih).<br />\
    <img src="styles/legend/KRB_Tsunami_Banten_6_3.png" /> <br />'
        });
var group_Tsunami = new ol.layer.Group({
                                layers: [lyr_KRB_Tsunami_Teluk_Lampung_5,lyr_KRB_Tsunami_Banten_6,],
                                fold: "open",
                                title: "Tsunami"});
var group_Gempa = new ol.layer.Group({
                                layers: [lyr_BANTEN_3,lyr_LAMPUNG_4,],
                                fold: "open",
                                title: "Gempa"});

lyr_GoogleRoads_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_ANAK_KRAKATAU_2.setVisible(true);lyr_BANTEN_3.setVisible(true);lyr_LAMPUNG_4.setVisible(true);lyr_KRB_Tsunami_Teluk_Lampung_5.setVisible(true);lyr_KRB_Tsunami_Banten_6.setVisible(true);
var layersList = [lyr_GoogleRoads_0,lyr_GoogleSatellite_1,lyr_ANAK_KRAKATAU_2,group_Gempa,group_Tsunami];
lyr_ANAK_KRAKATAU_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'REMARK': 'REMARK', 'THTERBIT': 'THTERBIT', 'CLAPI': 'CLAPI', 'DEPMAG': 'DEPMAG', 'ERU': 'ERU', 'INDGA': 'INDGA', 'KOORDX': 'KOORDX', 'KOORDY': 'KOORDY', 'LAV': 'LAV', 'MATGA': 'MATGA', 'MON': 'MON', 'SRS_ID': 'SRS_ID', 'TEK': 'TEK', 'TIM': 'TIM', 'VEI': 'VEI', 'VIC': 'VIC', 'DUR': 'DUR', 'VEEA': 'VEEA', });
lyr_BANTEN_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'KRBID': 'KRBID', 'KELAS': 'KELAS', 'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'FCODE': 'FCODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_LAMPUNG_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'KRBID': 'KRBID', 'KELAS': 'KELAS', 'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'FCODE': 'FCODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_KRB_Tsunami_Teluk_Lampung_5.set('fieldAliases', {'ID': 'ID', 'UNSUR': 'UNSUR', 'KETERANGAN': 'KETERANGAN', 'TAHUN': 'TAHUN', 'WILAYAH': 'WILAYAH', 'LCODE': 'LCODE', 'FCODE': 'FCODE', });
lyr_KRB_Tsunami_Banten_6.set('fieldAliases', {'ID': 'ID', 'UNSUR': 'UNSUR', 'KETERANGAN': 'KETERANGAN', 'TAHUN': 'TAHUN', 'WILAYAH': 'WILAYAH', 'LCODE': 'LCODE', 'FCODE': 'FCODE', });
lyr_ANAK_KRAKATAU_2.set('fieldImages', {'OBJECTID_1': '', 'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'METADATA': '', 'REMARK': '', 'THTERBIT': '', 'CLAPI': '', 'DEPMAG': '', 'ERU': '', 'INDGA': '', 'KOORDX': '', 'KOORDY': '', 'LAV': '', 'MATGA': '', 'MON': '', 'SRS_ID': '', 'TEK': '', 'TIM': '', 'VEI': '', 'VIC': '', 'DUR': '', 'VEEA': '', });
lyr_BANTEN_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'KRBID': 'TextEdit', 'KELAS': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'FCODE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LAMPUNG_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'KRBID': 'TextEdit', 'KELAS': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'FCODE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KRB_Tsunami_Teluk_Lampung_5.set('fieldImages', {'ID': 'Range', 'UNSUR': 'TextEdit', 'KETERANGAN': 'TextEdit', 'TAHUN': 'Range', 'WILAYAH': 'TextEdit', 'LCODE': 'TextEdit', 'FCODE': 'TextEdit', });
lyr_KRB_Tsunami_Banten_6.set('fieldImages', {'ID': 'Range', 'UNSUR': 'TextEdit', 'KETERANGAN': 'TextEdit', 'TAHUN': 'Range', 'WILAYAH': 'TextEdit', 'LCODE': 'TextEdit', 'FCODE': 'TextEdit', });
lyr_ANAK_KRAKATAU_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'REMARK': 'no label', 'THTERBIT': 'no label', 'CLAPI': 'no label', 'DEPMAG': 'no label', 'ERU': 'no label', 'INDGA': 'no label', 'KOORDX': 'no label', 'KOORDY': 'no label', 'LAV': 'no label', 'MATGA': 'no label', 'MON': 'no label', 'SRS_ID': 'no label', 'TEK': 'no label', 'TIM': 'no label', 'VEI': 'no label', 'VIC': 'no label', 'DUR': 'no label', 'VEEA': 'no label', });
lyr_BANTEN_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'KRBID': 'no label', 'KELAS': 'no label', 'NAMOBJ': 'no label', 'LCODE': 'no label', 'FCODE': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_LAMPUNG_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'KRBID': 'no label', 'KELAS': 'no label', 'NAMOBJ': 'no label', 'LCODE': 'no label', 'FCODE': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_KRB_Tsunami_Teluk_Lampung_5.set('fieldLabels', {'ID': 'no label', 'UNSUR': 'no label', 'KETERANGAN': 'no label', 'TAHUN': 'no label', 'WILAYAH': 'no label', 'LCODE': 'no label', 'FCODE': 'no label', });
lyr_KRB_Tsunami_Banten_6.set('fieldLabels', {'ID': 'no label', 'UNSUR': 'no label', 'KETERANGAN': 'no label', 'TAHUN': 'no label', 'WILAYAH': 'no label', 'LCODE': 'no label', 'FCODE': 'no label', });
lyr_KRB_Tsunami_Banten_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});