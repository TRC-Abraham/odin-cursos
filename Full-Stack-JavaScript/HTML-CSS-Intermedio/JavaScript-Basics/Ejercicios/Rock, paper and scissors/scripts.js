// 1 - Necesitamos preguntar y obtener la elección del jugador.
// 2 - Para la elección de la computadora se utilizara getComputerChoice.
// 3 - Establecer que combinaciones de elecciones gana y cuales pierden.
//  - Comparar ambas elecciones.
//  - Arrojar resultado.
// - Jugar una ronda.

function playRound( par1, par2 ) {
    let playerChoice = (prompt( 'Escribe: Piedra, Papel o Tijeras' )).toUpperCase();
    const options = [ "PIEDRA", "PAPEL", "TIJERAS" ];
    let pcChoice = options[Math.floor(Math.random() * options.length)];

    if (playerChoice == pcChoice){
        console.log(`El jugador eligió: ` + playerChoice);
        console.log(`El rival eligió: ` + pcChoice);
        console.log(`Empate`);
    }else if (
        playerChoice == "PIEDRA" && pcChoice == "TIJERAS",
        playerChoice == "TIJERAS" && pcChoice == "PAPEL",
        playerChoice == "PAPEL" && pcChoice == "PIEDRA" ){
        console.log(`El jugador eligió: ` + playerChoice);
        console.log(`El rival eligió: ` + pcChoice);
        console.log(`¡Ganaste!`);
    }else {
        console.log(`El jugador eligió: ` + playerChoice);
        console.log(`El rival eligió: ` + pcChoice);
        console.log(`¡Perdiste!`);
    }
}