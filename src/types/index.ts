// Types ที่ใช้ในแอปพลิเคชัน

export interface ChargerInfo {
  id: string;
  name: string;
  location: string;
  status: "available" | "in-use" | "maintenance";
  chargerType: string;
  maxPower: number;
  pricePerUnit: number;
}

export interface User {
  id?: string;
  phoneNumber?: string;
  name?: string;
  balance: number;
  isRegistered: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

export interface ChargingSession {
  id: number;
  date: string;
  location: string;
  chargerId: string;
  duration: string;
  energy: number;
  amount: number;
}

export interface TopupTransaction {
  id: number;
  date: string;
  amount: number;
  status: string;
}

export interface HomePageProps {
  user: User;
  chargerInfo: ChargerInfo;
  onRegister: (phoneNumber: string) => void;
  onTopUp: (amount: number) => void;
}

export interface WalletPageProps {
  user: User;
  onTopUp: (amount: number) => void;
}

export interface ProfilePageProps {
  user: User;
}
