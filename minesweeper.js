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

  for (var i = 0 ; i < board.cells.length; i++){

      var cell = board.cells[i]
    
      cell.surroundingMines = countSurroundingMines (cell);

  }

  lib.initBoard()
}

  console.log(board.cells)

  document.onclick = checkForWin

function checkForWin () {
  
  var isTheWinner = true

  for (var i = 0 ; i < board.cells.length; i++ ){
    var cell = board.cells[i]
    if (cell.isMine && !cell.isMarked){
      isTheWinner = flase 
    }  
  
    if (isTheWinner){
      lib.displayMessage('You win!')
    }



}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
  // var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. 
// You should loop through them, counting the number of times `cell.isMine` is true.

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
)
}