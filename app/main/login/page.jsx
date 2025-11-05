"use client";

import { Activity, Mail, Lock, MoveLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { useAuth } from '../../../src/context/AuthContext'; // (O)

const Page = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  
  const router = useRouter(); 
  const { login } = useAuth(); // <--- 2. 'login' 방송 기능 가져오기

  // ✅ 3. handleSubmit 함수를 'fetch'를 사용하도록 통째로 변경
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 4. '로그인 뇌' (API)에게 데이터를 전송
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ 3. 성공 시 '방송국'에 "로그인했다!"고 방송 요청
        login();

        // 성공! (200 status)
        alert("로그인 성공! 메인 페이지로 이동합니다.");
        // (나중엔 data.user 정보를 저장해야 합니다)
        router.push('/main'); // 메인 페이지로 이동
      } else {
        // 실패 (401, 404, 500 status)
        alert(data.message || "로그인에 실패했습니다.");
      }

    } catch (error) {
      // fetch 자체가 실패한 경우 (네트워크 오류 등)
      console.error("폼 제출 네트워크 에러:", error);
      alert("알 수 없는 오류가 발생했습니다. 네트워크를 확인하세요.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="p-3 bg-blue-100 rounded-2xl items-center">
            <Activity color="#5CA0FF" size={38} />
          </div>

          <h1 className="font-bold text-2xl text-gray-900 ">anapo에 로그인</h1>
          <span className="text-lg text-gray-600 ">
            의료 서비스를 더 편리하게 이용하세요
          </span>
        </div>
        <article className="flex justify-center mt-8">
          <div className="w-[500px] h-[600px]  rounded-2xl bg-white shadow-md flex flex-col items-center ">
            <h1 className="text-2xl  text-gray-900 mt-5">로그인</h1>

            <form onSubmit={handleSubmit} className="mt-10 ">
              <div className="text-sm text-gray-900 mb-1">이메일</div>
              <div className="relative flex items-center">
                <Mail className="absolute left-3  text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="이메일을 입력하세요"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="w-[420px] bg-gray-100  rounded-lg pl-10 pr-3 p-2"
                  required
                />
              </div>
              <div className="text-sm text-gray-900 mb-1 mt-6">비밀번호</div>
              <div className="relative flex items-center">
                <Lock className="absolute left-3  text-gray-400" size={20} />
                <input
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[420px] bg-gray-100  rounded-lg pl-10 pr-3 p-2"
                  required
                />
              </div>
              <div className="flex justify-between items-center text-md text-gray-600 mt-8">
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-4 h-4"
                  />
                  로그인 상태 유지
                </label>
                <a href="#" className="text-blue-500 hover:underline">
                  비밀번호 찾기
                </a>
              </div>
              
              <button type="submit" className="w-[420px] rounded-lg p-2 bg-[#5CA0FF] mt-8 text-white text-lg">
                  로그인
              </button>
              
              <div className="flex justify-between items-center text-md text-gray-600 mt-8 ">
                <span>아직 계정이 없으신가요?</span>
                <Link
                  className="text-blue-500 hover:underline"
                  href={"/main/join"}
                >
                  회원가입
                </Link>
              </div>
            </form>
          </div>
        </article>
        <p className=" relative text-center text-sm text-gray-400 mt-8">
          <Link
            href="/main"
            className="hover:underline flex items-center justify-center "
          >
            <MoveLeft className=" absolute left-138 " size={18} /> 홈으로
            돌아가기
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Page;