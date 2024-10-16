import React, { useState, useEffect } from "react";
import { generateDate, months } from "../../Utils/Calender";
import dayjs from "dayjs";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import cn from "../../Utils/Cn";

const DatepickerComp = ({ closeCalendar, onDateChange }) => {
  const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (startDate && !endDate && date.isAfter(startDate)) {
      setEndDate(date);
    }
  };

  const logSelectedDates = () => {
    if (startDate && endDate) {
      const numberOfDays = endDate.diff(startDate, "day") + 1;
      console.log(
        `Selected range: ${startDate.format("YYYY-MM-DD")} to ${endDate.format(
          "YYYY-MM-DD"
        )}`
      );
      console.log(`Number of days selected: ${numberOfDays} days`);
      onDateChange(startDate, endDate)
    } else if (startDate) {
      console.log("1 day selected");
    }
  };

  useEffect(() => {
    logSelectedDates();
  }, [startDate, endDate]);

  const handlePrevMonth = () => {
    if (
      today.month() === currentDate.month() &&
      today.year() === currentDate.year()
    ) {
      closeCalendar();
    } else {
      setToday(today.month(today.month() - 1));
    }
  };

  return (
    <div className="flex gap-2 h-2/3 sm:divide-x justify-center sm:w-full mx-auto sm:flex-row flex-col">
      {/* Current Month Calendar */}
      <div className="w-96 h-[25rem] border-1 border-solid border-[#707070]">
        <div className="flex justify-start items-center text-center bg-[#254844] py-3 text-white">
          <div className="flex gap-10 items-start">
            <RiArrowLeftSFill
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={handlePrevMonth}
            />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <h1 className="select-none font-semibold uppercase text-2xl">
              {months[today.month()]}, {today.year()}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-7 ">
          {days.map((day, index) => (
            <h1
              key={index}
              className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
            >
              {day}
            </h1>
          ))}
        </div>

        <div className="grid grid-cols-7">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              const isSelected =
                (startDate && date.isSame(startDate, "day")) ||
                (endDate && date.isSame(endDate, "day")) ||
                (startDate &&
                  endDate &&
                  date.isAfter(startDate, "day") &&
                  date.isBefore(endDate, "day"));

              const isStartDate = startDate && date.isSame(startDate, "day");
              const isEndDate = endDate && date.isSame(endDate, "day");
              const isPastDate =
                date.isBefore(currentDate, "day") && currentMonth;

              return (
                <div
                  key={index}
                  className={`p-1 text-center h-12 grid place-content-center text-sm border-t`}
                >
                  <h1
                    className={cn(
                      !currentMonth ? "invisible" : "",
                      isPastDate ? "text-[#707070]" : "",
                      today && isStartDate ? "bg-[#254844] text-white" : "",
                      isStartDate ? "bg-[#254844] text-white" : "",
                      isEndDate ? "bg-[#1d1d1d] text-white" : "",
                      isSelected && !isStartDate && !isEndDate
                        ? "bg-[#e4ded0] text-black"
                        : "",
                      "h-10 w-10 grid place-content-center hover:bg-[#254844] hover:text-white transition-all cursor-pointer select-none"
                    )}
                    onClick={() => currentMonth && handleDateClick(date)}
                  >
                    {currentMonth ? date.date() : ""}
                    {isStartDate && (
                      <span className="block text-[10px] mt-1">Arrive</span>
                    )}
                    {isEndDate && (
                      <span className="block text-[10px] mt-1">Depart</span>
                    )}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* Next Month Calendar */}
      <div className="w-96 h-[25rem] border-1 border-solid border-[#707070]">
        <div className="flex justify-end items-center text-center bg-[#254844] py-3 text-white">
          <div className="flex-1 flex justify-center items-center">
            <h1 className="select-none font-semibold uppercase text-2xl">
              {months[today.month() + 1]}, {today.year()}
            </h1>
          </div>
          <div className="flex gap-10 items-center">
            <div className="flex justify-center items-center">
              <RiArrowRightSFill
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-7">
          {days.map((day, index) => (
            <h1
              key={index}
              className="text-sm text-center h-10 w-14 grid place-content-center text-gray-500 select-none"
            >
              {day}
            </h1>
          ))}
        </div>

        <div className="grid grid-cols-7">
          {generateDate(today.month() + 1, today.year()).map(
            ({ date, currentMonth, today }, index) => {
              const isSelected =
                (startDate && date.isSame(startDate, "day")) ||
                (endDate && date.isSame(endDate, "day")) ||
                (startDate &&
                  endDate &&
                  date.isAfter(startDate, "day") &&
                  date.isBefore(endDate, "day"));

              const isStartDate = startDate && date.isSame(startDate, "day");
              const isEndDate = endDate && date.isSame(endDate, "day");

              return (
                <div
                  key={index}
                  className={`p-2 text-center h-12 grid gap-0 place-content-center text-sm border-t`}
                >
                  <h1
                    className={cn(
                      !currentMonth ? "invisible" : "",
                      today && isStartDate ? "bg-[#254844] text-white" : "",
                      isStartDate ? "bg-[#254844] text-white" : "",

                      isEndDate ? "bg-[#1d1d1d] text-white" : "",
                      isSelected && !isStartDate && !isEndDate
                        ? "bg-[#e4ded0] text-black"
                        : "",
                      "h-10 w-10 grid place-content-center hover:bg-[#254844] hover:text-white transition-all cursor-pointer select-none"
                    )}
                    onClick={() => currentMonth && handleDateClick(date)}
                  >
                    {currentMonth ? date.date() : ""}
                    {isStartDate && (
                      <span className="block text-[10px] mt-1">Arrive</span>
                    )}
                    {isEndDate && (
                      <span className="block text-[10px] mt-1">Depart</span>
                    )}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default DatepickerComp;
