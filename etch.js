const container = document.querySelector('#container');
const initialSize = 16;
const color = squareColors();

function squareColors() { /* Incomplete. Returning only brown. Work in progress. */
    const paint = {
        color: 'brown',
        original: function() {
            paint.color = 'brown';
            console.log(paint.color);
        },
        rainbow: function() {
            let rgbValues = [];
            for (let i = 0; i < 3; i++) {
                rgbValues[i] = Math.floor(Math.random() * 255);
            }
            paint.color = `rgb(${rgbValues.join(', ')})`;
            console.log(paint.color);
        }
    };
    const original = document.getElementById('original');
    original.addEventListener('click', paint.original);
    const rainbow = document.getElementById('rainbow');
    rainbow.addEventListener('click', paint.rainbow);

    return paint.color;
    
}


function squareSize(initialSize) {
    const square = 450/initialSize;
    return square;
}


function createSquare(initialSize) {
    for(let i = 0; i < initialSize ** 2; i++) {
        const square = document.createElement('div');
        const size = squareSize(initialSize);
        square.classList.toggle('square');
        square.style.cssText = `width: ${size}px; height: ${size}px`;
        container.append(square);
    }
}

function paintSquare(initialSize, color) {
    const size = squareSize(initialSize);
    const paint = color;
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseout', () => {
            square.style.cssText = `background-color: ${paint}; width: ${size}px; height: ${size}px`
        })
    })
}


function resizeSquares(color) {
    const paint = color
    const button = document.querySelector('#btnResize');
    let div = document.getElementById('container');
    button.addEventListener('click', () => {
        while(div.firstChild) {
            div.removeChild(div.firstChild);
        }
        let ask = '';
        while (ask < 2 || ask > 100) {
            ask = prompt('What grid size do you want? \n\nChoose between 2 and 100.');
            if (ask >= 2 && ask <= 100) {
                squareSize(ask);
                createSquare(ask);
                paintSquare(ask, paint);
                clearAll(ask);
                break;
            } else if (ask == null) {
                squareSize(initialSize);
                createSquare(initialSize);
                paintSquare(initialSize, color);
                clearAll(initialSize);
                break;
            }
        }
    })
}

function clearAll(number) {
    const size = squareSize(number);
    const button = document.querySelector('#btnClear');
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        button.addEventListener('click', () => {
            square.style.cssText = `background-color: rgb(255, 255, 203); width: ${size}px; height: ${size}px`;
        })
    })
}


squareSize(initialSize);
createSquare(initialSize);
paintSquare(initialSize, color);
clearAll(initialSize);
resizeSquares(color);
