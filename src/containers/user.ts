class User {
  isLoggedIn = () => this.get('isLoggedIn') === 'true';

  set = (key: string, value: string) => localStorage.setItem(key, value)

  get = (key: string) => this.getLocalStorage(key)

  getLocalStorage = (key: string) => {
    const ret = localStorage.getItem(key)
    if (ret) {
      return ret
    }
    return null
  }

  login = async (email: string, password: string) => {
    this.set('isLoggedIn', 'true')

    return true
  }

  logout = async () => {
    if (this.isLoggedIn()) {
      this.set('isLoggedIn', 'false')
    }
  }
}

export default new User()