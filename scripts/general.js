//*constantes*//
const modo_nocturno               = document.querySelector('#modo_nocturno');
const seccion_favoritos           = document.querySelector('#seccion-favoritos');
const seccion_gifos               = document.querySelector('#seccion-gifos');
const seccion_crear_gifos         = document.querySelector('#seccion-crear-gifos');
const resultado_bus               = document.querySelector('#resultado-bus');
const width_pantalla              = screen.width;
const api_key                     = 'CbzEsmz0EA0iJtxYGlLcO9fraOkZpqxG';


//*variables*//
var body                          = document.getElementById('body')
var header                        = document.getElementById('header');
var main                          = document.getElementById('main');
var footer                        = document.getElementById('footer');
var linea_violeta                 = document.querySelectorAll('.linea-violeta');
var contenedor                    = document.querySelector('.contenedor');
var logo                          = document.querySelector('#logo');
var ul_header                     = document.querySelectorAll('#ul-header');
var ul_header_a                   = document.querySelectorAll('#ul-header a');
var signo_mas                     = document.querySelector('#signo-mas');
var main_gris                     = document.querySelector('#main-gris');
var titulo                        = document.querySelector('.titulo');
var input_busqueda                = document.querySelector('.input-busqueda');
var img_lupa                      = document.querySelector('.img-lupa');
var trending                      = document.querySelector('.trending');
var main_gris_oscuro              = document.querySelector('#main-gris-oscuro');
var flecha                        = document.querySelectorAll('.flecha');
var flecha_vol                    = document.querySelector('#flecha-vol');
var flecha_sig                    = document.querySelector('#flecha-sig');
var bloque_rd                     = document.querySelector('.bloque-rd');
var h3_compartir                  = document.querySelector('.h3-compartir');
var derechos                      = document.querySelector('.derechos');
var hamburger                     = document.querySelectorAll('.hamburger');
var favoritos                     = document.querySelector('#favoritos');
var mis_gifos                     = document.querySelector('#mis-gifos');
var tarjetas_favoritos            = document.querySelector('#tarjetas-favoritos');
var btn_fav                       = document.querySelector('#btn-fav');
var tarj_fav_class                = document.querySelectorAll('.tarjetas-favoritos');
var tarjetas_gif                  = document.querySelector('#tarjetas-gif');
var btn_gif                       = document.querySelector('#btn-gif');
var sec_fav_h4                    = document.querySelector('#seccion-favoritos h4');
var sec_gif_h4                    = document.querySelector('#seccion-gifos h4');
var sec_bus_h4                    = document.querySelector('#seccion-res-bus h4');
var sec_fav_btn                   = document.querySelector('#seccion-favoritos .btn-ver-mas');
var sec_gif_btn                   = document.querySelector('#seccion-gifos .btn-ver-mas');
var sec_bus_btn                   = document.querySelector('#seccion-res-bus .btn-ver-mas');
var search                        = document.querySelector('#search');
var input                         = document.querySelector('#input');
var autocompletar                 = document.querySelector('#autocompletar');
var close                         = document.querySelector('#close');
var seccion_res_bus               = document.querySelector('#seccion-res-bus');
var trending                      = document.querySelector('#trending');
var res_bus_titulo                = document.querySelector('#res-bus-titulo');
var btn_bus                       = document.querySelector('#btn-bus');
var car_1                         = document.querySelector('#car-1');
var car_2                         = document.querySelector('#car-2');
var car_3                         = document.querySelector('#car-3');
var trending_texto                = document.querySelector('#trending-txt');
var trending_texto2               = document.querySelector('#trending-txt2');
var trending_texto3               = document.querySelector('#trending-txt3');
var trending_texto4               = document.querySelector('#trending-txt4');
var trending_texto5               = document.querySelector('#trending-txt5');
var img_camara                    = document.querySelector('#img-camara');
var img_pelicula                  = document.querySelector('#img-pelicula');
var p_black                       = document.querySelectorAll('.p-black');
var h3_patalla                    = document.querySelectorAll('.h3-patalla');
var btn_gif_1                     = document.querySelector('#btn-gif-1');
var btn_gif_p_1                   = document.querySelector('#btn-gif-1 p');
var btn_gif_2                     = document.querySelector('#btn-gif-2');
var btn_gif_p_2                   = document.querySelector('#btn-gif-2 p');
var btn_gif_3                     = document.querySelector('#btn-gif-3');
var btn_gif_p_3                   = document.querySelector('#btn-gif-3 p');
var video                         = document.getElementById('video');
var comenzar                      = document.querySelector('#comenzar');
var grabar                        = document.querySelector('#grabar');
var finalizar                     = document.querySelector('#finalizar');
var subir                         = document.querySelector('#subir');
var hh_mm_ss                      = document.getElementById('hh-mm-ss');
var hora                          = document.querySelector('#hora');
var min                           = document.querySelector('#min');
var seg                           = document.querySelector('#seg');
var bloque_rep_cap                = document.getElementById('bloque-rep-cap');
var pantalla                      = document.getElementById('pantalla');
var opaciti_pantalla              = document.getElementById('opaciti-pantalla');


