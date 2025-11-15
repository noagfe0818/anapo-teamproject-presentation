"use client";
import React from "react";
import Input from "@/ui/Input";
import Button from "@/ui/Button";
import Label from "@/ui/Label";
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/Card";

const StepTwo = ({
  selectedDoctor,
  selectedDate,
  selectedTime,
  setSelectedDate,
  setSelectedTime,
  setStep,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>날짜 및 시간 선택</CardTitle>
        <p className="text-sm text-gray-600">
          선택된 의사: {selectedDoctor.name} ({selectedDoctor.specialty})
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label>날짜 선택</Label>
            <Input
              type="date"
              value={selectedDate?.toISOString().split("T")[0] ?? ""}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
            />
          </div>
          <div>
            <Label>시간 선택</Label>
            {selectedDate && (
              <div className="grid grid-cols-2 gap-2 mt-2">
                {selectedDoctor.availableSlots.map((t) => (
                  <Button
                    key={t}
                    variant={selectedTime === t ? "default" : "outline"}
                    onClick={() => setSelectedTime(t)}
                  >
                    {t}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-6 container mx-auto">
          <Button variant="outline" onClick={() => setStep(1)}>
            이전
          </Button>
          <Button
            onClick={() => setStep(3)}
            disabled={!selectedDate || !selectedTime}
          >
            다음
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StepTwo;
