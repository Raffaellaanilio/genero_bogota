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

        y = document.getElementById('icono_' + x);

        $(y).toggle();

        var visibility = map.getLayoutProperty(x, 'visibility');

        $("#cds_servicios").hide();
        $("#popup_limites").hide(); // Se elimina el div pero igual queda el popup pequeño con la cruz ********* (arreglar)


        // toggle layer visibility by changing the layout object's visibility property
        if (visibility === 'visible') {
            map.setLayoutProperty(x, 'visibility', 'none');
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

        // toggle layer visibility by changing the layout object's visibility property
        if (visibility === 'visible') {
            map.setLayoutProperty(x, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(x, 'visibility', 'visible');
        }
    };

    var hoveredStateId = null;

    // Cargar GeoJSON

    map.on('load', function () {

        var array_de_capas_puntos = ['creciendo_familia', 'comedor_comunitario', 'envejecimiento_activo', 'colegios', 'casa_oportunidades_mujeres', 'biblored', 'bibliotecas_comunitarias', 'paraderos_zonales_SITP', 'comisaria_familia', 'estacion_de_policia', 'atencion_personas_mayores_discapacidad', 'atencion_ninos_discapacidad', 'centro_proteger', 'centro_amar']
        var array_de_capas_poligonos = ['total_viviendas', 'viviendas_65mas', 'razon_sexos', 'm_10mas_oficiohogar_sin_ingreso', '15menos_dificultad', '64mas_dificultad', '84mas_dificultad', 'total_personas_dificultad', 'limites', 'cuadrantes_policia']
        // Change the cursor to a pointer when the mouse is over the states layer.

        //map.on('mouseover', '(var=array_de_capas_puntos)', function () {
        //map.getCanvas().style.cursor = 'pointer';
        //});

        // Change it back to a pointer when it leaves.
        //map.on('mouseleave', '(array_de_capas_puntos)', function () {
        //map.getCanvas().style.cursor = '';
        //});

        var url = './geojson/creciendo_familia.geojson';
        map.addSource('creciendo_familia', { type: 'geojson', data: url });

        var url2 = './geojson/comedor_comunitario.geojson';
        map.addSource('comedor_comunitario', { type: 'geojson', data: url2 });

        var url3 = './geojson/envejecimiento_activo.geojson';
        map.addSource('envejecimiento_activo', { type: 'geojson', data: url3 });

        // var url4 = './geojson/hospitales.geojson';
        // map.addSource('hospitales', { type: 'geojson', data: url4 });

        var url5 = './geojson/colegios.geojson';
        map.addSource('colegios', { type: 'geojson', data: url5 });

        var url6 = './geojson/casa_oportunidades_mujeres.geojson';
        map.addSource('casa_oportunidades_mujeres', { type: 'geojson', data: url6 });

        var url7 = './geojson/biblored.geojson';
        map.addSource('biblored', { type: 'geojson', data: url7 });

        var url8 = './geojson/bibliotecas_comunitarias.geojson';
        map.addSource('bibliotecas_comunitarias', { type: 'geojson', data: url8 });

        var url9 = './geojson/ciclovias.geojson';
        map.addSource('ciclovias', { type: 'geojson', data: url9 });

        var url10 = './geojson/paraderos_zonales_SITP.geojson';
        map.addSource('paraderos_zonales_SITP', { type: 'geojson', data: url10 });

        // var url11 = './geojson/estaciones.geojson';
        // map.addSource('estaciones', { type: 'geojson', data: url11 });

        var url12 = './geojson/indice_seguridad.geojson';
        map.addSource('indice_seguridad', { type: 'geojson', data: url12 });

        var url13 = './geojson/comisaria_familia.geojson';
        map.addSource('comisaria_familia', { type: 'geojson', data: url13 });

        var url14 = './geojson/total_viviendas.geojson';
        map.addSource('total_viviendas', { type: 'geojson', data: url14 });

        var url15 = './geojson/viviendas_65mas.geojson';
        map.addSource('viviendas_65mas', { type: 'geojson', data: url15 });

        // var url16 = './geojson/razon_sexos.geojson';
        // map.addSource('razon_sexos', { type: 'geojson', data: url16 });

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

        var url22 = './geojson/limites.geojson';
        map.addSource('limites', { type: 'geojson', data: url22 });

        var url24 = './geojson/estacion_de_policia.geojson';
        map.addSource('estacion_de_policia', { type: 'geojson', data: url24 });

        var url25 = './geojson/cuadrantes_policia.geojson';
        map.addSource('cuadrantes_policia', { type: 'geojson', data: url25 });

        var url26 = './geojson/atencion_personas_mayores_discapacidad.geojson';
        map.addSource('atencion_personas_mayores_discapacidad', { type: 'geojson', data: url26 });

        var url27 = './geojson/atencion_ninos_discapacidad.geojson';
        map.addSource('atencion_ninos_discapacidad', { type: 'geojson', data: url27 });

        var url28 = './geojson/centro_proteger.geojson';
        map.addSource('centro_proteger', { type: 'geojson', data: url28 });

        var url29 = './geojson/centro_amar.geojson';
        map.addSource('centro_amar', { type: 'geojson', data: url29 });

        var url30 = './geojson/limites_linea.geojson';
        map.addSource('limites_linea', { type: 'geojson', data: url30 });

        /*         var url30 = './geojson/cuadrantes_policia_puntos.geojson';
                map.addSource('cuadrantes_policia_puntos', { type: 'geojson', data: url30 }); */



        // Se abre caja información de servicios, y cambia el nombre de la localidad según corresponda

        map.on('click', 'limites', function (e) {

            var nombre = e.features[0].properties.LocNombre;
            var jardin_infantil = e.features[0].properties.jardin_infantil;
            var centro_dia = e.features[0].properties.centro_dia;
            var centro_crecer = e.features[0].properties.centro_crecer;
            var comisaria_familia = e.features[0].properties.comisaria_familia;
            var biblioteca = e.features[0].properties.biblioteca;
            var cocina = e.features[0].properties.cocina;
            var coliseo = e.features[0].properties.coliseo;
            var huerta = e.features[0].properties.huerta;
            var piscina = e.features[0].properties.piscina;
            var sala_belleza = e.features[0].properties.sala_belleza;
            var sala_confeccion = e.features[0].properties.sala_confeccion;
            var vive_digital = e.features[0].properties.vive_digital;
            var salas_sistemas = e.features[0].properties.salas_sistemas;
            var salon_multiple = e.features[0].properties.salon_multiple;
            var teatro = e.features[0].properties.teatro;

            $("#cds_servicios").show();
            $("#localidad").text(nombre);
            $("#conteo_jardin_infantil").text(jardin_infantil);
            $("#conteo_centro_dia").text(centro_dia);
            $("#conteo_centro_crecer").text(centro_crecer);
            $("#conteo_comisaria_familia").text(comisaria_familia);
            $("#conteo_biblioteca").text(biblioteca);
            $("#conteo_cocina").text(cocina);
            $("#conteo_coliseo").text(coliseo);
            $("#conteo_huerta").text(huerta);
            $("#conteo_piscina").text(piscina);
            $("#conteo_sala_belleza").text(sala_belleza);
            $("#conteo_sala_confeccion").text(sala_confeccion);
            $("#conteo_vive_digital").text(vive_digital);
            $("#conteo_salas_sistemas").text(salas_sistemas);
            $("#conteo_salon_multiple").text(salon_multiple);
            $("#conteo_teatro").text(teatro);
        });

        // Popup al hacer clic en SYMBOL layer
        map.on('click', 'comedor_comunitario', function (e) {

            var nombre = e.features[0].properties.OSSNOMBRE;
            var direccion = e.features[0].properties.OSSDIRECCI;
            var telefono = e.features[0].properties.OSSTELEFON;
            var horario = e.features[0].properties.OSSHORARIO;
            var innerPopup = '<div>' + '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Horario: </b>' + horario + '</div>';


            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'creciendo_familia', function (e) {

            var nombre = e.features[0].properties.OSSNOMBRE;
            var direccion = e.features[0].properties.OSSDIRECCI;
            var telefono = e.features[0].properties.OSSTELEFON;
            var horario = e.features[0].properties.OSSHORARIO;
            var innerPopup = '<div>' + '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Horario: </b>' + horario + '</div>';


            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'envejecimiento_activo', function (e) {

            var nombre = e.features[0].properties.OSSNOMBRE;
            var direccion = e.features[0].properties.OSSDIRECCI;
            var telefono = e.features[0].properties.OSSTELEFON;
            var horario = e.features[0].properties.OSSHORARIO;
            var innerPopup = '<div>' + '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Horario: </b>' + horario + '</div>';


            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'colegios', function (e) {

            var nombre = e.features[0].properties.NOMBRE_EST;
            var direccion = e.features[0].properties.DIRECCION;
            var telefono = e.features[0].properties.TELEFONO;
            var email = e.features[0].properties.EMAIL;
            var web = e.features[0].properties.WEB;
            var enfoque = e.features[0].properties.DISCAPACID;
            var talentos = e.features[0].properties.TALENTOS_O;
            var regimen = e.features[0].properties.REGIMEN_Y;
            var innerPopup = '<div style="width:fit-content;">' + '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Email: </b>' + email + '</br>' + '<b>Sitio Web: </b>' + web + '</br>' + '<b>Enfoque: </b>' + enfoque + '</br>' + '<b>Talentos: </b>' + talentos + '</br>' + '<b>Regimen: </b>' + regimen + '</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'casa_oportunidades_mujeres', function (e) {

            var nombre = e.features[0].properties.CIONombre;
            var direccion = e.features[0].properties.CIODirecci;
            var telefono = e.features[0].properties.CIOTelefon;
            var horario = e.features[0].properties.CIOHorario;
            var email = e.features[0].properties.CIOCElectr;
            var innerPopup = '<div>' + '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Horario: </b>' + horario + '</br>' + '<b>Email: </b>' + email + '</div>';
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        /* map.on('click', 'biblored', function (e) {

            var nombre = e.features[0].properties.CIONombre;
            var direccion = e.features[0].properties.CIODirecci;
            var telefono = e.features[0].properties.CIOTelefon;
            var horario = e.features[0].properties.CIOHorario;
            var email = e.features[0].properties.CIOCElectr;
            var innerPopup = '<div>' + '<b>Nombre: </b>'+ nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Horario: </b>' + horario + '</br>' + '<b>Email: </b>' + email +'</div>';
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        }); */

        /* map.on('click', 'bibliotecas_comunitarias', function (e) {

            var nombre = e.features[0].properties.CIONombre;
            var direccion = e.features[0].properties.CIODirecci;
            var telefono = e.features[0].properties.CIOTelefon;
            var horario = e.features[0].properties.CIOHorario;
            var email = e.features[0].properties.CIOCElectr;
            var innerPopup = '<div>' + '<b>Nombre: </b>'+ nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Horario: </b>' + horario + '</br>' + '<b>Email: </b>' + email +'</div>';
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        }); */

        map.on('click', 'paraderos_zonales_SITP', function (e) {

            var nombre = e.features[0].properties.nombre_par;
            var direccion = e.features[0].properties.audio_para;
            var innerPopup = '<div>' + '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</div>';
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'estacion_de_policia', function (e) {

            var direccion = e.features[0].properties.EPODIR_SITIO;
            var funcionamiento = e.features[0].properties.EPOHORARIO;
            var telefono = e.features[0].properties.EPOTELEFON;
            var email = e.features[0].properties.EPOCELECTR;
            var web = e.features[0].properties.EPOPWEB;
            var innerPopup = '<div>' + '<b>Nombre: </b>' + direccion + '</br>' + '<b>Funcionamiento: </b>' + funcionamiento + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Email: </b>' + email + '</br>' + '<b>Sitio Web: </b>' + web + '</div>';
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'comisaria_familia', function (e) {
            var direccion = e.features[0].properties.OSSDIRECCI;
            var telefono = e.features[0].properties.OSSTELEFON;
            var horario = e.features[0].properties.OSSHORARIO;
            var innerPopup = '<div>' + '<b>Nombre: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Horario: </b>' + horario + '</div>';
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });


        map.on('click', 'limites', function (e) {

            var nombre = e.features[0].properties.LocNombre;
            var innerPopup = '<div id="popup_limites">' + '<b>Localidad: </b>' + nombre + '</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });


        // Añadir capas de tipo polígono

        map.addLayer({
            'id': 'total_viviendas',
            'type': 'fill',
            'source': 'total_viviendas',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': '#088',
                'fill-opacity': 0.8
            }
        });

        map.addLayer({
            'id': 'ciclovias',
            'type': 'fill',
            'source': 'ciclovias',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': '#088',
                'fill-opacity': 1
            }
        })

        map.addLayer({
            'id': 'cuadrantes_policia',
            'type': 'fill',
            'source': 'cuadrantes_policia',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': '#088',
                'fill-opacity': 0.8
            }
        })

        map.addLayer({
            'id': 'limites',
            'type': 'fill',
            'source': 'limites',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': '#627BC1',
                'fill-opacity': [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    1,
                    0.5
                ]
            }
        })

        map.addLayer({
            'id': 'limites_linea',
            'type': 'line',
            'source': 'limites_linea',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'line-color': '#627BC1',
                'line-width': 2
            }
        })


        // Hover

        // When the user moves their mouse over the state-fill layer, we'll update the
        // feature state for the feature under the mouse.
        map.on('mousemove', 'state-fills', function (e) {
            if (e.features.length > 0) {
                if (hoveredStateId) {
                    map.setFeatureState(
                        { source: 'states', id: hoveredStateId },
                        { hover: false }
                    );
                }
                hoveredStateId = e.features[0].id;
                map.setFeatureState(
                    { source: 'states', id: hoveredStateId },
                    { hover: true }
                );

        var description = '<b>País: </b>' + e.features[0].properties.LocNombre;
                            popup.setLngLat(e.lngLat).setHTML(description).addTo(map);
            }
        });

        // When the mouse leaves the state-fill layer, update the feature state of the
        // previously hovered feature.

        map.on('mouseleave', 'state-fills', function () {
            if (hoveredStateId) {
                map.setFeatureState(
                    { source: 'states', id: hoveredStateId },
                    { hover: false }
                );
            }

            map.on('mouseenter', 'state-fills', function (e) {
                // Change the cursor style as a UI indicator.
                map.getCanvas().style.cursor = 'pointer';

                // var coordinates = e.lngLat.slice();
                // console.log(coordinates);
                
                var description = e.features[0].properties.LocNombre;

                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                //     coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                // }

                // Populate the popup and set its coordinates
                // based on the feature found.
                //popup.setLngLat(e.lngLat).setHTML(description).addTo(map);
            });

            map.on('mouseleave', 'state-fills', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });

            // When the mouse leaves the state-fill layer, update the feature state of the
            // previously hovered feature.
            map.on('mouseleave', 'state-fills', function () {
                if (hoveredStateId) {
                    map.setFeatureState(
                        { source: 'states', id: hoveredStateId },
                        { hover: false }
                    );
                }
                hoveredStateId = null;
            });
        });

        /* 
               // Creating a list of the stops you used when styling your layer that contains state data will allow us to add a legend to our map in a later step.
        
               var layers = ['0-10', '10-20', '20-50', '50-100', '100-200', '200-500', '500-1000', '1000+'];
               var colors = ['#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026'];
        
               //Add a legend The following code adds a legend to the map. To do so, it iterates through the list of layers you defined above and adds a legend element for each one based on the name of the layer and its color.
        
               for (i = 0; i < layers.length; i++) {
                   var layer = layers[i];
                   var color = colors[i];
                   var item = document.createElement('div');
                   var key = document.createElement('span');
                   key.className = 'legend-key';
                   key.style.backgroundColor = color;
                 
                   var value = document.createElement('span');
                   value.innerHTML = layer;
                   item.appendChild(key);
                   item.appendChild(value);
                   legend.appendChild(item);
                 } */

        //   map.addLayer({
        //     'id': 'viviendas_65mas',
        //     'type': 'fill',
        //     'source': 'viviendas_65mas',
        //     'layout': {
        //       'visibility': 'visible'
        //     },
        //     'paint': {
        //       'fill-color': 'none',
        //       'border-color' : '#000000'
        //     }
        //   });

        //   map.addLayer({
        //     'id': 'm_10mas_oficiohogar_sin_ingreso',
        //     'type': 'fill',
        //     'source': 'm_10mas_oficiohogar_sin_ingreso',
        //     'layout': {
        //       'visibility': 'visible'
        //     },
        //     'paint': {
        //       'fill-color': 'none',
        //       'border-color' : '#000000'
        //     }
        //   });

        //   map.addLayer({
        //     'id': '15menos_dificultad',
        //     'type': 'fill',
        //     'source': '15menos_dificultad',
        //     'layout': {
        //       'visibility': 'visible'
        //     },
        //     'paint': {
        //       'fill-color': 'none',
        //       'border-color' : '#000000'
        //     }
        //   });

        //   map.addLayer({
        //     'id': '64mas_dificultad',
        //     'type': 'fill',
        //     'source': '64mas_dificultad',
        //     'layout': {
        //       'visibility': 'visible'
        //     },
        //     'paint': {
        //       'fill-color': 'none',
        //       'border-color' : '#000000'
        //     }
        //   });

        //   map.addLayer({
        //     'id': '  84mas_dificultad',
        //     'type': 'fill',
        //     'source': '84mas_dificultad',
        //     'layout': {
        //       'visibility': 'visible'
        //     },
        //     'paint': {
        //       'fill-color': 'none',
        //       'border-color' : '#000000'
        //     }
        //   });

        //   map.addLayer({
        //     'id': 'total_personas_dificultad',
        //     'type': 'fill',
        //     'source': 'total_personas_dificultad',
        //     'layout': {
        //       'visibility': 'visible'
        //     },
        //     'paint': {
        //       'fill-color': 'none',
        //       'border-color' : '#000000'
        //     }
        //   });


        //INTENTO DE MAP.LOAD.IMAGE POR ARRAY DE CAPAS

        /*  map.loadImage(
             var array_de_capas_puntos = ['creciendo_familia', 'comedor_comunitario', 'envejecimiento_activo', 'colegios', 'casa_oportunidades_mujeres', 'biblored', 'bibliotecas_comunitarias', 'paraderos_zonales_SITP', 'comisaria_familia', 'estacion_de_policia', 'atencion_personas_mayores_discapacidad', 'atencion_ninos_discapacidad', 'centro_proteger', 'centro_amar']
     
             './image/'+array_de_capas_puntos+'.png',
             function (error, image) {
                 if (error) throw error;
                 map.addImage('icono_'+array_de_capas_puntos+'', image);
     
                 map.addLayer({
                     'id': ''+array_de_capas_puntos+'',
                     'type': 'symbol',
                     'source': ''+array_de_capas_puntos+'',
                     'layout': {
                         'icon-image': 'icono_'+array_de_capas_puntos+'',
                         'icon-allow-overlap': true,
                         'icon-size': 0.9,
                         'visibility': 'none'
                     }
                 });
             }
         ); */

        // Añadir capas de tipo punto

        /*  map.loadImage(
             './image/icono_cuadrantes_policia_puntos.png',
             function (error, image) {
                 if (error) throw error;
                 map.addImage('icono_cuadrantes_policia_puntos', image);
     
                 map.addLayer({
                     'id': 'cuadrantes_policia_puntos',
                     'type': 'symbol',
                     'source': 'cuadrantes_policia_puntos',
                     'layout': {
                         "text-field": "{'PCUDESCRIP'}",
                         "text-font": ["Droid Sans Regular"],
                         "text-size": 12,
                         'symbol-placement': "point",
                         'icon-image': 'icono_cuadrantes_policia_puntos',
                         'icon-allow-overlap': true,
                         'icon-size': 0.5,
                         'visibility': 'none'
                     }
                 });
             }
         ); */


        map.loadImage(
            './image/icono_creciendo_familia.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('icono_creciendo_familia', image);

                map.addLayer({
                    'id': 'creciendo_familia',
                    'type': 'symbol',
                    'source': 'creciendo_familia',
                    'layout': {
                        'icon-image': 'icono_creciendo_familia',
                        'icon-allow-overlap': true,
                        'icon-size': 0.9,
                        'visibility': 'none'
                    }
                });
            }
        );

        map.loadImage(
            './image/icono_comedor_comunitario.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('icono_comedor_comunitario', image);

                map.addLayer({
                    'id': 'comedor_comunitario',
                    'type': 'symbol',
                    'source': 'comedor_comunitario',
                    'layout': {
                        'icon-image': 'icono_comedor_comunitario',
                        'icon-allow-overlap': true,
                        'icon-size': 0.9,
                        'visibility': 'none'
                    }
                });
            }
        );


        map.loadImage(
            './image/icono_envejecimiento_activo.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('icono_envejecimiento_activo', image);

                map.addLayer({
                    'id': 'envejecimiento_activo',
                    'type': 'symbol',
                    'source': 'envejecimiento_activo',
                    'layout': {
                        'icon-image': 'icono_envejecimiento_activo',
                        'icon-allow-overlap': true,
                        'icon-size': 0.9,
                        'visibility': 'none'
                    }
                });
            }
        );

        map.loadImage(
            './image/icono_colegios.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('icono_colegios', image);

                map.addLayer({
                    'id': 'colegios',
                    'type': 'symbol',
                    'source': 'colegios',
                    'layout': {
                        'icon-image': 'icono_colegios',
                        'icon-allow-overlap': true,
                        'icon-size': 0.9,
                        'visibility': 'none'
                    }
                });
            }
        );

        map.loadImage(
            './image/icono_casa_oportunidades_mujeres.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('icono_casa_oportunidades_mujeres', image);

                map.addLayer({
                    'id': 'casa_oportunidades_mujeres',
                    'type': 'symbol',
                    'source': 'casa_oportunidades_mujeres',
                    'layout': {
                        'icon-image': 'icono_casa_oportunidades_mujeres',
                        'icon-allow-overlap': true,
                        'icon-size': 0.9,
                        'visibility': 'none'
                    }
                });
            }
        );


        map.loadImage(
            './image/icono_bibliotecas_comunitarias.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('icono_bibliotecas_comunitarias', image);

                map.addLayer({
                    'id': 'bibliotecas_comunitarias',
                    'type': 'symbol',
                    'source': 'bibliotecas_comunitarias',
                    'layout': {
                        'icon-image': 'icono_bibliotecas_comunitarias',
                        'icon-allow-overlap': true,
                        'icon-size': 0.9,
                        'visibility': 'none'
                    }
                });
            }
        );

        map.loadImage(
            './image/icono_biblored.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('icono_biblored', image);

                map.addLayer({
                    'id': 'biblored',
                    'type': 'symbol',
                    'source': 'biblored',
                    'layout': {
                        'icon-image': 'icono_biblored',
                        'icon-allow-overlap': true,
                        'icon-size': 0.9,
                        'visibility': 'none'
                    }
                });
            }
        );

        map.loadImage(
            './image/icono_paraderos_zonales_SITP.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('icono_paraderos_zonales_SITP', image);

                map.addLayer({
                    'id': 'paraderos_zonales_SITP',
                    'type': 'symbol',
                    'source': 'paraderos_zonales_SITP',
                    'layout': {
                        'icon-image': 'icono_paraderos_zonales_SITP',
                        'icon-allow-overlap': true,
                        'icon-size': 0.9,
                        'visibility': 'none'
                    }
                });
            }
        );

        map.loadImage(
            './image/icono_estacion_de_policia.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('icono_estacion_de_policia', image);

                map.addLayer({
                    'id': 'estacion_de_policia',
                    'type': 'symbol',
                    'source': 'estacion_de_policia',
                    'layout': {
                        'icon-image': 'icono_estacion_de_policia',
                        'icon-allow-overlap': true,
                        'icon-size': 0.9,
                        'visibility': 'none'
                    }
                });
            }
        );


        // INTENTO DE CATEGORIZAR CAPA PUNTOS POR VALOR DEL DATO

        /* map.addLayer({
           'id': 'indice_seguridad',
           'type': 'circle',
           'source': 'indice_seguridad',
           'layout':{
               'visibility':'none'
           },
           'paint': {
                'circle-radius':5,
                [
                    "interpolate",
                    ["linear"],
                    ["get","INDICE_SEG"],
                    0,
                    "hsl(0, 100%, 54%)",
                    2,
                    "hsl(33, 100%, 56%)",
                    4,
                    "hsl(95, 93%, 36%)"
                ]:
           }
          });  */


        map.loadImage(
            './image/icono_comisaria_familia.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('icono_comisaria_familia', image);

                map.addLayer({
                    'id': 'comisaria_familia',
                    'type': 'symbol',
                    'source': 'comisaria_familia',
                    'layout': {
                        'icon-image': 'icono_comisaria_familia',
                        'icon-allow-overlap': true,
                        'icon-size': 0.9,
                        'visibility': 'none'
                    }
                });
            }
        );


        map.loadImage(
            './image/icono_atencion_personas_mayores_discapacidad.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('icono_atencion_personas_mayores_discapacidad', image);

                map.addLayer({
                    'id': 'atencion_personas_mayores_discapacidad',
                    'type': 'symbol',
                    'source': 'atencion_personas_mayores_discapacidad',
                    'layout': {
                        'icon-image': 'icono_atencion_personas_mayores_discapacidad',
                        'icon-allow-overlap': true,
                        'icon-size': 0.9,
                        'visibility': 'none'
                    }
                });
            }
        );


        map.loadImage(
            './image/icono_atencion_ninos_discapacidad.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('icono_atencion_ninos_discapacidad', image);

                map.addLayer({
                    'id': 'atencion_ninos_discapacidad',
                    'type': 'symbol',
                    'source': 'atencion_ninos_discapacidad',
                    'layout': {
                        'icon-image': 'icono_atencion_ninos_discapacidad',
                        'icon-allow-overlap': true,
                        'icon-size': 0.9,
                        'visibility': 'none'
                    }
                });
            }
        );

        map.loadImage(
            './image/icono_centro_proteger.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('icono_centro_proteger', image);

                map.addLayer({
                    'id': 'centro_proteger',
                    'type': 'symbol',
                    'source': 'centro_proteger',
                    'layout': {
                        'icon-image': 'icono_centro_proteger',
                        'icon-allow-overlap': true,
                        'icon-size': 0.9,
                        'visibility': 'none'
                    }
                });
            }
        );

        map.loadImage(
            './image/icono_centro_amar.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('icono_centro_amar', image);

                map.addLayer({
                    'id': 'centro_amar',
                    'type': 'symbol',
                    'source': 'centro_amar',
                    'layout': {
                        'icon-image': 'icono_centro_amar',
                        'icon-allow-overlap': true,
                        'icon-size': 0.9,
                        'visibility': 'none'
                    }
                });
            }
        );


        // // Añadir capas de tipo línea

        /*  map.addLayer({
             'id': 'cuadrantes_policia',
             'type': 'line',
             'source': 'cuadrantes_policia',
             'layout': {
                 'visibility': 'none',
                 'line-cap': 'round',
                 'line-join': 'round',
             },
             'paint': {
                 'line-color': 'seagreen',
                 'line-width': 4,
             }
         }); */




        // Add Legend


    });
});