/* API busqueda -> Traer los GIF */
var get_busqueda = function(){
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search.value}&limit=12&offset=${offset}`)
        .then(request => request.json())
        .then(respuesta => {

            if(respuesta.data.length == 0){
                vacio_busqueda()
            }else{  
                btn_bus.style.display = 'flex';
            }

            for (let i = 0; i < respuesta.data.length; i++) {
                mostrar_bus(respuesta.data[i]);  
            } 
        })
        .catch(() => {console.log('Hubo un error en la busqueda')})
}

function vacio_busqueda() {

    if (search.value == '') {
        sec_bus_h4.textContent = 'Vacio';
    }else{
        sec_bus_h4.textContent = search.value;
    }

    let div  = document.createElement('div');
    let img  = document.createElement('img');
    let p    = document.createElement('p');

    img.src             = '../images/icon-busqueda-sin-resultado.svg';
    p.textContent = 'Intenta con otra búsqueda.';

    p.classList.add('res-bus-vacio');
    div.classList.add('res-bus-flex');

    div.appendChild(img);
    div.appendChild(p);
    resultado_bus.appendChild(div);
    btn_bus.style.display = 'none';

}

function clear_busqueda() {
    
    resultado_bus.innerHTML = '';

} 

function mostrar_bus(respuesta) {

    let div         = document.createElement('div');
    let tarjeta     = document.createElement('img');
    let div_img_agr = document.createElement('img');
    let div_img_des = document.createElement('img');
    let div_img_zoo = document.createElement('img');

    tarjeta.src = respuesta.images.downsized_medium.url;
    tarjeta.classList.add('img-api');

/*INI -> Caja de agregar, descargar y zoom*/
    let div_agregar = document.createElement('div');
    div_agregar.classList.add('agregar');
    div_agregar.classList.add('display-none');
    div_img_agr.src = '../images/icon-fav-hover.svg';
    let mis_gif_favoritos = JSON.parse(localStorage.getItem('mis_gif_favoritos'));
    if (mis_gif_favoritos){
        for (let i = 0; i < mis_gif_favoritos.length; i++) {
            if (mis_gif_favoritos[i].id == respuesta.id &&  mis_gif_favoritos[i].estado == 'activo' ) {
                div_img_agr.src = '../images/icon-fav-active.svg';
            }
        }
    }    
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

    div.appendChild(tarjeta);
    div.classList.add('res-bus-api');


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
    }else{
/* TRATA MOBILE */        
        div.addEventListener('click', function () {
            let div        = document.createElement('div');
            let tarjeta_hd = document.createElement('img');
            let close_hd   = document.createElement('img')

            close_hd.src = '../images/close.svg';
            close_hd.classList.add('close-caja-mob');

            tarjeta_hd.src = respuesta.images.original.url;
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
            div_img_agr_mob.src = '../images/icon-fav-hover.svg';
            let mis_gif_favoritos = JSON.parse(localStorage.getItem('mis_gif_favoritos'));
            if (mis_gif_favoritos){
                for (let i = 0; i < mis_gif_favoritos.length; i++) {
                    if (mis_gif_favoritos[i].id ==  respuesta.id  &&  mis_gif_favoritos[i].estado == 'activo' ) {
                        div_img_agr_mob.src = '../images/icon-fav-active.svg';
                    }
                }
            } 
            let agrupa_mob = document.createElement('div');
            agrupa_mob.classList.add('agrupa-mob');

            agrupa_mob.appendChild(div_img_agr_mob)
    /* FIN - agregar GIF Favoritos */

    /* INI - descargar mobile */
            let div_img_des_mob = document.createElement('img');

            div_img_des_mob.src = '../images/icon-download.svg';
            div_img_des_mob.classList.add('agregar-mob');
            agrupa_mob.appendChild(div_img_des_mob);
    /* FIN - descargar mobile */

            div.appendChild(agrupa_mob);
            body.appendChild(div);

            div_img_agr_mob.addEventListener('click', function () {
                let mis_gif_favoritos = JSON.parse(localStorage.getItem('mis_gif_favoritos'));
                let array_gif = [];
                let i         = 0;
                let obj_gif = {
                    id     : '',
                    estado : '',
                    url    : ''
                };
        
                if (mis_gif_favoritos){
                    let swgrabar = true;
        
                    for (let i = 0; i < mis_gif_favoritos.length; i++) {
                        if (mis_gif_favoritos[i].id ==  respuesta.id  &&  mis_gif_favoritos[i].estado == 'activo') {
                            swgrabar = false;
                            div_img_agr_mob.src = '../images/icon-fav-hover.svg';
                            mis_gif_favoritos[i].estado = 'inactivo';
                        }else{
                            if (mis_gif_favoritos[i].id == respuesta.id && mis_gif_favoritos[i].estado == 'inactivo') {
                                swgrabar = false;
                                div_img_agr_mob.src = '../images/icon-fav-active.svg';
                                mis_gif_favoritos[i].estado = 'activo';
                            }
                        }
                    }
        
                    if(swgrabar){
                        array_gif       = JSON.parse(localStorage.getItem('mis_gif_favoritos'));
                        i               = array_gif.length;
                        obj_gif.id      = respuesta.id;
                        obj_gif.estado  = 'activo';
                        obj_gif.url     = respuesta.images.downsized_medium.url;
                        array_gif[i]    = obj_gif;
                        div_img_agr_mob.src = '../images/icon-fav-active.svg';
        
                        localStorage.setItem('mis_gif_favoritos', JSON.stringify(array_gif));
                        
                    }else{
                        array_gif = mis_gif_favoritos;
                        localStorage.setItem('mis_gif_favoritos', JSON.stringify(array_gif));
                    }
        
                }else{
                    div_img_agr_mob.src = '../images/icon-fav-active.svg';
                    obj_gif.id     = respuesta.id;
                    obj_gif.estado  = 'activo';
                    obj_gif.url     = respuesta.images.downsized_medium.url;
                    array_gif[0]    = obj_gif;
                    
                    localStorage.setItem('mis_gif_favoritos', JSON.stringify(array_gif));
                }
            })

            close_hd.addEventListener('click', function () {
                main.style.display = 'block';
                header.style.display = 'block';
                footer.style.display = 'block';
                body.classList.remove('background-blanco');
                div.remove();
            })  
        })
    }

    div_agregar.addEventListener('mouseover', function() {
        div_agregar.style.opacity = '1'
    })

    div_agregar.addEventListener('mouseout', function() {
        div_agregar.style.opacity = '0.7'
    })

    /* INI - Guardar en LOCAL Storage los GIF favoritos */
    div_agregar.addEventListener('click', function() {
        let mis_gif_favoritos = JSON.parse(localStorage.getItem('mis_gif_favoritos'));
        let array_gif = [];
        let i         = 0;
        let obj_gif = {
            id     : '',
            estado : '',
            url    : ''
        };

        if (mis_gif_favoritos){
            let swgrabar = true;

            for (let i = 0; i < mis_gif_favoritos.length; i++) {
                if (mis_gif_favoritos[i].id ==  respuesta.id  &&  mis_gif_favoritos[i].estado == 'activo') {
                    swgrabar = false;
                    div_img_agr.src = '../images/icon-fav-hover.svg';
                    mis_gif_favoritos[i].estado = 'inactivo';
                }else{
                    if (mis_gif_favoritos[i].id == respuesta.id && mis_gif_favoritos[i].estado == 'inactivo') {
                        swgrabar = false;
                        div_img_agr.src = '../images/icon-fav-active.svg';
                        mis_gif_favoritos[i].estado = 'activo';
                    }
                }
            }

            if(swgrabar){
                array_gif       = JSON.parse(localStorage.getItem('mis_gif_favoritos'));
                i               = array_gif.length;
                obj_gif.id     = respuesta.id;
                obj_gif.estado  = 'activo';
                obj_gif.url     = respuesta.images.downsized_medium.url;
                array_gif[i]    = obj_gif;
                div_img_agr.src = '../images/icon-fav-active.svg';

                localStorage.setItem('mis_gif_favoritos', JSON.stringify(array_gif));
                
            }else{
                array_gif = mis_gif_favoritos;
                localStorage.setItem('mis_gif_favoritos', JSON.stringify(array_gif));
            }

        }else{
            div_img_agr.src = '../images/icon-fav-active.svg';
            obj_gif.id     = respuesta.id;
            obj_gif.estado  = 'activo';
            obj_gif.url     = respuesta.images.downsized_medium.url;
            array_gif[0]    = obj_gif;
            
            localStorage.setItem('mis_gif_favoritos', JSON.stringify(array_gif));
        }

    })
    /* FIN - Guardar en LOCAL Storage los GIF favoritos */

    div_descargar.addEventListener('mouseover', function() {
        div_descargar.style.opacity = '1'
    })

    div_descargar.addEventListener('mouseout', function() {
        div_descargar.style.opacity = '0.7'
    })

    /* INI - Descargar GIF */
    div_descargar.addEventListener('click', function() {
        console.log('No se como descargarlo');
    })
    /* FIN - Descargar GIF */

    div_zoom.addEventListener('mouseover', function() {
        div_zoom.style.opacity = '1'
    })

    div_zoom.addEventListener('mouseout', function() {
        div_zoom.style.opacity = '0.7'
    })

    /* INI - ZOOM GIF */
    div_zoom.addEventListener('click', function() {
        let div        = document.createElement('div');
        let tarjeta_hd = document.createElement('img');
        let close_hd   = document.createElement('img')

        close_hd.src = '../images/close.svg';
        close_hd.classList.add('close-caja');

        tarjeta_hd.src = respuesta.images.original.url;
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
    /* FIN - ZOOM GIF */

    sec_bus_h4.textContent = search.value;
    resultado_bus.appendChild(div);
}

function get_autocompletar(event) {
    fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=${api_key}&q=${search.value}&`)
        .then(request => request.json())
        .then( respuesta => {
 
            clear_autocompletado(); 

            for (let i = 0; i < respuesta.data.length; i++) {
                img_lupa.src  = '../images/close.svg';
                autocompletado(respuesta.data[i].name);
            }
        })
    }

