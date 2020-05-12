document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {row: 0,
      col: 0,
      isMine: true,
      hidden: true
    },

    { row: 0,
      col: 1,
      isMine: false,
      hidden: true
    },

    { row: 0,
      col: 2,
      isMine: false,
      hidden: true
    },

    { row: 0,
      col: 3,
      isMine: false,
      hidden: true
    },

    { row: 1,
      col: 0,
      isMine: false,
      hidden: true
    },

    { row: 1,
      col: 1,
      isMine: false,
      hidden: true
    },

    { row: 1,
      col: 2,
      isMine: false,
      hidden: true
    },

    { row: 1,
      col: 3,
      isMine: false,
      hidden: true
    },

    { row: 2,
      col: 0,
      isMine: false,
      hidden: true
    },

    { row: 2,
      col: 1,
      isMine: false,
      hidden: true
    },

    { row: 2,
      col: 2,
      isMine: false,
      hidden: true
    },

    { row: 2,
      col: 3,
      isMine: false,
      hidden: true
    },

    { row: 3,
      col: 0,
      isMine: false,
      hidden: true
    },

    { row: 3,
      col: 1,
      isMine: false,
      hidden: true
    },

    { row: 3,
      col: 2,
      isMine: false,
      hidden: true
    },

    { row: 3,
      col: 3,
      isMine: false,
      hidden: true
    },

  ]

}


function startGame () {

  for (var i = 0 ; i < board.cells.length; i++ ){

      var cell = board.cells[i]
    
      cell.SurroundingMines = countSurroundingMines(cell)

  }

  lib.initBoard()
}


document.addEventListener("click", function(){checkForWin})
document.addEventListener('contextmenu', function(){checkForWin})

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  
  for (var i = 0 ; i < board.cells.length; i++ ){
    if (cells.isMine && cells.isMarked){
      return displayMessage}

  
} 

 

  // if statement to check .isMine and isMarked are true
  // if statement mine is marked there are cells with hidden being true then fails. 

  lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell) {
  var count = 0

  var surrounding = lib.getSurroundingCells(cell.row, cell.col)

  for (var i = 0; i < surrounding.length ; i++) {

    var cell = surrounding[i]

    if (cell.isMine) {
      count ++
    } 
  }
 

  return count
}

