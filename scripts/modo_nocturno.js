                                        //  --------------------Modo Nocturno--------------------  // 
 
function class_list(){
    body.classList.toggle('background-gris');
    header.classList.toggle('background-gris'); 
    contenedor.classList.toggle('background-gris');
    signo_mas.classList.toggle('borde-violeta');
    signo_mas.classList.toggle('borde-blanco');
    main_gris.classList.toggle('background-gris');
    titulo.classList.toggle('fuente-blanco');
    input.classList.toggle('fuente-blanco');
    input.classList.toggle('borde-violeta');
    input.classList.toggle('borde-blanco');
    input_busqueda.classList.toggle('fuente-blanco');
    input_busqueda.classList.toggle('background-blanco');
    input_busqueda.classList.toggle('background-gris');
    img_lupa.classList.toggle('background-blanco');
    img_lupa.classList.toggle('background-gris');
    trending.classList.toggle('fuente-blanco');
    main_gris_oscuro.classList.toggle('background-gris-clarito');
    main_gris_oscuro.classList.toggle('background-gris-oscuro');
    main_gris_oscuro.classList.toggle('fuente-negro');
    main_gris_oscuro.classList.toggle('fuente-blanco');
    bloque_rd.classList.toggle('background-gris');
    h3_compartir.classList.toggle('fuente-blanco');
    derechos.classList.toggle('fuente-blanco');
    sec_fav_h4.classList.toggle('fuente-violeta');
    sec_gif_h4.classList.toggle('fuente-violeta');
    sec_fav_h4.classList.toggle('fuente-blanco');
    sec_gif_h4.classList.toggle('fuente-blanco');
    sec_fav_btn.classList.toggle('fuente-violeta');
    sec_gif_btn.classList.toggle('fuente-violeta');
    sec_bus_btn.classList.toggle('fuente-violeta');
    sec_fav_btn.classList.toggle('fuente-blanco');
    sec_gif_btn.classList.toggle('fuente-blanco');
    sec_bus_btn.classList.toggle('fuente-blanco');
    sec_fav_btn.classList.toggle('borde-violeta');
    sec_gif_btn.classList.toggle('borde-violeta');
    sec_bus_btn.classList.toggle('borde-violeta');
    sec_fav_btn.classList.toggle('borde-blanco');
    sec_gif_btn.classList.toggle('borde-blanco');
    sec_bus_btn.classList.toggle('borde-blanco');
    res_bus_titulo.classList.toggle('fuente-violeta');
    res_bus_titulo.classList.toggle('fuente-blanco');
    
    comenzar.classList.toggle('fuente-violeta');
    comenzar.classList.toggle('fuente-blanco');
    comenzar.classList.toggle('borde-violeta');
    comenzar.classList.toggle('borde-blanco');
    grabar.classList.toggle('fuente-violeta');
    grabar.classList.toggle('fuente-blanco');
    grabar.classList.toggle('borde-violeta');
    grabar.classList.toggle('borde-blanco');
    finalizar.classList.toggle('fuente-violeta');
    finalizar.classList.toggle('fuente-blanco');
    finalizar.classList.toggle('borde-violeta');
    finalizar.classList.toggle('borde-blanco');
    subir.classList.toggle('fuente-violeta');
    subir.classList.toggle('fuente-blanco');
    subir.classList.toggle('borde-violeta');
    subir.classList.toggle('borde-blanco');
}

function class_list_array(){
    for(let i=0; i < linea_violeta.length; i++){
        linea_violeta[i].classList.toggle('linea-violeta');
        linea_violeta[i].classList.toggle('negro');
    }

    for(let i=0; i < ul_header_a.length; i++){
        ul_header_a[i].classList.toggle('fuente-violeta');
        ul_header_a[i].classList.toggle('fuente-blanco');
    }

    for(let i=0; i < ul_header.length; i++){
        ul_header[i].classList.toggle('background-violeta-op');
        ul_header[i].classList.toggle('background-negro');
    }

    for(let i=0; i < flecha.length; i++){
        flecha[i].classList.toggle('fuente-violeta');
        flecha[i].classList.toggle('fuente-blanco');
        flecha[i].classList.toggle('borde-violeta');
        flecha[i].classList.toggle('borde-blanco');
    }
    
    for (let i = 0; i < hamburger.length; i++) {
        hamburger[i].classList.toggle('background-violeta');
        hamburger[i].classList.toggle('background-blanco');
    }

    for (let i = 0; i < p_black.length; i++) {
        p_black[i].classList.toggle('fuente-negro');
        p_black[i].classList.toggle('fuente-blanco');
    }

    for (let i = 0; i < h3_patalla.length; i++) {
        h3_patalla[i].classList.toggle('fuente-violeta');
        h3_patalla[i].classList.toggle('fuente-blanco');
    }

}

function cambiar_imagenes() {
    if(sw_general   == true){
        logo.src         = '../images/logo-desktop-modo-noc.svg';
        img_lupa.src     = '../images/icon-search-mod-noc.svg';
        img_camara.src   = '../images/camara-modo-noc.svg';
        img_pelicula.src = '../images/pelicula-modo-noc.svg';
        modo_nocturno.textContent = 'MODO DIURNO';
        sw_general    = false;
    }else{
        logo.src      = '../images/logo-desktop.svg';
        img_lupa.src  = '../images/icon-search.svg';
        img_camara.src = '../images/camara.svg';
        img_pelicula.src = '../images/pelicula.svg';
        modo_nocturno.textContent = 'MODO NOCTURNO';
        sw_general    = true;
    }
}

modo_nocturno.addEventListener('click', function(){
    class_list();
    class_list_array();
    cambiar_imagenes();
});