function clear_autocompletado() {

    autocompletar.innerHTML='';
    
} 


function autocompletado(data) {
    let div = document.createElement('div');
    let i_lupa = document.createElement('i');
    let div_auto = document.createElement('div');

    div.classList.add('info-autocompletado');
    i_lupa.classList.add('fa');
    i_lupa.classList.add('fa-search');
    i_lupa.classList.add('fuente-gris');
    i_lupa.classList.add('i-lupa');
    div_auto.innerHTML = data;
    div_auto.classList.add('res-auto');


    div.appendChild(i_lupa);
    div.appendChild(div_auto);
    autocompletar.appendChild(div);

    div.addEventListener('click', function(){
        search.value = div.textContent
        seccion_res_bus.style.display = 'block';
        autocompletar.style.display   = 'none';
        offset = 0;
        valor_ant = search.value
        clear_busqueda();
        get_busqueda();
    })
}


/* API Autocompletar -> Desde campo "INPUT" de busqueda */
search.addEventListener('input', function(event) {
    autocompletar.style.display  = 'block';
    get_autocompletar(event);
})


/* eliminar cuando hace Clik en close*/
close.addEventListener('click', function() {
    clear_autocompletado();
    search.value='';
    autocompletar.style.display   = 'none';
    img_lupa.src  = '../images/icon-search.svg';
})


/* Buscar cuando hace un "enter" en el input*/
var valor_ant = ' ';

search.addEventListener('keypress', function(event) {
    if(event.keyCode == 13){
        seccion_res_bus.style.display = 'block';
        autocompletar.style.display   = 'none';
        offset = 0;
        valor_ant = search.value
        clear_busqueda();
        get_busqueda();
    }
})

/* Boton Ver Mas de la busqueda */
btn_bus.addEventListener('click', function() {
    offset = offset + 12;
    search.value = valor_ant
    get_busqueda();
})

 