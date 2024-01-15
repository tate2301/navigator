/* eslint-disable @typescript-eslint/ban-types */
import React, { ReactNode } from "react";
// import Navbar from '@components/navigation/Navbar';
// import { useRouter } from 'next/router';
// import { Store } from '@context/Store';
import Head from "next/head";
import DashboardNavbar from "../_components/navigation/navbar/DashboardNavbar";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "src/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Navigator | Dashboard",
  description: "School management dashboard",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

type Props = {
  children?: ReactNode;
};

const layout = (props: Props) => {
  return (
    <>
      <html lang="en">
        <body className={`font-sans ${inter.variable}`}>
          <TRPCReactProvider cookies={cookies().toString()}>
            <div className="flex flex-col">
              <div className="nav">
                <DashboardNavbar />
              </div>
              {props.children}
            </div>
          </TRPCReactProvider>
        </body>
      </html>
    </>
  );
};

export default layout;
