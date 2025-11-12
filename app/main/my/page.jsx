"use client";

import {
  CalendarDays,
  Heart,
  Settings,
  Headphones,
  ClipboardList,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const My = () => {
  const user = {
    name: "김유저",
    email: "kim.user@email.com",
    role: "일반회원",
    status: "인증완료",
  };

  const stats = [
    { label: "총 예약 횟수", value: 12 },
    { label: "즐겨찾는 병원", value: 3 },
    { label: "상담 횟수", value: 8 },
  ];

  const recentReservations = [
    {
      hospital: "부천세종병원",
      doctor: "김영수 원장 · 내과",
      date: "2024.01.15 14:30",
      status: "예약완료",
    },
    {
      hospital: "부천성모병원",
      doctor: "이민정 과장 · 피부과",
      date: "2024.01.10 10:00",
      status: "진료완료",
    },
    {
      hospital: "부천성모병원",
      doctor: "이민정 과장 · 피부과",
      date: "2024.01.10 10:00",
      status: "진료완료",
    },
  ];

  const favoriteHospitals = [
    { name: "부천세종병원", department: "내과", distance: "0.5km" },
    { name: "부천성모병원", department: "피부과", distance: "1.2km" },
    { name: "굿모닝병원", department: "정형외과", distance: "0.8km" },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-10 pt-20">
      <div className="container mx-auto px-6">
        <h1 className="mb-5  flex flex-col w-full justify-center  text-gray-600 font-semibold  ">
          마이페이지
          <p className="text-gray-500 mb-2 text-[16px] font-light">
            회원 정보와 예약 내역을 확인하고 관리하세요.
          </p>
        </h1>

        {/* 사용자 정보 */}
        <div className="bg-white rounded-2xl shadow p-6 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-lg font-semibold">
              {user.name.charAt(1)}
            </div>
            <div>
              <p className="text-xl font-semibold">{user.name}님</p>
              <p className="text-gray-500">{user.email}</p>
              <div className="flex gap-2 mt-1">
                <span className="px-2 py-1 text-xs bg-gray-100 rounded-md">
                  {user.role}
                </span>
                <span className="px-2 py-1 text-xs bg-gray-100 rounded-md">
                  {user.status}
                </span>
              </div>
            </div>
          </div>

          {/* 통계 */}
          <div className="flex mt-8">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`flex-1 text-center py-4 ${
                  i === 1
                    ? "bg-green-50"
                    : i === 2
                    ? "bg-purple-50"
                    : "bg-blue-50"
                } rounded-xl mx-1`}
              >
                <p className="text-2xl font-bold">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 예약 내역 + 즐겨찾는 병원 */}
        <div className="grid md:grid-cols-2 gap-6 mb-8 w-full h-full ">
          {/* 최근 예약 내역 */}
          <div className="bg-white rounded-2xl shadow p-6 w-full  relative">
            <div className="flex items-center gap-2 mb-4">
              <CalendarDays size={20} />
              <h2 className="font-semibold">최근 예약 내역</h2>
            </div>
            {recentReservations.map((r, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-4 mb-3 flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{r.hospital}</p>
                  <p className="text-gray-500 text-sm">{r.doctor}</p>
                  <p className="text-gray-400 text-sm">{r.date}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    r.status === "예약완료"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {r.status}
                </span>
              </div>
            ))}
            <button className="w-full  py-2 border border-gray-200 shadow-sm rounded-lg text-sm text-gray-600 hover:bg-gray-50">
              더보기
            </button>
          </div>

          {/* 즐겨찾는 병원 */}
          <div className="bg-white rounded-2xl shadow p-6 relative">
            <div className="flex items-center gap-2 mb-4">
              <Heart size={20} />
              <h2 className="font-semibold">즐겨찾는 병원</h2>
            </div>
            {favoriteHospitals.map((h, i) => (
              <div
                key={i}
                className=" bg-gray-50 rounded-xl p-4 mb-3 flex justify-between"
              >
                <div>
                  <p className="font-semibold">{h.name}</p>
                  <p className="text-gray-500 text-sm">{h.department}</p>
                </div>
                <span className="text-gray-400 text-sm">{h.distance}</span>
              </div>
            ))}
            <button className=" w-full  py-2 border border-gray-200 shadow-sm rounded-lg text-sm text-gray-600 hover:bg-gray-50">
              더보기
            </button>
          </div>
        </div>

        {/* 빠른 메뉴 */}
      </div>
    </section>
  );
};

export default My;
function QuickMenu({ icon, text }) {
  return (
    <button className="flex flex-col items-center gap-2 py-4 border rounded-xl hover:bg-gray-50">
      {icon}
      <span className="text-sm font-medium">{text}</span>
    </button>
  );
}
