let newGameBtn = document.querySelector('newGame');
let board = document.querySelector('board');
let numOfSqrs = 15;

newGameBtn.addEventListener('click', () => {
    let numOfSqrs = parseInt(window.prompt('How many squares do you want?', '15'), 10);
    if(numOfSqrs >= 100) {
        alert("Choose a number less than 100.");
    }
    startGame();
});

function startGame() {
    createBoard(numOfSqrs);
}

function createBoard(spaces) {
    let sqrs = [];

    for (i = 0; i < spaces; i++) {
        sqrs.push(createDiv());
        board.appendChild(sqrs[i]);
    }
}

function createDiv() {
    let boardDiv = document.createElement('div');
    // boardDiv.classList.add('');
    boardDiv.className = `new-div`;
    return boardDiv;
}
