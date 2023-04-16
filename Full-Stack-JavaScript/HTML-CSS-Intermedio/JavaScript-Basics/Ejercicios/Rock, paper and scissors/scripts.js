// 1 - Necesitamos preguntar y obtener la elección del jugador.
// 2 - Para la elección de la computadora se utilizara getComputerChoice.
// 3 - Establecer que combinaciones de elecciones gana y cuales pierden.
//  - Comparar ambas elecciones.
//  - Arrojar resultado.
// - Jugar una ronda.

const options = [ "PIEDRA", "PAPEL", "TIJERAS" ];
const buttons = document.querySelectorAll( 'button' );
let resultadoJugador = 0;
let resultadoPc = 0;
let playerChoice;
let pcChoice;
let mensaje;

function pcPlay(){
    return options[Math.floor(Math.random() * options.length)];
};

buttons.forEach( button => button.addEventListener( 'click', () => {
    const optionImg = button.querySelector('img');
    playerChoice = optionImg.alt.toUpperCase();
    playRound(playerChoice, pcChoice);
}));


function playRound( playerChoice, pcChoice ) {
    
    pcChoice = pcPlay();
    playerChoice = playerChoice;

    if (playerChoice == pcChoice){        
        mensaje = "Ronda Empatada";
        enviarMensaje();

        console.log(`El jugador eligió: ` + playerChoice);
        console.log(`El rival eligió: ` + pcChoice);
        console.log(`Ronda empatada`);
        console.log(`Jugador: ` + resultadoJugador + ` Pc: ` + resultadoPc)
        
    }else if (
        playerChoice == "PIEDRA" && pcChoice == "TIJERAS" ||
        playerChoice == "TIJERAS" && pcChoice == "PAPEL" ||
        playerChoice == "PAPEL" && pcChoice == "PIEDRA" ){
            resultadoJugador = ++resultadoJugador;
            guardarResultadoJugador();
            mensaje = "¡Ronda ganada!";
            enviarMensaje();

            console.log(`El jugador eligió: ` + playerChoice);
            console.log(`El rival eligió: ` + pcChoice);
            console.log(`¡Ronda ganada!`);
            console.log(`Jugador: ` + resultadoJugador + ` Pc: ` + resultadoPc)
    }else {
        resultadoPc = ++resultadoPc;
        guardarResultadoPc();
        mensaje = "¡Ronda perdida!";
        enviarMensaje();

        console.log(`El jugador eligió: ` + playerChoice);
        console.log(`El rival eligió: ` + pcChoice);
        console.log(`¡Ronda perdida!`);
        console.log(`Jugador: ` + resultadoJugador + ` Pc: ` + resultadoPc)
    }
};

function guardarResultadoJugador(){
    let cajaJugador = document.querySelector( "#resultadoJugador" );
    cajaJugador.textContent = resultadoJugador;
}

function guardarResultadoPc(){
    let cajaPc = document.querySelector( "#resultadoPc" );
    cajaPc.textContent = resultadoPc;
    
}

function enviarMensaje(){
    if ( resultadoJugador === 5 ){
        let mensajeRonda = document.querySelector( "#mensaje" );
        mensajeRonda.textContent = "¡Eres el ganador!";
    }else if ( resultadoPc === 5 ){
        let mensajeRonda = document.querySelector( "#mensaje" );
        mensajeRonda.textContent = "¡Fuiste Vencido!";
    }else {
        let mensajeRonda = document.querySelector( "#mensaje" );
        mensajeRonda.textContent = mensaje;
    }
}