"use client";

import * as React from "react";
import { ReactLenis as RL } from "lenis/react";

export function ReactLenis({ children }: { children: React.ReactNode }) {
  return (
    <RL
      options={{
        prevent: (node) => node.classList.contains("lenis-prevent"),
      }}
      className="max-h-screen overflow-y-auto"
      root
    >
      {children}
    </RL>
  );
}
