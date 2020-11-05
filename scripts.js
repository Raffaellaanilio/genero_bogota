$(document).ready(function () {

  // Cargar mapa

  mapboxgl.accessToken = 'pk.eyJ1IjoicmFmZmFlbGxhYW5pbGlvIiwiYSI6ImNrZWlubncydjEwOGgyd21udHdmOWJ4M24ifQ.E2q7D7b-Je_x7VRjbqjAAA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.0894, 4.5378],
    zoom: 10
  });

  map.addControl(new mapboxgl.NavigationControl());



  // Función de encendido
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


  // Función mostrar descripción
  showdescripcion = function showdescripcion(x) {

    y = document.getElementById(x);

    $(y).toggle();

    var visibility = map.getElementById(x, 'visibility');


    // toggle layer visibility by changing the layout object's visibility property
    if (visibility === 'visible') {
      map.getElementById(x, 'visibility', 'visible');
      this.className = '';
    } else {
      this.className = 'active';
      map.getElementById(x, 'visibility', 'visible');
    }
  };


  // Cargar GeoJSON

  map.on('load', function () {

       var  array_de_capas = ['creciendo_familia', 'comedor_comunitario', 'envejecimiento_activo']


    // var url = './geojson/creciendo_familia.geojson';
    // map.addSource('creciendo_familia', { type: 'geojson', data: url });

    // var url2 = './geojson/comedor_comunitario.geojson';
    // map.addSource('comedor_comunitario', { type: 'geojson', data: url2 });

    // var url3 = './geojson/envejecimiento_activo.geojson';
    // map.addSource('envejecimiento_activo', { type: 'geojson', data: url3 });

    // var url4 = './geojson/hospitales.geojson';
    // map.addSource('hospitales', { type: 'geojson', data: url4 });

    // var url5 = './geojson/colegios.geojson';
    // map.addSource('colegios', { type: 'geojson', data: url5 });

    // var url6 = './geojson/casa_oportunidades_mujeres.geojson';
    // map.addSource('casa_oportunidades_mujeres', { type: 'geojson', data: url6 });

    // var url7 = './geojson/biblored.geojson';
    // map.addSource('biblored', { type: 'geojson', data: url7 });

    // var url8 = './geojson/bibliotecas_Comunitarias.geojson';
    // map.addSource('bibliotecas_comunitarias', { type: 'geojson', data: url8 });

    // var url9 = './geojson/ciclovias.geojson';
    // map.addSource('ciclovias', { type: 'geojson', data: url9 });

    // var url10 = './geojson/paraderos_zonales_SITP.geojson';
    // map.addSource('paraderos_zonales_SITP', { type: 'geojson', data: url10 });

    // var url11 = './geojson/estaciones.geojson';
    // map.addSource('estaciones', { type: 'geojson', data: url11 });

    // var url12 = './geojson/indice_seguridad.geojson';
    // map.addSource('indice_seguridad', { type: 'geojson', data: url12 });

    // var url13 = './geojson/comisaria_familia.geojson';
    // map.addSource('comisaria_familia', { type: 'geojson', data: url13 });

    // var url14 = './geojson/total_viviendas.geojson';
    // map.addSource('total_viviendas', { type: 'geojson', data: url14 });

    // var url15 = './geojson/viviendas_65mas.geojson';
    // map.addSource('viviendas_65mas', { type: 'geojson', data: url15 });

    // var url16 = './geojson/razon_sexos.geojson';
    // map.addSource('razon_sexos', { type: 'geojson', data: url16 });

    // var url17 = './geojson/m_10mas_oficiohogar_sin_ingreso.geojson';
    // map.addSource('m_10mas_oficiohogar_sin_ingreso', { type: 'geojson', data: url17 });

    // var url18 = './geojson/15menos_dificultad.geojson';
    // map.addSource('15menos_dificultad', { type: 'geojson', data: url18 });

    // var url19 = './geojson/64mas_dificultad.geojson';
    // map.addSource('64mas_dificultad', { type: 'geojson', data: url19 });

    // var url20 = './geojson/84mas_dificultad.geojson';
    // map.addSource('84mas_dificultad', { type: 'geojson', data: url20 });

    // var url21 = './geojson/total_personas_dificultad.geojson';
    // map.addSource('total_personas_dificultad', { type: 'geojson', data: url21 });

    var url22 = './geojson/limites.geojson';
    map.addSource('limites', { type: 'geojson', data: url22 });


    // var url23 = './geojson/paraderos_zonales_SITP.geojson';
    // map.addSource('paraderos_zonales_SITP', { type: 'geojson', data: url23 });

    // var url24 = './geojson/estacion_de_policia.geojson';
    // map.addSource('estacion_de_policia', { type: 'geojson', data: url24 });

    // var url25 = './geojson/cuadrantes_policia.geojson';
    // map.addSource('cuadrantes_policia', { type: 'geojson', data: url25 });

    // var url26 = './geojson/atencion_personas_mayores_discapacidad.geojson';
    // map.addSource('atencion_personas_mayores_discapacidad', { type: 'geojson', data: url26 });

    // var url27 = './geojson/atencion_ninos_discapacidad.geojson';
    // map.addSource('atencion_ninos_discapacidad', { type: 'geojson', data: url27 });

    // var url28 = './geojson/centro_proteger.geojson';
    // map.addSource('centro_proteger', { type: 'geojson', data: url28 });

    // var url29 = './geojson/centro_amar.geojson';
    // map.addSource('centro_amar', { type: 'geojson', data: url29 });


  });


