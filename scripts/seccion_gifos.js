var ind_ini       = 0;
var ind_fin       = 0;

var recuperar_mis_gif = function (id_mi_gif) {
    fetch(`https://api.giphy.com/v1/gifs/${id_mi_gif}?api_key=${api_key}`)
        .then(request => request.json())
        .then(respuesta => {

            mostar_mis_gif(respuesta.data.images.downsized.url, id_mi_gif);

        })
}


function mostar_mis_gif(url, id_mi_gif) {

    let div     = document.createElement('div');
    let tarjeta = document.createElement('img');

    tarjeta.src = url;
    tarjeta.classList.add('img-gif');
    
    div.appendChild(tarjeta);
    div.classList.add('tarjetas-gifos');
    tarjetas_gif.appendChild(div);

    /*INI -> Caja de borrar, descargar y zoom*/
    let div_borrar = document.createElement('div');
    let div_img_bor = document.createElement('img');
    let div_img_des = document.createElement('img');
    let div_img_zoo = document.createElement('img');

    div_borrar.classList.add('borrar');
    div_borrar.classList.add('display-none');

    div_img_bor.src = '../images/icon_trash.svg';
    div_img_bor.classList.add('img');
    div_borrar.appendChild(div_img_bor);
    div.appendChild(div_borrar);

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
/*FIN -> Caja de eliminar, descargar y realizar zoom*/

    if(width_pantalla > 999){
        div.addEventListener('mouseover', function () {

            div_borrar.classList.remove('display-none');
            div_descargar.classList.remove('display-none');
            div_zoom.classList.remove('display-none');

            div_borrar.classList.add('display-flex')
            div_descargar.classList.add('display-flex')
            div_zoom.classList.add('display-flex')
        })

        div.addEventListener('mouseout', function () {
            div_borrar.classList.remove('display-flex')
            div_descargar.classList.remove('display-flex')
            div_zoom.classList.remove('display-flex')

            div_borrar.classList.add('display-none');
            div_descargar.classList.add('display-none');
            div_zoom.classList.add('display-none');
        })

        /*Hover borrar */
        div_borrar.addEventListener('mouseover', function() {
            div_borrar.style.opacity = '1'
        })

        div_borrar.addEventListener('mouseout', function() {
            div_borrar.style.opacity = '0.7'
        })

        div_borrar.addEventListener('click', function() {
            let mis_gifos = JSON.parse(localStorage.getItem('mis_gifos'));

                for (let i = 0; i < mis_gifos.length; i++) {
                    if (mis_gifos[i] == id_mi_gif)
                        mis_gifos.splice(i, 1);
                }

                localStorage.setItem('mis_gifos', JSON.stringify(mis_gifos));

                if (mis_gifos.length == 0) {
                    localStorage.removeItem('mis_gifos');
                }
        })

        /*Hover descargar GIF*/
        div_descargar.addEventListener('mouseover', function() {
            div_descargar.style.opacity = '1'
        })

        div_descargar.addEventListener('mouseout', function() {
            div_descargar.style.opacity = '0.7'
        })

        div_descargar.addEventListener('click', function() {

/*             let binaryData = [];
            binaryData.push(url);
            window.URL.createObjectURL(new Blob(binaryData, {type: "image/gif"})) */

            async function prueba() {
                let blob = await fetch(url).then(r => r.blob());
                invokeSaveAsDialog(blob);
            }
            prueba();

/*             const gifFile = await URL.createObjectURL(binaryData); // Convierte blob */
/*             const saveGif = document.createElement('a'); // Crea elemento anchor
            saveGif.setAttribute('target','_blank');
            saveGif.href = url; // Asigna url
            saveGif.download = ''; // Elije un filename aleatorio
            document.body.appendChild(saveGif);
            saveGif.click();
            document.body.removeChild(saveGif);   */

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

            tarjeta_hd.src = url;
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

            tarjeta_hd.src = url;
            tarjeta_hd.classList.add('zoom-caja-mob');

            div.classList.add('zoom-gif-mob');
            div.appendChild(close_hd);
            div.appendChild(tarjeta_hd)
            body.appendChild(div);

            body.classList.add('background-blanco');
            main.style.display = 'none';
            header.style.display = 'none';
            footer.style.display = 'none';

            /* INI - borrar GIF Favoritos mobile */
            let div_img_bor_mob = document.createElement('img');

            div_img_bor_mob.classList.add('agregar-mob');
            div_img_bor_mob.src = '../images/icon_trash.svg';
            let agrupa_mob = document.createElement('div');

            div_img_bor_mob.addEventListener('click', function() {

                let mis_gifos = JSON.parse(localStorage.getItem('mis_gifos'));

                for (let i = 0; i < mis_gifos.length; i++) {
                    if (mis_gifos[i] == id_mi_gif)
                        mis_gifos.splice(i, 1);
                }

                localStorage.setItem('mis_gifos', JSON.stringify(mis_gifos));

                if (mis_gifos.length == 0) {
                    localStorage.removeItem('mis_gifos');
                }
            })

            agrupa_mob.classList.add('agrupa-mob');
            agrupa_mob.appendChild(div_img_bor_mob);
            /* FIN - agregar GIF Favoritos */

            /* INI - descargar mobile */
            let div_img_des_mob = document.createElement('img');

            div_img_des_mob.src = '../images/icon-download.svg';
            div_img_des_mob.classList.add('agregar-mob');
            agrupa_mob.appendChild(div_img_des_mob);

            div_img_des_mob.addEventListener('click', function() {
                debugger
                invokeSaveAsDialog(url); 
                /* const gifFile = await URL.createObjectURL(gifBlob); // Convierte blob */
/*                 const saveGif = document.createElement("a"); // Crea elemento anchor
                saveGif.setAttribute('target','_blank');
                saveGif.href = url; // Asigna url
                saveGif.download = ''; // Elije un filename aleatorio
                document.body.appendChild(saveGif);
                saveGif.click();
                document.body.removeChild(saveGif); */

            })
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


function fetch_tarjetas_gif() {
    let mis_gifos = JSON.parse(localStorage.getItem('mis_gifos'));
    let i = 0;

    if (mis_gifos) {

        for (i = 0; i < mis_gifos.length && i < 8; i++) {

            recuperar_mis_gif(mis_gifos[i]);

        }

        if (i == 8){
            btn_gif.style.display = 'flex';
        }else{
            btn_gif.style.display = 'none';
        }

    }else{
        let div  = document.createElement('div');
        let img  = document.createElement('img');
        let p    = document.createElement('p');

        img.src             = '../images/icon-mis-gifos-sin-contenido.svg';
        p.textContent = '¡Anímate a crear tu primer GIFO!';

        p.classList.add('fav-bus-vacio');
        div.classList.add('res-bus-flex');

        div.appendChild(img);
        div.appendChild(p);

        div.classList.add('tarjetas-gifos');
        tarjetas_gif.appendChild(div);
        btn_gif.style.display = 'none';

    }
}


function ver_mas_tarjetas_gif() {
    let mis_gifos = JSON.parse(localStorage['mis_gifos']);
    let i         = 0;

    if (mis_gifos) {

        for (i = ind_ini; i < mis_gifos.length && i < ind_fin; i++) {

            recuperar_mis_gif(mis_gifos[i]);

        }

        if (mis_gifos.length > i) {
            btn_gif.style.display = 'flex';
        }else{
            btn_gif.style.display = 'none';
        }
    }
}


mis_gifos.addEventListener('click', function () {
    seccion_gifos.style.display       = 'block';
    main_gris.style .display          = 'none';
    seccion_favoritos.style.display   = 'none';
    seccion_crear_gifos.style.display = 'none';

    tarjetas_gif.innerHTML = '';
    ind = 0;

    fetch_tarjetas_gif();

});


btn_gif.addEventListener('click', function () {

    if (ind_ini== 0) {
        ind_ini = 8;
        ind_fin = 16;
    }else{
        ind_ini = ind_ini + 8;
        ind_fin = ind_fin + 8;
    }

    ver_mas_tarjetas_gif();

})