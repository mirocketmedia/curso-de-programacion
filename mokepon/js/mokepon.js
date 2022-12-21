function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let inputLangostelvi = document.getElementById('langostelvi');
    let inputTucapalma = document.getElementById('tucapalma');
    let inputPydos = document.getElementById('pydos');

    
    if (inputHipodoge.checked) {
    alert('HAS SELECCIONADO A HIPODOGE');
    } else if(inputCapipepo.checked) {
        alert('HAS SELECCIONADO A CAPIPEPO');
    } else if(inputRatigueya.checked) {
        alert('HAS SELECCIONADO A RATIGUEYA');
    } else if(inputLangostelvi.checked) {
        alert('HAS SELECCIONADO A LANGOSTELVI');
    } else if(inputTucapalma.checked) {
        alert('HAS SELECCIONADO A TUCAPALMA');
    } else if(inputPydos.checked) {
        alert('HAS SELECCIONADO A PYDOS');
    } else {
        alert('DEBES SELECCIONAR UNA MASCOTA');
    } 
    

}



window.addEventListener('load', iniciarJuego)

