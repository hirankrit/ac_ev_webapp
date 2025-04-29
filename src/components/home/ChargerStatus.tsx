import React from "react";
import { ChargerInfo } from "../../types";

interface ChargerStatusProps {
  chargerInfo: ChargerInfo;
}

const ChargerStatus: React.FC<ChargerStatusProps> = ({ chargerInfo }) => {
  // กำหนดสีและข้อความตามสถานะ
  let statusClass = "";
  let statusText = "ไม่ทราบสถานะ";

  switch (chargerInfo.status) {
    case "available":
      statusClass = "available";
      statusText = "พร้อมให้บริการ";
      break;
    case "in-use":
      statusClass = "in-use";
      statusText = "กำลังใช้งาน";
      break;
    case "maintenance":
      statusClass = "maintenance";
      statusText = "อยู่ระหว่างซ่อมบำรุง";
      break;
  }

  return (
    <div className="charger-status">
      <div className="charger-status-header">
        <div className={`status-indicator ${statusClass}`}></div>
        <h2 className="status-text">{statusText}</h2>
      </div>

      <div className="charger-info-grid">
        <div className="charger-info-item">
          <div className="charger-info-label">ประเภทหัวชาร์จ</div>
          <div className="charger-info-value">{chargerInfo.chargerType}</div>
        </div>

        <div className="charger-info-item">
          <div className="charger-info-label">กำลังไฟสูงสุด</div>
          <div className="charger-info-value">{chargerInfo.maxPower} kW</div>
        </div>

        <div className="charger-info-item" style={{ gridColumn: "1 / span 2" }}>
          <div className="charger-info-label">อัตราค่าบริการ</div>
          <div className="charger-info-value">
            {chargerInfo.pricePerUnit} บาท/หน่วย
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargerStatus;
