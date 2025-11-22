// src/App.js
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs.js";
import { Header } from "./components/Header.js";
import { HospitalSearch } from "./components/HospitalSearch.js";
import { AppointmentBooking } from "./components/AppointmentBooking.js";
import { Chat } from "./components/Chat.js";
import { Search, Calendar, MessageCircle } from "lucide-react"

export default function App() {
  const [activeTab, setActiveTab] = useState("search");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Anapo</h1>
          <p className="text-gray-600">언제 어디서나 편리한 의료 서비스</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="search" className="flex items-center space-x-2">
              <Search className="h-4 w-4" />
              <span>병원 찾기</span>
            </TabsTrigger>
            <TabsTrigger value="booking" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>진료 예약</span>
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>고객센터</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="search" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
              <h2 className="text-xl font-semibold mb-2">병원 검색</h2>
              <p className="text-gray-600">내 주변 병원을 찾고 진료과별로 검색해보세요.</p>
            </div>
            <HospitalSearch />
          </TabsContent>

          <TabsContent value="booking" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
              <h2 className="text-xl font-semibold mb-2">진료 예약</h2>
              <p className="text-gray-600">원하는 의사와 시간을 선택하여 간편하게 예약하세요.</p>
            </div>
            <AppointmentBooking />
          </TabsContent>

          <TabsContent value="chat" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
              <h2 className="text-xl font-semibold mb-2">고객센터 1:1 상담</h2>
              <p className="text-gray-600">궁금한 사항이 있으시면 언제든지 문의해주세요.</p>
            </div>
            <Chat />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}