import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FormikErrors, FormikValues } from "formik";
import { StatusOption } from "../../utils/Types";

interface DropDownProps {
  options: StatusOption[];
  value: StatusOption;
  handleSelect: (option: StatusOption) => void;
  error?: FormikErrors<FormikValues>;
  touched?: FormikValues;
}

const DropDown: React.FC<DropDownProps> = ({
  options,
  handleSelect,
  error,
  touched,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 border rounded-lg bg-white text-left flex items-center justify-between transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
          error?.status && touched?.status
            ? "border-red-300 focus:ring-red-500"
            : "border-gray-200 hover:border-gray-300"
        }`}
      >
        <div className="flex items-center space-x-3">
          <div
            className={`w-3 h-3 rounded-full ${value?.color || "bg-gray-400"}`}
          />
          <span className="text-gray-900">
            {value?.label || "Select status"}
          </span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                handleSelect(option);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                value?.value === option.value ? "bg-purple-50" : ""
              }`}
            >
              <div className={`w-3 h-3 rounded-full ${option.color}`} />
              <span className="text-gray-900">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
