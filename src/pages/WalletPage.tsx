import React, { useState } from "react";
import { User } from "../types";

interface WalletPageProps {
  user: User;
  onTopUp: (amount: number) => void;
}

const WalletPage: React.FC<WalletPageProps> = ({ user, onTopUp }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [showQR, setShowQR] = useState(false);

  // ตัวเลือกจำนวนเงินเติม
  const amountOptions = [100, 200, 500];

  // รายการประวัติการเติมเงิน (mock data)
  const topupHistory = [
    { id: 1, date: "28 เม.ย. 2025", amount: 200, status: "สำเร็จ" },
    { id: 2, date: "15 เม.ย. 2025", amount: 300, status: "สำเร็จ" },
  ];

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
    setSelectedAmount(null);
    setCustomAmount("");
  };

  return (
    <div className="wallet-page pb-20">
      <div className="bg-green-500 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold mb-2">กระเป๋าเงิน</h1>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">ยอดเงินคงเหลือ</p>
              <p className="text-3xl font-bold">{user.balance} บาท</p>
            </div>
            <button className="bg-white text-green-500 px-4 py-2 rounded-lg text-sm font-medium">
              ประวัติการใช้งาน
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        {!showQR ? (
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              เติมเงิน
            </h2>

            {/* ตัวเลือกจำนวนเงิน */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {amountOptions.map((amount) => (
                <button
                  key={amount}
                  className={`p-3 rounded-lg border text-center ${
                    selectedAmount === amount
                      ? "border-green-500 bg-green-50 text-green-600"
                      : "border-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleSelectAmount(amount)}
                >
                  {amount} บาท
                </button>
              ))}
            </div>

            {/* กรอกจำนวนเงินเอง */}
            <div className="mb-4">
              <label
                htmlFor="customAmount"
                className="block text-sm text-gray-600 mb-1"
              >
                ระบุจำนวนเงิน (ขั้นต่ำ 20 บาท)
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <span className="bg-gray-100 px-3 py-2 text-gray-600">฿</span>
                <input
                  type="text"
                  id="customAmount"
                  className="flex-1 p-2 focus:outline-none"
                  placeholder="0"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                />
                <span className="bg-gray-100 px-3 py-2 text-gray-600">บาท</span>
              </div>
            </div>

            {/* ปุ่มแสดง QR */}
            <button
              className={`w-full p-3 rounded-lg text-white ${
                selectedAmount || (customAmount && parseInt(customAmount) >= 20)
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              onClick={handleShowQR}
              disabled={
                !selectedAmount &&
                (!customAmount || parseInt(customAmount) < 20)
              }
            >
              แสดง QR Code สำหรับชำระเงิน
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <div className="text-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                สแกน QR Code เพื่อชำระเงิน
              </h2>
              <p className="font-semibold text-lg text-gray-800 mb-4">
                {selectedAmount || customAmount} บาท
              </p>

              {/* จำลอง QR Code */}
              <div className="w-48 h-48 bg-gray-200 mx-auto mb-4 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                  />
                </svg>
              </div>

              <p className="text-sm text-gray-500 mb-4">
                เมื่อชำระเงินแล้ว ระบบจะปรับยอดเงินอัตโนมัติ
              </p>
            </div>

            <div className="flex justify-between">
              <button
                className="text-gray-500"
                onClick={() => setShowQR(false)}
              >
                ย้อนกลับ
              </button>

              {/* ปุ่มนี้สำหรับจำลองการชำระเงินสำเร็จ */}
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                onClick={handlePaymentSuccess}
              >
                จำลองการชำระเงินสำเร็จ
              </button>
            </div>
          </div>
        )}

        {/* ประวัติการเติมเงิน */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            ประวัติการเติมเงิน
          </h2>

          {topupHistory.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {topupHistory.map((item) => (
                <div
                  key={item.id}
                  className="py-3 flex justify-between items-center"
                >
                  <div>
                    <p className="text-gray-800 font-medium">
                      {item.amount} บาท
                    </p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                  <span className="text-sm text-green-500 font-medium">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">
              ยังไม่มีประวัติการเติมเงิน
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
