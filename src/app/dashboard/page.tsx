import OverviewActivityDocumentsSection from "@components/page-sections/overview-page-sections/OverviewActivityDocumentsSection";
import OverviewHeadingSection from "@components/page-sections/overview-page-sections/OverviewHeadingSection";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 py-8">
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4">
        <OverviewHeadingSection />
        <OverviewActivityDocumentsSection />
      </div>
    </div>
  );
};

export default Dashboard;
