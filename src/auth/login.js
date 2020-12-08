import React, { useState } from 'react'

export default function Login({onLogin}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin() {
    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(x => x.json())
    .then(data => {
      localStorage.setItem('accessToken', data.accessToken)
      localStorage.setItem('refreshToken', data.refreshToken)
      onLogin();
    })
  }

  return (
    <div>
      <div>
        <label>Username: </label>
        <input type='text' value={username} onChange={e => setUsername(e.target.value)}/>
      </div>
      <div>
        <label>Password: </label>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
