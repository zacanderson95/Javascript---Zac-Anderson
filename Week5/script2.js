// constants
//? const GRIDSIZE
const GRIDSIZE = 3;
// globals
// mark means the "mark" the user makes when clicking on a box
let xMark = "X";
let oMark = "O";
let lastMark = "";
let boardArray = new Array(GRIDSIZE);// Array with initial size of GRIDSIZE
// references
//? tictacBoard
let tictacBoard = document.getElementById("tictacBoard");
//? newGame
let newGame = document.getElementById("newGame");
// EVENT LISTENERS ----------------
//? initialize on load
window.onload = initialize;
//? call initialization function
function initialize() {
    newGame.innerHTML = null;

}
//? event listener for newGame button
newGame.addEventListener("click", function (event) {
    initialize();
    event.preventDefault();
});
// FUNCTIONS ----------------------
// ****************************************************************

function initialize() {
    for (var i = 0; i < GRIDSIZE; ++i) {
        boardArray[i] = [];
    }

    // Draw board
    let r = 0;
    var t = "tictactoe"
    for (var row=0; row<GRIDSIZE; row++) {
        for (var col=0; col<GRIDSIZE; col++) {
            boardArray[row][col] = t[r++];
        }
    }
    tictacBoard.innerHTML = boardArray;
}