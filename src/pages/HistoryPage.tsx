import React, { useState } from "react";
import { HomePageProps } from "../types";

// จำลองข้อมูลประวัติการชาร์จ
const mockChargingHistory = [
  {
    id: 1,
    date: "28 เม.ย. 2025",
    location: "อาคารจอดรถมหาวิทยาลัย ABC",
    chargerId: "A001",
    duration: "2 ชั่วโมง 15 นาที",
    energy: 14.3,
    amount: 71.5,
  },
  {
    id: 2,
    date: "25 เม.ย. 2025",
    location: "โรงแรม XYZ",
    chargerId: "B007",
    duration: "1 ชั่วโมง 30 นาที",
    energy: 9.2,
    amount: 46,
  },
  {
    id: 3,
    date: "20 เม.ย. 2025",
    location: "อาคารจอดรถมหาวิทยาลัย ABC",
    chargerId: "A002",
    duration: "45 นาที",
    energy: 5.1,
    amount: 25.5,
  },
];

const HistoryPage: React.FC<HomePageProps> = ({ user }) => {
  const [history] = useState(mockChargingHistory);
  const [activeTab, setActiveTab] = useState<"list" | "stats">("list");
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  // สลับการแสดงรายละเอียดของรายการ
  const toggleDetails = (id: number) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };

  return (
    <div className="history-page" style={{ paddingBottom: "20px" }}>
      <div
        style={{
          background: "#3f51b5",
          padding: "16px",
          color: "white",
        }}
      >
        <div style={{ padding: "0 16px" }}>
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            ประวัติการใช้งาน
          </h1>

          {/* Tab switching */}
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <button
              style={{
                padding: "8px 16px",
                background: "none",
                border: "none",
                color: activeTab === "list" ? "white" : "rgba(255,255,255,0.7)",
                borderBottom: activeTab === "list" ? "2px solid white" : "none",
                fontWeight: activeTab === "list" ? "bold" : "normal",
              }}
              onClick={() => setActiveTab("list")}
            >
              รายการ
            </button>
            <button
              style={{
                padding: "8px 16px",
                background: "none",
                border: "none",
                color:
                  activeTab === "stats" ? "white" : "rgba(255,255,255,0.7)",
                borderBottom:
                  activeTab === "stats" ? "2px solid white" : "none",
                fontWeight: activeTab === "stats" ? "bold" : "normal",
              }}
              onClick={() => setActiveTab("stats")}
            >
              สถิติ
            </button>
          </div>
        </div>
      </div>

      <div style={{ padding: "16px" }}>
        {activeTab === "list" ? (
          <>
            {/* ฟิลเตอร์ */}
            <div
              style={{
                background: "white",
                borderRadius: "8px",
                padding: "16px",
                marginBottom: "16px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <label
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    กรองตามช่วงเวลา
                  </label>
                  <select
                    style={{
                      padding: "8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: "14px",
                      width: "120px",
                    }}
                  >
                    <option value="all">ทั้งหมด</option>
                    <option value="week">7 วันล่าสุด</option>
                    <option value="month">30 วันล่าสุด</option>
                    <option value="custom">กำหนดเอง</option>
                  </select>
                </div>
                <div>
                  <label
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    สถานที่
                  </label>
                  <select
                    style={{
                      padding: "8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: "14px",
                      width: "160px",
                    }}
                  >
                    <option value="all">ทั้งหมด</option>
                    <option value="university">มหาวิทยาลัย ABC</option>
                    <option value="hotel">โรงแรม XYZ</option>
                  </select>
                </div>
              </div>
            </div>

            {/* รายการประวัติการชาร์จ */}
            <div
              style={{
                background: "white",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              }}
            >
              {history.length > 0 ? (
                <div>
                  {history.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        padding: "16px",
                        borderBottom: "1px solid #f0f0f0",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleDetails(item.id)}
                      >
                        <div>
                          <p style={{ fontWeight: "bold", color: "#333" }}>
                            {item.location}
                          </p>
                          <p
                            style={{
                              fontSize: "12px",
                              color: "#888",
                              marginTop: "4px",
                            }}
                          >
                            {item.date}
                          </p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <p style={{ fontWeight: "bold", color: "#333" }}>
                            {item.amount} บาท
                          </p>
                          <p
                            style={{
                              fontSize: "12px",
                              color: "#888",
                              marginTop: "4px",
                            }}
                          >
                            {item.energy} kWh
                          </p>
                        </div>
                      </div>

                      {/* รายละเอียดเพิ่มเติม */}
                      {expandedItem === item.id && (
                        <div
                          style={{
                            marginTop: "16px",
                            paddingTop: "16px",
                            borderTop: "1px solid #f0f0f0",
                          }}
                        >
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr 1fr",
                              gap: "12px",
                              fontSize: "14px",
                            }}
                          >
                            <div>
                              <p style={{ color: "#666" }}>รหัสเครื่องชาร์จ</p>
                              <p style={{ fontWeight: "bold", color: "#333" }}>
                                {item.chargerId}
                              </p>
                            </div>
                            <div>
                              <p style={{ color: "#666" }}>ระยะเวลาชาร์จ</p>
                              <p style={{ fontWeight: "bold", color: "#333" }}>
                                {item.duration}
                              </p>
                            </div>
                            <div>
                              <p style={{ color: "#666" }}>พลังงานที่ใช้</p>
                              <p style={{ fontWeight: "bold", color: "#333" }}>
                                {item.energy} kWh
                              </p>
                            </div>
                            <div>
                              <p style={{ color: "#666" }}>ค่าใช้จ่าย</p>
                              <p style={{ fontWeight: "bold", color: "#333" }}>
                                {item.amount} บาท
                              </p>
                            </div>
                          </div>

                          <div
                            style={{
                              marginTop: "12px",
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <button
                              style={{
                                color: "#3f51b5",
                                fontSize: "14px",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                              }}
                            >
                              ดูใบเสร็จ
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  style={{
                    padding: "32px",
                    textAlign: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      width: "48px",
                      height: "48px",
                      color: "#ddd",
                      margin: "0 auto 16px",
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p style={{ color: "#666" }}>ยังไม่มีประวัติการชาร์จ</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <div
            style={{
              background: "white",
              borderRadius: "8px",
              padding: "16px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "16px",
              }}
            >
              สถิติการใช้งาน
            </h2>

            {/* จำลองกราฟสถิติ */}
            <div
              style={{
                height: "180px",
                background: "#f5f5f5",
                borderRadius: "8px",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ color: "#888" }}>กราฟแสดงการใช้ไฟฟ้ารายเดือน</p>
            </div>

            {/* สรุปสถิติ */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              <div
                style={{
                  background: "#f5f5f5",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                <p style={{ fontSize: "12px", color: "#666" }}>
                  การใช้ไฟฟ้าทั้งหมด
                </p>
                <p style={{ fontWeight: "bold", color: "#333" }}>28.6 kWh</p>
              </div>

              <div
                style={{
                  background: "#f5f5f5",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                <p style={{ fontSize: "12px", color: "#666" }}>
                  ค่าใช้จ่ายทั้งหมด
                </p>
                <p style={{ fontWeight: "bold", color: "#333" }}>143 บาท</p>
              </div>

              <div
                style={{
                  background: "#f5f5f5",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                <p style={{ fontSize: "12px", color: "#666" }}>
                  การชาร์จโดยเฉลี่ย
                </p>
                <p style={{ fontWeight: "bold", color: "#333" }}>
                  9.5 kWh/ครั้ง
                </p>
              </div>

              <div
                style={{
                  background: "#f5f5f5",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                <p style={{ fontSize: "12px", color: "#666" }}>
                  จำนวนครั้งการชาร์จ
                </p>
                <p style={{ fontWeight: "bold", color: "#333" }}>3 ครั้ง</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
