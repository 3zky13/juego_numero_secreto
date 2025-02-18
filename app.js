//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Juego Del Número Secreto";*

/*let parrafo = document.querySelector("p");
parrafo.innerHTML = "indica un número del 1 al 10";*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function insertarTexto(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.ceil(Math.random() * numeroMaximo);

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  //si ya se sortearon todos los números
  if (listaNumerosSorteados.length == numeroMaximo) {
    insertarTexto("p", "No hay más números para sortear");
  } else {
    //si el número generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function verificarintento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroUsuario === numeroSecreto) {
    insertarTexto(
      "p",
      `Acertaste, en ${intentos} ${intentos === 1 ? "intento" : "intentos"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (numeroUsuario < numeroSecreto) {
    insertarTexto("p", "El número secreto es mayor");
  } else {
    insertarTexto("p", "El número secreto es menor");
  }
  intentos++;
  limpiarCaja();
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function condicionesIniciales() {
  insertarTexto("h1", "Juego Del Número Secreto");
  insertarTexto("p", "indica un número del 1 al " + numeroMaximo);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

insertarTexto("h1", "Juego Del Número Secreto");
insertarTexto("p", "indica un número del 1 al " + numeroMaximo);
