function Request({ onBack }) {
  return (
    <div className="request-page">
      {/* Topbar */}
      <div className="topbar">
        <div className="logo">SF Plus Co.,Ltd.</div>
        <button className="btn-back" onClick={onBack}>
          ← กลับ
        </button>
      </div>

      <div className="request-wrapper">
        <h2 className="request-title">Request Leave</h2>
        <p className="request-subtitle">
          กรอกข้อมูลการลางาน
        </p>

        <div className="request-card">
          {/* row 1 */}
          <div className="form-grid">
            <div className="form-group">
              <label>ประเภทการลา</label>
              <select>
                <option>ลาป่วย</option>
                <option>ลากิจ</option>
                <option>ลาพักร้อน</option>
                <option>ลาโดยไม่รับค่าจ้าง</option>
                <option>Work From Home (WFH)</option>
              </select>
            </div>

            <div className="form-group">
              <label>จำนวนวันลา</label>
              <input type="number" placeholder="จำนวนวัน" />
            </div>
          </div>

          {/* row 2 */}
          <div className="form-grid">
            <div className="form-group">
              <label>วันที่เริ่มลา</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>วันที่สิ้นสุด</label>
              <input type="date" />
            </div>
          </div>

          {/* reason */}
          <div className="form-group">
            <label>เหตุผลการลา</label>
            <textarea rows="4" placeholder="กรุณาระบุเหตุผลการลา" />
          </div>

          {/* file */}
          <div className="form-group">
            <label>แนบเอกสาร (ถ้ามี)</label>
            <input type="file" />
          </div>

          {/* actions */}
          <div className="form-actions">
            <button className="btn-cancel">ยกเลิก</button>
            <button className="btn-submit">ส่งคำขอ</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Request
