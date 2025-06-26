import { Formik } from "formik";
import React from "react";
import TaskForm from "../../components/TaskForm/TaskForm";
import useEdit from "./hook/useEdit";
import { editTaskValidationSchema } from "./hook/EditTaskSchema";

const Edit = () => {
  const [{ formData, formikRef }, { handleSubmit, onCancel, handelSelect }] =
    useEdit();
  return (
    <div className="px-6 pb-20 mt-5">
      <Formik
        innerRef={formikRef}
        initialValues={formData}
        validationSchema={editTaskValidationSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
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
