import React from 'react';

export default class LoginForm extends React.Component {


  constructor() {
    super();

    this.state = {
      // inputs: [
      //   {
      //     name: 'Username',
      //     value: '',
      //     invalid: false
      //   },
      //   {
      //     name: 'Password',
      //     value: '',
      //     invalid: false
      //   }
      // ]
      username: '',
      password: '',
      usernameInvalid: false,
      passwordInvalid: false,
    }
  }

  handleChange = (e) => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
      [`${e.target.name}Invalid`]: e.target.value === ''
    });
  }

  handleLogin = (e) => {
    const { username, password } = this.state;
    if (username === '') {
      this.setState({
        usernameInvalid: true
      })
    }
    if (password === '') {
      this.setState({
        passwordInvalid: true
      })
    }

  }

  render() {
    const { username, password, usernameInvalid, passwordInvalid } = this.state;
    return (
      <form>
        <div>
          <label>Username: </label>
          <input
            type='text'
            value={username}
            onChange={this.handleChange}
            name='username'
            style={{ border: usernameInvalid ? 'solid 1px red' : 'solid 1px #ccc' }}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type='password'
            value={password}
            onChange={this.handleChange}
            name='password'
            style={{ border: passwordInvalid ? 'solid 1px red' : 'solid 1px #ccc' }}
          />
        </div>
        <button type='button' onClick={this.handleLogin}>login</button>
      </form>
    )
  }
}



let state = {
  usernameInvalid: false,
  passwordInvalid: false,
}

function handeLogin() {
  setTimeout(
    () => {
      state.usernameInvalid = true;
      state.usernameInvalid = true;
      state.usernameInvalid = true;
      state.usernameInvalid = true;
    },
    1
  )
  state.passwordInvalid = true;
}

handeLogin();

console.log({ ...state });

/// calling render....