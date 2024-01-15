/* eslint-disable @typescript-eslint/ban-types */
import React, { ReactNode} from 'react';
// import Navbar from '@components/navigation/Navbar';
// import { useRouter } from 'next/router';
// import { Store } from '@context/Store';
import Head from 'next/head';
import DashboardNavbar from '../_components/navigation/navbar/DashboardNavbar';

type Props = {
  children?: ReactNode;
};

const layout = (props: Props) => {
  return (
    <>
    <Head>
      <title>Dashboard</title>
    </Head>
    <div className="flex flex-col">
      <div className="nav">
        <DashboardNavbar />
      </div>
      {props.children}
    </div>
  </>
  )
}

export default layout