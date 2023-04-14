window.addEventListener( "keydown",
(e) => {
    const audio = 
    document.querySelector(`audio[data-key=${e.key}]`);
    const key = 
    document.querySelector(`.key[data-key=${e.key}]`);
    // Recordar usar `` al tratar con los ${}.
    if ( !audio ) return; // Detiene la función .
    audio.currentTime = 0; // Permite el spam de teclas.
    audio.play();
    key.classList.add( 'playing' );
});

const keys = document.querySelectorAll( '.key' );
keys.forEach( key  => key.addEventListener( 'transitionend', removeTransition ) );

function removeTransition ( e ){
    if ( e.propertyName !== 'transform') return; // Lo salta si no se trata de un transform.
    this.classList.remove( 'playing' );  // Se refiere a: key.addEventListener
};