// VARIABLES GLOBALES

let ataqueJugador
let ataqueEnemigo

//FIN VARIABLES GLOBALES

//CON ESTA FUNCIÓN ESTAMOS ESCUCHANDO CUANDO ESTARÁ CARGADO TODO EL HTML
//PUEDIENDO INICIAR EL JUEGO CON LA PRIMERA ACCION REQUERIDA PARA ESTE
// EN ESTE CASO SERÁ HACER CLICK EN EL BOTON PARA SELECCIONAR MASCOTA


function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota-jugador')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

//CREAMOS LAS VARIABLES PARA LOS BOTONES DE LOS ATAQUES
//Y LO HACEMOS JUSTO DESPUÉS DEL OTRO BOTÓN, EL DE ELEGIR MASCOTA JUGADOR

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)


}

window.addEventListener('load', iniciarJuego)




// CON ESTO COMIENZA EL SCRIP PARA TODO EL JUEGO: 
//1. FUNCIÓN INICIAR JUEGO CON EL BOTON DE SELECCIONAR MASCOTA
//2. ALERTA INDICANDO QUE HAS SELECCIONADO MASCOTA
//3. ESCUCHANDO CUANDO CARGUE TODO EL HTML Y DARLE 'PERMISO' A LA
//FUNCION 'INICIAR JUEGO' PARA QUE PUEDA EJECUTARSE.

// ---------------------------- INICIO DEL JUEGO ------------------------------


function seleccionarMascotaJugador() {

//CREAMOS VARIABLES DE CADA INPUT PARA USARLAS ENB LA CONDICINAL CON CHECKED
//PARA DARLE MAS CLARIDAD AL CODIGO

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvi = document.getElementById('langostelvi')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    
//ABAJO CREAMOS UNA CONDICIONAL IF QUE DEPENDERÁ DEL INPUT SELECCIONADO
//CON .CHECKED
//SI EL INPUT SELECCIONADO ES CHECKEADO SERÁ TRUE Y HARA LO QUE LE PIDAMOS
//EN ESTE CASO BOTAR ALERTA

// LUEGO HACEMOS MODIFICACIÓN DEL DOM CON EL element.innerHTML para que
//NUESTRA WEB COLOQUE EL TEXTO QUE INDICARÁ LA MASCOTA ELEGIDA




// ----------------- JUGADOR ELIGE MASCOTA -----------------
    if(inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'  
    }else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else if(inputLangostelvi.checked) {
        spanMascotaJugador.innerHTML = 'Langostelvi'
    }else if(inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = 'Tucapalma'
    }else if(inputPydos.checked) {
        spanMascotaJugador.innerHTML = 'Pydos'
    }else {
        alert('DEBES ELEGIR UNA MASCOTA PARA CONTINUAR')

    }
    SeleccionarMascotaEnemigo()
}

// ----------------- ENEMIGO ELIGE MASCOTA -----------------
function SeleccionarMascotaEnemigo() {
let mascotaAleatoria = aleatorio(1,6)
let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
if (mascotaAleatoria == 1){
    spanMascotaEnemigo.innerHTML = 'Hipodogue'
}else if (mascotaAleatoria == 2){
    spanMascotaEnemigo.innerHTML = 'Capipepo'
}else if (mascotaAleatoria == 3){
    spanMascotaEnemigo.innerHTML = 'Ratigueya'
}else if (mascotaAleatoria == 4){
    spanMascotaEnemigo.innerHTML = 'Langostelvi'
}else if (mascotaAleatoria == 5){
    spanMascotaEnemigo.innerHTML = 'Tucapalma'
}else{
    spanMascotaEnemigo.innerHTML = 'Pydos'
}
}

//FUNCIONES DE ATAQUES FUEGO, AGUA Y TIERRA

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()

}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()

}

//CREAMOS FUNCIÓN ATAQUE ENEMIGO, JUSTO DESPUES DEL ATAQUE JUGADOR

function ataqueAleatorioEnemigo() {
   let ataqueAleatorio = aleatorio(1,3)
   
   if (ataqueAleatorio == 1) {
    ataqueEnemigo = 'FUEGO'
   }else if (ataqueAleatorio == 2) {
    ataqueEnemigo = 'AGUA'
   }else{
    ataqueEnemigo = 'TIERRA'
   }


  combate() 

}

function combate() {


if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("ES EMPATE");
    
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA' || ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO' || ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA' ) { 
    crearMensaje("GANASTE");
    
    }  else {
    crearMensaje("PERDISTE");
    }
}
//IMPORTANTE ------- CREAMOS LA FUNCIÓN CREAR MENSAJES
//PARA INSERTAR UN TEXTO EN HTML CREADO MEDIABTE document.createElement,  
//INSERTADO POR appendChild Y DIRIGIDO POR getElementById

function crearMensaje(resultado) {
    let secctionMensajes = document.getElementById('mensajes')


    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ' y la mascota de tu enemigo atacó con ' + ataqueEnemigo + ': ' + resultado

    secctionMensajes.appendChild(parrafo)
    
}


//FUNCION DE ALEATORIEDAD PARA QUE ELIJA MASCOTA POR EL ENEMIGO

function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}





