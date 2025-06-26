import { Plus } from "lucide-react";
import React from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const FloatingButton = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute bottom-6 right-6">
      <Button
        size="lg"
        className=" w-16 h-16 rounded-full  shadow-lg"
        onClick={() => navigate("/add")}
      >
        <Plus size={48} />
      </Button>
    </div>
  );
};

export default FloatingButton;
