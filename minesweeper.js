document.addEventListener('DOMContentLoaded', startGame)

// bugs to fix
// game says you win immediately after you click



// completed game
var board = {
  cells: [
    {row: 0,
      col: 0,
      isMine: randomMine(),
      hidden: true
    },

    { row: 0,
      col: 1,
      isMine: randomMine(),
      hidden: true
    },

    { row: 0,
      col: 2,
      isMine: randomMine(),
      hidden: true
    },

    { row: 0,
      col: 3,
      isMine: randomMine(),
      hidden: true
    },

    { row: 1,
      col: 0,
      isMine: randomMine(),
      hidden: true
    },

    { row: 1,
      col: 1,
      isMine: randomMine(),
      hidden: true
    },

    { row: 1,
      col: 2,
      isMine: randomMine(),
      hidden: true
    },

    { row: 1,
      col: 3,
      isMine: randomMine(),
      hidden: true
    },

    { row: 2,
      col: 0,
      isMine: randomMine(),
      hidden: true
    },

    { row: 2,
      col: 1,
      isMine: randomMine(),
      hidden: true
    },

    { row: 2,
      col: 2,
      isMine: randomMine(),
      hidden: true
    },

    { row: 2,
      col: 3,
      isMine: randomMine(),
      hidden: true
    },

    { row: 3,
      col: 0,
      isMine: randomMine(),
      hidden: true
    },

    { row: 3,
      col: 1,
      isMine: randomMine(),
      hidden: true
    },

    { row: 3,
      col: 2,
      isMine: randomMine(),
      hidden: true
    },

    { row: 3,
      col: 3,
      isMine: randomMine(),
      hidden: true
    },

  ]

  }

function startGame () {

  for (var i = 0 ; i < board.cells.length; i++){

      var cell = board.cells[i]
    
      cell.surroundingMines = countSurroundingMines (cell);

  }

  lib.initBoard()
}

document.onclick = checkForWin

function checkForWin () {
  for (let i = 0; i < board.cells.length; i++) {

    if ((board.cells[i].isMine === true) && (board.cells[i].isMarked !== true)) {
      return;
    } 
    
    else if ((board.cells[i].isMine !== true) && (board.cells[i].hidden === true)) {
      return;
    } 
  }
  displayMessage('You win!')
}

function countSurroundingMines (cell) {

  var count = 0
  
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)

    for (var i = 0; i < surrounding.length; i++) {
      var cell = surrounding[i]

      if (cell.isMine) {
      count++} 
    
      }

 return count
}

function randomMine() { 
  if (Math.random() < 0.30) 
  { return true } 
    else { return false }
}

function refreshPage(){
  window.location.reload();
} 
