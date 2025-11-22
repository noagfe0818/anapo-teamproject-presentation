"use client";
import React, { useState } from "react";
import StepOne from "./StepOne"; 
import StepTwo from "./StepTwo"; 
import StepThree from "./StepThree"; 
import mockDoctors from "@/data/mockDoctors"; // 경로 확인 필요

const AppointmentBookingComponent = ({ selectedHospital, onBack }) => {
  const [step, setStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  
  const [patientInfo, setPatientInfo] = useState({
    name: "",
    phone: "",
    birthDate: "",
    symptoms: "",
  });

  // 선택된 병원 이름과 일치하는 의사만 필터링
  const filteredDoctors = mockDoctors.filter(
    (doc) => doc.hospital === selectedHospital?.name
  );

  return (
    // ✅ 수정 1: 전체 배경색(bg-gray-50)과 위아래 여백(py-12) 추가
    <section className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        
        {/* ✅ 수정 2: 단계 표시기 (Step Indicator) 스타일 개선 */}
        <div className="flex justify-center items-center mb-8 space-x-4 text-sm">
          <div className={`px-3 py-1 rounded-full ${step === 1 ? "bg-[#5CA0FF] text-white font-bold" : "text-gray-500"}`}>
            1. 날짜/시간
          </div>
          <div className="text-gray-300">&gt;</div>
          <div className={`px-3 py-1 rounded-full ${step === 2 ? "bg-[#5CA0FF] text-white font-bold" : "text-gray-500"}`}>
            2. 의사 선택
          </div>
          <div className="text-gray-300">&gt;</div>
          <div className={`px-3 py-1 rounded-full ${step === 3 ? "bg-[#5CA0FF] text-white font-bold" : "text-gray-500"}`}>
            3. 정보 입력
          </div>
        </div>

        {/* 1단계: 시간 (StepOne) */}
        {step === 1 && (
          <StepOne
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            setSelectedDate={setSelectedDate}
            setSelectedTime={setSelectedTime}
            setStep={setStep}
            onBack={onBack}
          />
        )}

        {/* 2단계: 의사 (StepTwo) */}
        {step === 2 && (
          <StepTwo
            selectedHospital={selectedHospital}
            filteredDoctors={filteredDoctors}
            setSelectedDoctor={setSelectedDoctor}
            setStep={setStep}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
          />
        )}

        {/* 3단계: 정보 (StepThree) */}
        {step === 3 && (
          <StepThree
            patientInfo={patientInfo}
            setPatientInfo={setPatientInfo}
            selectedHospital={selectedHospital}
            selectedDoctor={selectedDoctor}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            setStep={setStep}
          />
        )}
      </div>
    </section>
  );
};

export default AppointmentBookingComponent;