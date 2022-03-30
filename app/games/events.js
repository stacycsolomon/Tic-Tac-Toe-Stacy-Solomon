
const store = require('../store.js')
const authApi = require('../auth/api.js')
const authUi = require('../auth/ui.js')

const playerX = 'X'
const playerO = 'O'
let currentPlayer = playerX
let gameOver = false

const cells = ['', '', '', '', '', '', '', '']

const onBoxClicked = function (event) {
  const boxIndex = event.target.getAttribute('data-cell-index')
  cells[event.target.id] = currentPlayer
  event.target.innerText = currentPlayer

  authApi
    .updateGame(boxIndex, currentPlayer, gameOver)
    .then((response) => authUi.onUpdateGameSuccess(response))
    .catch(() => authUi.onUpdateGameFailure())

  if (currentPlayer === playerX) {
    store.game.cells[boxIndex] = playerX
    $(this).unbind()
    if (checkWinner(currentPlayer)) {
      $('#winning-message').text('Congratulations ' + currentPlayer + ' you win!')
      $('.box').unbind()
      return
    }
    currentPlayer = playerO
  } else {
    store.game.cells[boxIndex] = playerO
    $(this).unbind()

    if (checkWinner(currentPlayer)) {
      $('#winning-message').text('Congratulations ' + currentPlayer + ' you win!')
      $('.box').unbind()
      return
    }
    currentPlayer = playerX
  }
  console.log(boxIndex)
}

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

const onPlayAgain = function (event) {
  event.preventDefault()
  store.game.cells = ['', '', '', '', '', '', '', '']
  currentPlayer = playerX
  gameOver = false
  $('.box').text('')
  $('.box').on('click', onBoxClicked)
  $('#winning-message').text('')

  authApi
    .newGame()
    .then((response) => { store.game = response.game })
    .catch(() => authUi.onNewGameFailure())
}

module.exports = {

  onBoxClicked,
  checkWinner,
  onPlayAgain

}
