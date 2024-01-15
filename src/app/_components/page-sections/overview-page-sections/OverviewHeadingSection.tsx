import Avatar from "@components/avatar/Avatar";
import { ShareIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, DocumentIcon } from "@heroicons/react/24/solid";
import React from "react";

const OverviewHeadingSection = () => {
  return (
    <div className="flex flex-row items-center space-x-4">
      <div className="flex flex-1 flex-row items-center space-x-4">
        <Avatar />
        <div className="flex flex-col">
          <p className="font-semibold text-slate-900">Tatenda Bako</p>
          <p className="text-xs font-medium text-slate-500">
            Student of Mrs Madzima <span className="px-1">&bull;</span>Form 5
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-2 rounded-lg border border-slate-200/50 bg-white px-3 py-2 text-slate-600">
        <DocumentIcon height={16} width={16} />
        <p className="text-sm ">This term</p>
        <ChevronDownIcon height={16} width={16} />
      </div>
      <button className="flex flex-row bg-primary-original hover:bg-primary-dark items-center space-x-2 rounded-lg border border-slate-200/50 px-3 py-2 text-white">
        <p className="text-sm ">Share report</p>
        <ShareIcon height={16} width={16} />
      </button>

    </div>
  );
};

export default OverviewHeadingSection;
