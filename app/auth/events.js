'use strict'

const getFormFields = require('../../lib/get-form-fields')
const authUi = require('./ui.js')
const authApi = require('./api.js')

// const boxIndex = event.target.getAttribute('data-cell-index')
// const gameBoard = ['', '', '', '', '', '', '', '', '']
// const winner = false
// const playerX = 'X'
// const playerO = 'O'

// // make an array for the possible wins
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

const onSignUp = function (event) {
  event.preventDefault()
  console.log('signed up')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .signUp(data)
    .then(() => authUi.onSignUpSuccess())
    .catch(() => authUi.onSignUpFailure())
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('signed in')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .signIn(data)
    .then((response) => authUi.onSignInSuccess(response))
    .catch(() => authUi.onSignInFailure())
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('signed out')
  authApi
    .signOut()
    .then(() => authUi.onSignOutSuccess())
    .catch(() => authUi.onSignOutFailure())
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('password changed')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .changePassword(data)
    .then(() => authUi.onChangePasswordSuccess())
    .catch(() => authUi.onChangePasswordFailure())
}

const onNewGame = function (event) {
  event.preventDefault()
  console.log('game created')

  authApi.createGame()
    .then(() => authUi.onNewGameSuccess())
    .catch(() => authUi.onNewGameFailure())
}

// const onBoxClicked = function (event) {
//   console.log('click')
//   // place mark
//   // check for win
//   // check for draw
//   // switch turn
// }

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onNewGame
  // onBoxClicked
}
