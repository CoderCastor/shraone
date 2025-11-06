"use client";

import { createContext, useContext, useRef, RefObject } from "react";

const ScrollContext = createContext<RefObject<HTMLDivElement> | null>(null);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollContext.Provider value={scrollRef}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollRef() {
  return useContext(ScrollContext);
}
