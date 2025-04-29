import React, { useState } from "react";

interface QuickRegistrationProps {
  onRegister: (phoneNumber: string) => void;
}

const QuickRegistration: React.FC<QuickRegistrationProps> = ({
  onRegister,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  // ตรวจสอบหมายเลขโทรศัพท์
  const validatePhoneNumber = (phone: string) => {
    // ตรวจสอบว่าเป็นตัวเลข 10 หลัก
    return /^[0-9]{10}$/.test(phone);
  };

  // ส่ง OTP (mock)
  const handleSendOTP = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      setError("กรุณากรอกเบอร์โทรศัพท์ 10 หลัก");
      return;
    }

    setError("");
    setOtpSent(true);
    // ในโปรดักชัน ควรส่ง OTP จริงๆ ที่นี่
  };

  // ยืนยัน OTP และลงทะเบียน
  const handleVerifyOTP = () => {
    if (otp.length !== 6) {
      setError("กรุณากรอกรหัส OTP 6 หลัก");
      return;
    }

    // ในโปรดักชัน ควรตรวจสอบ OTP จริงๆ
    // ที่นี่เราจะ mock การยืนยันสำเร็จ
    setError("");
    onRegister(phoneNumber);
  };

  return (
    <div
      className="registration-card"
      style={{
        textAlign: "center",
        maxWidth: "320px",
        margin: "0 auto",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 className="card-title" style={{ marginBottom: "16px" }}>
        ลงทะเบียนใช้งาน
      </h2>

      {!otpSent ? (
        <>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "24px" }}>
            ลงทะเบียนครั้งเดียว ใช้ได้ทุกเครื่อง
          </p>

          <div className="input-group" style={{ marginBottom: "24px" }}>
            <label
              htmlFor="phoneNumber"
              className="input-label"
              style={{
                textAlign: "left",
                display: "block",
                marginBottom: "8px",
              }}
            >
              หมายเลขโทรศัพท์
            </label>
            <div style={{ display: "flex" }}>
              <input
                type="tel"
                id="phoneNumber"
                className="input-field"
                style={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  flex: 1,
                  padding: "12px",
                  fontSize: "15px",
                }}
                placeholder="0812345678"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <button
                className="button"
                style={{
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  width: "auto",
                  whiteSpace: "nowrap",
                  padding: "12px 16px",
                  fontWeight: "bold",
                }}
                onClick={handleSendOTP}
              >
                ส่งรหัส OTP
              </button>
            </div>
            {error && (
              <p
                style={{
                  color: "#f44336",
                  fontSize: "12px",
                  marginTop: "8px",
                  textAlign: "left",
                }}
              >
                {error}
              </p>
            )}
          </div>
        </>
      ) : (
        <>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "24px" }}>
            กรุณากรอกรหัส OTP ที่ส่งไปยัง {phoneNumber}
          </p>

          <div className="input-group" style={{ marginBottom: "24px" }}>
            <label
              htmlFor="otp"
              className="input-label"
              style={{
                textAlign: "left",
                display: "block",
                marginBottom: "8px",
              }}
            >
              รหัส OTP
            </label>
            <input
              type="text"
              id="otp"
              className="input-field"
              style={{ padding: "12px", fontSize: "15px" }}
              placeholder="123456"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            {error && (
              <p
                style={{
                  color: "#f44336",
                  fontSize: "12px",
                  marginTop: "8px",
                  textAlign: "left",
                }}
              >
                {error}
              </p>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button
              className="button secondary"
              style={{ width: "auto", padding: "10px 16px" }}
              onClick={() => setOtpSent(false)}
            >
              แก้ไขเบอร์โทรศัพท์
            </button>

            <button
              className="button"
              style={{
                width: "auto",
                padding: "10px 16px",
                fontWeight: "bold",
              }}
              onClick={handleVerifyOTP}
            >
              ยืนยัน
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default QuickRegistration;