// Popup al hacer clic en localidad

/*   map.on('click', 'limites', function (e) {

    var nombre = e.features[0].properties.LocNombre;
    var innerPopup =  '<div style="color:red;">' + nombre + '</div>';

    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(innerPopup)
      .addTo(map);
  });
 */

// Añadir capas de tipo polígono

map.addLayer({
  'id': 'limites',
  'type': 'fill',
  'source': 'limites',
  'layout': {
    'visibility': 'visible'
  },
  'paint': {
    'fill-color': '#000000',
  }
});


/*   map.addLayer({
    'id': 'total_viviendas',
    'type': 'fill',
    'source': 'total_viviendas',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': 'none',
      'border-color' : '#000000'
    }
  });

  map.addLayer({
    'id': 'viviendas_65mas',
    'type': 'fill',
    'source': 'viviendas_65mas',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': 'none',
      'border-color' : '#000000'
    }
  });

  map.addLayer({
    'id': 'm_10mas_oficiohogar_sin_ingreso',
    'type': 'fill',
    'source': 'm_10mas_oficiohogar_sin_ingreso',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': 'none',
      'border-color' : '#000000'
    }
  });

  map.addLayer({
    'id': '15menos_dificultad',
    'type': 'fill',
    'source': '15menos_dificultad',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': 'none',
      'border-color' : '#000000'
    }
  });

  map.addLayer({
    'id': '64mas_dificultad',
    'type': 'fill',
    'source': '64mas_dificultad',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': 'none',
      'border-color' : '#000000'
    }
  });

  map.addLayer({
    'id': '  84mas_dificultad',
    'type': 'fill',
    'source': '84mas_dificultad',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': 'none',
      'border-color' : '#000000'
    }
  });

  map.addLayer({
    'id': 'total_personas_dificultad',
    'type': 'fill',
    'source': 'total_personas_dificultad',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': 'none',
      'border-color' : '#000000'
    }
  });


// Añadir capas de tipo punto

  map.loadImage(
    './image/comedor_comunitario_icon.svg',
    function (error, image) {
        if (error) throw error;
        map.addImage('comedor_comunitario_icon', image);

        map.addLayer({
            'id': 'creciendo_familia',
            'type': 'symbol',
            'source': 'creciendo_familia_geojson',
            'layout': {
                'icon-image': 'comedor_comunitario_icon',
                'icon-allow-overlap': true,
                'icon-size': 0.7,
                'visibility': 'none'
            }
        });
    }
);

  map.loadImage(
    './image/comedor_comunitario_icon.svg',
    function (error, image) {
        if (error) throw error;
        map.addImage('comedor_comunitario_icon', image);

        map.addLayer({
            'id': 'comedor_comunitario',
            'type': 'symbol',
            'source': 'comedor_comunitario_geojson',
            'layout': {
                'icon-image': 'comedor_comunitario_icon',
                'icon-allow-overlap': true,
                'icon-size': 0.7,
                'visibility': 'none'
            }
        });
    }
);


map.loadImage(
  './image/comedor_comunitario_icon.svg',
  function (error, image) {
      if (error) throw error;
      map.addImage('comedor_comunitario_icon', image);

      map.addLayer({
          'id': 'envejecimiento_activo',
          'type': 'symbol',
          'source': 'envejecimiento_activo_geojson',
          'layout': {
              'icon-image': 'comedor_comunitario_icon',
              'icon-allow-overlap': true,
              'icon-size': 0.7,
              'visibility': 'none'
          }
      });
  }
);

map.loadImage(
  './image/comedor_comunitario_icon.svg',
  function (error, image) {
      if (error) throw error;
      map.addImage('comedor_comunitario_icon', image);

      map.addLayer({
          'id': 'colegios',
          'type': 'symbol',
          'source': 'colegios_geojson',
          'layout': {
              'icon-image': 'comedor_comunitario_icon',
              'icon-allow-overlap': true,
              'icon-size': 0.7,
              'visibility': 'none'
          }
      });
  }
);

map.loadImage(
  './image/comedor_comunitario_icon.svg',
  function (error, image) {
      if (error) throw error;
      map.addImage('comedor_comunitario_icon', image);

      map.addLayer({
          'id': 'casa_oportunidades_mujeres',
          'type': 'symbol',
          'source': 'casa_oportunidades_mujeres_geojson',
          'layout': {
              'icon-image': 'comedor_comunitario_icon',
              'icon-allow-overlap': true,
              'icon-size': 0.7,
              'visibility': 'none'
          }
      });
  }
);

map.loadImage(
  './image/comedor_comunitario_icon.svg',
  function (error, image) {
      if (error) throw error;
      map.addImage('comedor_comunitario_icon', image);

      map.addLayer({
          'id': 'biblored',
          'type': 'symbol',
          'source': 'biblored_geojson',
          'layout': {
              'icon-image': 'comedor_comunitario_icon',
              'icon-allow-overlap': true,
              'icon-size': 0.7,
              'visibility': 'none'
          }
      });
  }
);

map.loadImage(
  './image/comedor_comunitario_icon.svg',
  function (error, image) {
      if (error) throw error;
      map.addImage('comedor_comunitario_icon', image);

      map.addLayer({
          'id': 'bibliotecas_comunitarias',
          'type': 'symbol',
          'source': 'bibliotecas_comunitarias_geojson',
          'layout': {
              'icon-image': 'comedor_comunitario_icon',
              'icon-allow-overlap': true,
              'icon-size': 0.7,
              'visibility': 'none'
          }
      });
  }
);


map.loadImage(
  './image/comedor_comunitario_icon.svg',
  function (error, image) {
      if (error) throw error;
      map.addImage('comedor_comunitario_icon', image);

      map.addLayer({
          'id': 'paraderos_zonales_SITP',
          'type': 'symbol',
          'source': 'paraderos_zonales_SITP_geojson',
          'layout': {
              'icon-image': 'comedor_comunitario_icon',
              'icon-allow-overlap': true,
              'icon-size': 0.7,
              'visibility': 'none'
          }
      });
  }
);

map.loadImage(
  './image/comedor_comunitario_icon.svg',
  function (error, image) {
      if (error) throw error;
      map.addImage('comedor_comunitario_icon', image);

      map.addLayer({
          'id': 'estacion_de_policia',
          'type': 'symbol',
          'source': 'estacion_de_policia_geojson',
          'layout': {
              'icon-image': 'comedor_comunitario_icon',
              'icon-allow-overlap': true,
              'icon-size': 0.7,
              'visibility': 'none'
          }
      });
  }
);


map.loadImage(
  './image/comedor_comunitario_icon.svg',
  function (error, image) {
      if (error) throw error;
      map.addImage('comedor_comunitario_icon', image);

      map.addLayer({
          'id': 'indice_seguridad',
          'type': 'symbol',
          'source': 'indice_seguridad_geojson',
          'layout': {
              'icon-image': 'comedor_comunitario_icon',
              'icon-allow-overlap': true,
              'icon-size': 0.7,
              'visibility': 'none'
          }
      });
  }
);

map.loadImage(
  './image/comedor_comunitario_icon.svg',
  function (error, image) {
      if (error) throw error;
      map.addImage('comedor_comunitario_icon', image);

      map.addLayer({
          'id': 'comisaria_familia',
          'type': 'symbol',
          'source': 'comisaria_familia_geojson',
          'layout': {
              'icon-image': 'comedor_comunitario_icon',
              'icon-allow-overlap': true,
              'icon-size': 0.7,
              'visibility': 'none'
          }
      });
  }
);


map.loadImage(
  './image/comedor_comunitario_icon.svg',
  function (error, image) {
      if (error) throw error;
      map.addImage('comedor_comunitario_icon', image);

      map.addLayer({
          'id': 'atencion_personas_mayores_discapacidad',
          'type': 'symbol',
          'source': 'atencion_personas_mayores_discapacidad_geojson',
          'layout': {
              'icon-image': 'comedor_comunitario_icon',
              'icon-allow-overlap': true,
              'icon-size': 0.7,
              'visibility': 'none'
          }
      });
  }
);


map.loadImage(
  './image/comedor_comunitario_icon.svg',
  function (error, image) {
      if (error) throw error;
      map.addImage('comedor_comunitario_icon', image);

      map.addLayer({
          'id': 'atencion_ninos_discapacidad',
          'type': 'symbol',
          'source': 'atencion_ninos_discapacidad_geojson',
          'layout': {
              'icon-image': 'comedor_comunitario_icon',
              'icon-allow-overlap': true,
              'icon-size': 0.7,
              'visibility': 'none'
          }
      });
  }
);

map.loadImage(
  './image/comedor_comunitario_icon.svg',
  function (error, image) {
      if (error) throw error;
      map.addImage('comedor_comunitario_icon', image);

      map.addLayer({
          'id': 'centro_proteger',
          'type': 'symbol',
          'source': 'centro_proteger_geojson',
          'layout': {
              'icon-image': 'comedor_comunitario_icon',
              'icon-allow-overlap': true,
              'icon-size': 0.7,
              'visibility': 'none'
          }
      });
  }
);

map.loadImage(
  './image/comedor_comunitario_icon.svg',
  function (error, image) {
      if (error) throw error;
      map.addImage('comedor_comunitario_icon', image);

      map.addLayer({
          'id': 'centro_amar',
          'type': 'symbol',
          'source': 'centro_amar_geojson',
          'layout': {
              'icon-image': 'comedor_comunitario_icon',
              'icon-allow-overlap': true,
              'icon-size': 0.7,
              'visibility': 'none'
          }
      });
  }
);


// Añadir capas de tipo línea

map.addLayer({
  'id': 'cuadrantes_policia',
  'type': 'line',
  'source': 'cuadrantes_policia',
  'layout': {
      'visibility': 'visible',
      'line-cap': 'round',
      'line-join': 'round',
  },
  'paint': {
      'line-color': 'seagreen',
      'line-width': 4,
  }
});


map.addLayer({
  'id': 'ciclovias',
  'type': 'line',
  'source': 'ciclovias',
  'layout': {
      'visibility': 'visible',
      'line-cap': 'round',
      'line-join': 'round',
  },
  'paint': {
      'line-color': 'seagreen',
      'line-width': 4,
  }
});
 */

  }); 