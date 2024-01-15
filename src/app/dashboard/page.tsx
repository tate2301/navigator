import OverviewHeadingSection from "@components/page-sections/overview-page-sections/OverviewHeadingSection";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-7xl px-4">
        {/* headiing section */}
          <OverviewHeadingSection />
      </div>
    </div>
  );
};

export default Dashboard;
