// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = ['Maria','Juan','Pablo','Jose'];
let cantidadDeAmigos = amigos.length;
let indiceAmigo = Math.floor(Math.random() * cantidadDeAmigos);

console.log ('Juego del Amigo Secreto')


Math.random(Math.floor()*4);
document.querySelector('h1').innerHTML = `Tu amigo secreto es ${amigos[indiceAmigo]}`
function validarNombre(amigos) {
    if (amigos === ''){
        alert('Por favor ingrese un nommbre')
        return ;
    } else if (amigos === 'Maria' || amigos === 'Juan' || amigos === 'Pablo' || amigos === 'Jose') {
        return true;
    } else {
        return false;
    }
}

amigos.push('Mario');
limpiarCampo();

function limpiarCampo() {
    document.querySelector('#nombre').value = '';
document.getElementById('btnCapturar').addEventListener('click', function() {
        let nombreUsuario = document.querySelector('#nombre').value;
    });
}


console.log(amigos);

function obtenerNombreSorteado() {
    let indice = Math.floor(Math.random()*amigos.length);
    return amigos[indice];
}
let nombreSorteado = obtenerNombreSorteado();
console.log(nombreSorteado);

