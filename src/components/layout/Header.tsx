import React from "react";
import { ChargerInfo } from "../../types";

interface HeaderProps {
  chargerInfo: ChargerInfo;
}

const Header: React.FC<HeaderProps> = ({ chargerInfo }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">EV Charger</h1>
            <div className="mt-1 flex items-center">
              <span className="text-sm text-gray-600 mr-2">
                {chargerInfo.name}
              </span>
              <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                {chargerInfo.id}
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-1">
          <p className="text-sm text-gray-500">{chargerInfo.location}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
