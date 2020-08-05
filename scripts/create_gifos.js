var form;

var subir_gif = function () {

    fetch(`https://upload.giphy.com/v1/gifs?api_key=${api_key}`,
    {   method: 'POST',
        mode: 'no-cors',
        body: form  
    })

        .then(request => request.json())
        .then(() => {console.log('adentro')})
        .catch((err) => {console.log(err)})
} 


async function acceso_camara() {
    await navigator.mediaDevices.getUserMedia({audio: false, video: true})
         .then(async function(stream) {

            recorder = RecordRTC(stream, {
                type: 'gif',
                frameRate: 1,
                quality: 10,
                width: 360,
                hidden: 240,
                onGifRecordingStarted: function() {
                 console.log('started')
               },
              });
            
            video.srcObject = stream;
            video.play();

        })
        .catch((error) => {
            console.log('Ocurrio un error: ' + error);
        })
}


/* Hover comenzar */
comenzar.addEventListener('mouseover', function () {
    if(sw_general == false){
        comenzar.classList.add('fuente-negro');
        comenzar.classList.add('background-blanco');
    }else{
        comenzar.classList.add('fuente-blanco');
        comenzar.classList.add('background-violeta');
    }
})

comenzar.addEventListener('mouseout', function () {
    if(sw_general == false){
        comenzar.classList.remove('fuente-negro');
        comenzar.classList.remove('background-blanco');
    }else{
        comenzar.classList.remove('fuente-blanco');
        comenzar.classList.remove('background-violeta');
    }
})

/* Hover grabar */
grabar.addEventListener('mouseover', function () {
    if(sw_general == false){
        grabar.classList.add('fuente-negro');
        grabar.classList.add('background-blanco');
    }else{
        grabar.classList.add('fuente-blanco');
        grabar.classList.add('background-violeta');
    }
})

grabar.addEventListener('mouseout', function () {
    if(sw_general == false){
        grabar.classList.remove('fuente-negro');
        grabar.classList.remove('background-blanco');
    }else{
        grabar.classList.remove('fuente-blanco');
        grabar.classList.remove('background-violeta');
    }
})

/* Hover finalizar */
finalizar.addEventListener('mouseover', function () {
    if(sw_general == false){
        finalizar.classList.add('fuente-negro');
        finalizar.classList.add('background-blanco');
    }else{
        finalizar.classList.add('fuente-blanco');
        finalizar.classList.add('background-violeta');
    }
})

finalizar.addEventListener('mouseout', function () {
    if(sw_general == false){
        finalizar.classList.remove('fuente-negro');
        finalizar.classList.remove('background-blanco');
    }else{
        finalizar.classList.remove('fuente-blanco');
        finalizar.classList.remove('background-violeta');
    }
})

/* Hover subir gifo */
subir.addEventListener('mouseover', function () {
    if(sw_general == false){
        subir.classList.add('fuente-negro');
        subir.classList.add('background-blanco');
    }else{
        subir.classList.add('fuente-blanco');
        subir.classList.add('background-violeta');
    }
})

subir.addEventListener('mouseout', function () {
    if(sw_general == false){
        subir.classList.remove('fuente-negro');
        subir.classList.remove('background-blanco');
    }else{
        subir.classList.remove('fuente-blanco');
        subir.classList.remove('background-violeta');
    }
})


signo_mas.addEventListener('click', function () {
    seccion_crear_gifos.style.display = 'block';
    seccion_favoritos.style.display   = 'none';
    seccion_gifos.style.display       = 'none';
    seccion_res_bus.style.display     = 'none';
    autocompletar.style.display       = 'none';
    main_gris.style.display           = 'none';
    trending.style.display            = 'none';
    main_gris_oscuro.style.display    = 'none';
    video.style.display               = 'none';

    comenzar.style.display            = 'flex';
    grabar.style.display              = 'none';
    finalizar.style.display           = 'none';
    subir.style.display               = 'none';

    btn_gif_1.classList.remove('btn-gif-seleccionado-1');
    btn_gif_1.classList.remove('background-violeta');
    btn_gif_1.classList.add('btn-gif');
    
    btn_gif_p_1.classList.remove('fuente-blanco');
    btn_gif_p_1.classList.add('fuente-violeta');

    h3_patalla[0].textContent   = 'Aquí podrás';
    h3_patalla[1].innerHTML   = 'crear tus propios <span class="fuente-verde">GIFOS</span>';

    p_black[0].textContent='¡Crea tu GIFO en sólo 3 pasos!';
    p_black[1].textContent='(sólo necesitas una cámara para grabar un video)'; 
})


comenzar.addEventListener('click', function () {
    comenzar.style.display    = 'none';
    grabar.style.display      = 'flex';
    finalizar.style.display   = 'none';
    subir.style.display       = 'none';
    video.style.display       = 'block';

    h3_patalla[0].textContent = '¿Nos das acceso'
    h3_patalla[1].textContent = 'a tu cámara?'
    p_black[0].textContent='El acceso a tu camara será válido sólo';
    p_black[1].textContent='por el tiempo en el que estés creando el GIFO.';

    btn_gif_1.classList.add('btn-gif-seleccionado-1');
    btn_gif_1.classList.add('background-violeta');
    btn_gif_1.classList.remove('btn-gif');

    btn_gif_p_1.classList.remove('fuente-violeta');
    btn_gif_p_1.classList.add('fuente-blanco');


    acceso_camara();

    console.log('Paso 2');    
})


grabar.addEventListener('click', function () {
    comenzar.style.display    = 'none';
    grabar.style.display      = 'none';
    finalizar.style.display   = 'flex';
    subir.style.display       = 'none';
    video.style.display       = 'block';

    recorder.startRecording();

    console.log('Paso 3');    
})


finalizar.addEventListener('click', function () {
    comenzar.style.display    = 'none';
    grabar.style.display      = 'none';
    finalizar.style.display   = 'none';
    subir.style.display       = 'flex';
    video.style.display       = 'block';



    recorder.stopRecording(function() {

        var blob = recorder.getBlob();
        /* invokeSaveAsDialog(blob); */

        var form = new FormData();
        form.append('file', blob, 'myGif.gif');
        return form;

        console.log(blob)

        });

})

/* const blobToBase64 = (blob) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
        resolve(reader.result);
      };
    });
  };

  async function b_64(blob){
    const dario64 = await blobToBase64(blob);
    jsonString = JSON.stringify(dario64);
    console.log(jsonString);

    return dario64;
  }; */


subir.addEventListener('click', function () {
    comenzar.style.display    = 'none';
    grabar.style.display      = 'none';
    finalizar.style.display   = 'none';
    subir.style.display       = 'flex';
    video.style.display       = 'block';

    /* console.log(file_api); */

    subir_gif();

})

