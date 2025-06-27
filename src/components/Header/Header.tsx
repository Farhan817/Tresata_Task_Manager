import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  isBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, isBack = false }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-primary px-6 py-4 text-white flex flex-row items-center space-x-4">
      {isBack && (
        <button
          onClick={() => navigate("/")}
          className="p-1 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
          type="button"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      )}
      <div className="text-xl font-semibold">{title}</div>
    </div>
  );
};

export default Header;
