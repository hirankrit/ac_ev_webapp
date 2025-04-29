import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import ScanPage from "./pages/ScanPage";
import WalletPage from "./pages/WalletPage";
import ProfilePage from "./pages/ProfilePage";
import BottomNavigation from "./components/layout/BottomNavigation";
import { User, ChargerInfo } from "./types";
import "./styles.css";

// Mock data สำหรับการทดสอบ
const mockUser: User = {
  balance: 0,
  isRegistered: false,
  phoneNumber: undefined,
};

const mockChargerInfo: ChargerInfo = {
  id: "A001",
  name: "เครื่องชาร์จ A001",
  location: "อาคารจอดรถมหาวิทยาลัย ABC",
  status: "available", // อัปเดตเป็น literal type: 'available' | 'in-use' | 'maintenance'
  chargerType: "Type 2",
  maxPower: 22,
  pricePerUnit: 5,
};

export default function App() {
  const [user, setUser] = useState<User>(mockUser);
  const [chargerInfo, setChargerInfo] = useState<ChargerInfo>(mockChargerInfo);

  // ฟังก์ชันสำหรับการลงทะเบียนผู้ใช้
  const registerUser = (phoneNumber: string) => {
    setUser({
      ...user,
      phoneNumber,
      isRegistered: true,
    });
  };

  // ฟังก์ชันสำหรับเติมเงิน
  const topUp = (amount: number) => {
    setUser({
      ...user,
      balance: user.balance + amount,
    });
  };

  // สร้าง mock props สำหรับหน้าที่ยังไม่ได้พัฒนา
  const historyPageProps = {
    user,
    chargerInfo,
    onRegister: registerUser,
    onTopUp: topUp,
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <Router>
        <div
          style={{
            width: "360px",
            height: "740px",
            borderRadius: "24px",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ffffff",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <div style={{ flex: 1, overflow: "auto" }}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <HomePage
                      user={user}
                      chargerInfo={chargerInfo}
                      onRegister={registerUser}
                      onTopUp={topUp}
                    />
                  }
                />
                <Route
                  path="/history"
                  element={<HistoryPage {...historyPageProps} />}
                />
                <Route path="/scan" element={<ScanPage />} />
                <Route
                  path="/wallet"
                  element={<WalletPage user={user} onTopUp={topUp} />}
                />
                <Route path="/profile" element={<ProfilePage user={user} />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>

            {/* Footer with Navigation Bar */}
            <footer
              style={{
                borderTop: "1px solid #eeeeee",
                backgroundColor: "white",
              }}
            >
              <BottomNavigation />
            </footer>
          </div>
        </div>
      </Router>
    </div>
  );
}
