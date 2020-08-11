var gif_activos = [];

function crear_tarjetas_fav() {

    let mis_gif_favoritos = JSON.parse(localStorage.getItem('mis_gif_favoritos'));

    gif_activos = [];

    if (mis_gif_favoritos){
        let activo=0;
        for (let i=0; i < mis_gif_favoritos.length ; i++) {
            wcont=i;
            if (mis_gif_favoritos[i].estado == 'activo') {
                gif_activos[activo] = mis_gif_favoritos[i];
                activo=activo+1
            }
        }

        if (activo == 0) {
            let div  = document.createElement('div');
            let img  = document.createElement('img');
            let p    = document.createElement('p');
    
            img.src             = '../images/icon-busqueda-sin-resultado.svg';
            p.textContent = '¡Guarda tu primer GIFO en Favoritos para que se muestre aquí!';
    
            p.classList.add('fav-bus-vacio');
            div.classList.add('res-bus-flex');
    
            div.appendChild(img);
            div.appendChild(p);
    
            div.classList.add('tarjetas-favoritos-vacio');
            tarjetas_favoritos.appendChild(div);
            btn_fav.style.display = 'none';
        }

        for (let i=0; i < gif_activos.length && i < 12 ; i++) {

            let div     = document.createElement('div');
            let tarjeta = document.createElement('img');

            tarjeta.src = gif_activos[i].url;
            tarjeta.classList.add('img-fav');
            div.appendChild(tarjeta);
            div.classList.add('tarjetas-favoritos');
            tarjetas_favoritos.appendChild(div);

    /*INI -> Caja de agregar, descargar y zoom*/
            let div_agregar = document.createElement('div');
            let div_img_agr = document.createElement('img');
            let div_img_des = document.createElement('img');
            let div_img_zoo = document.createElement('img');

            div_agregar.classList.add('agregar');
            div_agregar.classList.add('display-none');

            div_img_agr.src = '../images/icon-fav-active.svg';
            div_img_agr.classList.add('img');
            div_agregar.appendChild(div_img_agr);
            div.appendChild(div_agregar);

            let div_descargar = document.createElement('div');
            div_descargar.classList.add('descargar');
            div_descargar.classList.add('display-none');
            div_img_des.src = '../images/icon-download.svg';
            div_img_des.classList.add('img');
            div_descargar.appendChild(div_img_des);
            div.appendChild(div_descargar);

            let div_zoom = document.createElement('div');
            div_zoom.classList.add('zoom');
            div_zoom.classList.add('display-none');
            div_img_zoo.src = '../images/icon-max.svg';
            div_img_zoo.classList.add('img');
            div_zoom.appendChild(div_img_zoo);
            div.appendChild(div_zoom);
/*FIN -> Caja de agregar, descargar y realizar zoom*/


            if(width_pantalla > 999){
                div.addEventListener('mouseover', function () {

                    div_agregar.classList.remove('display-none');
                    div_descargar.classList.remove('display-none');
                    div_zoom.classList.remove('display-none');
            
                    div_agregar.classList.add('display-flex')
                    div_descargar.classList.add('display-flex')
                    div_zoom.classList.add('display-flex')
                })
        
                div.addEventListener('mouseout', function () {
                    div_agregar.classList.remove('display-flex')
                    div_descargar.classList.remove('display-flex')
                    div_zoom.classList.remove('display-flex')
        
                    div_agregar.classList.add('display-none');
                    div_descargar.classList.add('display-none');
                    div_zoom.classList.add('display-none');
                })

                /*Hover agregar */
                div_agregar.addEventListener('mouseover', function() {
                    div_agregar.style.opacity = '1'
                })
            
                div_agregar.addEventListener('mouseout', function() {
                    div_agregar.style.opacity = '0.7'
                })

                div_agregar.addEventListener('click', function() {

                    div_img_agr.src = '../images/icon-fav-hover.svg';

                    if (gif_activos[i].estado == 'activo') {
                        gif_activos[i].estado = 'inactivo';
                        localStorage.setItem('mis_gif_favoritos', JSON.stringify(gif_activos));                        
                    }else{
                        div_img_agr.src = '../images/icon-fav-active.svg';
                        gif_activos[i].estado = 'activo';
                        localStorage.setItem('mis_gif_favoritos', JSON.stringify(gif_activos));
                    }



                    if ( gif_activos.length == 1) {
                        localStorage.removeItem('mis_gif_favoritos');
                    }
                })


                /*Hover descargar GIF*/
                div_descargar.addEventListener('mouseover', function() {
                    div_descargar.style.opacity = '1'
                })
            
                div_descargar.addEventListener('mouseout', function() {
                    div_descargar.style.opacity = '0.7'
                })


                /*Hover ZOOM */
                div_zoom.addEventListener('mouseover', function() {
                    div_zoom.style.opacity = '1'
                })
            
                div_zoom.addEventListener('mouseout', function() {
                    div_zoom.style.opacity = '0.7'
                })

                div_zoom.addEventListener('click', function() {
                    let div        = document.createElement('div');
                    let tarjeta_hd = document.createElement('img');
                    let close_hd   = document.createElement('img')
            
                    close_hd.src = '../images/close.svg';
                    close_hd.classList.add('close-caja');
            
                    tarjeta_hd.src = gif_activos[i].url;
                    tarjeta_hd.classList.add('zoom-caja');
            
                    div.classList.add('zoom-gif');
                    div.appendChild(tarjeta_hd)
                    div.appendChild(close_hd);
                    body.appendChild(div);
            
                    body.classList.add('background-blanco');
                    main.style.display = 'none';
                    header.style.display = 'none';
                    footer.style.display = 'none';
            
                    close_hd.addEventListener('click', function () {
                        main.style.display = 'block';
                        header.style.display = 'block';
                        footer.style.display = 'block';
                        body.classList.remove('background-blanco');
                        div.remove();
                    })
                })
            }else{
                /* TRATA MOBILE */        
                div.addEventListener('click', function () {
                    let div        = document.createElement('div');
                    let tarjeta_hd = document.createElement('img');
                    let close_hd   = document.createElement('img')

                    close_hd.src = '../images/close.svg';
                    close_hd.classList.add('close-caja-mob');

                    tarjeta_hd.src = gif_activos[i].url;
                    tarjeta_hd.classList.add('zoom-caja-mob');

                    div.classList.add('zoom-gif-mob');
                    div.appendChild(close_hd);
                    div.appendChild(tarjeta_hd)
                    body.appendChild(div);

                    body.classList.add('background-blanco');
                    main.style.display = 'none';
                    header.style.display = 'none';
                    footer.style.display = 'none';

                    /* INI - agregar GIF Favoritos mobile */
                    let div_img_agr_mob = document.createElement('img');

                    div_img_agr_mob.classList.add('agregar-mob');
                    div_img_agr_mob.src = '../images/icon-fav-active.svg';
                    let agrupa_mob = document.createElement('div');

                    div_img_agr_mob.addEventListener('click', function() {

                        div_img_agr_mob.src = '../images/icon-fav-hover.svg';

                        if (gif_activos[i].estado == 'activo') {
                            gif_activos[i].estado = 'inactivo';
                            localStorage.setItem('mis_gif_favoritos', JSON.stringify(gif_activos));                        
                        }else{
                            div_img_agr_mob.src = '../images/icon-fav-active.svg';
                            gif_activos[i].estado = 'activo';
                            localStorage.setItem('mis_gif_favoritos', JSON.stringify(gif_activos));
                        }
        
                            if ( gif_activos.length == 1) {
                                localStorage.removeItem('mis_gif_favoritos');
                            }
                    })

                    agrupa_mob.classList.add('agrupa-mob');
                    agrupa_mob.appendChild(div_img_agr_mob);
                    /* FIN - agregar GIF Favoritos */

                    /* INI - descargar mobile */
                    let div_img_des_mob = document.createElement('img');

                    div_img_des_mob.src = '../images/icon-download.svg';
                    div_img_des_mob.classList.add('agregar-mob');
                    agrupa_mob.appendChild(div_img_des_mob);
                    /* FIN - descargar mobile */

                    div.appendChild(agrupa_mob);
                    body.appendChild(div);

                    close_hd.addEventListener('click', function () {
                        main.style.display = 'block';
                        header.style.display = 'block';
                        footer.style.display = 'block';
                        body.classList.remove('background-blanco');
                        div.remove();
                    })  
                })
            }
        }

        if(gif_activos.length > 12) {
            btn_fav.style.display = 'flex';
            index_ini=0;
        }else{
            btn_fav.style.display = 'none';
        }

    }else{

        let div  = document.createElement('div');
        let img  = document.createElement('img');
        let p    = document.createElement('p');

        img.src             = '../images/icon-busqueda-sin-resultado.svg';
        p.textContent = '¡Guarda tu primer GIFO en Favoritos para que se muestre aquí!';

        p.classList.add('fav-bus-vacio');
        div.classList.add('res-bus-flex');

        div.appendChild(img);
        div.appendChild(p);

        tarjetas_favoritos.appendChild(div);
        btn_fav.style.display = 'none';

    }
}


