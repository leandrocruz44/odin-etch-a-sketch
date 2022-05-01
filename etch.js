const container = document.querySelector('#container');
const howMany = 16;
const r = 200;
const g = 32;
const b = 100;

function squareSize(size) {
    const square = 500/size;
    return square;
}

function createSquare(number) {
    for(let i = 0; i < number * number; i++) {
        const square = document.createElement('div');
        const size = squareSize(number)
        square.classList.toggle('square')
        square.style.cssText = `width: ${size}px; height: ${size}px`
        container.append(square);
    }
}


function paintSquare(number, r, g, b) {
    const size = squareSize(number)
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.cssText = `background-color: rgb(${r}, ${g}, ${b}); width: ${size}px; height: ${size}px`
        })
    })
}

function clearAll(number) {
    const size = squareSize(number)
    const button = document.querySelector('#btnClear');
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        button.addEventListener('click', () => {
            square.style.cssText = `background-color: rgb(255, 255, 255); width: ${size}px; height: ${size}px`
        })
    })
}

createSquare(howMany);
paintSquare(howMany, r, g, b);
clearAll(howMany);