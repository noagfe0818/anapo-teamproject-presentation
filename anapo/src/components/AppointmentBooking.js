// src/components/AppointmentBooking.js
export function AppointmentBooking() {
  const timeSlots = ["10:00", "10:30", "11:00", "11:30", "14:00", "14:30"];
  
  return (
    <div className="space-y-6">
      {/* 병원/의사 선택 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">병원 선택</label>
          <select className="w-full p-2 border rounded-md">
            <option>서울중앙병원</option>
            <option>연세미래의원</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">의사 선택</label>
          <select className="w-full p-2 border rounded-md">
            <option>김민준 선생님 (내과)</option>
            <option>박서연 선생님 (소아과)</option>
          </select>
        </div>
      </div>
      
      {/* 날짜 선택 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <label className="block text-lg font-semibold text-gray-700 mb-4">날짜 선택</label>
        <div className="text-center mb-2 font-bold">2025년 9월</div>
        <div className="grid grid-cols-7 gap-2 text-center">
          {['일', '월', '화', '수', '목', '금', '토'].map(day => <div key={day} className="font-semibold text-sm">{day}</div>)}
          {Array.from({ length: 30 }, (_, i) => i + 1).map(date => (
             <button key={date} className={`p-2 rounded-full hover:bg-blue-100 ${date === 17 ? 'bg-blue-600 text-white' : ''}`}>
               {date}
             </button>
          ))}
        </div>
      </div>

      {/* 시간 선택 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <label className="block text-lg font-semibold text-gray-700 mb-4">시간 선택</label>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {timeSlots.map(time => (
            <button key={time} className="p-3 border rounded-md text-center hover:bg-gray-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
              {time}
            </button>
          ))}
        </div>
      </div>
      
      <button className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-bold hover:bg-blue-700">
        예약 확정하기
      </button>
    </div>
  );
}