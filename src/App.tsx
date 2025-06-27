import React, { Suspense, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./general/Router";

interface PageWithHeaderProps {
  children: ReactNode;
}

export const PageWithHeader: React.FC<PageWithHeaderProps> = ({ children }) => (
  <div className="flex h-full flex-col">{children}</div>
);

export const App: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={"loading"}>
      <div className="h-full bg-indigo-50">
        <Router />
      </div>
    </Suspense>
  </BrowserRouter>
);
