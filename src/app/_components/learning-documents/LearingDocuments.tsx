import DocumentItem from "@components/document-item/DocumentItem";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import React from "react";

function LearingDocuments() {
  return (
    <div className="flex flex-col rounded-lg space-y-2 divide-y-[1px] divide-slate-200/50 border border-slate-200/50 bg-white p-4">
      <div className="flex flex-row items-center">
        <p className="flex-1 text-sm font-medium text-slate-700">Documents</p>
        <span className="text-slate-700 ">
          <EllipsisHorizontalIcon height={20} width={20} />
        </span>
      </div>
{[1,2,3,4].map((item, index)=>(
    <DocumentItem key={index} />
))}
    </div>
  );
}

export default LearingDocuments;
