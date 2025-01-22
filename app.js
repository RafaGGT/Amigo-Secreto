function agregarAmigo() {
    // Toma el valor del campo de texto con el nombre del amigo.
    const nombreAm = inputAm.value;

    // Agrega el nombre del amigo a la lista lisAm.
    lisAm.push(nombreAm);

    // Limpia el campo de entrada para el siguiente nombre.
    inputAm.value = "";

    // Imprime la lista completa de amigos en la consola para verificar.
    console.log('Contenido de lisAm:', lisAm);

    // Crea un nuevo elemento de lista (li) para mostrar el nuevo amigo.
    const nuevoLi = document.createElement("li");

    // Asigna el nombre del nuevo amigo al texto del elemento li.
    nuevoLi.textContent = lisAm[lisAm.length - 1];

    // Agrega el nuevo elemento li a la lista de amigos en el DOM.
    liAm.appendChild(nuevoLi);
};

function sortearAmigo() {
    // Limpia cualquier resultado previo en la sección de resultados.
    reAm.innerHTML = '';

    // Crea un nuevo elemento de lista (li) para mostrar el resultado.
    const nuevoSo = document.createElement("li");

    // Selecciona un nombre aleatorio de la lista de amigos.
    const aleatorio = lisAm[Math.floor(Math.random() * lisAm.length)];

    // Asigna el texto con el nombre del amigo secreto sorteado al nuevo elemento li.
    nuevoSo.textContent = 'El amigo secreto sorteado es: ' + aleatorio;

    // Agrega el nuevo resultado al contenedor de resultados en el DOM.
    reAm.appendChild(nuevoSo);

    // Oculta la lista original de amigos para mostrar solo el resultado.
    liAm.style.display = 'none';
};

const inputAm = document.getElementById("amigo"); // Campo de texto para ingresar nombres.
const liAm = document.getElementById("listaAmigos"); // Contenedor para mostrar la lista de amigos.
const reAm = document.getElementById("resultado"); // Contenedor para mostrar el resultado del sorteo.
const lisAm = []; // Lista que contiene los nombres de los amigos agregados.