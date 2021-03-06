
const store = require('../store.js')
const authApi = require('../auth/api.js')
const authUi = require('../auth/ui.js')

const playerX = 'X'
const playerO = 'O'
let currentPlayer = playerX
let gameOver = false
let clicks = 0
const cells = ['', '', '', '', '', '', '', '']

const onBoxClicked = function (event) {
  const boxIndex = event.target.getAttribute('data-cell-index')
  cells[event.target.id] = currentPlayer
  event.target.innerText = currentPlayer

  authApi
    .updateGame(boxIndex, currentPlayer, gameOver)
    .then((response) => authUi.onUpdateGameSuccess(response))
    .catch(() => authUi.onUpdateGameFailure())
  clicks = clicks + 1

  if (currentPlayer === playerX) {
    store.game.cells[boxIndex] = playerX
    $(this).unbind()
    if (checkWinner(currentPlayer)) {
      $('#winning-message').text('Congratulations ' + currentPlayer + ' you win!')
      $('.box').unbind()
      return
    }
    currentPlayer = playerO
    // put text here indicating whose turn
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
  if (store.game.cells[0] === currentPlayer && store.game.cells[1] === currentPlayer && store.game.cells[2] === currentPlayer) {
    gameOver = true
    return true
  } if (store.game.cells[3] === currentPlayer && store.game.cells[4] === currentPlayer && store.game.cells[5] === currentPlayer) {
    gameOver = true
    return true
  } if (store.game.cells[6] === currentPlayer && store.game.cells[7] === currentPlayer && store.game.cells[8] === currentPlayer) {
    gameOver = true
    return true
  } if (store.game.cells[0] === currentPlayer && store.game.cells[3] === currentPlayer && store.game.cells[6] === currentPlayer) {
    gameOver = true
    return true
  } if (store.game.cells[1] === currentPlayer && store.game.cells[4] === currentPlayer && store.game.cells[7] === currentPlayer) {
    gameOver = true
    return true
  } if (store.game.cells[2] === currentPlayer && store.game.cells[5] === currentPlayer && store.game.cells[8] === currentPlayer) {
    gameOver = true
    return true
  } if (store.game.cells[0] === currentPlayer && store.game.cells[4] === currentPlayer && store.game.cells[8] === currentPlayer) {
    gameOver = true
    return true
  } if (store.game.cells[2] === currentPlayer && store.game.cells[4] === currentPlayer && store.game.cells[6] === currentPlayer) {
    gameOver = true
    return true
  } if (clicks >= 9) {
    $('#winning-message').text("It's a tie! Play Again")
  }
}

const onPlayAgain = function (event) {
  event.preventDefault()
  // store.game.cells = ['', '', '', '', '', '', '', '']
  currentPlayer = playerX
  clicks = 0
  gameOver = false
  $('.box').text('')
  $('.box').on('click', onBoxClicked)
  $('#winning-message').text('')

  authApi
    .newGame()
    .then((response) => { store.game = response.game })
    .catch(() => authUi.onNewGameFailure())
  console.log(currentPlayer)
}

const onNewGame = function (event) {
  event.preventDefault()
  currentPlayer = playerX
  gameOver = false
  clicks = 0

  authApi.newGame()
    .then((response) => authUi.onNewGameSuccess(response))
    .catch(() => authUi.onNewGameFailure())
  $('.box').on('click', onBoxClicked)
  console.log(currentPlayer)
}
module.exports = {

  onBoxClicked,
  checkWinner,
  onPlayAgain,
  onNewGame

}
