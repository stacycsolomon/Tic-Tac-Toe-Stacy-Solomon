// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gamesEvents = require('./games/events.js')

$(() => { $('#sign-up-form').on('submit', authEvents.onSignUp) })
$(() => { $('#sign-in-form').on('submit', authEvents.onSignIn) })
$(() => { $('#sign-out-button').on('click', authEvents.onSignOut) })
$(() => { $('#change-password-form').on('submit', authEvents.onChangePassword) })
$(() => { $('#new-game').on('click', authEvents.onNewGame) })
$(() => { $('.box').on('click', gamesEvents.onBoxClicked) })
$(() => { $('#play-again').on('click', gamesEvents.onPlayAgain) })
$(() => { $('#quit-game').on('click', gamesEvents.onQuitGame) })

// $(() => { $(('#login').hide('click', authEvents.onSignIn)) })
// $(() => { $(('#sign-up-form').hide()) })
// $(() => { $(('#sign-out-form').hide()) })
// $(() => { $(('#sign-in-form').hide()) })
