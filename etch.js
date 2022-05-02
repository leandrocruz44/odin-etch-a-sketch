const container = document.querySelector('#container');
const initialSize = 16;
const r = 0;
const g = 255;
const b = 200;

function squareSize(initialSize) {
    const square = 450/initialSize;
    return square;
}


function createSquare(initialSize) {
    for(let i = 0; i < initialSize ** 2; i++) {
        const square = document.createElement('div');
        const size = squareSize(initialSize)
        square.classList.toggle('square')
        square.style.cssText = `width: ${size}px; height: ${size}px`
        container.append(square);
    }
}

function paintSquare(initialSize) {
    const size = squareSize(initialSize)
    const color = 'black'
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.cssText = `background-color: ${color}; width: ${size}px; height: ${size}px`
        })
    })
}


function resizeSquares() {
    const button = document.querySelector('#btnResize');
    let div = document.getElementById('container');
    button.addEventListener('click', () => {
        while(div.firstChild) {
            div.removeChild(div.firstChild);
        }
        let ask = prompt('How many squares do you want? Choose between 2 and 100.')
        if (ask < 2 || ask > 100) {
            alert('Invalid input.\n\nInsert numbers only between 2 and 100. Click "Resize" to set new value.')
        } else {
            squareSize(ask);
            createSquare(ask);
            paintSquare(ask);
            clearAll(ask);
        }
    })
}

function clearAll(number) {
    const size = squareSize(number)
    const button = document.querySelector('#btnClear');
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        button.addEventListener('click', () => {
            square.style.cssText = `background-color: rgb(255, 255, 203); width: ${size}px; height: ${size}px`
        })
    })
}


squareSize(initialSize)
createSquare(initialSize);
paintSquare(initialSize);
clearAll(initialSize);
resizeSquares();
