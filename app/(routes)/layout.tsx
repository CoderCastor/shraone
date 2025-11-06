"use client";

import MainBar from "@/components/BottomMenuBar/MainBar";
import { ScrollProvider } from "./ScrollContext";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function Layout(props: DashboardLayoutProps) {
  return (
    <ScrollProvider>
      <div
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 3, 4, 0.2) 1px, transparent 0)`,
          backgroundSize: "8px 8px",
          backgroundRepeat: "repeat",
          position: "fixed",
          inset: 0,
          zIndex: 0,
        }}
        className="relative h-screen w-full bg-neutral-100"
      >
        <MainBar />
        {props.children}
      </div>
    </ScrollProvider>
  );
}

export default Layout;
