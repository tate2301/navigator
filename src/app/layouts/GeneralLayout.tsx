import React, { type ReactNode } from "react";
import Navbar from "../_components/navigation/navbar/Navbar";
import Footer from "../_components/navigation/footer/Footer";

interface Props {
  children?: ReactNode;
}

const GeneralLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default GeneralLayout;
