export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const signIn = (userName) => ({
  type: SIGN_IN,
  payload: {
    userName
  }
})

export const signOut = () => ({
  type: SIGN_OUT
})