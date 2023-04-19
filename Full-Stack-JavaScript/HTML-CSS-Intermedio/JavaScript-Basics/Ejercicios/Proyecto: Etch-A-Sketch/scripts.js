const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

const grid = document.getElementById('drawArea')

let btnSize = document.getElementById( 'btnSize' );

//------------------------------------------------------

function clearGrid() {
	grid.innerHTML = '';
}

function reloadGrid() {
	clearGrid();
	setupGrid(currentSize);
}

function changeSize(value) {
	let newSize = Number(prompt( 'Escribe un valor para la cuadricula: ', 64 ));
	currentSize = newSize;
	reloadGrid();
}

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
        let celda = document.createElement('div')
        celda.classList.add('celda')
        celda.addEventListener('mouseover', painting)
        celda.addEventListener('mousedown', painting)
        grid.appendChild(celda)
    }
}

// Estas funciones periten el dibujado y cambio de tamaño y numero de celdas del area de pintado.

//-----------------------------------------------------

btnSize.addEventListener( 'click', changeSize );

// Esto perite iniciar el cambio de celdas del area de pintado.

//------------------------------------------------------

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

//Eto permite que el programa sepa, que mientras se mantenga pulsado el click los divs del grid cambiaran de color (se pintaran). Y que al soltar el click se deje de pintar.

//-----------------------------------------------------

function painting(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#fefefe'
    }
}

// Esta es la función encargada de pintar

//------------------------------------------------------

window.onload = () => {
    setupGrid(DEFAULT_SIZE)
}

// Esto permite iniciar el programa con un valor predeterminado 
// para el area dee dibujo.

//-----------------------------------------------------