"use client";
import React from "react";
import Badge from "@/ui/Badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/Card";
import Image from "next/image";

const StepOne = ({
  selectedHospital,
  setStep,
  setSelectedDoctor,
  filteredDoctors,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>의사 선택</CardTitle>
        <div className="text-sm text-[#5CA0FF] bg-blue-50 p-3 rounded-lg mt-2">
          📍 <strong>{selectedHospital.name}</strong>
        </div>
      </CardHeader>
      <CardContent>
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center p-4 shadow-sm rounded-lg hover:bg-blue-50 cursor-pointer mb-3"
              onClick={() => {
                setSelectedDoctor(doc);
                setStep(2);
              }}
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{doc.name}</h3>
                <p className="text-sm text-gray-600">{doc.specialty}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-4 text-gray-500">
            예약 가능한 의사가 없습니다.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StepOne;
