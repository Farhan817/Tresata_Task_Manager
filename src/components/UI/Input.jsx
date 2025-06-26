import { Search, X } from 'lucide-react'
import React from 'react'

const Input = ({value,ref,className,showClearButton,containerClassName,...props}) => {
  return (
      <div className={"relative"+ containerClassName}>
        {/* Search Icon */}
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />

        {/* Input Field */}
        <input
          className={
            `w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
            transition-all duration-200
            hover:border-gray-300
            ${className}`
          }
          ref={ref}
          value={value}
          {...props}
        />

        {/* Clear Button */}
        {showClearButton && value && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    )
  }

export default Input
