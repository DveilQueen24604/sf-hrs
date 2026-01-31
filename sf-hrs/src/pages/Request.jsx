import { useState } from 'react'
import { supabase } from '../supabase'

function Request({ onBack }) {
  const [leaveType, setLeaveType] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [days, setDays] = useState('')
  const [reason, setReason] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async () => {
    console.log('CLICK SUBMIT')
    setError('')
    setSuccess('')

    if (!leaveType || !startDate || !endDate) {
      setError('กรุณากรอกข้อมูลให้ครบ')
      return
    }

    const { data, error } = await supabase
  .from('leave_requests')
  .insert([
    {
      employee_name: 'สมชาย ใจดี',
      leave_type: leaveType,
      start_date: startDate,
      end_date: endDate,
      reason: reason,
      status: 'WAITING',
    },
  ])
  .select()

console.log('DATA:', data)
console.log('ERROR:', error)


    if (error) {
      console.error(error)
      setError('บันทึกข้อมูลไม่สำเร็จ')
      return
    }

    setSuccess('ส่งใบลาเรียบร้อยแล้ว ✅')

    // reset form
    setLeaveType('')
    setStartDate('')
    setEndDate('')
    setDays('')
    setReason('')
  }

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
        <p className="request-subtitle">กรอกข้อมูลการลางาน</p>

        <div className="request-card">
          {/* row 1 */}
          <div className="form-grid">
            <div className="form-group">
              <label>ประเภทการลา</label>
              <select
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value)}
              >
                <option value="">เลือกประเภทลา</option>
                <option value="ลาป่วย">ลาป่วย</option>
                <option value="ลากิจ">ลากิจ</option>
                <option value="ลาพักร้อน">ลาพักร้อน</option>
                <option value="ลาโดยไม่มีค่าจ้าง">ลาโดยไม่มีค่าจ้าง</option>
                <option value="WFH">Work From Home (WFH)</option>
              </select>
            </div>

            <div className="form-group">
              <label>จำนวนวันลา</label>
              <input
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />
            </div>
          </div>

          {/* row 2 */}
          <div className="form-grid">
            <div className="form-group">
              <label>วันที่เริ่มลา</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>วันที่สิ้นสุด</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          {/* reason */}
          <div className="form-group">
            <label>เหตุผลการลา</label>
            <textarea
              rows="4"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>

          {/* messages */}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}

          {/* actions */}
          <div className="form-actions">
            <button className="btn-cancel" onClick={onBack}>
              ยกเลิก
            </button>

            <button className="btn-submit" onClick={handleSubmit}>
              ส่งคำขอ
            </button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Request
