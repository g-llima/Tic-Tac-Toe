var board;
var huPlayer = 'O';
var aiPlayer = 'X';
var winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
var cells = document.querySelectorAll('.cell');
startGame();
function startGame() {
    document.querySelector(".endgame").style.display = "none";
    board = Array.from(Array(9).keys());
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background');
        cells[i].addEventListener('click', turnClick);
    }
}
function turnClick(cell) {
    turn(cell.target.id, huPlayer);
}
function turn(cellID, player) {
    board[cellID] = player;
    document.getElementById(cellID).innerText = player;
    console.log(cellID);
}
