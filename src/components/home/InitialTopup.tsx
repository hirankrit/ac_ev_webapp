import React, { useState } from "react";

interface InitialTopupProps {
  onTopUp: (amount: number) => void;
}

const InitialTopup: React.FC<InitialTopupProps> = ({ onTopUp }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [showQR, setShowQR] = useState(false);

  // ตัวเลือกจำนวนเงินเติม
  const amountOptions = [100, 200, 500];

  // จัดการเลือกจำนวนเงิน
  const handleSelectAmount = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  // จัดการกรอกจำนวนเงินเอง
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // อนุญาตให้กรอกได้เฉพาะตัวเลข
    if (/^\d*$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  // แสดง QR Code สำหรับชำระเงิน
  const handleShowQR = () => {
    if (selectedAmount || (customAmount && parseInt(customAmount) >= 20)) {
      setShowQR(true);
    }
  };

  // จำลองการชำระเงินสำเร็จ
  const handlePaymentSuccess = () => {
    const amount = selectedAmount || parseInt(customAmount);
    onTopUp(amount);
    setShowQR(false);
  };

  return (
    <div className="topup-card">
      <h2 className="card-title">เติมเงินเพื่อเริ่มใช้งาน</h2>

      {!showQR ? (
        <>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "16px" }}>
            เงินที่เหลือจะเก็บไว้ในระบบสำหรับการใช้งานครั้งต่อไป
          </p>

          {/* ตัวเลือกจำนวนเงิน */}
          <div className="amount-grid">
            {amountOptions.map((amount) => (
              <div
                key={amount}
                className={`amount-button ${
                  selectedAmount === amount ? "active" : ""
                }`}
                onClick={() => handleSelectAmount(amount)}
              >
                {amount} บาท
              </div>
            ))}
          </div>

          {/* กรอกจำนวนเงินเอง */}
          <div className="input-group">
            <label htmlFor="customAmount" className="input-label">
              ระบุจำนวนเงิน (ขั้นต่ำ 20 บาท)
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "#f5f5f5",
                  padding: "10px 12px",
                  color: "#666",
                }}
              >
                ฿
              </div>
              <input
                type="text"
                id="customAmount"
                style={{
                  border: "none",
                  padding: "10px 12px",
                  flex: 1,
                  outline: "none",
                }}
                placeholder="0"
                value={customAmount}
                onChange={handleCustomAmountChange}
              />
              <div
                style={{
                  background: "#f5f5f5",
                  padding: "10px 12px",
                  color: "#666",
                }}
              >
                บาท
              </div>
            </div>
          </div>

          {/* ปุ่มแสดง QR */}
          <button
            className={`button ${
              selectedAmount || (customAmount && parseInt(customAmount) >= 20)
                ? ""
                : "secondary"
            }`}
            onClick={handleShowQR}
            disabled={
              !selectedAmount && (!customAmount || parseInt(customAmount) < 20)
            }
            style={{
              opacity:
                selectedAmount || (customAmount && parseInt(customAmount) >= 20)
                  ? 1
                  : 0.7,
              cursor:
                selectedAmount || (customAmount && parseInt(customAmount) >= 20)
                  ? "pointer"
                  : "not-allowed",
            }}
          >
            แสดง QR Code สำหรับชำระเงิน
          </button>
        </>
      ) : (
        <>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}>
              สแกน QR Code เพื่อชำระเงิน
            </p>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "16px",
              }}
            >
              {selectedAmount || customAmount} บาท
            </p>

            {/* จำลอง QR Code */}
            <div className="qr-container">
              <div className="qr-code">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
            </div>

            <p style={{ fontSize: "13px", color: "#666", margin: "16px 0" }}>
              เมื่อชำระเงินแล้ว ระบบจะปรับยอดเงินอัตโนมัติ
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              className="button secondary"
              style={{ width: "auto" }}
              onClick={() => setShowQR(false)}
            >
              ย้อนกลับ
            </button>

            {/* ปุ่มนี้สำหรับจำลองการชำระเงินสำเร็จ */}
            <button
              className="button"
              style={{ width: "auto" }}
              onClick={handlePaymentSuccess}
            >
              จำลองการชำระเงินสำเร็จ
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default InitialTopup;
