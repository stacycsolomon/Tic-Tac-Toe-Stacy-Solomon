'use strict'

const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>Welcome to Tic Tac Toe! Sign in to start playing!</p>')

  $('form').trigger('reset')
  $('#sign-up-form').hide()
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>Click on new game to begin playing!</p>')
  console.log(response)
  store.user = response.user

  $('form').trigger('reset')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#new-game').show()
  $('#change-password-form').show()
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Check your email/password</p>')
}

const onChangePasswordSuccess = function (data) {
  $('#auth-display').html('<p>Password changed</p>')

  $('form').trigger('reset')
  $('#change-password-form').hide()
}

const onChangePasswordFailure = function () {
  $('#auth-display').html('<p>Error while changing password</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>Thanks for playing!</p>')
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#game').hide()
  $('#winning-message').text('')
  $('#tie-message').text('')
  $('.box').text('')
  $('form').trigger('reset')
}

const onSignOutFailure = function () {
  $('$auth-display').html('<p>Try again</p>')
}

const onNewGameSuccess = function (response) {
  $('#auth-display').html('<p>Player X make your move</p>')
  $('.board').show()
  $('#game').show()
  $('#new-game').hide()
  $('#play-again').show()
  $('#sign-out-button').show()
  $('#change-password-form').hide()
  $('#winning-message').text('')
  $('#tie-message').text('')

  console.log(response)
  store.game = response.game
}

const onNewGameFailure = function () {
  $('#auth-display').html('<p>Try again!</p>')
}

const onUpdateGameSuccess = function (response) {
  $('#auth-display').html('<p></p>')
  console.log(response)
  store.game = response.game
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
