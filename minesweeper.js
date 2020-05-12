document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {row: 0,
      col: 0,
      isMine: false,
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

  // it is telling to me create a for loop 
  
  // it is going to go through the contents of the board.cells
  
  // run that through the countSurroundingMines function

  // call the result surroundingMines


  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
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

