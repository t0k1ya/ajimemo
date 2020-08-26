import firebase, { firestore } from '../Firebase'
import { 
  SignUpTypes,
} from '../Types'

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

  signUp = async (params: SignUpTypes) => {
    firebase.auth().createUserWithEmailAndPassword(params.email, params.password)
      .then((res: any) => {
        const uid = res.user.uid
        const docId = firestore.collection('users').doc().id
        firestore.collection('users').doc(docId).set({
          docId: docId,
          uid,
          name: params.name,
          email: params.email
        })
      })
      .catch(e => {
        alert(e.message)
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