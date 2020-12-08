import React, { useState } from 'react'
import Login from './login'
import Post from './Post'

export default function App() {
  const [mode, setMode] = useState('login')

  function handleLogin() {
    setMode('post')
  }

  return (
    <div>
      {mode === 'login' && <Login onLogin={handleLogin} />}
      {mode === 'post' && <Post />}
    </div>
  )
}
