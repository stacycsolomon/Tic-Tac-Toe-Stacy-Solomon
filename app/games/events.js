
const store = require('../store.js')
const authApi = require('../auth/api.js')
const authUi = require('../auth/ui.js')

const playerX = 'X'
const playerO = 'O'
let currentPlayer = playerX
const cells = ['', '', '', '', '', '', '', '']
let gameOver = false

const onBoxClicked = function (event) {
  const boxIndex = event.target.getAttribute('data-cell-index')

  cells[event.target.id] = currentPlayer
  event.target.innerText = currentPlayer

  authApi
    .updateGame(boxIndex, currentPlayer, gameOver)
  // .then((response) => console.log(response))
    .then((response) => authUi.onUpdateGameSuccess(response))
    // .then((response) => { store.game = response.game })
    // .then(() => console.log(store.game))
    .catch(() => authUi.onUpdateGameFailure())

  if (currentPlayer === playerX) {
    store.game.cells[boxIndex] = playerX
    $(this).unbind()

    // check for winner before reassigning player

    if (checkWinner(currentPlayer)) {
      $('#winning-message').text('Congratulations ' + currentPlayer + ' you win!')
      $('.box').unbind()
      return
    }
    // console.log(checkWinner(currentPlayer))
    currentPlayer = playerO
  } else {
    store.game.cells[boxIndex] = playerO
    $(this).unbind()

    if (checkWinner(currentPlayer)) {
      $('#winning-message').text('Congratulations ' + currentPlayer + ' you win!')
      $('.box').unbind()
      return
    }
    // console.log(checkWinner(currentPlayer))

    currentPlayer = playerX
  }
  console.log(boxIndex)
}

// const winning_combo = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

const checkWinner = function () {
  if (store.game.cells[0] === currentPlayer) {
    if (store.game.cells[1] === currentPlayer && store.game.cells[2] === currentPlayer) {
      console.log(currentPlayer + ' wins!')
      gameOver = true
      return true
    } if (store.game.cells[3] === currentPlayer && store.game.cells[6] === currentPlayer) {
      console.log(currentPlayer + ' wins!')
      gameOver = true
      return true
    } if (store.game.cells[4] === currentPlayer && store.game.cells[8] === currentPlayer) {
      console.log(currentPlayer + ' wins!')
      gameOver = true
      return true
    }
  } else if (store.game.cells[8] === currentPlayer) {
    if (store.game.cells[2] === currentPlayer && store.game.cells[5] === currentPlayer) {
      console.log(currentPlayer + ' wins!')
      gameOver = true
      return true
    } if (store.game.cells[6] === currentPlayer && store.game.cells[7] === currentPlayer) {
      console.log(currentPlayer + ' wins!')
      gameOver = true
      return true
    }
  } else if (store.game.cells[4] === currentPlayer) {
    if (store.game.cells[1] === currentPlayer && store.game.cells[7] === currentPlayer) {
      console.log(currentPlayer + ' wins!')
      gameOver = true
      return true
    } if (store.game.cells[3] === currentPlayer && store.game.cells[5] === currentPlayer) {
      console.log(currentPlayer + ' wins!')
      gameOver = true
      return true
    }
  } else if ((store.game.cells[2] === currentPlayer) && store.game.cells[4] === currentPlayer && store.game.cells[6] === currentPlayer) {
    console.log(currentPlayer + ' wins!')
    gameOver = true
    return true
  }
}

const onPlayAgain = function () {
  store.game.cells = ['', '', '', '', '', '', '', '']

  $('.box').text('')
  $('.box').on('click', onBoxClicked)
  currentPlayer = playerX

  authApi
    .newGame()
    // .then((response) => { store.game = response.game })
}

module.exports = {

  onBoxClicked,
  checkWinner,
  onPlayAgain
  //   checkGameOver

}
