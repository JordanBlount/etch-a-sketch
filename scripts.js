let changeBtn = document.querySelector('#change');
let board = document.querySelector('#board');
let currentNumSpaces = 0;
let boardPieces = [];

// Initial game
// startGame((16 * 16));

// Examine the logic here. We need the game to be pre-setup with 16 * 16.
// We need to be able to ask for new number of squares, clear board if
// needed, create new board. 
// 

// This button is for the player to select the size of the grid. 16 * 16
// example.
changeBtn.addEventListener('click', function() {
    createBoard(0);
});

function clearBoard(sqrs) {
    for (i = 0; i < sqrs; i++) {
        board.removeChild(boardPieces[i]);
        boardPieces.splice(boardPieces[i], 1); //CHECK THIS
        console.log("Removed square " + i);
    }
    boardPieces = [];
    currentNumSpaces = 0;
}

function createBoard(spaces) {
    if(spaces == 0) {
        spaces = parseInt(window.prompt('How many squares do you want?', '16'), 10);    
    }
    // TODO: Check docs for how to use if statements correctly.
    if(spaces >= 100 || !Number.isInteger(spaces) || spaces <= 0) {
        alert("Choose another number! Less than 100!");
        createBoard(0);
        return;
    } else {
        spaces = spaces * spaces;
        startGame(spaces);
    }
    // Checks to see if there are any pieces so they can be deleted.
    if(boardPieces.length >= 1) {
        clearBoard(currentNumSpaces);   
    }
    // All syntax needed to setup new game goes here.
    // # of new pieces, current number of pieces, board pieces array,
    // creation of new pieces
    boardPieces = [];
    currentNumSpaces = spaces;
    for (i = 0; i < spaces; i++) {
        boardPieces.push(createDiv());
        board.appendChild(boardPieces[i]);
    }
}

function createDiv() {
    let boardDiv = document.createElement('div');
    // boardDiv.classList.add("board-piece");
    boardDiv.setAttribute('class', 'board-piece');
    // boardDiv.addEventListener('mouseover', function(){
    //     piece.classList.add("hovering");
    // });
    // boardDiv.addEventListener('mouseoff', function(){
    //     piece.classList.add("colored");
    // });
    return boardDiv;
}