function btn_ver_mas__fav () {
    let i=0;

    if (index_ini == 0) {
        index_ini = 12;
        index_fin = 24;
    }else{
        index_ini = index_ini + 12;
        index_fin = index_fin + 12;
    }

    for (i=index_ini; i < gif_activos.length && i < index_fin ; i++) {
        let div     = document.createElement('div');
        let tarjeta = document.createElement('img');

        tarjeta.src = gif_activos[i].url;
        tarjeta.classList.add('img-fav');
        div.appendChild(tarjeta);
        div.classList.add('tarjetas-favoritos');
        tarjetas_favoritos.appendChild(div);
    }

    if(gif_activos.length > i) {
        btn_fav.style.display = 'flex';
    }else{
        btn_fav.style.display = 'none';
    }
}

favoritos.addEventListener('click', function () {

    seccion_favoritos.style.display   = 'block';
    main_gris.style .display          = 'none';
    seccion_gifos.style.display       = 'none';
    seccion_crear_gifos.style.display = 'none';

    var tarj_fav_class         = document.querySelectorAll('.tarjetas-favoritos');
    var tarj_fav__vacio_class  = document.querySelectorAll('.tarjetas-favoritos-vacio');


    tarjetas_favoritos.innerHTML = ' ';

    crear_tarjetas_fav();

});

btn_fav.addEventListener('click', function () {

    btn_ver_mas__fav();

})