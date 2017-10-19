const toggleLogin = function () {
  $('#showLogin').toggleClass('hidden unhidden')
  // console.log(parentElement)
}

const togglePassword = function () {
  $('#showPass').toggleClass('hidden unhidden')
  // console.log(parentElement)
}

const toggleSignout = function () {
  $('#signout').toggleClass('hidden unhidden')
  // console.log(parentElement)
}

const toggleSignup = function () {
  $('#signup').toggleClass('hidden unhidden')
  // console.log(parentElement)
}

const togglePanel = function () {
  $('#msg-panel').toggleClass('panel-info panel-primary')
  // console.log(parentElement)
}

module.exports = {
  toggleLogin,
  togglePassword,
  toggleSignout,
  toggleSignup,
  togglePanel
}
