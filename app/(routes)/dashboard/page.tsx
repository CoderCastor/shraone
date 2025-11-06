"use client";

import { useScrollRef } from "../ScrollContext";

function Dashboard() {
  const scrollRef = useScrollRef();

  return (
    <div
      className="relative h-screen w-full overflow-y-scroll bg-neutral-800 py-10"
      ref={scrollRef}
    >
      <div className="mx-auto my-2 h-72 w-10/12 rounded-xl bg-purple-800 px-2">
        This is dashboard Box 1
      </div>
      <div className="mx-auto my-2 h-72 w-10/12 rounded-xl bg-green-800 px-2">
        This is dashboard Box 1
      </div>
      <div className="mx-auto my-2 h-72 w-10/12 rounded-xl bg-orange-800 px-2">
        This is dashboard Box 1
      </div>
      <div className="mx-auto my-2 h-72 w-10/12 rounded-xl bg-blue-800 px-2">
        This is dashboard Box 1
      </div>
      <div className="mx-auto my-2 h-72 w-10/12 rounded-xl bg-pink-800 px-2">
        This is dashboard Box 1
      </div>
    </div>
  );
}

export default Dashboard;
