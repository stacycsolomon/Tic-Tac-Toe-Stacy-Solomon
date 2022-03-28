'use strict'

const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>Welcome to Tic Tac Toe!</p>')

  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>Ready to play!</p>')
  console.log(response)
  store.user = response.user

  $('form').trigger('reset')
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Check your email/password</p>')
}

const onChangePasswordSuccess = function () {
  $('#auth-display').html('<p>Password changed</p>')

  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#auth-display').html('<p>Error while changing password</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>Thanks for playing!</p>')
}

const onSignOutFailure = function () {
  $('$auth-display').html('<p>Try again</p>')
}

const onNewGameSuccess = function (response) {
  $('#auth-display').html('<p>Game successfully created</p>')
  console.log(response)
  store.game = response.game
  store.game.cells = response.game.cells
}

const onNewGameFailure = function () {
  $('#auth-display').html('<p>Try again!</p>')
}

const onUpdateGameSuccess = function (response) {
  $('#auth-display').html('<p>Game successfully updated</p>')
  console.log(response)
  store.game._id = response.game.id
  store.game.cells = response.game.cells
}

const onUpdateGameFailure = function () {
  $('#auth-display').html('<p>Try again!</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onNewGameSuccess,
  onNewGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
