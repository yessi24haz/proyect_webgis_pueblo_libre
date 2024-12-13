var departamento = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
    layers: "proyecto_webgis:pueblo_libre", //gisweb:pueblo libre
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 }); departamento.addTo(map);
var provincias = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
    layers: "proyecto_webgis:pueblo_libre", //gisweb:pueblo libre
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 }); provincias.addTo(map);
 var distritos = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
    layers: "proyecto_webgis:pueblo_libre", //gisweb:pueblo libre
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 }); distritos.addTo(map);
…
var overlayMaps = {
 "Centros educativos": centros,
 "Distritos Moquegua": distritos,
 "Provincias Moquegua": provincias,
 "Departamento Moquegua": departamento
.....

