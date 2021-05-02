let changeBtn = document.querySelector('#change');
let board = document.querySelector('#board');
let currentNumSpaces = 0;

createBoard(16);

changeBtn.addEventListener('click', function() {
    createBoard(0);
});

function clearBoard(sqrs) {
    board.innerHTML = '';
    currentNumSpaces = 0;
}

function createBoard(spaces) {
    let origNum = 0;
    let input;
    if(spaces == 0) {
        input = window.prompt('How many squares do you want?', '16');  
        if(input === "" || input === null || input === "null") {
            return;
        } else {
            spaces = parseInt(input, 10); 
        } 
    }
    // TODO: Check docs for how to use if statements correctly.
    if(spaces >= 100 || !Number.isInteger(spaces) || spaces <= 0) {
        alert("Choose another number! Less than 100!");
        createBoard(0);
        return;
    } else {
        origNum = spaces;
        spaces = spaces * spaces;
    }
    // Checks to see if there are any pieces so they can be deleted.
    if(currentNumSpaces >= 1) {
        clearBoard(currentNumSpaces);   
    }
    let boardDiv = document.getElementById("board");
    boardDiv.style.gridTemplateColumns = 'repeat(' + origNum + ', 1fr)';
    boardDiv.style.gridTemplateRows = 'repeat(' + origNum + ', 1fr)';
    // All syntax needed to setup new game goes here.
    // # of new pieces, current number of pieces, board pieces array,
    // creation of new pieces
    currentNumSpaces = spaces;
    for (i = 0; i < spaces; i++) {
        let newPiece = createDiv();
        board.appendChild(newPiece);
    }
}

function createDiv() {
    let square = document.createElement('div');
    square.setAttribute('class', 'board-piece');    
    // TODO: Set the color using a function
    square.addEventListener('mouseenter', function(){
        square.style.backgroundColor = '#505050';
    });
    // boardDiv.addEventListener('mouseoff', function(){
    //     piece.classList.add("colored");
    // });
    return square;
}

// TODO: Make this generate random colors
function color(currentColor) {
    let newColor
    switch(currentColor) {
        case 'white':
            newColor = 'rgb(0 0 0 / 10%)'
        break;
    }
    return newColor;
}