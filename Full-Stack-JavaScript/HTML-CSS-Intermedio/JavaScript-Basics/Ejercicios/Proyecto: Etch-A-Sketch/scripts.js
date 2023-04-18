const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

function setCurrentColor(newColor) {
  currentColor = newColor
}

function setCurrentMode(newMode) {
  activateButton(newMode)
  currentMode = newMode
}

function setCurrentSize(newSize) {
  currentSize = newSize
}

const grid = document.getElementById('drawArea')

let btnSize = document.getElementById( 'btnSize' );

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
        let celda = document.createElement('div')
        celda.classList.add('celda')
        celda.addEventListener('mouseover', changeColor)
        celda.addEventListener('mousedown', changeColor)
        grid.appendChild(celda)
    }
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#fefefe'
    }
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE)
}