
function crear_tarjetas_gif() {
    for (let i=0; i < 8; i++) {
        let div     = document.createElement('div');
        let tarjeta = document.createElement('img');
        
        div.appendChild(tarjeta);
        div.classList.add('tarjetas-gifos');
        tarjetas_gif.appendChild(div);

    }
}

mis_gifos.addEventListener('click', function () {
    seccion_gifos.style.display       = 'block';
    main_gris.style .display          = 'none';
    seccion_favoritos.style.display   = 'none';
    seccion_crear_gifos.style.display = 'none';

    var tarj_gif_class = document.querySelectorAll('.tarjetas-gifos');

    while (tarjetas_gif.hasChildNodes()) {

        for (let i = 0; i < tarj_gif_class.length; i++) {
            tarjetas_gif.removeChild(tarj_gif_class[i]);
        }
    } 

    crear_tarjetas_gif();
});

btn_gif.addEventListener('click', function () {
    crear_tarjetas_gif();
})