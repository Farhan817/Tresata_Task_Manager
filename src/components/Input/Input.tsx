import React from "react";
import { ErrorMessage, Field, FormikErrors, FormikValues } from "formik";
import { FieldAttributes } from "formik/dist/Field";

// Define allowed input types for Formik's Field
type FormikInputType = "text" | "textarea";

interface InputProps extends FieldAttributes<any> {
  name: string;
  type?: FormikInputType;
  as?: string;
  placeholder?: string;
  errors: FormikErrors<FormikValues>;
  touched: FormikValues;
  rows?: number;
}

const Input: React.FC<InputProps> = ({
  as,
  name,
  type = "text",
  errors,
  touched,
  placeholder,
  ...props
}) => {
  const hasError = errors[name] && touched[name];

  return (
    <>
      <Field
        as={as}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border rounded-lg bg-white text-gray-900 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
          hasError
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
