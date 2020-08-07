var form;
var blob;
var interbal;

var subir_gif = function () {
    
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`https://upload.giphy.com/v1/gifs?api_key=${api_key}`,
    {   
        method: 'POST',
        signal,
        body: form  
    })
        .then((request) => request.json())
        .then((respuesta) => {

            if (respuesta.meta.msg == 'OK') {

                grabar_mi_gifo(respuesta.data.id);

                gifo_ok()
                    .then(() => { btn_crear_gifos(); })

            }else{

                opaciti_pantalla.classList.remove('display-flex');
                opaciti_pantalla.classList.add('display-none');

                console.log('ha ocurrido un error: ' + respuesta);
                btn_crear_gifos();

            }
        })
        .catch((err) => {

            opaciti_pantalla.classList.remove('display-flex');
            opaciti_pantalla.classList.add('display-none');

            console.log('ha ocurrido un error: ' + err);
            btn_crear_gifos();

        })
}

function gifo_ok() {
    opaciti_pantalla.innerHTML = '';

    let div = document.createElement('div');
    let img = document.createElement('img');
    let p   = document.createElement('p');

    img.src = '../images/check.svg';
    div.appendChild(img);
    p.textContent = 'GIFO subido con éxito';

    opaciti_pantalla.appendChild(div);
    opaciti_pantalla.appendChild(p);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            opaciti_pantalla.innerHTML = '';
            opaciti_pantalla.classList.remove('display-flex');
            opaciti_pantalla.classList.add('display-none');

            resolve(true);

        }, 3000); 
    })
}

