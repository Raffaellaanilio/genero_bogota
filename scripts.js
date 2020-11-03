$(document).ready(function () {

    mapboxgl.accessToken = 'pk.eyJ1IjoicmFmZmFlbGxhYW5pbGlvIiwiYSI6ImNrZWlubncydjEwOGgyd21udHdmOWJ4M24ifQ.E2q7D7b-Je_x7VRjbqjAAA';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:[-74.0894,4.5378],
    zoom:10
    });

    map.addControl(new mapboxgl.NavigationControl());
  

    encendido = function encendido(x) {

      y = document.getElementById(x);

      $(y).toggle();

      var visibility = map.getLayoutProperty(x, 'visibility');

      // toggle layer visibility by changing the layout object's visibility property
      if (visibility === 'visible') {
          map.setLayoutProperty(x, 'visibility', 'visible');
          this.className = '';
      } else {
          this.className = 'active';
          map.setLayoutProperty(x, 'visibility', 'visible');
      }
  };
  
    map.on('load', function () {
      var url = './geojson/creciendo_familia.geojson';
      map.addSource('creciendo_familia', { type: 'geojson', data: url });
  
      var url2 = './geojson/comedor_comunitario.geojson';
      map.addSource('comedor_comunitario', { type: 'geojson', data: url2 });
  
      var url3 = './geojson/envejecimiento_activo.geojson';
      map.addSource('envejecimiento_activo', { type: 'geojson', data: url3 });
  
      var url4 = './geojson/hospitales.geojson';
      map.addSource('hospitales', { type: 'geojson', data: url4 });
  
      var url5 = './geojson/colegios.geojson';
      map.addSource('colegios', { type: 'geojson', data: url5 });
  
      var url6 = './geojson/casa_oportunidades_mujeres.geojson';
      map.addSource('casa_oportunidades_mujeres', { type: 'geojson', data: url6 });

      var url7 = './geojson/bibliotecas_publicas.geojson';
      map.addSource('bibliotecas_publicas', { type: 'geojson', data: url7 });

      var url8 = './geojson/Bibliotecas Comunitarias.geojson';
      map.addSource('Bibliotecas Comunitarias', { type: 'geojson', data: url8 });

      var url9 = './geojson/ciclovias.geojson';
      map.addSource('ciclovias', { type: 'geojson', data: url9 });

      var url10 = './geojson/paraderos.geojson';
      map.addSource('paraderos', { type: 'geojson', data: url10 });

      var url11 = './geojson/estaciones.geojson';
      map.addSource('estaciones', { type: 'geojson', data: url11 });

      var url12 = './geojson/indice_seguridad.geojson';
      map.addSource('indice_seguridad', { type: 'geojson', data: url12 });

      var url13 = './geojson/comisaria_familia.geojson';
      map.addSource('comisaria_familia', { type: 'geojson', data: url13 });

      var url14 = './geojson/total_viviendas.geojson';
      map.addSource('total_viviendas', { type: 'geojson', data: url14 });

      var url15 = './geojson/viviendas_65mas.geojson';
      map.addSource('viviendas_65mas', { type: 'geojson', data: url15 });

      var url16 = './geojson/razon_sexos.geojson';
      map.addSource('razon_sexos', { type: 'geojson', data: url16 });

      var url17 = './geojson/m_10mas_oficiohogar_sin_ingreso.geojson';
      map.addSource('m_10mas_oficiohogar_sin_ingreso', { type: 'geojson', data: url17 });

      var url18 = './geojson/15menos_dificultad.geojson';
      map.addSource('15menos_dificultad', { type: 'geojson', data: url18 });

      var url19 = './geojson/64mas_dificultad.geojson';
      map.addSource('64mas_dificultad', { type: 'geojson', data: url19 });

      var url20 = './geojson/84mas_dificultad.geojson';
      map.addSource('84mas_dificultad', { type: 'geojson', data: url20 });

      var url21 = './geojson/total_personas_dificultad.geojson';
      map.addSource('total_personas_dificultad', { type: 'geojson', data: url21 });

    });

    /* 
    map.on('click', 'estacion_de_servicio', function (e) {
      innerPopup = '<div><h5 style="color:orangered;">Estación de Servicio <i class="fas fa-gas-pump"></i> </h5> ';
      var nombre = e.features[0].properties.operator;
      if (nombre != 'null') {
          innerPopup = innerPopup + '<b>Nombre: </b>' + nombre + ' <br>';
      }
      var brand = e.features[0].properties.brand;
      if (brand != 'null') {
          innerPopup = innerPopup + '<b>Bandera: </b>' + brand + '<br>';
      }
      var id = e.features[0].properties.id;
      innerPopup = innerPopup + '<br><button class="btn btn-success btn-sm" onclick="corroborar(\'Estación de servicio\',\'' + brand + '\',\'' + id + '\')">Modificar o validar información</button></div>';

      new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(innerPopup)
          .addTo(map);
  });

  */

      map.addLayer({
          'id': 'creciendo_familia',
          'type': 'symbol',
          'source': 'creciendo_familia',
          'layout': {
              'icon-image': 'cat',
              'icon-allow-overlap': true,
              'icon-size': 0.7,
              'visibility': 'none'
          }
  }
);


  }); 