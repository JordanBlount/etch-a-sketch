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
    let numOfSqrs = parseInt(window.prompt('How many squares do you want?', '16'), 10);
    console.log(numOfSqrs);
    if(numOfSqrs >= 100) {
        alert("Choose a number less than 100.");
        return;
    } else {
        numOfSqrs = numOfSqrs * numOfSqrs;
        startGame(numOfSqrs);
    }
});

function startGame(sqrs) {
    createBoard(sqrs);
}

function clearBoard(sqrs) {
    for (i = 0; i < sqrs; i++) {
        board.removeChild(boardPieces[i]);
        console.log("Removed square " + i);
    }
}

function createBoard(spaces) {
    // Check syntax here because it is probably wrong
    // Deletion and reset of all logic goes here
    if(boardPieces.length >= 1) {
        clearBoard(currentNumSpaces);
        boardPieces = [];     
    }
    // All syntax needed to setup new game goes here.
    // # of new pieces, current number of pieces, board pieces array,
    // creation of new pieces
    boardPieces = [];
    currentNumSpaces = spaces;
    for (i = 0; i < spaces; i++) {
        boardPieces.push(createDiv());
        board.appendChild(boardPieces[i]);
        console.log("Created square " + i);
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
