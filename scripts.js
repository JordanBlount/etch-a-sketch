let changeBtn = document.querySelector('#change');
let board = document.querySelector('#board');
let numOfSqrs = 0;

changeBtn.addEventListener('click', function() {
    numOfSqrs = parseInt(window.prompt('How many squares do you want?', '15'), 10);
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

function createBoard(spaces) {
    let boardPieces = [];
    for (i = 0; i < spaces; i++) {
        console.log("Created div " + i);
        boardPieces.push(createDiv());
        board.appendChild(boardPieces[i]);
    }
    document.querySelectorAll(".board-piece").foreach(piece => {
        piece.addEventListener('mouseover', function(){
            piece.classList.add("hovering");
        });
        piece.addEventListener('mouseoff', function(){
            piece.classList.add("colored");
        });
    })
}

function createDiv() {
    let boardDiv = document.createElement('div');
    boardDiv.classList.add("board-piece");
    return boardDiv;
}
