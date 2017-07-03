module.exports = {

  isLoggedIn() {
    return !!localStorage.userName
  },

  setSession(data) {
    localStorage.userName = data.userName
  },

  destroySession() {
    delete localStorage.userName
  },

  getUsername() {
    return localStorage.userName || 'RC'
  }

}
