import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ title, isBack }) => {
  const navigate = useNavigate();
  return (
    <div className=" bg-primary px-6 py-4 text-white flex flex-row  items-center">
      {isBack && (
        <button
          onClick={() => {
            navigate("/");
          }}
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
