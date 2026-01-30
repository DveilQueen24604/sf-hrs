import { useState, useEffect } from 'react'

// pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ManagerDashboard from './pages/ManagerDashboard'
import Request from './pages/Request'
import Approve from './pages/Approve'
import EmployeeSelfService from './pages/EmployeeSelfService'

function App() {
  // ===== auth =====
  const [isLogin, setIsLogin] = useState(false)
  const [role, setRole] = useState(null)

  // ===== navigation =====
  const [page, setPage] = useState(null)

  /* =========================
     โหลดสถานะจาก localStorage
  ========================= */
  useEffect(() => {
    const savedLogin = localStorage.getItem('isLogin')
    const savedRole = localStorage.getItem('role')

    if (savedLogin === 'true' && savedRole) {
      setIsLogin(true)
      setRole(savedRole)
      setPage('dashboard')
    }
  }, [])

  /* =========================
     Logout
  ========================= */
  const handleLogout = () => {
    localStorage.clear()
    setIsLogin(false)
    setRole(null)
    setPage(null)
  }

  /* =========================
     ยังไม่ล็อกอิน
  ========================= */
  if (!isLogin) {
    return (
      <Login
        onLogin={(userRole) => {
          setIsLogin(true)
          setRole(userRole)
          setPage('dashboard')

          localStorage.setItem('isLogin', 'true')
          localStorage.setItem('role', userRole)
        }}
      />
    )
  }

  /* =========================
     หน้าที่ใช้ร่วมกัน
  ========================= */
  if (page === 'request') {
    return <Request onBack={() => setPage('dashboard')} />
  }

  if (page === 'approve') {
    return <Approve role={role} onBack={() => setPage('dashboard')} />
  }

  if (page === 'ess') {
    return <EmployeeSelfService onBack={() => setPage('dashboard')} />
  }

  /* =========================
     Dashboard แยกตาม role
  ========================= */
  if (page === 'dashboard' && role === 'employee') {
    return (
      <Dashboard
        goRequest={() => setPage('request')}
        goApprove={() => setPage('approve')}
        goESS={() => setPage('ess')}
        onLogout={handleLogout}
      />
    )
  }

  if (page === 'dashboard' && role === 'manager') {
    return (
      <ManagerDashboard
        goRequest={() => setPage('request')}
        goApprove={() => setPage('approve')}
        goESS={() => setPage('ess')}
        onLogout={handleLogout}
      />
    )
  }

  return null
}

export default App
