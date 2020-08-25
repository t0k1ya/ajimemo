import firebase from '../Firebase'

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

  signUp = async (email: string, password: string) => {
    console.log('email: ', email)
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('authentication_response: ', res);
      })
      .catch(e => {
        console.log(e)
      })
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