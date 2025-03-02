

// ARRAY PARA ALMACENAR LOS AMIGOS INGRESADOS
let amigo = [];


// FUNCIÓN PARA AGREGAR UN AMIGO A LA LISTA
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;

    if (!nombreAmigo) {
        alert('Por favor, escribe el nombre de tu amigo.');
        return;
    }

    // para ingresar solo nombres válidos
    let regex = /^[A-Za-z\s]+$/;
    if (!regex.test(nombreAmigo)) {
        alert('El nombre "' + nombreAmigo + '" no es un nombre válido. Por favor ingresa otro amigo.');
        inputAmigo.value = "";  
        inputAmigo.focus();
        return;
        
    }

    // si el nombre es válido, se agrega a la lista
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus;
    renderizarAmigos();
}

// FUNCION PARA MOSTRAR LOS AMIGOS EN LA PÁGINA

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }

}


// FUNCION PARA HACER EL SORTEO ALEATORIO DE LOS AMIGOS
function sortearAmigo() {
    if (amigo.length === 0) {
        alert('No hay ningún amigo para sortear. Ingresa los nombres de tus amigos primero.');
        return;
    } else if (amigo.length < 2) {
        alert("Tienes un solo amigo para realizar el sorteo. Por favor, ingresa más amigos");
        return;
    }

    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto se llama: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}


//FUNCION PARA EL BOTON LIMPIAR LISTA
function limpiarLista() {
    amigo = [];  
    renderizarAmigos();  
}



//FUNCION REINICIAR EL JUEGO

function reiniciarJuego() {
    amigo = []; 
    document.getElementById("listaAmigos").innerHTML = ""; 
    document.getElementById("resultado").innerHTML = ""; 
    document.getElementById("amigo").value = "";
}
