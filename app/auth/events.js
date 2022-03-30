'use strict'

const getFormFields = require('../../lib/get-form-fields')
const authUi = require('./ui.js')
const authApi = require('./api.js')
const store = require('../store.js')

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

  authApi
    .newGame()
    .then((response) => authUi.onNewGameSuccess(response))
    // .then((response) => { store.game = response.game })
    .catch(() => authUi.onNewGameFailure())
}

// const onUpdateGame = function (event) {
//   event.preventDefault()
//   console.log('updated game')

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onNewGame
}
