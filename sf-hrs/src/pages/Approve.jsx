function Approve({ role, onBack }) {
  console.log('Approve role =', role)

  return (
    <div className="approve-page">
      {/* ===== Topbar ===== */}
      {/* Topbar */}
      <div className="topbar">
        <div className="logo">SF Plus Co.,Ltd.</div>
        <button className="btn-back" onClick={onBack}>
          ← กลับ
        </button>
      </div>

      <div className="approve-container">
        <h2>Approve</h2>

        {/* ===== Search ===== */}
        <div className="approve-search">
          <input placeholder="ค้นหาเลขที่เอกสาร" />
          <input type="date" />
          <input type="date" />
          <button className="btn-search">Search</button>
        </div>

        {/* ===== พนักงาน (ดูสถานะอย่างเดียว) ===== */}
        {role === 'employee' && (
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
        )}

        {/* ===== หัวหน้างาน (อนุมัติได้) ===== */}
        {role === 'manager' && (
          <div className="approve-card">
            <div className="card-header">
              <h3>Full Day Leave | LV-2026-010</h3>
              <span className="status waiting">WAITING</span>
            </div>

            <div className="card-body">
              <p><b>ชื่อพนักงาน:</b> สมพร ใจดี</p>
              <p><b>ตำแหน่ง:</b> Accounting Officer</p>
              <p><b>ประเภทการลา:</b> ลาพักร้อน</p>
              <p><b>วันที่ลา:</b> 30/01/2026 (1 วัน)</p>

              <textarea
                className="comment-box"
                placeholder="Comment (สำหรับหัวหน้างาน)"
              />
            </div>

            <div className="card-actions">
              <button className="btn-approve">Approve</button>
              <button className="btn-reject">Disapprove</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Approve
