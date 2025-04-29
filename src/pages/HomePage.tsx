import React from 'react';
import { Link } from 'react-router-dom';
import ChargerStatus from '../components/home/ChargerStatus';
import QuickRegistration from '../components/home/QuickRegistration';
import InitialTopup from '../components/home/InitialTopup';
import GetStartedSection from '../components/home/GetStartedSection';
import StepsGuide from '../components/home/StepsGuide';
import { User, ChargerInfo } from '../types';

interface HomePageProps {
  user: User;
  chargerInfo: ChargerInfo;
  onRegister: (phoneNumber: string) => void;
  onTopUp: (amount: number) => void;
}

const HomePage: React.FC<HomePageProps> = ({ 
  user, 
  chargerInfo, 
  onRegister, 
  onTopUp 
}) => {
  return (
    <>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        paddingTop: '44px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #eeeeee'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '24px', height: '24px', color: '#666', marginRight: '12px', cursor: 'pointer' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
          <div style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#333333'
          }}>EVCharge</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '24px', height: '24px', color: '#666' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: '0 0 20px 0' }}>
        <ChargerStatus chargerInfo={chargerInfo} />
        
        {/* วิธีใช้งานง่ายๆ (ย้ายขึ้นมาก่อน) */}
        <StepsGuide />
        
        {/* ส่วนลงทะเบียน/เติมเงิน/เริ่มชาร์จ (ย้ายลงมาอยู่ด้านล่าง) */}
        {!user.isRegistered ? (
          <QuickRegistration onRegister={onRegister} />
        ) : user.balance <= 0 ? (
          <InitialTopup onTopUp={onTopUp} />
        ) : (
          <GetStartedSection chargerInfo={chargerInfo} userBalance={user.balance} />
        )}
        
        {/* ส่วนการเชื่อมต่อ */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '12px 16px',
          margin: '16px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              backgroundColor: '#4caf50', 
              marginRight: '8px' 
            }}></div>
            <span style={{ fontSize: '13px', color: '#666' }}>เชื่อมต่อกับเครื่องชาร์จแล้ว</span>
          </div>
          <button style={{ color: '#3f51b5', fontSize: '13px', background: 'none', border: 'none', cursor: 'pointer' }}>
            รีเฟรช
          </button>
        </div>
        
        {/* ลิงก์ช่วยเหลือ */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          margin: '16px 0'
        }}>
          <Link to="#" style={{ color: '#3f51b5', margin: '0 12px', fontSize: '13px', textDecoration: 'none' }}>
            ช่วยเหลือ
          </Link>
          <Link to="#" style={{ color: '#3f51b5', margin: '0 12px', fontSize: '13px', textDecoration: 'none' }}>
            ติดต่อเจ้าหน้าที่
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;