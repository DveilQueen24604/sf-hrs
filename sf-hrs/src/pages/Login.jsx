import { useState } from 'react'
import { supabase } from '../supabase'

function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async () => {
    setError('')

    try {
      console.log('Login attempt', { username })
      const start = Date.now()
      const { data, error: sbError } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .single()
      const duration = Date.now() - start

      console.log('Supabase response', { data, sbError, duration })

      if (sbError) {
        // show detailed Supabase error for debugging
        const msg = sbError.message || JSON.stringify(sbError)
        setError(`Supabase error: ${msg}`)
        return
      }

      if (!data) {
        setError('ไม่พบข้อมูลผู้ใช้ (data empty)')
        return
      }

      // success - send object to match App onLogin signature
      <Login
  onLogin={({ role, fullName }) => {
    setIsLogin(true)
    setRole(role)
    setFullName(fullName)
    setPage('dashboard')

    localStorage.setItem('isLogin', 'true')
    localStorage.setItem('role', role)
    localStorage.setItem('fullName', fullName)
  }}
/>


  return (
    <div className="login-page">
      <h2>SF + HRS</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
