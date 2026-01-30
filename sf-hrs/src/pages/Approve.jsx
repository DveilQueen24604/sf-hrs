function Approve({ role, onBack }) {
  return (
    <div className="request-page">
      
      {/* ===== Topbar เหมือน Request ===== */}
      <div className="topbar">
        <div className="topbar-left">
          SF Plus Co.,Ltd.
        </div>

        <button className="topbar-back" onClick={onBack}>
          ← กลับ
        </button>
      </div>

      {/* ===== Content ===== */}
      <div className="request-wrapper">
        <h2 className="request-title">Approve</h2>
        <p className="request-subtitle">รายการขออนุมัติการลา</p>

        {/* Search */}
        <div className="approve-search">
          <input placeholder="ค้นหาเลขที่เอกสาร" />
          <input type="date" />
          <input type="date" />
          <button className="btn-search">Search</button>
        </div>

        {/* Card */}
        <div className="approve-card">
          <div className="card-header">
            <h3>Full Day Leave | LV-2026-010</h3>
            <span className="status waiting">WAITING</span>
          </div>

          <div className="card-body">
            <p><b>ประเภทการลา:</b> ลาพักร้อน</p>
            <p><b>วันที่ลา:</b> 30/01/2026 (1 วัน)</p>
            <p><b>สถานะ:</b> รอหัวหน้างานอนุมัติ</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Approve
