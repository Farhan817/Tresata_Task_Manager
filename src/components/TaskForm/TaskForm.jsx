import { Form } from "formik";
import React from "react";
import Input from "../Input/Input";
import Button from "../UI/Button";
import DropDown from "../DropDown/DropDown";
import { statusOptions } from "../../utils/common";

const TaskForm = ({
  errors,
  touched,
  isValid,
  dirty,
  onCancel,
  isEdit,
  handleSelect,
  values,
}) => {
  return (
    <Form className="space-y-6">
      <div>
        <Input
          name={"title"}
          type={"text"}
          placeholder={"Enter the title"}
          errors={errors}
          touched={touched}
        />
      </div>

      <div>
        <Input
          as={"textarea"}
          name={"description"}
          type={"text"}
          placeholder={"Enter the description"}
          errors={errors}
          touched={touched}
          rows={4}
        />
      </div>
      {isEdit && (
        <div>
          <DropDown
            value={values.status}
            options={statusOptions}
            handleSelect={handleSelect}
            error={errors}
            touched={touched}
          />
        </div>
      )}

      <div className="flex space-x-4 pt-8">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="flex-1"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="primary"
          className="flex-1"
          disabled={!isValid || !dirty}
        >
          {isEdit ? "UPDATE" : "ADD"}
        </Button>
      </div>
    </Form>
  );
};

export default TaskForm;
