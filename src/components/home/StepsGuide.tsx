import React from "react";

const StepsGuide: React.FC = () => {
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#e8f0fe",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
              color: "#3f51b5",
              fontWeight: "bold",
              fontSize: "18px",
            }}
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#e8f0fe",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
              color: "#3f51b5",
              fontWeight: "bold",
              fontSize: "18px",
            }}
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#e8f0fe",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
              color: "#3f51b5",
              fontWeight: "bold",
              fontSize: "18px",
            }}
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
