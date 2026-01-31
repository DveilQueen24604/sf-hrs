function ManagerDashboard({ goRequest, goApprove, goESS, onLogout, fullName }) {
  return (
    <div className="dashboard">
      {/* ===== Topbar ===== */}
      <div className="topbar">
        <div className="logo">SF Plus Co.,Ltd.</div>
        <div className="user-bar">
          <span>
            ROLE : Manager | {fullName || 'นายสมศักดิ์ หัวหน้าแผนก'}
            <span className="divider"> | </span>
          </span>

          <button className="logout-link" onClick={onLogout}>
            ออกจากระบบ
          </button>
        </div>
      </div>

      <div className="dashboard-body">
        {/* ===== Main Content ===== */}
        <div className="main-content">
          {/* ===== Module List ===== */}
          <h3 className="section-title">MODULE LIST</h3>
          <div className="module-list">
            <div className="module-card" onClick={goRequest}>
              Request<br />
              <span className="module-sub">ยื่นเอกสารการลา</span>
            </div>

            <div className="module-card highlight" onClick={goApprove}>
              Approve<br />
              <span className="module-sub">อนุมัติลูกทีม</span>
            </div>

            <div className="module-card" onClick={goESS}>
              Employee Self Service<br />
              <span className="module-sub">หน้าเว็บของฉัน</span>
            </div>
          </div>

          {/* ===== Summary (เหมือนพนักงาน แต่ข้อมูลระดับหัวหน้า) ===== */}
          <div className="summary-grid">
            <div className="summary-card red">
              <h4>รออนุมัติ</h4>
              <b>5 รายการ</b>
            </div>

            <div className="summary-card blue">
              <h4>การลาทั้งหมด (เดือนนี้)</h4>
              <b>12 รายการ</b>
            </div>

            <div className="summary-card green">
              <h4>จำนวนลูกทีม</h4>
              <b>8 คน</b>
            </div>
          </div>

          {/* ===== Announcement ===== */}
          <div className="announcement-card">
            <h3>NEW AND ANNOUNCEMENT</h3>
            <ul>
              <li>📌 แจ้งวันหยุดประจำปี 2569</li>
              <li>📌 นโยบายการลางานฉบับปรับปรุง</li>
            </ul>
          </div>
        </div>

        {/* ===== Calendar ===== */}
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

export default ManagerDashboard
