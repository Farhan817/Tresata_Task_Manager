import React from "react";
import { Formik, FormikHelpers, FormikProps } from "formik";
import TaskForm from "../../components/TaskForm/TaskForm";
import useEdit from "./hook/useEdit";
import { editTaskValidationSchema } from "./hook/EditTaskSchema";
import { Task } from "../../utils/Types";
// Ensure Task interface is exported from here

const Edit: React.FC = () => {
  const [{ formData, formikRef }, { handleSubmit, onCancel, handelSelect }] =
    useEdit();

  return (
    <div className="px-6 pb-20 mt-5">
      <Formik<Task>
        enableReinitialize
        innerRef={formikRef}
        initialValues={formData}
        validationSchema={editTaskValidationSchema}
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<Task>) => (
          <TaskForm
            {...props}
            onCancel={onCancel}
            isEdit={true}
            handleSelect={handelSelect}
          />
        )}
      </Formik>
    </div>
  );
};

export default Edit;
