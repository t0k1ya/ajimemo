import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { signIn } from '../../actions';

const Component = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { password } = e.target.elements;
    const PASSWORD = '1234'
    if (password.value === PASSWORD) {
      props.signIn('tom');
      props.history.push('/home')
    }
    props.history.push('/signin')
    
  }
  return (
    <div>
      <h2>ログイン</h2>
      <form onSubmit={handleSubmit}>
        <Field
          name="password"
          component="input"
          type="password"
          placeholder="パスワード"
        />
        <button type="submit">ログインする</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = ({
  signIn: (userName) => signIn(userName)
})

const SignInComponent = reduxForm({
  form: 'signIn',
})(Component)

export default connect(null, mapDispatchToProps)(SignInComponent)