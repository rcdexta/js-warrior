module.exports = {

  isLoggedIn() {
    return !!localStorage.userName
  },

  setSession(data) {
    localStorage.userName = data.username
    localStorage.level = 1
  },

  destroySession() {
    delete localStorage.userName
  },

  setLevel(level) {
    localStorage.level = level
  },

  getLevel() {
    return localStorage.level
  },

  getUsername() {
    return localStorage.userName
  }

}
