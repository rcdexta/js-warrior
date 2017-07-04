module.exports = {

  isLoggedIn() {
    return !!localStorage.userName
  },

  setSession(data) {
    localStorage.userName = data.userName
    localStorage.level = 1
  },

  destroySession() {
    delete localStorage.userName
  },

  getUsername() {
    return localStorage.userName
  }

}
