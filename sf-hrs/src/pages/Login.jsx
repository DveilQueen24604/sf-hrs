import { useState } from 'react'

function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    // mock user
    if (username === 'EMP001' && password === '1234') {
      onLogin('employee')
      return
    }

    if (username === 'MER001' && password === '1234') {
      onLogin('manager')
      return
    }

    setError('Username หรือ Password ไม่ถูกต้อง')
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">SF+ HRS V.1</h2>

        <div className="login-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="เช่น EMP001 / MER001"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="login-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="login-error">{error}</p>}

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
