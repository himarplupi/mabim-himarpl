"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { RhombusIndicator } from "@/components/ornament/indicator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"; // Import carousel components
import { cn } from "@/lib/utils";

interface TabProps {
  label: string;
  date: string;
}

interface TabsProps {
  tabs: TabProps[];
}

export function CountdownTabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative z-10 flex flex-col items-center bg-primary-600">
      <div className="mx-4 w-full rounded-md bg-neutral-900 p-1">
        <div className="border-neutral-50/40 bg-neutral-900 text-neutral-200">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {tabs.map((tab, index) => (
                <CarouselItem key={index} className="basis-1/3 md:basis-1/5">
                  <motion.button
                    onClick={() => setActiveTab(index)}
                    className={cn(
                      `flex items-center gap-x-2 rounded-sm px-4 py-2 font-rock-n-roll-one text-sm transition-colors duration-300`,
                    )}
                    whileTap={{ scale: 0.95 }} // Optional tap effect
                    animate={{
                      backgroundColor:
                        activeTab === index ? "#5F8A26" : "transparent", // Change background color based on active tab
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
      <div className="mt-4 rounded-md border border-gray-300 p-4">
        {tabs[activeTab]?.date}
      </div>
    </div>
  );
}
