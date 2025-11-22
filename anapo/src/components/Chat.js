// src/components/Chat.js
import { Send } from 'lucide-react';

export function Chat() {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      {/* 채팅 메시지 창 */}
      <div className="p-6 h-96 overflow-y-auto space-y-4">
        <div className="flex justify-start">
          <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
            <p className="text-sm">안녕하세요. Anapo 고객센터입니다. 무엇을 도와드릴까요?</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-blue-600 text-white p-3 rounded-lg max-w-xs">
            <p className="text-sm">진료 예약을 취소하고 싶습니다.</p>
          </div>
        </div>
      </div>
      
      {/* 메시지 입력 창 */}
      <div className="p-4 border-t flex space-x-4">
        <input
          type="text"
          placeholder="메시지를 입력하세요..."
          className="flex-grow p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center">
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}