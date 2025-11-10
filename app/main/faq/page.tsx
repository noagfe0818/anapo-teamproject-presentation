"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Paperclip, Phone, Video, MoreVertical } from "lucide-react";
import Image from "next/image";

// --- 1. 임시 UI 컴포넌트들 (수정 안 함) ---
const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`bg-white ${className}`}>{children}</div>;
const CardHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`p-4 border-b ${className}`}>{children}</div>;
const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`p-4 ${className}`}>{children}</div>;
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={`border rounded px-3 py-2 w-full ${props.className}`}
    {...props}
  />
);
const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: string;
  size?: string;
  [key: string]: any;
}) => (
  <button
    className={`px-4 py-2 rounded font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 ${className}`}
    {...props}
  >
    {children}
  </button>
);
const Avatar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
  >
    {children}
  </div>
);

const AvatarImage = (props: React.ComponentProps<typeof Image>) => {
  const { alt, ...rest } = props;
  return <Image className="aspect-square h-full w-full" alt={alt} {...rest} />;
};

const AvatarFallback = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 ${className}`}
  >
    {children}
  </span>
);
const Badge = ({
  children,
  className,
  variant,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: string;
}) => (
  <div
    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${className}`}
  >
    {children}
  </div>
);
const ScrollArea = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`relative h-full overflow-y-auto ${className}`}>
    {children}
  </div>
);
const DropdownMenu = ({ children }: { children: React.ReactNode }) => (
  <div className="relative inline-block text-left">{children}</div>
);
const DropdownMenuTrigger = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;
const DropdownMenuContent = ({ children }: { children: React.ReactNode }) => (
  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    {children}
  </div>
);
const DropdownMenuItem = ({ children }: { children: React.ReactNode }) => (
  <a
    href="#"
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
  >
    {children}
  </a>
);

// --- 2. 채팅 기능 코드 ---
// ... (이전과 동일, 생략) ...
interface Message {
  id: string;
  content: string;
  sender: "user" | "agent";
  timestamp: string;
  type: "text";
}
interface Agent {
  id: string;
  name: string;
  department: string;
  status: "online" | "offline" | "busy";
  avatar: string;
}
const mockAgent: Agent = {
  id: "1",
  name: "이지은 상담사",
  department: "고객센터",
  status: "online",
  avatar: "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?w=300",
};
const initialMessages: Message[] = [
  {
    id: "1",
    content:
      "안녕하세요! Anapo 고객센터 이지은 상담사입니다. 무엇을 도와드릴까요?",
    sender: "agent",
    timestamp: "14:20",
    type: "text",
  },
  {
    id: "2",
    content: "안녕하세요. 예약 취소 관련해서 문의드리고 싶습니다.",
    sender: "user",
    timestamp: "14:22",
    type: "text",
  },
  {
    id: "3",
    content:
      "예약 취소 도움드리겠습니다. 예약번호나 예약하신 병원명을 알려주시면 확인해드리겠습니다.",
    sender: "agent",
    timestamp: "14:23",
    type: "text",
  },
  {
    id: "4",
    content: "네, 예약번호는 A1234이고, 순천향대학교 부천병원입니다.",
    sender: "user",
    timestamp: "14:24",
    type: "text",
  },
  {
    id: "5",
    content:
      "확인 감사합니다. 잠시만 기다려주시면 예약 내역 조회 후 안내드리겠습니다.",
    sender: "agent",
    timestamp: "14:25",
    type: "text",
  },
];

function Chat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        content: newMessage,
        sender: "user",
        timestamp: new Date().toLocaleTimeString("ko-KR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        type: "text",
      };
      setMessages([...messages, userMessage]);
      setNewMessage("");
      setIsTyping(true);
      setTimeout(() => {
        const agentResponse: Message = {
          id: (Date.now() + 1).toString(),
          content:
            "네, 말씀해주신 내용을 확인했습니다. 추가로 필요한 정보가 있으시면 언제든지 말씀해 주세요.",
          sender: "agent",
          timestamp: new Date().toLocaleTimeString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          type: "text",
        };
        setMessages((prev) => [...prev, agentResponse]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  const getStatusColor = (status: string) =>
    status === "online" ? "bg-green-500" : "bg-gray-500";
  const getStatusText = (status: string) =>
    status === "online" ? "상담 가능" : "오프라인 ";

  return (
    // ✅ 수정 1: padding(p-4 md:p-8) 제거, h-full 추가
    <div className="max-w-4xl mx-auto h-full pt-15">
      {/* ✅ 수정 2: 'h-[700px]' -> 'h-full'로 변경 */}
      <Card className="h-full flex flex-col rounded-xl shadow-xl shadow-black/20">
        <CardHeader className="border-b border-gray-100 p-4 shrink-0 bg-white rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Avatar>
                  <AvatarImage
                    src={mockAgent.avatar}
                    alt={mockAgent.name}
                    width={40}
                    height={40}
                  />
                  <AvatarFallback>상담</AvatarFallback>
                </Avatar>
                <div
                  className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(
                    mockAgent.status
                  )}`}
                ></div>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{mockAgent.name}</h3>
                <p className="text-sm text-gray-800">{mockAgent.department}</p>
                <Badge variant="secondary" className="text-xs text-gray-800">
                  {getStatusText(mockAgent.status)}
                </Badge>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-0 overflow-hidden">
          <ScrollArea className="h-full p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${
                      message.sender === "user"
                        ? "flex-row-reverse space-x-reverse"
                        : ""
                    }`}
                  >
                    {message.sender === "agent" && (
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src={mockAgent.avatar}
                          alt={mockAgent.name}
                          width={32}
                          height={32}
                        />
                        <AvatarFallback>상담</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`rounded-lg px-3 py-2 ${
                        message.sender === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <span
                        className={`text-xs ${
                          message.sender === "user"
                            ? "text-blue-200"
                            : "text-gray-500"
                        }`}
                      >
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-end space-x-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src={mockAgent.avatar}
                        alt="agent typing"
                        width={32}
                        height={32}
                      />
                      <AvatarFallback>상담</AvatarFallback>
                    </Avatar>
                    <div className="bg-gray-100 rounded-lg px-3 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
        </CardContent>

        <div className="border-t border-gray-100 p-4 shrink-0 bg-white rounded-b-xl">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input
              value={newMessage}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewMessage(e.target.value)
              }
              onKeyPress={handleKeyPress}
              placeholder="메시지를 입력하세요..."
              className="flex-1 text-gray-900"
            />
            <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

// --- 3. 최종 페이지 ---
export default function FaqPage() {
  const HEADER_HEIGHT_PX = 64; // (h-16)

  return (
    // ✅ 수정 3:
    // 1. style 제거
    // 2. h-dvh, overflow-hidden 추가
    // 3. pt-16 (헤더 높이)
    // 4. p-4 md:p-8 (채팅창 좌우/상하 여백)
    <main
      className="bg-gray-50 h-dvh overflow-hidden pt-16 p-4 md:p-8"
      style={{ height: `calc(100vh - ${HEADER_HEIGHT_PX}px)` }}
    >
      <Chat />
    </main>
  );
}
