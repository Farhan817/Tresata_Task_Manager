import React from "react";
import { Formik, FormikProps } from "formik";
import { taskValidationSchema } from "./hook/AddFormSchema";
import useAdd from "./hook/useAdd";
import TaskForm from "../../components/TaskForm/TaskForm";
import { Task } from "../../utils/Types";

const Add: React.FC = () => {
  const [{ formData }, { handleSubmit, onCancel }] = useAdd();

  return (
    <div className="px-6 pb-20 mt-5">
      <Formik<Task>
        initialValues={formData}
        validationSchema={taskValidationSchema}
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<Task>) => (
          <TaskForm {...props} onCancel={onCancel} />
        )}
      </Formik>
    </div>
  );
};

export default Add;
