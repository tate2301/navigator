import Avatar from "@components/avatar/Avatar";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-7xl px-4">
        {/* headiing section */}
        <div className="flex w-full flex-row items-center space-x-4">
          <div className="flex flex-1 flex-row items-center space-x-4">
            <Avatar />
            <div className="flex flex-col">
              <p className="font-semibold text-slate-900">Tatenda Bako</p>
              <p className="text-sm font-medium text-slate-600">
                Student of Mrs Madzima <span>&bull;</span>Form 5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
