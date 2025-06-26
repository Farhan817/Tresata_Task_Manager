import { ErrorMessage, Field } from "formik";
import React from "react";

const Input = ({as,name, type,errors,touched,placeholder,...props}) => {
  return (
    <>
      <Field
      as={as}
        name={name }
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border rounded-lg bg-white text-gray-900 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
          errors[name] && touched[name]
            ? "border-red-300 focus:ring-red-500"
            : "border-gray-200 hover:border-gray-300"
        }`}
        {...props}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="mt-2 text-sm text-red-600"
      />
    </>
  );
};

export default Input;