function grabar_mi_gifo(id_mi_gifo) {

    let mis_gifos          = JSON.parse(localStorage.getItem('mis_gifos'));
    let array_mis_gifos    = [];
    let i                  = 0;

    if (mis_gifos) {

        array_mis_gifos    = JSON.parse(localStorage.getItem('mis_gifos'));
        i                  = array_mis_gifos.length;
        array_mis_gifos[i] = id_mi_gifo;
        localStorage.setItem('mis_gifos', JSON.stringify(array_mis_gifos));

    }else{

        array_mis_gifos[0] = id_mi_gifo
        localStorage.setItem('mis_gifos', JSON.stringify(array_mis_gifos));

    }
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

function btn_crear_gifos() {
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

    btn_gif_2.classList.remove('btn-gif-seleccionado-1');
    btn_gif_2.classList.remove('background-violeta');
    btn_gif_2.classList.add('btn-gif');

    btn_gif_p_2.classList.add('fuente-violeta');
    btn_gif_p_2.classList.remove('fuente-blanco');

    btn_gif_3.classList.remove('btn-gif-seleccionado-1');
    btn_gif_3.classList.remove('background-violeta');
    btn_gif_3.classList.add('btn-gif');
    
    btn_gif_p_3.classList.remove('fuente-blanco');
    btn_gif_p_3.classList.add('fuente-violeta');

    h3_patalla[0].textContent   = 'Aquí podrás';
    h3_patalla[1].innerHTML   = 'crear tus propios <span class="fuente-verde">GIFOS</span>';

    p_black[0].textContent='¡Crea tu GIFO en sólo 3 pasos!';
    p_black[1].textContent='(sólo necesitas una cámara para grabar un video)'; 

    cont_seg  = 0
    cont_min  = 0
    cont_hora = 0;

    seg.innerText  = '00'
    min.innerText  = '00'
    hora.innerText = '00'

    hh_mm_ss.classList.add('display-none');
    hh_mm_ss.classList.remove('display-flex');

    bloque_rep_cap.classList.remove('display-flex');
    bloque_rep_cap.classList.add('display-none');

}

signo_mas.addEventListener('click', function () {

    btn_crear_gifos();

})

function func_comenzar() {

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

    btn_gif_2.classList.remove('btn-gif-seleccionado-1');
    btn_gif_2.classList.remove('background-violeta');
    btn_gif_2.classList.add('btn-gif');

    btn_gif_p_2.classList.add('fuente-violeta');
    btn_gif_p_2.classList.remove('fuente-blanco');

    btn_gif_3.classList.remove('btn-gif-seleccionado-1');
    btn_gif_3.classList.remove('background-violeta');
    btn_gif_3.classList.add('btn-gif');
    
    btn_gif_p_3.classList.remove('fuente-blanco');
    btn_gif_p_3.classList.add('fuente-violeta');

    cont_seg  = 0
    cont_min  = 0
    cont_hora = 0;

    seg.innerText  = '00'
    min.innerText  = '00'
    hora.innerText = '00'

    try {

        acceso_camara();  

    } catch (error) {

        alert('Error para acceder a la camara: ' + error)

    }
}

comenzar.addEventListener('click', function () {

    func_comenzar();

})


grabar.addEventListener('click', function () {

    comenzar.style.display    = 'none';
    grabar.style.display      = 'none';
    finalizar.style.display   = 'flex';
    subir.style.display       = 'none';
    video.style.display       = 'block';

    btn_gif_1.classList.remove('btn-gif-seleccionado-1');
    btn_gif_1.classList.remove('background-violeta');
    btn_gif_1.classList.add('btn-gif');
    
    btn_gif_p_1.classList.remove('fuente-blanco');
    btn_gif_p_1.classList.add('fuente-violeta');

    btn_gif_2.classList.add('btn-gif-seleccionado-1');
    btn_gif_2.classList.add('background-violeta');
    btn_gif_2.classList.remove('btn-gif');

    btn_gif_p_2.classList.remove('fuente-violeta');
    btn_gif_p_2.classList.add('fuente-blanco');
    

    try {
        recorder.startRecording();

        hh_mm_ss.classList.remove('display-none');
        hh_mm_ss.classList.add('display-flex');
    
        bloque_rep_cap.classList.remove('display-flex');
        bloque_rep_cap.classList.add('display-none');

        interbal = 
        setInterval(function cronometro() {
    
            cont_seg = cont_seg + 1
    
            if (cont_seg == 60) {
                cont_seg = 0;
                cont_min = cont_min + 1
            }
    
            if (cont_min == 60) {
                cont_min = 0;
                cont_hora = cont_hora + 1
            }
    
            seg.innerText  = cont_seg  < 10 ? '0' + cont_seg : cont_seg
            min.innerText  = cont_min  < 10 ? '0' + cont_min : cont_min
            hora.innerText = cont_hora < 10 ? '0' + cont_hora : cont_hora
    
        }, 1000);

    } catch (error) {

        alert('Error para comenzar a Grabar, intente nuevamente: ' + error)
        func_comenzar();

    }    
    
})


finalizar.addEventListener('click', function () {
    comenzar.style.display    = 'none';
    grabar.style.display      = 'none';
    finalizar.style.display   = 'none';
    subir.style.display       = 'flex';
    video.style.display       = 'block';

    btn_gif_1.classList.remove('btn-gif-seleccionado-1');
    btn_gif_1.classList.remove('background-violeta');
    btn_gif_1.classList.add('btn-gif');
    
    btn_gif_p_1.classList.remove('fuente-blanco');
    btn_gif_p_1.classList.add('fuente-violeta');

    btn_gif_2.classList.add('btn-gif-seleccionado-1');
    btn_gif_2.classList.add('background-violeta');
    btn_gif_2.classList.remove('btn-gif');

    btn_gif_p_2.classList.remove('fuente-violeta');
    btn_gif_p_2.classList.add('fuente-blanco');

    clearInterval(interbal);
    
    try {

        recorder.stopRecording(function() {

            blob = recorder.getBlob();
            /* invokeSaveAsDialog(blob); */
    
            form = new FormData();
            form.append('file', blob, 'myGif.gif');
            return form;
    
            });

    } catch (error) {

        alert('Error al finlizar la grabacion ' + error);
        func_comenzar();

    }

    hh_mm_ss.classList.add('display-none');
    hh_mm_ss.classList.remove('display-flex');

    bloque_rep_cap.classList.add('display-flex');
    bloque_rep_cap.classList.remove('display-none');

    bloque_rep_cap.addEventListener('click', function () {

        hh_mm_ss.classList.remove('display-none');
        hh_mm_ss.classList.add('display-flex');
    
        bloque_rep_cap.classList.remove('display-flex');
        bloque_rep_cap.classList.add('display-none');

        func_comenzar();
    })    

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

    btn_gif_1.classList.remove('btn-gif-seleccionado-1');
    btn_gif_1.classList.remove('background-violeta');
    btn_gif_1.classList.add('btn-gif');
    
    btn_gif_p_1.classList.remove('fuente-blanco');
    btn_gif_p_1.classList.add('fuente-violeta');

    btn_gif_2.classList.remove('btn-gif-seleccionado-1');
    btn_gif_2.classList.remove('background-violeta');
    btn_gif_2.classList.add('btn-gif');

    btn_gif_p_2.classList.add('fuente-violeta');
    btn_gif_p_2.classList.remove('fuente-blanco');

    btn_gif_3.classList.add('btn-gif-seleccionado-1');
    btn_gif_3.classList.add('background-violeta');
    btn_gif_3.classList.remove('btn-gif');

    btn_gif_p_3.classList.remove('fuente-violeta');
    btn_gif_p_3.classList.add('fuente-blanco');

    try {
        opaciti_pantalla.classList.remove('display-none');
        opaciti_pantalla.classList.add('display-flex');

        let div = document.createElement('div');
        let img = document.createElement('img');
        let p   = document.createElement('p');
    
        img.src = '../images/loader.svg';
        div.appendChild(img);
        p.textContent = 'Estamos subiendo tu GIFO';
    
        opaciti_pantalla.appendChild(div);
        opaciti_pantalla.appendChild(p);

        subir_gif();

    } catch (error) {

        alert('Error al cargar GIF en GIPHY: ' + error)
        func_comenzar();
        
    }

})

