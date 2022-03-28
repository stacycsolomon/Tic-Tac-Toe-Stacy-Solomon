
const store = require('../store')
// const authApi = require('./../auth/api.js')

const playerX = 'X'
const playerO = 'O'

// const over = false
let currentPlayer = playerX
const gameBoard = ['', '', '', '', '', '', '', '']

// const wins = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

const onBoxClicked = function (event) {
  const boxIndex = event.target.getAttribute('data-cell-index')
  console.log('click')

  gameBoard[event.target.id] = currentPlayer

  // switch turns

  event.target.innerText = currentPlayer
  if (currentPlayer === playerX) {
    store.game.cells[boxIndex] = playerX
    $(this).unbind()
    currentPlayer = playerO
    console.log(store.game.cells)
  } else {
    store.game.cells[boxIndex] = playerO
    $(this).unbind()
    currentPlayer = playerX
    console.log(store.game.cells)
  }

  //   authApi.updateGame(index, value, over)
  //     .then((response) => { store.game = response.game })
  console.log(boxIndex)
  // place mark
  // check for win
  // check for draw
  // switch turn
}

const onPlayAgain = function () {
  $('.box').text('')
  $('.box').bind('click', onBoxClicked)
}
module.exports = {

  onBoxClicked,
  onPlayAgain

}
