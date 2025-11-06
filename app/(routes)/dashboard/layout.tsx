"use client";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <div className="h-full w-full">
      {props.children}
    </div>
  );
}

export default DashboardLayout;
