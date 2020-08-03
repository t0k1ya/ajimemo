import { SIGN_IN } from '../actions';

export default (state = {}, action) => {
  switch(action.type) {
    case SIGN_IN:
      console.log('sign_in: ', action)
      return {
        ...state,
        ...action
      }
    default:
      return state
  }
}