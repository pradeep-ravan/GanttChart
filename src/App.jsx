// "use client";

import GanttChart from "./components/GanttChart";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import Sidebar from "./components/Sidebar";

export default function Page() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar - Left */}
      <div className="flex-shrink-0 w-64 border-r border-gray-200">
        <Sidebar />
      </div>

      {/* Main Content Area - Center */}
      <div className="flex flex-col flex-grow overflow-hidden">
        {/* Header */}
        <div className="flex-shrink-0">
          <Header />
        </div>

        {/* Content Area - Gantt Chart */}
        <div className="flex-grow overflow-auto">
          <GanttChart />
        </div>
      </div>

      {/* Profile Section - Right */}
      <div className="flex-shrink-0 w-80 border-l border-gray-200 overflow-y-auto">
        <ProfileSection />
      </div>
    </div>
  );
}
