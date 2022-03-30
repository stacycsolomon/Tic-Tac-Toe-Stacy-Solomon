// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gamesEvents = require('./games/events.js')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#play-again').on('click', gamesEvents.onPlayAgain)
  $('#new-game').on('click', authEvents.onNewGame)
  $('.box').on('click', gamesEvents.onBoxClicked)

  $('.board').hide()
  $('#new-game').hide()
  $('#play-again').hide()
  $('#sign-out-button').hide()
  $('#change-password-form').hide()
})
