"use client";

import { useState } from "react";
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

import { ExpiredNotice, ShowCounter, useCountdown } from "./countdown-timer";

interface TabProps {
  label: string;
  date: string;
}

interface TabsProps {
  tabs: TabProps[];
}

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

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
      className="flex items-center justify-center font-zelda text-[#E6E7CB]"
    >
      {seconds &&
        minutes &&
        hours &&
        (seconds < 0 && minutes < 0 && hours < 0 ? (
          <ExpiredNotice />
        ) : (
          <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        ))}
    </motion.div>
  );
}

export function CountdownTabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative z-10 flex flex-col items-center space-y-4 bg-primary-600 px-3 py-6">
      <h2 className="text-center font-rock-n-roll-one text-3xl font-normal leading-tight tracking-wider text-neutral-50">
        COUNTDOWN
      </h2>

      <div className="w-full rounded-md bg-neutral-900 p-1">
        <div className="w-full border-neutral-50 bg-neutral-900 text-neutral-200">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {tabs.map((tab, index) => (
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
      </div>

      <div className="relative mt-4 rounded-md border border-gray-300 px-6 pb-2 pt-4">
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

        <CountdownTimer targetDate={new Date(tabs[activeTab]?.date ?? "")} />
      </div>
    </div>
  );
}
