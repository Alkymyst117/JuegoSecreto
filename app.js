// Version: 2.0
let numero_maximo = 10;
let lista_numeros = [];
let numero_secreto = generar_numero_secreto();
let intentos = 1;



function asignar_texto_elemento(elemento, texto) {
    let elemento_HTML = document.querySelector(elemento);
    elemento_HTML.innerHTML = texto; 
    return;   
}

asignar_texto_elemento('h1', 'Juego del numero secreto');
asignar_texto_elemento('p', `Introduce un numero entre 1 y ${numero_maximo}`);

function verificar_intento() {
    let numero_usuario = parseInt(document.getElementById('valor_usuario').value);

    if (numero_usuario < numero_secreto) {
        asignar_texto_elemento('p', 'El numero secreto es mayor que ' + numero_usuario);
        limpiar_caja();
    }

    else if (numero_usuario > numero_secreto) { 
        asignar_texto_elemento('p', 'El numero secreto es menor que ' + numero_usuario);
        limpiar_caja();
    }
    
    else if (numero_usuario === numero_secreto) {
        asignar_texto_elemento('p', `¡Felicidades! Has adivinado el numero secreto, el numero secreto es: ${numero_secreto} y has necesitado ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    
    intentos++;
    return;
}

function limpiar_caja() {
    document.querySelector('#valor_usuario').value = '';
    return;
}


function generar_numero_secreto() {
    let numero_generado = Math.floor(Math.random()*numero_maximo) + 1;
    console.log(numero_generado);
    console.log(lista_numeros);
    
    if (lista_numeros.length == numero_maximo) {
        asignar_texto_elemento('p', 'Ya se jugaron todos los numeros posibles, reinicia el juego para volver a jugar');
    }
    else {
        if (lista_numeros.includes(numero_generado)) {
            return generar_numero_secreto();
        }
        else {
            lista_numeros.push(numero_generado);
            return numero_generado;
        }
    }

    
}

function condiciones_iniciales(){
    asignar_texto_elemento('h1', 'Juego del numero secreto');
    asignar_texto_elemento('p', `Introduce un numero entre 1 y ${numero_maximo}`);
    numero_secreto = generar_numero_secreto();
}

function reiniciar_juego() {
    //limpiar la caja de texto
    limpiar_caja(); 
    //reiniciar el contador de intentos
    intentos = 1;
    //deshabilitar el boton de reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    //cambiar el texto del parrafo y generar un nuevo numero secreto
    condiciones_iniciales();
    return;
}


