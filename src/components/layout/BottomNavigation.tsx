import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const BottomNavigation: React.FC = () => {
  const location = useLocation();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "12px 0",
        backgroundColor: "white",
        width: "100%",
      }}
    >
      {/* Home Button */}
      <NavLink to="/" style={{ textDecoration: "none" }} end>
        {({ isActive }) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isActive ? "#3f51b5" : "none"}
              stroke={isActive ? "#3f51b5" : "#999"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "24px", height: "24px", marginBottom: "4px" }}
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <div
              style={{
                color: isActive ? "#3f51b5" : "#999",
                fontSize: "12px",
                fontWeight: isActive ? "bold" : "normal",
              }}
            >
              หน้าหลัก
            </div>
          </div>
        )}
      </NavLink>

      {/* History Button */}
      <NavLink to="/history" style={{ textDecoration: "none" }}>
        {({ isActive }) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isActive ? "#3f51b5" : "#999"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "24px", height: "24px", marginBottom: "4px" }}
            >
              <rect x="2" y="7" width="16" height="14" rx="2" ry="2" />
              <path d="M6 4V2" />
              <path d="M14 4V2" />
              <path d="M16 11H8" />
              <path d="M16 15H8" />
              <path d="M10 7v8" />
            </svg>
            <div
              style={{
                color: isActive ? "#3f51b5" : "#999",
                fontSize: "12px",
              }}
            >
              ประวัติ
            </div>
          </div>
        )}
      </NavLink>

      {/* Scan Button */}
      <NavLink to="/scan" style={{ textDecoration: "none" }}>
        {({ isActive }) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isActive ? "#3f51b5" : "#999"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "24px", height: "24px", marginBottom: "4px" }}
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <div
              style={{
                color: isActive ? "#3f51b5" : "#999",
                fontSize: "12px",
              }}
            >
              Scan
            </div>
          </div>
        )}
      </NavLink>

      {/* Charging Button */}
      <NavLink to="/charging" style={{ textDecoration: "none" }}>
        {({ isActive }) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isActive ? "#3f51b5" : "#999"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "24px", height: "24px", marginBottom: "4px" }}
            >
              <rect x="2" y="4" width="16" height="16" rx="2" ry="2" />
              <path d="M10 15V9l-3 4h4l-3 4V11" />
              <path d="M22 10L22 14" />
              <path d="M20 7v10" />
            </svg>
            <div
              style={{
                color: isActive ? "#3f51b5" : "#999",
                fontSize: "12px",
              }}
            >
              การชาร์จ
            </div>
          </div>
        )}
      </NavLink>

      {/* Payment Button */}
      <NavLink to="/wallet" style={{ textDecoration: "none" }}>
        {({ isActive }) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isActive ? "#3f51b5" : "#999"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "24px", height: "24px", marginBottom: "4px" }}
            >
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
            <div
              style={{
                color: isActive ? "#3f51b5" : "#999",
                fontSize: "12px",
              }}
            >
              ชำระเงิน
            </div>
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default BottomNavigation;
