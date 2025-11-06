"use client";

import { useScrollRef } from "@/app/(routes)/ScrollContext";

export default function SettingsPage() {
  const scrollRef = useScrollRef();

  return (
    <div
      ref={scrollRef}
      className="h-full w-full overflow-y-scroll"
    >
      {/* Your settings content here */}
      <div className="p-10">
        <h1>Settings</h1>
      </div>
    </div>
  );
}
