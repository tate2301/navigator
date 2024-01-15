/* eslint-disable @typescript-eslint/consistent-type-imports */
import {
  ArrowRightOnRectangleIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { data } from "@data/index";
import { NavLinkProps } from "@lib/types";
import { headers } from "next/headers";

const DashboardNavbar = () => {
  const headersList = headers();
  const activePath = headersList.get("referer");

  console.log('active path', activePath)

  return (
    <div className="main-border-b w-full">
      <div className="mx-auto flex w-full max-w-7xl flex-row items-center space-x-4 px-4 py-4 ">
        <div className="flex flex-row items-center space-x-2  pl-2">
          {/* <Image src={'/icon.svg'} width={20} height={20} alt="site logo" className='rounded' /> */}
          <p className="pr-8 text-lg font-semibold text-slate-900">DigiForge</p>
        </div>
        <div className="hidden flex-row items-center space-x-4 text-sm md:flex">
          {data.student_nav_options.map((item: NavLinkProps, index) => (
            <Link
              href={item.location}
              key={index}
              className={`${
                activePath === item.location
                  ? "font-semibold text-primary-original dark:text-white"
                  : "main-link-text "
              }  hover:font-medium`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex-1" />

        {/* <UserMenu /> */}
        <button className="main-link-text rounded-full p-1 hover:bg-slate-100 dark:hover:bg-slate-800">
          <BellIcon height={20} width={20} />
        </button>
        <button className="main-link-text rounded-full p-1 hover:bg-slate-100 dark:hover:bg-slate-800">
          <ArrowRightOnRectangleIcon height={20} width={20} />
        </button>
        <button className="h-6 w-6 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
          <div className="h-full w-full rounded-full bg-slate-200 p-1" />
        </button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
