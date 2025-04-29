import React from "react";
import { ChargerInfo } from "../../types";

interface GetStartedSectionProps {
  chargerInfo: ChargerInfo;
  userBalance: number;
}

const GetStartedSection: React.FC<GetStartedSectionProps> = ({
  chargerInfo,
  userBalance,
}) => {
  // คำนวณระยะเวลาโดยประมาณที่สามารถชาร์จได้
  const estimateChargingTime = () => {
    // สมมติว่ารถใช้ไฟ 7 kW โดยเฉลี่ย
    const averagePowerUsage = 7; // kW

    // คำนวณจำนวนหน่วยที่ใช้ได้ (kWh)
    const estimatedUnits = userBalance / chargerInfo.pricePerUnit;

    // คำนวณเวลาโดยประมาณเป็นชั่วโมง
    const estimatedHours = estimatedUnits / averagePowerUsage;

    // แปลงเป็นชั่วโมงและนาที
    const hours = Math.floor(estimatedHours);
    const minutes = Math.floor((estimatedHours - hours) * 60);

    return { hours, minutes };
  };

  const { hours, minutes } = estimateChargingTime();

  return (
    <div className="start-card">
      <h2 className="card-title">พร้อมชาร์จแล้ว!</h2>

      <div className="balance-card">
        <div className="balance-row">
          <span className="balance-label">ยอดเงินคงเหลือ</span>
          <span className="balance-value large">{userBalance} บาท</span>
        </div>

        <div className="balance-row">
          <span className="balance-label">ชาร์จได้ประมาณ</span>
          <span className="balance-value">
            {hours > 0 ? `${hours} ชั่วโมง ` : ""}
            {minutes > 0 ? `${minutes} นาที` : ""}
          </span>
        </div>
      </div>

      <button className="button">เริ่มชาร์จเลย</button>

      <div style={{ marginTop: "16px", textAlign: "center" }}>
        <p style={{ fontSize: "13px", color: "#666" }}>
          เสียบสาย Type 2 เข้ากับเครื่องชาร์จและรถของคุณ
        </p>
      </div>
    </div>
  );
};

export default GetStartedSection;
