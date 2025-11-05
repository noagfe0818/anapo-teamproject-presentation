import { Hospital, MonitorCheck } from "lucide-react";

import Link from "next/link";
const button = () => {
  return (
    <div className="flex flex-row absolute justify-center gap-8 container mx-auto  py-50 ">
      <Link
        href="/main/findhospital"
        className="flex flex-col gap-2 items-center justify-center w-[350px] h-[350px]   rounded-2xl bg-[#B8D5FF] "
      >
        <Hospital size={180} />
        <span className="text-4xl font-semibold">병원찾기</span>
      </Link>

      <Link
        href="/main/reservationmed"
        className="flex flex-col gap-2 items-center justify-center w-[350px] h-[350px]   rounded-2xl bg-[#B8D5FF] "
      >
        <MonitorCheck size={180} />
        <span className="text-4xl font-semibold">진료예약</span>
      </Link>

      <div className="flex flex-col gap-2">
        <Link
          href={"/main/join"}
          className="w-[350px] h-[170px] flex items-center justify-center   rounded-2xl bg-[#A4C9FC] "
        >
          <span className="text-white font-semibold text-4xl">회원가입</span>
        </Link>
        <Link
          href={"/main/login"}
          className="w-[350px] h-[170px]  flex items-center justify-center rounded-2xl bg-[#A4C9FC] "
        >
          <span className="text-white font-semibold text-4xl">로그인</span>
        </Link>
      </div>
    </div>
  );
};

export default button;
