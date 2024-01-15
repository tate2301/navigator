import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

const LearningActivity = () => {
  return (
    <div className="flex flex-col rounded-lg border border-slate-200/50 bg-white p-4">
      <div className="flex flex-row items-center">
        <p className="flex-1 text-sm font-medium text-slate-700">
          Learning Activity
        </p>
        <span className="text-slaate-700 flex flex-row items-center space-x-2 rounded-lg border border-slate-200/50 px-3 py-2 text-xs">
          <ArrowUpOnSquareIcon height={16} width={16} />
          <p>Export pdf</p>
        </span>
      </div>
    </div>
  );
};

export default LearningActivity;
