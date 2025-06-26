import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorFallback.jsx";
import Header from "../components/Header/Header.jsx";

export const Layout = ({ title, isBack, children }) => {
  return (
    <div className="min-h-screen">
      <div className="max-w-sm  min-h-screen mx-auto bg-white shadow-xl relative">
        <Header title={title} isBack={isBack} />
        {children}
      </div>
    </div>
  );
};
