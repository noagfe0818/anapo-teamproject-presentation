export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold">대시보드</h2>
        <p className="text-gray-500">병원 예약 현황을 한눈에 확인하세요</p>
      </div>

      {/* 예시 카드 */}
      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold">오늘 예약</h3>
          <p className="text-3xl font-bold mt-2">24</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold">완료</h3>
          <p className="text-3xl font-bold mt-2">16</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold">총 환자</h3>
          <p className="text-3xl font-bold mt-2">1,234</p>
        </div>
      </div>
    </div>
  );
}
