'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
//
// const api = require('./api')
// const ui = require('./ui')
//
// const onSignUp = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.signUp(data)
//     .then(ui.success)
//     .catch(ui.failure)
// }
//
// const onSignIn = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.signIn(data)
//     .then(ui.signInSuccess)
//     .catch(ui.failure)
// }
//
// const onSignOut = (event) => {
//   event.preventDefault()
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.failure)
// }
//
// const onChangePassword = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.changePassword(data)
//     .then(ui.success)
//     .catch(ui.failure)
// }
//
const test = function (event) {
  console.log('hi')
}

const addHandlers = () => {
  $('#test').on('click', test)
  // $('#sign-up').on('submit', onSignUp)
  // $('#login').on('submit', onSignIn)
  // $('#sign-out').on('submit', onSignOut)
  // $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}