// แก้ไขไฟล์ StepsGuide.tsx
import React from "react";

// เพิ่ม props isRegistered, activeStep และ onStepClick
interface StepsGuideProps {
  isRegistered: boolean;
  activeStep?: number | null;
  onStepClick?: (step: number) => void;
}

const StepsGuide: React.FC<StepsGuideProps> = ({
  isRegistered,
  activeStep = null,
  onStepClick = () => {},
}) => {
  // กำหนดสีตามสถานะการลงทะเบียนและขั้นตอนที่กำลังแสดง
  const getStepStyle = (step: number) => {
    let color, bgColor;
    const isActive = activeStep === step;

    if (step === 1) {
      // ขั้นตอนที่ 1: ลงทะเบียน
      if (isRegistered) {
        color = "#4caf50"; // เขียว
        bgColor = "#e8f5e9"; // พื้นหลังเขียวอ่อน
      } else {
        color = isActive ? "#ff5722" : "#ff9800"; // ส้มเข้มถ้าเป็น active, ไม่งั้นส้มปกติ
        bgColor = isActive ? "#ffccbc" : "#fff3e0"; // พื้นหลังส้มอ่อน
      }
    } else if (step === 2) {
      // ขั้นตอนที่ 2: เติมเงิน
      if (isRegistered && !isActive) {
        color = "#ff9800"; // ส้ม
        bgColor = "#fff3e0"; // พื้นหลังส้มอ่อน
      } else if (isActive) {
        color = "#ff5722"; // ส้มเข้ม
        bgColor = "#ffccbc"; // พื้นหลังส้มอ่อนเข้ม
      } else {
        color = "#3f51b5"; // น้ำเงิน (ค่าเริ่มต้น)
        bgColor = "#e8f0fe"; // พื้นหลังน้ำเงินอ่อน (ค่าเริ่มต้น)
      }
    } else {
      // ขั้นตอนที่ 3: เริ่มชาร์จ
      if (isActive) {
        color = "#ff5722"; // ส้มเข้ม
        bgColor = "#ffccbc"; // พื้นหลังส้มอ่อนเข้ม
      } else {
        color = "#3f51b5"; // น้ำเงิน (ค่าเริ่มต้น)
        bgColor = "#e8f0fe"; // พื้นหลังน้ำเงินอ่อน (ค่าเริ่มต้น)
      }
    }

    return {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: bgColor,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "10px",
      color: color,
      fontWeight: "bold",
      fontSize: "18px",
      cursor: "pointer", // เพิ่ม cursor เป็น pointer เพื่อให้รู้ว่ากดได้
      boxShadow: isActive ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none", // เพิ่มเงาเมื่อเป็น active
      transform: isActive ? "scale(1.1)" : "scale(1)", // ขยายเล็กน้อยเมื่อเป็น active
      transition: "all 0.3s ease", // เพิ่ม animation เมื่อเปลี่ยนสถานะ
    };
  };

  return (
    <div
      className="steps-card"
      style={{
        maxWidth: "320px",
        margin: "16px auto",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <h2
        className="card-title"
        style={{
          marginBottom: "20px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        วิธีการใช้งานง่ายๆ
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 10px",
        }}
      >
        {/* Step 1: ลงทะเบียน - ปรับให้คลิกได้ */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
          }}
        >
          <div
            style={getStepStyle(1)}
            onClick={() => onStepClick(1)}
            title="คลิกเพื่อดูขั้นตอนการลงทะเบียน"
          >
            1
          </div>
          <p style={{ fontSize: "14px", color: "#666", marginTop: "5px" }}>
            ลงทะเบียน
          </p>
        </div>

        <div
          style={{
            width: "40px",
            height: "2px",
            backgroundColor: "#e0e0e0",
            margin: "0 -5px 40px 0",
          }}
        ></div>

        {/* Step 2: เติมเงิน - ปรับให้คลิกได้ */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
          }}
        >
          <div
            style={getStepStyle(2)}
            onClick={() => onStepClick(2)}
            title="คลิกเพื่อดูขั้นตอนการเติมเงิน"
          >
            2
          </div>
          <p style={{ fontSize: "14px", color: "#666", marginTop: "5px" }}>
            เติมเงิน
          </p>
        </div>

        <div
          style={{
            width: "40px",
            height: "2px",
            backgroundColor: "#e0e0e0",
            margin: "0 0 40px -5px",
          }}
        ></div>

        {/* Step 3: เริ่มชาร์จ - ปรับให้คลิกได้ */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
          }}
        >
          <div
            style={getStepStyle(3)}
            onClick={() => onStepClick(3)}
            title="คลิกเพื่อดูขั้นตอนการเริ่มชาร์จ"
          >
            3
          </div>
          <p style={{ fontSize: "14px", color: "#666", marginTop: "5px" }}>
            เริ่มชาร์จ
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepsGuide;
