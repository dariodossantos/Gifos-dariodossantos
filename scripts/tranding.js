function trending_txt() {
            fetch(`https://api.giphy.com/v1/trending/searches?api_key=${api_key}`)
            .then(request => request.json())
            .then((respuesta) => {

                trending_texto.textContent  = respuesta.data[0];
                trending_texto.textContent  = trending_texto.textContent + ', ';

                trending_texto2.textContent = respuesta.data[1];
                trending_texto2.textContent = trending_texto2.textContent + ', ';

                trending_texto3.textContent = respuesta.data[2];
                trending_texto3.textContent = trending_texto3.textContent + ', ';

                trending_texto4.textContent = respuesta.data[3];
                trending_texto4.textContent = trending_texto4.textContent + ', ';

                trending_texto5.textContent = respuesta.data[4];

            })
        } 


function trending_img() {
            fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=3&offset=${offset_trandig}`)
                .then(request => request.json())
                .then((respuesta) => {
                    car_1.src = respuesta.data[0].images.original_still.url; 
                    car_2.src = respuesta.data[1].images.original_still.url;
                    car_3.src = respuesta.data[2].images.original_still.url;
                })
            }                   

trending_txt();
trending_img();

flecha_vol.addEventListener('click', function () {
    if(width_pantalla > 999){
        offset_trandig = offset_trandig - 3

        if (offset_trandig < 0) {
            offset_trandig = 0
        }

        trending_img()
    }else{
        offset_trandig = offset_trandig - 1

        if (offset_trandig < 0) {
            offset_trandig = 0
        }

        trending_img()
    }
})


flecha_sig.addEventListener('click', function () {
    if(width_pantalla > 999){
        offset_trandig = offset_trandig + 3
        trending_img()
    }else{
        offset_trandig = offset_trandig + 1
        trending_img()
    }
})

trending_texto.addEventListener('click', function () {
    search.value=trending_texto.textContent.substring('', trending_texto.textContent.indexOf(','));
    valor_ant = search.value
    seccion_res_bus.style.display = 'block';
    clear_busqueda();
    get_busqueda();
})

trending_texto2.addEventListener('click', function () {
    search.value=trending_texto2.textContent.substring('', trending_texto2.textContent.indexOf(','));
    valor_ant = search.value
    seccion_res_bus.style.display = 'block';
    clear_busqueda();
    get_busqueda();
})

trending_texto3.addEventListener('click', function () {
    search.value=trending_texto3.textContent.substring('', trending_texto3.textContent.indexOf(','));
    valor_ant = search.value
    seccion_res_bus.style.display = 'block';
    clear_busqueda();
    get_busqueda();
})

trending_texto4.addEventListener('click', function () {
    search.value=trending_texto4.textContent.substring('', trending_texto4.textContent.indexOf(','));
    valor_ant = search.value
    seccion_res_bus.style.display = 'block';
    clear_busqueda();
    get_busqueda();
})

trending_texto5.addEventListener('click', function () {
    search.value=trending_texto5.textContent
    valor_ant = search.value
    seccion_res_bus.style.display = 'block';
    clear_busqueda();
    get_busqueda();
})