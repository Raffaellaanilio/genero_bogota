$(document).ready(function () {

    // Cargar mapa

    mapboxgl.accessToken = 'pk.eyJ1IjoicmFmZmFlbGxhYW5pbGlvIiwiYSI6ImNrZWlubncydjEwOGgyd21udHdmOWJ4M24ifQ.E2q7D7b-Je_x7VRjbqjAAA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10',
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
        $(".mapboxgl-popup-content").hide();

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
    };

    var hoveredStateId = null;

    // Cargar GeoJSON

    map.on('load', function () {

        var layers = ['0-10', '10-20', '20-50', '50-100', '100-200', '200-500', '500-1000', '1000+'];
        var colors = ['#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026'];

        var array_de_capas_puntos = ['creciendo_familia', 'comedor_comunitario', 'envejecimiento_activo', 'colegios', 'casa_oportunidades_mujeres', 'biblored', 'bibliotecas_comunitarias', 'paraderos_zonales_SITP', 'comisaria_familia', 'estacion_de_policia', 'atencion_personas_mayores_discapacidad', 'atencion_ninos_discapacidad', 'centro_proteger', 'centro_amar']
        var array_indicadores = ['ambos', 'hombres', 'mujeres', 'hombres05', 'mujeres05', 'ambos05']

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

        var url33 = './geojson/cuadrantes_policia_puntos.geojson';
        map.addSource('cuadrantes_policia_puntos', { type: 'geojson', data: url33 });

        var url39 = './geojson/etiquetas.geojson';
        map.addSource('etiquetas', { type: 'geojson', data: url39 });

        var url40 = './geojson/tabla_completa_indicadores2.geojson';
        map.addSource('tabla_completa_indicadores2', { type: 'geojson', data: url40 });

        var url41 = './geojson/propuesta_manzanas.geojson';
        map.addSource('propuesta_manzanas', { type: 'geojson', data: url41 });

        var url42 = './geojson/cdc.geojson';
        map.addSource('cdc', { type: 'geojson', data: url42 });

        var url43 = './geojson/jardin_infantil.geojson';
        map.addSource('jardin_infantil', { type: 'geojson', data: url43 });

        var url44 = './geojson/coordenadas_empresas.geojson';
        map.addSource('coordenadas_empresas', { type: 'geojson', data: url44 });

        
        // Se abre caja información de servicios, y cambia el nombre de la localidad según corresponda

        map.on('click', 'total_ambos', function (e) {

            var nombre = e.features[0].properties.CDCNombre;
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

        map.on('click', 'hombres', function (e) {

            var nombre = e.features[0].properties.CDCNombre;
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

        map.on('click', 'mujeres', function (e) {

            var nombre = e.features[0].properties.CDCNombre;
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

        map.on('click', 'mujeres_tareas_hogar', function (e) {

            var nombre = e.features[0].properties.CDCNombre;
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

        map.on('click', 'cdc', function (e) {

            var nombre = e.features[0].properties.OSSNOMBRE;
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

        // Popup al hacer clic en geometría

        map.on('click', 'cdc', function (e) {

            var nombre = e.features[0].properties.OSSNOMBRE;
            var direccion = e.features[0].properties.OSSDIRECCI;
            var telefono = e.features[0].properties.OSSTELEFON;
            var horario = e.features[0].properties.OSSHORARIO;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Horario: </b>' + horario + '</div>';
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'centro_proteger', function (e) {

            var nombre = e.features[0].properties.OSSNOMBRE;
            var direccion = e.features[0].properties.OSSDIRECCI;
            var telefono = e.features[0].properties.OSSTELEFON;
            var horario = e.features[0].properties.OSSHORARIO;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Horario: </b>' + horario + '</div>';


            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'centro_amar', function (e) {

            var nombre = e.features[0].properties.OSSNOMBRE;
            var direccion = e.features[0].properties.OSSDIRECCI;
            var telefono = e.features[0].properties.OSSTELEFON;
            var horario = e.features[0].properties.OSSHORARIO;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Horario: </b>' + horario + '</div>';


            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'comedor_comunitario', function (e) {

            var nombre = e.features[0].properties.OSSNOMBRE;
            var direccion = e.features[0].properties.OSSDIRECCI;
            var telefono = e.features[0].properties.OSSTELEFON;
            var horario = e.features[0].properties.OSSHORARIO;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Horario: </b>' + horario + '</div>';


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
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Horario: </b>' + horario + '</div>';


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
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Horario: </b>' + horario + '</div>';


            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });


        map.on('click', 'atencion_personas_mayores_discapacidad', function (e) {

            var nombre = e.features[0].properties.OSSNOMBRE;
            var direccion = e.features[0].properties.OSSDIRECCI;
            var telefono = e.features[0].properties.OSSTELEFON;
            var horario = e.features[0].properties.OSSHORARIO;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Horario: </b>' + horario + '</div>';


            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'atencion_ninos_discapacidad', function (e) {

            var nombre = e.features[0].properties.OSSNOMBRE;
            var direccion = e.features[0].properties.OSSDIRECCI;
            var telefono = e.features[0].properties.OSSTELEFON;
            var horario = e.features[0].properties.OSSHORARIO;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Horario: </b>' + horario + '</div>';


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
            var innerPopup = '<div' + '<h6 style="text-align: center;"><b>Información</b></h6>' +'</br>'+ '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Email: </b>' + email + '</br>' + '<b>Sitio Web: </b>' + web + '</br>' + '<b>Enfoque: </b>' + enfoque + '</br>' + '<b>Talentos: </b>' + talentos + '</br>' + '<b>Regimen: </b>' + regimen + '</div>';

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
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Horario: </b>' + horario + '</br>' + '<b>Email: </b>' + email + '</div>';
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'jardin_infantil', function (e) {

            var nombre = e.features[0].properties.OSSNOMBRE;
            var direccion = e.features[0].properties.OSSDIRECCI;
            var telefono = e.features[0].properties.OSSTELEFON;
            var horario = e.features[0].properties.OSSHORARIO;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Horario: </b>' + horario + '</br>' + '</div>';
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'bibliotecas_comunitarias', function (e) {

            var nombre = e.features[0].properties.LecNombre;
            var direccion = e.features[0].properties.LecDirecci;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Nombre: </b>'+ nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</div>';
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'paraderos_zonales_SITP', function (e) {

            var nombre = e.features[0].properties.nombre_par;
            var direccion = e.features[0].properties.audio_para;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</div>';
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
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Nombre: </b>' + direccion + '</br>' + '<b>Funcionamiento: </b>' + funcionamiento + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Email: </b>' + email + '</br>' + '<b>Sitio Web: </b>' + web + '</div>';
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'indice_seguridad', function (e) {

    
            var seguridad = e.features[0].properties.seguridad_;
            var imagen = e.features[0].properties.URL_Fotogr;
            var fecha = e.features[0].properties.Fecha;

            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' +'<b>Evaluación de seguridad: </b>' + seguridad + '</br>' +'<b>Fecha de Análisis: </b>' + fecha + '</br>' + '<b>Fotografía del lugar: </b>' + '</br>' + '<a target="_blank" class="image-link" href="' + imagen +'">' + '<img id="foto" src="'+ imagen + '">' + '</a>' + '</div>';
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'comisaria_familia', function (e) {
            var direccion = e.features[0].properties.OSSDIRECCI;
            var telefono = e.features[0].properties.OSSTELEFON;
            var horario = e.features[0].properties.OSSHORARIO;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Nombre: </b>' + direccion + '</br>' + '<b>Teléfono: </b>' + telefono + '</br>' + '<b>Horario: </b>' + horario + '</div>';
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'total_ambos', function (e) {

            var total = e.features[0].properties.total_ambos;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Población total: </b>' + total + '</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'hombres', function (e) {

            var total = e.features[0].properties.hombres;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Población total de hombres: </b>' + total + '</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'mujeres', function (e) {

            var total = e.features[0].properties.mujeres;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Población total de mujeres: </b>' + total + '</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'ambos05', function (e) {

            var total = e.features[0].properties.ambos05;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Población total de 0 a 5 años: </b>' + total + '</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'hombres05', function (e) {

            var total = e.features[0].properties.hombres05;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Población hombres de 0 a 5 años: </b>' + total + '</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'mujeres05', function (e) {

            var total = e.features[0].properties.mujeres05;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Población mujeres de 0 a 5 años: </b>' + total + '</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'ambos_mediana_edad', function (e) {

            var total = e.features[0].properties.ambos_mediana_edad;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Población total mediana edad: </b>' + total + '</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'hombres_mediana_edad', function (e) {

            var total = e.features[0].properties.hombres_mediana_edad;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Hombres de mediana edad: </b>' + total + '%'+'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'mujeres_mediana_edad', function (e) {

            var total = e.features[0].properties.mujeres_mediana_edad;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Mujeres de mediana edad: </b>' + total + '%'+'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'ambos65mas', function (e) {

            var total = e.features[0].properties.ambos65mas;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Población total mediana edad: </b>' + total + '%'+'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'hombres65mas', function (e) {

            var total = e.features[0].properties.hombres65mas;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Hombres de 65 años o más: </b>' + total + '%'+'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'mujeres65mas', function (e) {

            var total = e.features[0].properties.mujeres65mas;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Mujeres de 65 años o más: </b>' + total + '%'+'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'ambos85mas', function (e) {

            var total = e.features[0].properties.ambos85mas;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Población total de 85 años o más: </b>' + total + '%'+'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'hombres85mas', function (e) {

            var total = e.features[0].properties.hombres85mas;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Hombres de 85 años o más: </b>' + total + '%'+'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'mujeres85mas', function (e) {

            var total = e.features[0].properties.mujeres85mas;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Mujeres de 85 años o más: </b>' + total + '%'+'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'total_viviendas', function (e) {

            var total = e.features[0].properties.total_viviendas;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Total viviendas: </b>' + total + '</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'viviendas_65mas', function (e) {

            var total = e.features[0].properties.viviendas_65mas;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Viviendas 65 mas: </b>' + total + "%"+'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'unipersonal_personas_65mas', function (e) {

            var total = e.features[0].properties.unipersonal_personas_65mas;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Total: </b>' + total + '%' +'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'monoparental_femeninos', function (e) {

            var total = e.features[0].properties.monoparental_femeninos;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Total: </b>' + total + '%' +'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'monoparental_fem_65mas', function (e) {

            var total = e.features[0].properties.monoparental_fem_65mas;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Total: </b>' + total + '%' +'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'biparental_65mas', function (e) {

            var total = e.features[0].properties.biparental_65mas;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Total: </b>' + total + '%' +'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'biparental_menor15', function (e) {

            var total = e.features[0].properties.biparental_menor15;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Total: </b>' + total + '%' +'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'analfabetismo', function (e) {

            var total = e.features[0].properties.analfabetismo;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Total: </b>' + total + '%' +'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'cuidado_primera_infancia', function (e) {

            var total = e.features[0].properties.cuidado_primera_infancia;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Total: </b>' + total + '%' +'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'inasistencia_escolar', function (e) {

            var total = e.features[0].properties.inasistencia_escolar;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Total: </b>' + total + '%' +'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'acceso_salud', function (e) {

            var total = e.features[0].properties.acceso_salud;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Total: </b>' + total + '%' +'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'hacinamiento', function (e) {

            var total = e.features[0].properties.hacinamiento;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Total: </b>' + total + '%' +'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'pobreza_multidimension', function (e) {

            var total = e.features[0].properties.pobreza_multidimension;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Total: </b>' + total + '%' +'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'presupuesto', function (e) {

            var total = e.features[0].properties.presupuesto;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Total: </b>' + total +' millones' +'</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'hogares_pobreza_jefe_mujer', function (e) {

            var total = e.features[0].properties.hogares_pobreza_jefe_mujer;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Total: </b>' + total + '</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'hogares_pobreza', function (e) {

            var total = e.features[0].properties.hogares_pobreza;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Total: </b>' + total + '</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'indice_feminidad', function (e) {

            var total = e.features[0].properties.indice_feminidad;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Índice de Feminidad: </b>' + total + '</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });


        map.on('click', 'mujeres_tareas_hogar', function (e) {

            var total = e.features[0].properties.mujeres_tareas_hogar;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Total: </b>' + total + '</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'propuesta_manzanas', function (e) {

            var nombre = e.features[0].properties.Name;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>'+ '<b>Referencia: </b>' + nombre + '</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });

        map.on('click', 'coordenadas_empresas', function (e) {

            var nombre = e.features[0].properties.RAZON_SOCIAL;
            var direccion = e.features[0].properties.DIRECCION_NORMALIZADA;
            var telefono1 = e.features[0].properties.TELEFONO1;
            var telefono2 = e.features[0].properties.TELEFONO2;
            var descripcion = e.features[0].properties.DESCRIPCION;
            var innerPopup = '<div>' + '<h6 style="text-align: center;"><b>Información</b></h6>' + '<b>Nombre: </b>' + nombre + '</br>' + '<b>Dirección: </b>' + direccion + '</br>' + '<b>Telefono 1: </b>' + telefono1 + '</br>' + '<b>Telefono 2: </b>' + telefono2 + '</br>' + '<b>Descripción: </b>' + descripcion + '</div>';

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(innerPopup)
                .addTo(map);
        });


        // Añadir capas de tipo polígono y sus estilos

        

        map.addLayer({
            'id': 'total_ambos',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'total_ambos'],
                    "#bebebd",
                    15959,'#ffffd4',
                    153142,'#ffe19c',
                    290324,'#ffe19c',
                    427506,'#feb351',
                    564688,'#f0821e',
                    839052,'#cc560c'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'porc_pobl_4_menos',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'porc_pobl_4_menos'],
                    "#bebebd",
                    4,'#feb351',
                    6,'#f0821e',
                    8,'#cc560c'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'porc_pobl_65mas',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'porc_pobl_65mas'],
                    "#bebebd",
                    4,'#ffffd4',
                    6,'#ffe19c',
                    8,'#ffe19c',
                    10,'#feb351',
                    12,'#f0821e',
                    14,'#cc560c'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'porc_poblacion_81mas',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'porc_poblacion_81mas'],
                    "#bebebd",
                    1,'#ffffd4',
                    2,'#feb351',
                    3,'#cc560c'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'relacion_dependencia',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'relacion_dependencia'],
                    "#bebebd",
                    30,'#f1eef6',
                    33,'#91b6d7',
                    37,'#2382b4',
                    41,'#045a8d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'requieren_cuidado',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'requieren_cuidado'],
                    "#bebebd",
                    200,'#f1eef6',
                    3000,'#c8d1e6',
                    6000,'#91b6d7',
                    12000,'#579ec8',
                    20000,'#2382b4',
                    25000,'#045a8d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'hombres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'hombres'],
                    "#bebebd",
                    8227,'#f1eef6',
                    51297,'#c8d1e6',
                    74581,'#91b6d7',
                    166782,'#579ec8',
                    179777,'#2382b4',
                    316933,'#045a8d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'mujeres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'mujeres'],
                    "#bebebd",
                    7732,'#fcfbfd',
                    52917,'#e4e3f0',
                    81398,'#babbdb',
                    177313,'#8c88c0',
                    192080,'#63439c',
                    339722,'#3f007d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'total_viviendas',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'total_viviendas'],
                    "#bebebd",
                    50000,'#fff5f0',
                    80000,'#fca487',
                    120000,'#eb362a',
                    200000,'#67000d',
                    400000,'#5a1c00'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

     
        map.addLayer({
            'id': 'unipersonal_personas_65mas',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'unipersonal_personas_65mas'],
                    "#bebebd",
                    2,'#fff5f0',
                    4,'#fdbea5',
                    6,'#fc7050',
                    8,'#d42020',
                    10,'#67000d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'monoparental_femeninos',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'monoparental_femeninos'],
                    "#bebebd",
                    3,'#fff5eb',
                    6,'#fdbd83',
                    9,'#ee6510',
                    12,'#7f2704'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'monoparental_fem_65mas',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'monoparental_fem_65mas'],
                    "#bebebd",
                    2,'#fff5eb',
                    3,'#fed2a6',
                    4,'#fd9243',
                    5,'#df4f05',
                    6,'#7f2704',
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'biparental_menor15',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'biparental_menor15'],
                    "#bebebd",
                    14,'#d8e7f5',
                    20,'#b0d2e8',
                    25,'#73b3d8',
                    30,'#3e8ec4',
                    35,'#1563aa',
                    40,'#08306b'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'biparental_65mas',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'biparental_65mas'],
                    "#bebebd",
                    6,'#73b3d8',
                    8,'#3e8ec4',
                    10,'#1563aa',
                    12,'#08306b'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'hogares_pobreza',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'hogares_pobreza'],
                    "#bebebd",
                    500,'#c8ddf0',
                    7000,'#73b3d8',
                    20000,'#73b3d8',
                    50000,'#3e8ec4',
                    70000,'#1563aa',
                    90000,'#08306b'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'hogares_pobreza_jefe_mujer',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'hogares_pobreza_jefe_mujer'],
                    "#bebebd",
                    100,'#c8ddf0',
                    800,'#73b3d8',
                    3000,'#73b3d8',
                    8000,'#3e8ec4',
                    25000,'#1563aa'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'analfabetismo',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'analfabetismo'],
                    "#bebebd",
                    1,'#c8ddf0',
                    2,'#73b3d8',
                    3,'#73b3d8',
                    4,'#3e8ec4',
                    5,'#1563aa',
                    6,'#08306b'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'inasistencia_escolar',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'inasistencia_escolar'],
                    "#bebebd",
                    1,'#3e8ec4',
                    2,'#1563aa',
                    3,'#08306b'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'cuidado_primera_infancia',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'cuidado_primera_infancia'],
                    "#bebebd",
                    6,'#c8ddf0',
                    9,'#73b3d8',
                    10,'#73b3d8',
                    14,'#3e8ec4',
                    16,'#1563aa'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'acceso_salud',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'acceso_salud'],
                    "#bebebd",
                    1,'#c8ddf0',
                    2,'#73b3d8',
                    3,'#73b3d8',
                    4,'#3e8ec4',
                    5,'#1563aa'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'hacinamiento',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'hacinamiento'],
                    "#bebebd",
                    2,'#c8ddf0',
                    3,'#73b3d8',
                    5,'#73b3d8',
                    7,'#3e8ec4',
                    10,'#1563aa'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

       

        map.addLayer({
            'id': 'indice_feminidad',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'indice_feminidad'],
                    "#bebebd",
                    100,'#b0d2e8',
                    101,'#73b3d8',
                    102,'#3e8ec4',
                    103,'#1563aa',
                    104,'#08306b'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

    
        map.addLayer({
            'id': 'mujeres_tareas_hogar',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'mujeres_tareas_hogar'],
                    "#bebebd",
                    30000,'#fff5eb',
                    60000,'#fed2a6',
                    90000,'#fd9243',
                    120000,'#df4f05',
                    160000,'#7f2704'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'pobreza_multidimension',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'pobreza_multidimension'],
                    "#bebebd",
                    2,'#fff5eb',
                    4,'#fed2a6',
                    6,'#fd9243',
                    8,'#df4f05',
                    10,'#7f2704'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });
      
        map.addLayer({
            'id': 'presupuesto',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'presupuesto'],
                    "#bebebd",
                    500,'#fff5f0',
                    700,'#fdbea5',
                    1300,'#fc7050',
                    2400,'#d42020',
                    3700,'#67000d',
                    4717,'#40060d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'transmilenio_trabajar_hombres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'transmilenio_trabajar_hombres'],
                    "#bebebd",
                    14,'#fdbea5',
                    20,'#fc7050',
                    30,'#d42020',
                    40,'#67000d',
                    51,'#40060d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'buses_sitp_trabajar_hombres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'buses_sitp_trabajar_hombres'],
                    "#bebebd",
                    13,'#fc7050',
                    20,'#d42020',
                    30,'#67000d',
                    35,'#40060d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'bus_colectivo_trabajar_hombres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'bus_colectivo_trabajar_hombres'],
                    "#bebebd",
                    6,'#fdbea5',
                    10,'#fc7050',
                    15,'#d42020',
                    20,'#67000d',
                    24,'#40060d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'automovil_trabajar_hombres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'automovil_trabajar_hombres'],
                    "#bebebd",
                    3,'#fdbea5',
                    10,'#fc7050',
                    20,'#d42020',
                    30,'#67000d',
                    42,'#40060d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'taxi_trabajar_hombres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'taxi_trabajar_hombres'],
                    "#bebebd",
                    2,'#fdbea5',
                    4,'#fc7050',
                    6,'#d42020',
                    8,'#67000d',
                    10,'#5b0813',
                    13,'#40060d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'moto_trabajar_hombres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'moto_trabajar_hombres'],
                    "#bebebd",
                    2,'#fc7050',
                    6,'#d42020',
                    8,'#67000d',
                    10,'#5b0813',
                    12,'#40060d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'bicicleta_trabajar_hombres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'bicicleta_trabajar_hombres'],
                    "#bebebd",
                    2,'#fc7050',
                    5,'#d42020',
                    7,'#67000d',
                    10,'#5b0813',
                    13,'#40060d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'caminar_trabajar_hombres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'caminar_trabajar_hombres'],
                    "#bebebd",
                    9,'#fc7050',
                    15,'#d42020',
                    20,'#67000d',
                    25,'#5b0813',
                    30,'#660f1a',
                    37,'#40060d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'transmilenio_trabajar_mujeres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'transmilenio_trabajar_mujeres'],
                    "#bebebd",
                    21,'#fdbea5',
                    28,'#fc7050',
                    35,'#d42020',
                    42,'#67000d',
                    50,'#63060d',
                    57,'#40060d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'buses_sitp_trabajar_mujeres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'buses_sitp_trabajar_mujeres'],
                    "#bebebd",
                    18,'#fdbea5',
                    22,'#fc7050',
                    27,'#d42020',
                    32,'#67000d',
                    40,'#40060d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'bus_colectivo_trabajar_mujeres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'bus_colectivo_trabajar_mujeres'],
                    "#bebebd",
                    6,'#fdbea5',
                    12,'#fc7050',
                    16,'#d42020',
                    21,'#67000d',
                    26,'#40030d',
                    32,'#40060d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'automovil_trabajar_mujeres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'automovil_trabajar_mujeres'],
                    "#bebebd",
                    2,'#fdbea5',
                    8,'#fc7050',
                    16,'#d42020',
                    23,'#67000d',
                    30,'#40030d',
                    36,'#40060d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'taxi_trabajar_mujeres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'taxi_trabajar_mujeres'],
                    "#bebebd",
                    3,'#fdbea5',
                    6,'#fc7050',
                    9,'#d42020',
                    12,'#67000d',
                    15,'#5b0813',
                    20,'#40060d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

   /*      map.addLayer({
            'id': 'moto_trabajar_mujeres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'moto_trabajar_mujeres'],
                    "#bebebd",
                    2,'#fc7050',
                    6,'#d42020',
                    8,'#67000d',
                    10,'#5b0813',
                    12,'#40060d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        }); */

        map.addLayer({
            'id': 'bicicleta_trabajar_mujeres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'bicicleta_trabajar_mujeres'],
                    "#bebebd",
                    2,'#d42020',
                    3,'#67000d',
                    4,'#5b0813',
                    5,'#40060d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'caminar_trabajar_mujeres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'caminar_trabajar_mujeres'],
                    "#bebebd",
                    12,'#fc7050',
                    18,'#d42020',
                    22,'#67000d',
                    28,'#5b0813',
                    32,'#660f1a',
                    38,'#40060d'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        //  Paleta verdes: '#ffffcc','#cfeba3','#96d386','#5bb86a','#27974e','#006837'

        map.addLayer({
            'id': '15_centro_cuidado_infantil',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', '15_centro_cuidado_infantil'],
                    "#bebebd",
                    13,'#ffffcc',
                    16,'#cfeba3',
                    19,'#96d386',
                    22,'#5bb86a',
                    25,'#27974e',
                    31,'#006837'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': '15_estacion_paradero',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', '15_estacion_paradero'],
                    "#bebebd",
                    56,'#ffffcc',
                    62,'#cfeba3',
                    68,'#96d386',
                    75,'#5bb86a',
                    81,'#27974e',
                    94,'#006837'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': '15_paradero_buses',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', '15_paradero_buses'],
                    "#bebebd",
                    1,'#cfeba3',
                    3,'#96d386',
                    6,'#27974e',
                    8,'#006837'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': '15_transporte_publico',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', '15_transporte_publico'],
                    "#bebebd",
                    2,'#ffffcc',
                    4,'#cfeba3',
                    6,'#96d386',
                    8,'#27974e',
                    12,'#006837'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': '15_transporte_intermunicipal',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', '15_transporte_intermunicipal'],
                    "#bebebd",
                    10,'#ffffcc',
                    15,'#cfeba3',
                    20,'#96d386',
                    25,'#5bb86a',
                    30,'#27974e',
                    37,'#006837'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': '15_zona_verde',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', '15_zona_verde'],
                    "#bebebd",
                    4,'#cfeba3',
                    8,'#96d386',
                    10,'#5bb86a',
                    12,'#27974e',
                    20,'#006837'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': '15_supermercado',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', '15_supermercado'],
                    "#bebebd",
                    2,'#5bb86a',
                    3,'#27974e',
                    4,'#006837'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': '15_farmacia',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', '15_farmacia'],
                    "#bebebd",
                    1,'#cfeba3',
                    3,'#96d386',
                    5,'#5bb86a',
                    7,'#27974e',
                    9,'#006837'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': '15_banco',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', '15_banco'],
                    "#bebebd",
                    5,'#ffffcc',
                    13,'#cfeba3',
                    20,'#96d386',
                    26,'#5bb86a',
                    34,'#27974e',
                    48,'#006837'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': '15_centro_medico',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', '15_centro_medico'],
                    "#bebebd",
                    28,'#cfeba3',
                    32,'#96d386',
                    36,'#5bb86a',
                    40,'#27974e',
                    46,'#006837'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': '15_centro_medico',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', '15_centro_medico'],
                    "#bebebd",
                    28,'#cfeba3',
                    32,'#96d386',
                    36,'#5bb86a',
                    40,'#27974e',
                    46,'#006837'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });
// Paleta rosa #f1eef6, #ddc1de, #dc85c0, #df4899,#d0166d, #980043
        map.addLayer({
            'id': 'ocupacion_mujeres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'ocupacion_mujeres'],
                    "#bebebd",
                    38,'#96d386',
                    42,'#5bb86a',
                    46,'#27974e',
                    55,'#006837'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'mujeres_sin_ingresos',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'mujeres_sin_ingresos'],
                    "#bebebd",
                    19,'#f1eef6',
                    25,'#ddc1de',
                    30,'#dc85c0',
                    36,'#df4899',
                    42,'#d0166d',
                    48,'#980043'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'feminidad_hogares_pobres',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'feminidad_hogares_pobres'],
                    "#bebebd",
                    99,'#f1eef6',
                    110,'#ddc1de',
                    120,'#dc85c0',
                    130,'#df4899',
                    140,'#d0166d',
                    152,'#980043'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'mujeres_sin_cotizar',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'mujeres_sin_cotizar'],
                    "#bebebd",
                    24,'#f1eef6',
                    30,'#ddc1de',
                    36,'#dc85c0',
                    42,'#df4899',
                    48,'#d0166d',
                    55,'#980043'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'hombres_pension',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'hombres_pension'],
                    "#bebebd",
                    2,'#dc85c0',
                    4,'#df4899',
                    6,'#d0166d',
                    9,'#980043'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
            }
        });

        map.addLayer({
            'id': 'mujeres_pension',
            'type': 'fill',
            'source': 'tabla_completa_indicadores2',
            'layout': {
                'visibility': 'none',
            },
            'paint': {
                'fill-color': [
                    "step",
                    ['get', 'mujeres_pension'],
                    "#bebebd",
                    2,'#ddc1de',
                    4,'#dc85c0',
                    6,'#df4899',
                    8,'#d0166d',
                    10,'#980043'
                ],
                'fill-opacity': 1,
                'fill-outline-color':'#000000',
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
                'fill-opacity': 0.4
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

        map.addLayer({
            'id': 'etiquetas',
            'type': 'symbol',
            'source': 'etiquetas',
            'layout': {
                'text-field': ['get', 'LocNombre'],
                'text-size': 15,
                'text-font': ["Open Sans Regular", "Arial Unicode MS Regular"],
                'text-anchor': ['get', 'anchor'],
                'visibility': 'visible'
            },
            'paint': {
                'text-color': '#3a3b40',
                'text-opacity': 1,
                'text-halo-color': 'white',
                'text-halo-width': 2,
    }
 });

        map.addLayer({
                    'id': 'cuadrantes_policia_puntos',
                    'type': 'symbol',
                    'source': 'cuadrantes_policia_puntos',
                    'layout': {
                        'text-field': ['get', 'PCUDESCRIP'],
                        'text-size': 9,
                        'text-font': ["Open Sans Regular", "Arial Unicode MS Regular"],
                        'text-anchor': ['get', 'anchor'],
                        'visibility': 'none'
                    },
                    'paint': {
                        'text-color': 'black',
                        'text-opacity': 1,
                        'text-halo-color': 'white',
                        'text-halo-width': 1.5,
            }
         }); 


         map.loadImage(
            './image/icono_jardin_infantil.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('icono_jardin_infantil', image);

                map.addLayer({
                    'id': 'jardin_infantil',
                    'type': 'symbol',
                    'source': 'jardin_infantil',
                    'layout': {
                        'icon-image': 'icono_jardin_infantil',
                        'icon-allow-overlap': true,
                        'icon-size': 0.9,
                        'visibility': 'none'
                    }
                });
            }
        );

         map.loadImage(
            './image/icono_cdc.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('icono_cdc', image);

                map.addLayer({
                    'id': 'cdc',
                    'type': 'symbol',
                    'source': 'cdc',
                    'layout': {
                        'icon-image': 'icono_cdc',
                        'icon-allow-overlap': true,
                        'icon-size': 0.9,
                        'visibility': 'none'
                    }
                });
            }
        );
        
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

         map.addLayer({
           'id': 'indice_seguridad',
           'type': 'circle',
           'source': 'indice_seguridad',
           'layout':{
               'visibility':'none'
           },
           'paint': {
                'circle-color':[
                    'interpolate',
                    ['linear'],
                    ['get','INDICE_SEG'],
                    0, '#e01c0a',
                    2,'#f0b92c',
                    4,'#1cc416',
                ],
                'circle-opacity':0.75
            }
        }); 

        map.addLayer({
            'id': 'coordenadas_empresas',
            'type': 'circle',
            'source': 'coordenadas_empresas',
            'layout':{
                'visibility':'none'
            },
            'paint': {
                 'circle-color':[
                    "match",
                    ["get", "DESCRIPCION"],
                    ["EDUCACION PREESCOLAR"],
                    "#f06060",
                    [
                      "LAVADO Y LIMPIEZA INCLUSO LA LIMPIEZA EN SECO DE PRODUCTOS TEXTILES Y DE PIEL"
                    ],
                    "#d219cf",
                    [
                      "ACTIVIDADES DE ATENCION RESIDENCIAL PARA EL CUIDADO DE PACIENTES CON RETARDO MENTAL ENFERMEDAD MENTAL Y CONSUMO DE SUSTANCIAS PSICOACTIVAS"
                    ],
                    "#1b339d",
                    [
                      "ACTIVIDADES DE LOS HOGARES INDIVIDUALES COMO EMPLEADORES DE PERSONAL DOMESTICO"
                    ],
                    "#c99718",
                    [
                      "EDUCACION DE LA PRIMERA INFANCIA"
                    ],
                    "#72eee7",
                    [
                      "ACTIVIDADES DE ASISTENCIA SOCIAL SIN ALOJAMIENTO PARA PERSONAS MAYORES Y DISCAPACITADAS"
                    ],
                    "#1cd50b",
                    [
                      "EDUCACION BASICA PRIMARIA"
                    ],
                    "#f52929",
                    [
                      "ACTIVIDADES DE ATENCION EN INSTITUCIONES PARA EL CUIDADO DE PERSONAS MAYORES Y/O DISCAPACITADAS"
                    ],
                    "#36828c",
                    "#000000"
                  ],
                 'circle-opacity':1
             }
         }); 


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
                        'icon-size': 1.2,
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

        map.loadImage(
            './image/icono_propuesta_manzanas.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('icono_propuesta_manzanas', image);

                map.addLayer({
                    'id': 'propuesta_manzanas',
                    'type': 'symbol',
                    'source': 'propuesta_manzanas',
                    'layout': {
                        'icon-image': 'icono_propuesta_manzanas',
                        'icon-allow-overlap': true,
                        'icon-size': 0.9,
                        'visibility': 'none'
                    }
                });
            }
        );


        // // Añadir capas de tipo línea

          map.addLayer({
             'id': 'limites',
             'type': 'line',
             'source': 'limites',
             'layout': {
                 'visibility': 'visible',
                 'line-cap': 'round',
                 'line-join': 'round',
             },
             'paint': {
                 'line-color': 'grey',
                 'line-width': 2,
             }
         });


        // Add Legend

      /*   for (i = 0; i < layers.length; i++) {
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
            }
 */

    });
});