//*bandera*//
var sw_general                    = true;
var offset                        = 0;
var offset_trandig                = 0;
var index_ini                     = 0;
var index_fin                     = 0;
var cont_seg                      = 0;
var cont_min                      = 0;
var cont_hora                     = 0;


seccion_favoritos.style.display   = 'none';
seccion_gifos.style.display       = 'none';
seccion_crear_gifos.style.display = 'none';
seccion_res_bus.style.display     = 'none';
autocompletar.style.display       = 'none';
main_gris.style.display           = 'block';
trending.style.display            = 'block';
main_gris_oscuro.style.display    = 'block';

logo.addEventListener('click', function(){
    main_gris.style.display           = 'block';
    main_gris_oscuro.style.display    = 'block';
    trending.style.display            = 'block';
    seccion_favoritos.style.display   = 'none';
    seccion_gifos.style.display       = 'none';
    seccion_crear_gifos.style.display = 'none';
})


                        /* Hover signo mas */
signo_mas.addEventListener('mouseover', function () {
    if(sw_general == false){
        signo_mas.classList.add('fuente-negro');
        signo_mas.classList.add('background-blanco');
    }else{
        signo_mas.classList.add('fuente-blanco');
        signo_mas.classList.add('background-violeta');
    }
})

signo_mas.addEventListener('mouseout', function () {
    if(sw_general == false){
        signo_mas.classList.remove('fuente-negro');
        signo_mas.classList.remove('background-blanco');
    }else{
        signo_mas.classList.remove('fuente-blanco');
        signo_mas.classList.remove('background-violeta');
    }
})

                        /* Hover boton "ver mas" seccion busqueda */
sec_bus_btn.addEventListener('mouseover', function () {
    if(sw_general == false){
        sec_bus_btn.classList.add('fuente-negro');
        sec_bus_btn.classList.add('background-blanco');
    }else{
        sec_bus_btn.classList.add('fuente-blanco');
        sec_bus_btn.classList.add('background-violeta');
    }
})

sec_bus_btn.addEventListener('mouseout', function () {
    if(sw_general == false){
        sec_bus_btn.classList.remove('fuente-negro');
        sec_bus_btn.classList.remove('background-blanco');
    }else{
        sec_bus_btn.classList.remove('fuente-blanco');
        sec_bus_btn.classList.remove('background-violeta');
    }
})

                        /* Hover boton "ver mas" seccion Favoritos */
sec_fav_btn.addEventListener('mouseover', function () {
    if(sw_general == false){
        sec_fav_btn.classList.add('fuente-negro');
        sec_fav_btn.classList.add('background-blanco');
    }else{
        sec_fav_btn.classList.add('fuente-blanco');
        sec_fav_btn.classList.add('background-violeta');
    }
})

sec_fav_btn.addEventListener('mouseout', function () {
    if(sw_general == false){
        sec_fav_btn.classList.remove('fuente-negro');
        sec_fav_btn.classList.remove('background-blanco');
    }else{
        sec_fav_btn.classList.remove('fuente-blanco');
        sec_fav_btn.classList.remove('background-violeta');
    }
})

                        /* Hover boton "ver mas" seccion Gifos */
sec_gif_btn.addEventListener('mouseover', function () {
    if(sw_general == false){
        sec_gif_btn.classList.add('fuente-negro');
        sec_gif_btn.classList.add('background-blanco');
    }else{
        sec_gif_btn.classList.add('fuente-blanco');
        sec_gif_btn.classList.add('background-violeta');
    }
})

sec_gif_btn.addEventListener('mouseout', function () {
    if(sw_general == false){
        sec_gif_btn.classList.remove('fuente-negro');
        sec_gif_btn.classList.remove('background-blanco');
    }else{
        sec_gif_btn.classList.remove('fuente-blanco');
        sec_gif_btn.classList.remove('background-violeta');
    }
})

                        /* Hover boton "volver carrusel" */
flecha_vol.addEventListener('mouseover', function () {
    if(sw_general == false){
        flecha_vol.classList.add('fuente-negro');
        flecha_vol.classList.add('background-blanco');
    }else{
        flecha_vol.classList.add('fuente-blanco');
        flecha_vol.classList.add('background-violeta');
    }
})

flecha_vol.addEventListener('mouseout', function () {
    if(sw_general == false){
        flecha_vol.classList.remove('fuente-negro');
        flecha_vol.classList.remove('background-blanco');
    }else{
        flecha_vol.classList.remove('fuente-blanco');
        flecha_vol.classList.remove('background-violeta');
    }
})

                        /* Hover boton "siguiente carrusel" */
flecha_sig.addEventListener('mouseover', function () {
    if(sw_general == false){
        flecha_sig.classList.add('fuente-negro');
        flecha_sig.classList.add('background-blanco');
    }else{
        flecha_sig.classList.add('fuente-blanco');
        flecha_sig.classList.add('background-violeta');
    }
})

flecha_sig.addEventListener('mouseout', function () {
    if(sw_general == false){
        flecha_sig.classList.remove('fuente-negro');
        flecha_sig.classList.remove('background-blanco');
    }else{
        flecha_sig.classList.remove('fuente-blanco');
        flecha_sig.classList.remove('background-violeta');
    }
})