import React, { ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Props interface
interface ExpandableProps {
  status: boolean;
  title: string;
  children: ReactNode;
  onToggle: () => void;
}

const Expandable = ({ status, title, children, onToggle }: ExpandableProps) => {
  return (
    <div className="mb-4">
      <div
        onClick={onToggle}
        className="flex items-center justify-between w-full py-3 text-left bg-primary-gray rounded-lg px-3 cursor-pointer"
      >
        <span className="font-medium text-gray-700">{title}</span>
        {status ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
};

export default Expandable;
