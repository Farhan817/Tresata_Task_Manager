import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/UI/Button";
import { Form, Formik } from "formik";
import { taskValidationSchema } from "./hook/AddFormSchema";
import useAdd from "./hook/useAdd";
import TaskForm from "../../components/TaskForm/TaskForm";

const Add = () => {
  const [{ formData }, { handleSubmit, onCancel }] = useAdd();
  return (
    <div className="px-6 pb-20 mt-5">
      <Formik
        initialValues={formData}
        validationSchema={taskValidationSchema}
        onSubmit={handleSubmit}
      >
        {(props) => <TaskForm {...props} onCancel={onCancel} />}
      </Formik>
    </div>
  );
};

export default Add;
