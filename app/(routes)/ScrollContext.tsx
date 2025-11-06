"use client";

import {
  createContext,
  useContext,
  useRef,
  RefObject,
  ReactNode,
  useEffect,
} from "react";
import { usePathname } from "next/navigation";

const ScrollContext = createContext<RefObject<HTMLDivElement> | null>(null);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Reset scroll to top when route changes
  useEffect(() => {
    if (scrollRef?.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <ScrollContext.Provider value={scrollRef as RefObject<HTMLDivElement>}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollRef() {
  return useContext(ScrollContext);
}
