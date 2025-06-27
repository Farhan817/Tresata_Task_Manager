import React, { forwardRef, InputHTMLAttributes } from "react";
import { Search, X } from "lucide-react";

// Define the props interface
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  className?: string;
  containerClassName?: string;
  showClearButton?: boolean;
  onClear?: () => void;
}

// Forward ref to the input element
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      className = "",
      containerClassName = "",
      showClearButton = false,
      onClear,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`relative ${containerClassName}`}>
        {/* Search Icon */}
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />

        {/* Input Field */}
        <input
          className={`
            w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
            transition-all duration-200
            hover:border-gray-300
            ${className}
          `}
          ref={ref}
          value={value}
          {...props}
        />

        {/* Clear Button */}
        {showClearButton && value && onClear && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
