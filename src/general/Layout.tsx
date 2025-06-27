import React, { ReactNode } from "react";
import Header from "../components/Header/Header";

interface LayoutProps {
  title: string;
  isBack?: boolean;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, isBack = false, children }) => {
  return (
    <div className="min-h-screen">
      <div className="max-w-sm min-h-screen mx-auto bg-white shadow-xl relative">
        <Header title={title} isBack={isBack} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
