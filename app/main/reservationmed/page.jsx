"use client";
import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import AppointmentBookingComponent from "@/components/AppointmentBookingComponent";
import hospitalData from "@/data/hospitalData";

function ReservationPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    const hospitalId = searchParams.get("hospitalId");
    if (hospitalId) {
      const hospital = hospitalData.find((h) => h.id === hospitalId);
      setSelectedHospital(hospital || null);
    }
  }, [searchParams]);

  return (
    <AppointmentBookingComponent
      selectedHospital={selectedHospital}
      onBack={() => router.push("/main/findhospital")}
    />
  );
}

export default function ReservationPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          로딩 중...
        </div>
      }
    >
      <ReservationPageContent />
    </Suspense>
  );
}
