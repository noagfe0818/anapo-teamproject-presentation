// app/main/layout.jsx  (!!!)

import { AuthProvider } from "../../src/context/AuthContext"; // (O)
import MainHeader from "../../src/MainHeader.jsx"; // <--- 2. '헤더' import

// 이 파일은 <html>이나 <body> 태그가 필요 없습니다.
// app/layout.jsx (루트)가 이미 갖고 있으니까요.
export default function MainLayout({ children }) {
  //  헤더를 숨기고 싶은 페이지 경로 지정
  const hideHeaderRoutes = ["/findhospital"];

  const shouldHideHeader = hideHeaderRoutes.includes("/findhospital");
  return (
    <AuthProvider>
      {" "}
      {/* <--- 3. '방송국'이 'main' 섹션 전체를 감싼다 */}
      {!shouldHideHeader && <MainHeader />}
      {/* <--- 4. '헤더'가 여기서 렌더링된다 */}
      {children} {/* <--- 5. (병원찾기, 로그인 폼 등이 여기에 들어옴) */}
    </AuthProvider>
  );
}
