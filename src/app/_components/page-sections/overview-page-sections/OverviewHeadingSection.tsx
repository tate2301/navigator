import Avatar from "@components/avatar/Avatar";
import React from "react";

const OverviewHeadingSection = () => {
  return (
    <div className="flex flex-1 flex-row items-center space-x-4">
      <Avatar />
      <div className="flex flex-col">
        <p className="font-semibold text-slate-900">Tatenda Bako</p>
        <p className="text-sm font-medium text-slate-600">
          Student of Mrs Madzima <span>&bull;</span>Form 5
        </p>
      </div>
    </div>
  );
};

export default OverviewHeadingSection;
