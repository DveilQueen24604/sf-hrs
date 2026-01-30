function Dashboard({ goRequest, goApprove, goESS, onLogout }) {
  return (
    <div className="dashboard">
      {/* Topbar */}
      <div className="topbar">
        <div className="logo">SF Plus Co.,Ltd.</div>
        <div className="user-bar">
          <span>
            USER: สมชาย ใจดี
            <span className="divider"> | </span>
          </span>

          <button className="logout-link" onClick={onLogout}>
            ออกจากระบบ
          </button>
        </div>

      </div>

      <div className="dashboard-body">
        <div className="main-content">
          <h3 className="section-title">MODULE LIST</h3>

          <div className="module-list">
  <div className="module-card" onClick={goRequest}>
    Request
  </div>

  <div className="module-card" onClick={goApprove}>
    Approve
  </div>
  
<div className="module-card" onClick={goESS}>
  Employee Self Service
</div>

</div>



          <div className="announcement">
            <h3>NEW AND ANNOUNCEMENT</h3>
            <ul>
              <li>📌 แจ้งวันหยุดประจำปี 2569</li>
              <li>📌 นโยบายการลางานฉบับปรับปรุง</li>
            </ul>
          </div>
        </div>

        <div className="calendar-box">
          <h3>JANUARY 2026</h3>
          <div className="calendar-placeholder">
            Calendar Area
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Dashboard
