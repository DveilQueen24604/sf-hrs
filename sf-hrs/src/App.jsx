import { useState } from 'react'

// pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'           // พนักงาน
import ManagerDashboard from './pages/ManagerDashboard'
import Request from './pages/Request'
import Approve from './pages/Approve'
import EmployeeSelfService from './pages/EmployeeSelfService'

function App() {
  // ===== auth =====
  const [isLogin, setIsLogin] = useState(false)
  const [role, setRole] = useState(null) // 'employee' | 'manager'

  // ===== navigation =====
  const [page, setPage] = useState('dashboard')

  /* =========================
     1) ยังไม่ล็อกอิน
  ========================= */
  if (!isLogin) {
    return (
      <Login
        onLogin={(userRole) => {
          setRole(userRole)
          setIsLogin(true)
          setPage('dashboard')
        }}
      />
    )
  }

  /* =========================
     2) หน้าที่ใช้ร่วมกัน
  ========================= */
  if (page === 'request') {
    return <Request onBack={() => setPage('dashboard')} />
  }

  if (page === 'approve') {
    // ⭐ จุดสำคัญ: Approve แยก UI ด้วย role ภายในไฟล์
    return <Approve role={role} onBack={() => setPage('dashboard')} />
  }

  if (page === 'ess') {
    return <EmployeeSelfService onBack={() => setPage('dashboard')} />
  }

  /* =========================
     3) Dashboard แยกตาม role
  ========================= */

  // ----- พนักงาน -----
  if (role === 'employee') {
    return (
      <Dashboard
        goRequest={() => setPage('request')}
        goApprove={() => setPage('approve')} // ดูสถานะของตนเอง
        goESS={() => setPage('ess')}
      />
    )
  }

  // ----- หัวหน้างาน -----
  if (role === 'manager') {
    return (
      <ManagerDashboard
        goRequest={() => setPage('request')}
        goApprove={() => setPage('approve')} // อนุมัติลูกทีม
        goESS={() => setPage('ess')}
      />
    )
  }

  /* =========================
     fallback (กันหน้าขาว)
  ========================= */
  return (
    <div style={{ padding: 40 }}>
      <h3>Loading...</h3>
      <p>role: {role}</p>
      <p>page: {page}</p>
    </div>
  )
}

export default App
