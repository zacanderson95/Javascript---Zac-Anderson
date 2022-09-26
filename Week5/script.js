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
    let htmlCode = "";
    let boxNumber = 0;
    let colSize = Math.round(12/GRIDSIZE)
    for (var row=0; row<GRIDSIZE; row++) {

        htmlCode += '<div class="row h-25">';
        for (var col=0; col<GRIDSIZE; col++) {
            boardArray[row][col] = col;
            htmlCode += '<div onClick="markIt('+row+','+col+')" id="'+row+'_'+col+'" class="col-'+colSize+' h-100 bg-primary bg-gradient border border-info shadow d-flex align-items-center justify-content-center fs-1">'+boxNumber+++'('+row+','+col+')</div>';
        }
        htmlCode += '</div>';
    }
    tictacBoard.innerHTML = htmlCode;
}
console.log(boardArray.length);
console.log(boardArray);
// ****************************************************************
function markIt(row,col) {

    //? if the lastMark is X, then set mark=O, else set mark=X 
        
    if (lastMark = xMark)
            {
            mark = oMark;
         }
         else mark = xMark;
    lastMark = mark;


    document.getElementById(row+'_'+col).innerHTML = mark;

    //? save the mark in boardArray multidimensional array  (remember Array indexes start at 0 and not 1)
    boardArray[0][0]=mark;
    boardArray[0][1]=mark;
    boardArray[0][2]=mark;
    boardArray[1][0]=mark;
    boardArray[1][1]=mark;
    boardArray[1][2]=mark;
    boardArray[2][0]=mark;
    boardArray[2][1]=mark;
    boardArray[2][2]=mark;
    // check if there's a winner
    let winner = checkBoard();
    if (winner!="") {
        alert("Game Over! "+winner);
    }
}

// ****************************************************************
function checkBoard() {

    let xTest = true;
    let oTest = true;

    // check columns for x's
    for (col=0; col<GRIDSIZE; col++) {   
        xTest = true;    
        for (row=0; row<GRIDSIZE; row++) {
            if (boardArray[row][col] != xMark) {
                xTest=false;
                break;
            }
        }
        if (xTest===true) {
            return xMark+" is the vertical winner!";
        }
    }
    //? check columns for o's
    for (col=0; col<GRIDSIZE; col++) {   
        oTest = true;    
        for (row=0; row<GRIDSIZE; row++) {
            if (boardArray[row][col] != oTest) {
                xTest=false;
                break;
            }
        }
        if (oTest===true) {
            return oMark+" is the vertical winner!";
        }
    }

    // check rows for x's
    for (row=0; row<GRIDSIZE; row++) {   
        xTest = true;    
        for (col=0; col<GRIDSIZE; col++) {
            if (boardArray[row][col] != xMark) {
                xTest=false;
                break;
            }
        }
        if (xTest===true) {
            return xMark+" is the horizontal winner!";
        }
    }
    //? check rows for o's
    for (row=0; row<GRIDSIZE; row++) {   
        oTest = true;    
        for (col=0; col<GRIDSIZE; col++) {
            if (boardArray[row][col] != oTest) {
                oTest=false;
                break;
            }
        }
        if (oTest===true) {
            return oTest+" is the horizontal winner!";
        }
    }
 
    // check diagonals for x's
    // upper left to lower right
    xTest = true;
    for (grid=0; grid<GRIDSIZE; grid++) {              
        if (boardArray[grid][grid] != xMark) {
            xTest=false;
            break;
        }
    }
    if (xTest===true) {
        return xMark+" is the diagonal winner!";
    }
    //? upper right to lower left
    xTest = true;
    for (grid=2; grid<GRIDSIZE; grid++) {              
        if (boardArray[grid][grid] != xMark) {
            xTest=false;
            break;
        }
    }
    if (xTest===true) {
        return xMark+" is the diagonal winner!";
    }
    // check diagonals for o's
    //? upper left to lower right
    oTest = true;
    for (grid=0; grid<GRIDSIZE; grid++) {              
        if (boardArray[grid][grid] != oMark) {
            oTest=false;
            break;
        }
    }
    if (oTest===true) {
        return oMark+" is the diagonal winner!";
    }

    //? upper right to lower left
    oTest = true;
    for (grid=2; grid<GRIDSIZE; grid++) {              
        if (boardArray[grid][grid] != oMark) {
            oTest=false;
            break;
        }
    }
    if (oTest===true) {
        return oMark+" is the diagonal winner!";
    }

    return false;

}