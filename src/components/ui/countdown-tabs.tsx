"use client";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import {
  BottomLeftCorner,
  BottomRightCorner,
  TopLeftCorner,
  TopRightCorner,
} from "@/components/ornament/border";
import { RhombusIndicator } from "@/components/ornament/indicator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import { BlurFade } from "./blur-fade";
import { ExpiredNotice, ShowCounter, useCountdown } from "./countdown-timer";

const tabData = [
  { label: "TM", date: "2024-10-19" },
  { label: "Day-1", date: "2024-10-26" },
  { label: "Day-2", date: "2024-11-02" },
  { label: "Day-3", date: "2024-11-03" },
  { label: "Day-4", date: "2024-11-09" },
];

export function CountdownTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="countdown"
      className="relative z-10 flex flex-col items-center space-y-4 px-3 py-6"
    >
      <BlurFade inView delay={0.25 * 2}>
        <h2 className="pb-4 text-center font-rock-n-roll-one text-3xl font-normal leading-tight tracking-wider text-neutral-50 md:text-4xl">
          COUNTDOWN
        </h2>
      </BlurFade>

      <BlurFade
        inView
        delay={0.25 * 4}
        className="mx-auto w-full max-w-screen-md rounded-md bg-neutral-900 p-1"
      >
        <div className="w-full border-neutral-50 bg-neutral-900 text-neutral-200">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {tabData.map((tab, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 pl-2 md:basis-1/5"
                >
                  <motion.button
                    onClick={() => setActiveTab(index)}
                    className={cn(
                      `flex w-full items-center gap-x-2 rounded-sm px-4 py-2 font-rock-n-roll-one text-sm`,
                    )}
                    whileTap={{ scale: 0.95 }} // Optional tap effect
                    animate={{
                      backgroundColor:
                        activeTab === index ? "#5F8A26" : "transparent",
                      color: activeTab === index ? "#fafafa" : "#a1a1aa",
                    }}
                    transition={{
                      duration: 0.3, // Duration for background color change
                      ease: "easeInOut", // Easing for smooth transition
                    }}
                  >
                    <div className="h-4 w-4">
                      {activeTab === index && (
                        <motion.div
                          layout // Enable layout animations
                          animate={{ rotate: [0, 360] }} // Added rotation animation
                          transition={{
                            duration: 1, // Duration for rotation
                            ease: "linear", // Easing for rotation
                            repeat: Infinity, // Loop infinitely
                            type: "tween", // Use tween for smoother transitions
                          }}
                        >
                          <RhombusIndicator
                            className="h-4 w-4"
                            pathClassName="fill-zinc-50"
                          />
                        </motion.div>
                      )}
                    </div>
                    {tab.label}
                  </motion.button>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </BlurFade>

      <BlurFade
        inView
        delay={0.25 * 6}
        className="relative mx-auto mt-4 w-full max-w-screen-md rounded-md border border-gray-300 bg-primary-600 px-6 pb-2 pt-4"
      >
        <TopLeftCorner
          className="absolute left-1 top-1 scale-75"
          pathClassName="fill-neutral-50 opacity-50"
        />
        <TopRightCorner
          className="absolute right-1 top-1 scale-75"
          pathClassName="fill-neutral-50 opacity-50"
        />
        <BottomLeftCorner
          className="absolute bottom-1 left-1 scale-75"
          pathClassName="fill-neutral-50 opacity-50"
        />
        <BottomRightCorner
          className="absolute bottom-1 right-1 scale-75"
          pathClassName="fill-neutral-50 opacity-50"
        />
        <CountdownTimer targetDate={new Date(tabData[activeTab]?.date ?? "")} />
      </BlurFade>

      <BlurFade inView delay={0.25 * 8}>
        <p className="w-full text-right font-bonobo text-sm text-neutral-300 md:hidden md:text-base">
          *Geser tab untuk melihat hari lainnya
        </p>
      </BlurFade>
    </section>
  );
}

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (
      typeof days === "undefined" ||
      typeof hours === "undefined" ||
      typeof minutes === "undefined" ||
      typeof seconds === "undefined"
    ) {
      return;
    }

    const countdown =
      days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;

    if (countdown <= 0) {
      setIsExpired(true);
    } else {
      setIsExpired(false);
    }
  }, [days, seconds, minutes, hours]);

  return (
    <motion.div
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 200,
      }}
      className="flex items-center justify-center font-zelda text-neutral-50"
    >
      {isExpired ? (
        <ExpiredNotice />
      ) : (
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      )}
    </motion.div>
  );
}
