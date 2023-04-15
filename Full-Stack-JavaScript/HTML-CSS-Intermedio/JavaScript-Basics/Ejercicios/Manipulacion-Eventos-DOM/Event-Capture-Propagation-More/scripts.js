const divs = document.querySelectorAll( 'div' );
const button = document.querySelector( 'button' );

function logText( e ){
    console.log( this.classList.value );
    e.stopPropagation(); // Detiene el bubbling.
}

divs.forEach( div => div.addEventListener( 'click', logText, {
    capture: false,
    //Si solo colocamos la propiedad capture en false.
    //Podemos ejecutar el evento tantas veces como clicks demos. 
    //Pero si la colocamos en true, la diferencia es que solo se llama al evento superior
    //el primer nodo del bubbling)
    once: true     
    // Once: true es lo mismo que:
    // divs.forEach( div => div.removeEventListener( 'click', logText );

    //El evento se ejecuta solo una vez. Y nos permite ejecutar cada evento
    //al menos una vez (nodo 1, nodo 2 y nodo 3. Aun si capture: true)
    
}) );
// Por defecto el valor de la propiedad 'capture' es 'false'.
// Esto hace que la captura de eventos comience en el nodo mas bajo (ultimo), de un nido de eventos.
// Sin embargo, si se establece el valor de 'capture' en 'true'. La captura de dichos eventos comenzara en el nodo mas alto (el primero.)

button.addEventListener( 'click', () => {
    console.log( 'Click!!!' );
}, {    // <=== Recordar este renglón!!!!
    once: true    //De la misma forma que antes, con esto el evento solo se ejecutara una vez.
} );
