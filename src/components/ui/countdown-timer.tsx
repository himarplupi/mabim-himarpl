"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const textClassName = "text-4xl md:text-5xl lg:text-6xl";

export const ExpiredNotice = () => {
  return (
    <div className="flex">
      <AnimatePresence>
        <DateTimeDisplay key={`Hari${0}`} value={0} type={"Hari"} />
        <p key="item-1" className={textClassName}>
          :
        </p>
        <DateTimeDisplay key={`Jam${0}`} value={0} type={"Jam"} />
        <p key="item-2" className={textClassName}>
          :
        </p>
        <DateTimeDisplay key={`Menit${0}`} value={0} type={"Menit"} />
        <p key="item-3" className={textClassName}>
          :
        </p>
        <DateTimeDisplay key={`Detik${0}`} value={0} type={"Detik"} />
      </AnimatePresence>
    </div>
  );
};

export const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}) => {
  // To handle hydration mismatch
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex">
      {isClient && (
        <AnimatePresence>
          <DateTimeDisplay key={`Hari${days}`} value={days} type={"Hari"} />
          <p key="item-1" className={textClassName}>
            :
          </p>
          <DateTimeDisplay key={`Jam${hours}`} value={hours} type={"Jam"} />
          <p key="item-2" className={textClassName}>
            :
          </p>
          <DateTimeDisplay
            key={`Menit${minutes}`}
            value={minutes}
            type={"Menit"}
          />
          <p key="item-3" className={textClassName}>
            :
          </p>
          <DateTimeDisplay
            key={`Detik${seconds}`}
            value={seconds}
            type={"Detik"}
          />
        </AnimatePresence>
      )}
    </div>
  );
};

export const DateTimeDisplay = ({
  value,
  type,
}: {
  value?: number;
  type: "Hari" | "Jam" | "Menit" | "Detik";
}) => {
  return (
    <div className="relative">
      <motion.div
        className="flex w-16 flex-col items-center justify-center md:mx-6"
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 75, opacity: 0, position: "absolute" }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 100,
          mass: 1,
        }}
      >
        <motion.p className={textClassName}>
          {(value ?? 0) < 10 ? `0${value}` : value}
        </motion.p>
        <motion.span className="-mt-1 lowercase md:text-lg">{type}</motion.span>
      </motion.div>
    </div>
  );
};

export const useCountdown = (targetDate: string | number | Date) => {
  const [countDownDate, setCountDownDate] = useState(
    new Date(targetDate).getTime(),
  );
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  useEffect(() => {
    setCountDownDate(new Date(targetDate).getTime());
  }, [targetDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};
