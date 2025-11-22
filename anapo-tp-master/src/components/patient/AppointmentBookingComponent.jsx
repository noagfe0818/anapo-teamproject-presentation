"use client";

import React, { useState } from "react";
import { ChevronRight, ArrowLeft } from "lucide-react";
import mockDoctors from "@/data/patient/mockDoctors";
import StepOne from "@/components/patient/StepOne";
import StepTwo from "@/components/patient/StepTwo";
import StepThree from "@/components/patient/StepThree";

const AppointmentBookingComponent = ({ selectedHospital, onBack }) => {
  const [step, setStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [patientInfo, setPatientInfo] = useState({
    name: "",
    phone: "",
    birthDate: "",
    symptoms: "",
  });

  if (!selectedHospital) {
    return (
      <div className="p-8 pt-20 text-center text-gray-500 bg-gray-50 min-h-screen">
        병원 정보가 없습니다.
        <br /> 병원 찾기 페이지에서 먼저 병원을 선택해주세요.
      </div>
    );
  }

  const filteredDoctors = mockDoctors.filter(
    (doc) => doc.hospital === selectedHospital.name
  );

  return (
    <section className="min-h-screen bg-gray-50">
      <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center">
        <button
          onClick={onBack}
          className="mr-4 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">진료 예약</h1>
      </header>

      <div className="p-4 max-w-3xl mx-auto">
        {/* 단계 표시 */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          {["의사", "시간", "정보"].map((label, i) => {
            const stepNum = i + 1;
            const active = step >= stepNum;
            return (
              <React.Fragment key={label}>
                <div
                  className={`flex items-center ${
                    active ? "text-[#5CA0FF]" : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      active ? "bg-[#5CA0FF] text-white" : "bg-gray-200"
                    }`}
                  >
                    {stepNum}
                  </div>
                  <span className="ml-2">{label}</span>
                </div>
                {i < 2 && <ChevronRight className="h-4 w-4 text-gray-400" />}
              </React.Fragment>
            );
          })}
        </div>

        {/* Step 1: 의사 선택 */}
        {step === 1 && (
          <StepOne
            selectedHospital={selectedHospital} // ✅ props 전달
            setStep={setStep}
            setSelectedDoctor={setSelectedDoctor}
            filteredDoctors={filteredDoctors}
          />
        )}

        {/* Step 2: 날짜 및 시간 선택 */}
        {step === 2 && selectedDoctor && (
          <StepTwo
            selectedDoctor={selectedDoctor}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            setSelectedDate={setSelectedDate}
            setStep={setStep}
          />
        )}

        {/* Step 3: 환자 정보 입력 */}
        {step === 3 && (
          <StepThree
            setPatientInfo={setPatientInfo}
            patientInfo={patientInfo}
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
