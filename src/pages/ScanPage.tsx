import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ScanPage: React.FC = () => {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(true);

  // ฟังก์ชันจำลองการสแกน QR สำเร็จ
  const handleScanSuccess = () => {
    setScanning(false);
    // หน่วงเวลาสักครู่แล้วกลับไปหน้าหลัก
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="scan-page">
      <div className="scan-page-header">
        <h1 className="scan-page-title">สแกน QR Code</h1>
        <p className="scan-page-subtitle">
          นำกล้องส่องไปที่ QR Code บนเครื่องชาร์จเพื่อเริ่มใช้งาน
        </p>
      </div>

      <div className="scan-area">
        {scanning ? (
          <>
            {/* กรอบสแกน */}
            <div className="scan-frame">
              <div className="scan-line"></div>
            </div>

            {/* ปุ่มจำลองการสแกนสำเร็จ */}
            <button
              style={{
                position: "absolute",
                bottom: "20px",
                padding: "10px 16px",
                background: "rgba(255, 255, 255, 0.2)",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontSize: "14px",
              }}
              onClick={handleScanSuccess}
            >
              จำลองการสแกนสำเร็จ
            </button>
          </>
        ) : (
          <div className="scan-result">
            <div className="success-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>
              สแกนสำเร็จ!
            </h2>
            <p style={{ fontSize: "14px", opacity: 0.7 }}>
              กำลังนำคุณไปยังหน้าหลัก...
            </p>
          </div>
        )}
      </div>

      <div style={{ padding: "0 16px 16px" }}>
        <button className="scan-close-button" onClick={() => navigate(-1)}>
          ปิดกล้อง
        </button>
      </div>
    </div>
  );
};

export default ScanPage;
