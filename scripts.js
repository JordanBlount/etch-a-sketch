let changeBtn = document.querySelector('#change');
let board = document.querySelector('#board');
let currentNumSpaces = 0;

// createBoard(16);

changeBtn.addEventListener('click', function() {
    createBoard(0);
});

function clearBoard(sqrs) {
    board.innerHTML = '';
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
    }
    // Checks to see if there are any pieces so they can be deleted.
    if(currentNumSpaces >= 1) {
        clearBoard(currentNumSpaces);   
    }
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
