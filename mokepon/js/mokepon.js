
// FUNCIÓN PARA ESCUCHAR EVENTO CLICK AL SELECCIONAR LA MASCOTA CUANDO CLIQUEMOS EL BOTON
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}

//FUNCIÓN PARA SELECCIONAR MASCOTA Y ENVIAR MENSAJE DICIENDO QUE M,ASCOTA HE SELECCIONADO
function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let inputLangostelvi = document.getElementById('langostelvi');
    let inputTucapalma = document.getElementById('tucapalma');
    let inputPydos = document.getElementById('pydos');
    let spanMascotaJugador = document.getElementById('mascota-jugador');
    


    //MANIPULACIÓN DEL DOM CON innerHTML
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = ' Hipodoge';
    } else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = ' Capipepo';
    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = ' Ratigueya';
    } else if(inputLangostelvi.checked) {
        spanMascotaJugador.innerHTML = ' Langostelvi';
    } else if(inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = ' Tucapalma';
    } else if(inputPydos.checked) {
        spanMascotaJugador.innerHTML = ' Pydos';
    } else {
        alert('DEBES SELECCIONAR UNA MASCOTA');
    } 
        
    seleccionarMascotaEnemigo();

}

function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1,6);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = ' Hipodoge';
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = ' Capipepo';
    } else if (ataqueAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = ' Ratigueya';
    } else if (ataqueAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = ' Langostelvi';
    } else if (ataqueAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = ' Tucapalma';
    } else {
        spanMascotaEnemigo.innerHTML = ' Pydos';
    }

}


//FUNCION PARA DARLE ALEATORIEDAD AL JS PARA QUE ESCOJA LA MASCOTA DEL ENEMIGO

function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}




// CODIGO LOAD QUE SE ACTIVA CUANDO SE HA CARGADO TODA LA PAGINA Y TODOS SUS RECURSOS
//PERMITE TRABAJAR CON EL RECURSO JS AL PRICIPIO DEL HTML EN EL HEAD
window.addEventListener('load', iniciarJuego)


