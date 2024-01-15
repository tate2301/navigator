import Image from "next/image";
import React from "react";

const DocumentItem = () => {
  return (
    <div className="flex flex-row items-center space-x-2 pt-2">
      <div className="relative rounded-lg bg-red-50 p-2">
        <div className="relative h-4 w-4">
          <Image
            src={"/icons/powerpoint.png"}
            alt="document icons"
            className="flex-shrink-0 object-contain"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-medium text-slate-900">
          Theory based mathematics{" "}
        </p>
        <p className="text-xs font-medium text-slate-500 ">12 dec 2005</p>
      </div>
    </div>
  );
};

export default DocumentItem;
