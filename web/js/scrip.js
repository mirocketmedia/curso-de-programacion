function eleccion (jugada) {
    let resultado ='';
    if(jugada == 1) {
    resultado = "Piedra 💎";
    } else if (jugada == 2) {
      resultado = "Papel 📃";
    } else if (jugada == 3) {
      resultado = "Tijera ✂️";
    } else if (jugada == 0) {
      resultado = "Nada";
    }else if (jugada > 3) {
      resultado = "incorrectamente";
    }else {
    location. reload() 
    }
    return resultado
 }

 function aleatorio (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let jugador = 0;
  let pc = 0;
  let triunfos = 0;
  let perdidas = 0;
  
  //FUNCIÓN CICLO 

  while (triunfos < 3 && perdidas < 3) {
      pc = aleatorio(1, 3);
      jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");

      alert("Haz elegido " + eleccion(jugador));
      alert("PC ha elegido " + eleccion(pc));
  

      
  
  //COMBATE
      
      if (jugador == 0 || jugador > 3) {
      alert('DEBES ELEGIR 1, 2 0 3 PARA PODER JUGAR, INTENTALO DE NUEVO');
      
      }else if (pc == jugador) {
      alert("ES EMPATE");
      
      } else if (jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2 ) { 
      alert("GANASTE");
      triunfos = triunfos + 1;
      
      }  else {
      alert("PERDISTE");
      perdidas = perdidas + 1;
      }

  }
  alert("Ganaste " + triunfos + " veces." + " Perdiste " + perdidas + " " + "veces.")


  