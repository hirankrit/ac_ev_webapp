import React, { useState } from "react";
import { User } from "../types";

interface ProfilePageProps {
  user: User;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
  const [profileComplete, setProfileComplete] = useState(false);

  // ข้อมูลรถ (mock data)
  const [carInfo, setCarInfo] = useState({
    brand: "",
    model: "",
    licensePlate: "",
    batteryCapacity: "",
  });

  // จัดการบันทึกข้อมูลรถ
  const handleSaveCarInfo = () => {
    // ในการใช้งานจริงควรมีการตรวจสอบข้อมูล
    setProfileComplete(true);
  };

  return (
    <div className="profile-page pb-20">
      <div className="bg-purple-500 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold mb-2">โปรไฟล์</h1>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center text-purple-700 font-bold text-xl mr-3">
              {user.name
                ? user.name.charAt(0).toUpperCase()
                : user.phoneNumber
                ? user.phoneNumber.substring(0, 2)
                : "?"}
            </div>
            <div>
              <p className="font-medium">{user.name || "ผู้ใช้งาน"}</p>
              <p className="text-sm opacity-80">
                {user.phoneNumber || "ยังไม่ได้ระบุเบอร์โทรศัพท์"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        {/* ข้อมูลผู้ใช้ */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            ข้อมูลส่วนตัว
          </h2>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">
              ชื่อ-นามสกุล
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
              placeholder="ระบุชื่อ-นามสกุล"
              defaultValue={user.name || ""}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">
              เบอร์โทรศัพท์
            </label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 bg-gray-50"
              value={user.phoneNumber || ""}
              readOnly
            />
            <p className="text-xs text-gray-500 mt-1">
              เบอร์โทรศัพท์ไม่สามารถแก้ไขได้
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">อีเมล</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
              placeholder="ระบุอีเมล (ไม่บังคับ)"
            />
          </div>

          <button className="w-full bg-purple-500 text-white py-2 rounded-lg font-medium hover:bg-purple-600 transition-colors">
            บันทึกข้อมูลส่วนตัว
          </button>
        </div>

        {/* ข้อมูลรถยนต์ */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            ข้อมูลรถยนต์ไฟฟ้า
          </h2>

          {!profileComplete ? (
            <>
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1">
                  ยี่ห้อรถ
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  value={carInfo.brand}
                  onChange={(e) =>
                    setCarInfo({ ...carInfo, brand: e.target.value })
                  }
                >
                  <option value="">เลือกยี่ห้อรถ</option>
                  <option value="tesla">Tesla</option>
                  <option value="byd">BYD</option>
                  <option value="mg">MG</option>
                  <option value="other">อื่นๆ</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1">
                  รุ่นรถ
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="ระบุรุ่นรถ"
                  value={carInfo.model}
                  onChange={(e) =>
                    setCarInfo({ ...carInfo, model: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1">
                  ทะเบียนรถ
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="ระบุทะเบียนรถ"
                  value={carInfo.licensePlate}
                  onChange={(e) =>
                    setCarInfo({ ...carInfo, licensePlate: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1">
                  ความจุแบตเตอรี่ (kWh)
                </label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="ระบุความจุแบตเตอรี่"
                  value={carInfo.batteryCapacity}
                  onChange={(e) =>
                    setCarInfo({ ...carInfo, batteryCapacity: e.target.value })
                  }
                />
              </div>

              <button
                className="w-full bg-purple-500 text-white py-2 rounded-lg font-medium hover:bg-purple-600 transition-colors"
                onClick={handleSaveCarInfo}
              >
                บันทึกข้อมูลรถยนต์
              </button>
            </>
          ) : (
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">ยี่ห้อและรุ่น</span>
                <span className="font-medium text-gray-800">
                  {carInfo.brand} {carInfo.model}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">ทะเบียนรถ</span>
                <span className="font-medium text-gray-800">
                  {carInfo.licensePlate}
                </span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">ความจุแบตเตอรี่</span>
                <span className="font-medium text-gray-800">
                  {carInfo.batteryCapacity} kWh
                </span>
              </div>

              <button className="text-purple-500 text-sm">แก้ไขข้อมูล</button>
            </div>
          )}
        </div>

        {/* การตั้งค่า */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            การตั้งค่า
          </h2>

          <div className="divide-y divide-gray-100">
            <div className="py-3 flex justify-between items-center">
              <span className="text-gray-800">การแจ้งเตือน</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>

            <div className="py-3 flex justify-between items-center">
              <span className="text-gray-800">โหมดกลางคืน</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>

            <div className="py-3 flex justify-between items-center">
              <span className="text-gray-800">ภาษา</span>
              <div className="flex items-center">
                <span className="text-gray-500 text-sm mr-2">ไทย</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ช่วยเหลือและออกจากระบบ */}
        <div className="space-y-2">
          <button className="w-full p-3 text-left bg-white rounded-lg shadow-sm text-gray-800 flex justify-between items-center">
            <span>ช่วยเหลือ</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <button className="w-full p-3 text-left bg-white rounded-lg shadow-sm text-gray-800 flex justify-between items-center">
            <span>เงื่อนไขและข้อตกลง</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <button className="w-full p-3 text-left rounded-lg border border-red-500 text-red-500">
            ออกจากระบบ
          </button>
        </div>
      </div>
    </div>
  );
};

// สไตล์สำหรับ switch toggle
const styles = `
  .switch {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 24px;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: #9333ea;
  }
  
  input:checked + .slider:before {
    transform: translateX(20px);
  }
  
  .slider.round {
    border-radius: 24px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
`;

// เพิ่ม style ลงใน document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default ProfilePage;
