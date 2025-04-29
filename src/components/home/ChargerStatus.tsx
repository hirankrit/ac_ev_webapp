// ปรับปรุงไฟล์ ChargerStatus.tsx
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
    <div
      className="charger-status"
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        margin: "12px 16px",
        padding: "12px", // ลด padding จาก 16px เป็น 12px
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* แถวแรก: แสดงสถานะและประเภทหัวชาร์จ */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // เพิ่ม space-between เพื่อให้ข้อมูลกระจายสองด้าน
          marginBottom: "6px", // ลดจาก 12px เป็น 6px
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            className={`status-indicator ${statusClass}`}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              marginRight: "8px",
              backgroundColor:
                statusClass === "available"
                  ? "#4caf50"
                  : statusClass === "in-use"
                  ? "#ffc107"
                  : "#f44336",
            }}
          ></div>
          <span
            style={{
              fontSize: "15px", // ลดขนาดตัวอักษรลงเล็กน้อย
              fontWeight: "600",
            }}
          >
            {statusText}
          </span>
        </div>
        <div
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#333",
          }}
        >
          {chargerInfo.chargerType.toUpperCase()} {/* Type 2 */}
        </div>
      </div>

      {/* แถวที่สอง: แสดงอัตราการชาร์จและราคา */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", // แบ่งพื้นที่เท่ากัน
          fontSize: "13px",
          color: "#666",
          background: "#f5f7f9",
          padding: "8px 10px",
          borderRadius: "8px",
        }}
      >
        <div>
          <span style={{ fontWeight: "400" }}>อัตราการชาร์จ: </span>
          <span style={{ fontWeight: "600", color: "#333" }}>
            {chargerInfo.maxPower} kW
          </span>
        </div>
        <div>
          <span style={{ fontWeight: "400" }}>ราคา: </span>
          <span style={{ fontWeight: "600", color: "#333" }}>
            {chargerInfo.pricePerUnit} บาท/หน่วย
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChargerStatus;
