import { Calendar } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold">대시보드</h2>
        <p className="text-gray-500">병원 예약 현황을 한눈에 확인하세요</p>
      </div>

      {/* 예시 카드 */}
      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-sm flex flex-row gap-40 ">
          <h3 className="text-lg font-semibold flex flex-col gap-1">
            오늘 예약 <p className="text-3xl font-bold mt-2">24</p>
          </h3>
          <div className="w-18 h-18 bg-blue-400 rounded-xl flex items-center justify-center p-1">
            <Calendar size={40} color="white" />
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm flex flex-row  gap-50">
          <h3 className="text-lg font-semibold flex flex-col gap-1">
            완료 <p className="text-3xl font-bold mt-2">16</p>
          </h3>
          <div className="w-18 h-18 bg-blue-400 rounded-xl flex items-center justify-center p-1">
            <Calendar size={40} color="white" />
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm flex flex-row  gap-40">
          <h3 className="text-lg font-semibold flex flex-col gap-1">
            총 환자 <p className="text-3xl font-bold mt-2">1,234</p>
          </h3>
          <div className="w-18 h-18 bg-blue-400 rounded-xl flex items-center justify-center p-1">
            <Calendar size={40} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
