// src/components/HospitalSearch.js
import { Search } from 'lucide-react';

export function HospitalSearch() {
  // 예시 데이터
  const searchResults = [
    { name: '서울중앙병원', address: '서울특별시 강남구', time: '09:00 - 18:00' },
    { name: '연세미래의원', address: '서울특별시 서대문구', time: '09:30 - 19:00' },
  ];

  return (
    <div className="space-y-6">
      {/* 검색 바 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="병원명 또는 진료과를 입력하세요"
            className="flex-grow p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center justify-center space-x-2">
            <Search className="h-5 w-5" />
            <span>검색</span>
          </button>
        </div>
        <div className="mt-4 flex space-x-2">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-300">#내 주변</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-300">#소아과</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-300">#야간진료</button>
        </div>
      </div>

      {/* 검색 결과 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">검색 결과</h3>
        {searchResults.map((hospital, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm border flex justify-between items-center">
            <div>
              <h4 className="font-bold">{hospital.name}</h4>
              <p className="text-sm text-gray-600">{hospital.address}</p>
              <p className="text-sm text-gray-500">진료 시간: {hospital.time}</p>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 text-sm">
              예약하기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}