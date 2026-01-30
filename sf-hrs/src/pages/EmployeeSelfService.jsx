function EmployeeSelfService({ onBack }) {
  return (
    <div className="ess-page">
      {/* Topbar */}
      <div className="topbar">
        <div className="logo">SF Plus Co.,Ltd.</div>
        <button className="btn-back" onClick={onBack}>
          ← กลับ
        </button>
      </div>

      <div className="ess-wrapper">
        <h2 className="ess-title">Employee Self Service</h2>
        <p className="ess-subtitle">
          ข้อมูลส่วนตัว
        </p>

        {/* Profile Card */}
        <div className="ess-card profile-card">
          <div className="profile-left">
            <div className="avatar">👤</div>
          </div>

          <div className="profile-right">
            <div className="profile-item">
              <span>รหัสพนักงาน</span>
              <b>EMP-001</b>
            </div>
            <div className="profile-item">
              <span>ชื่อ-นามสกุล</span>
              <b>สมชาย ใจดี</b>
            </div>
            <div className="profile-item">
              <span>ตำแหน่ง</span>
              <b>Senior Graphic Designer</b>
            </div>
            <div className="profile-item">
              <span>แผนก</span>
              <b>Creative Production</b>
            </div>
            <div className="profile-item">
              <span>สถานะ</span>
              <span className="badge active">Active</span>
            </div>
          </div>
        </div>

        {/* Leave Summary */}
        <div className="ess-grid">
          <div className="ess-card stat blue">
            <h3>ลาพักร้อน</h3>
            <p>คงเหลือ</p>
            <b>8 วัน</b>
          </div>

          <div className="ess-card stat green">
            <h3>ลาป่วย</h3>
            <p>ใช้ไป</p>
            <b>2 วัน</b>
          </div>

          <div className="ess-card stat purple">
            <h3>ลากิจ</h3>
            <p>คงเหลือ</p>
            <b>3 วัน</b>
          </div>

          <div className="ess-card stat orange">
            <h3>OT สะสม</h3>
            <p>ชั่วโมง</p>
            <b>12 ชม.</b>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeSelfService
