import * as Yup from "yup";
import { StatusOption } from "../../../utils/common";


export const editTaskValidationSchema = Yup.object({
  title: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title must be less than 50 characters")
    .required("Title is required"),

  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .max(200, "Description must be less than 200 characters")
    .required("Description is required"),

  status: Yup.object<StatusOption>()
    .shape({
      value: Yup.string().oneOf(["pending", "in progress", "completed"]).required(),
      label: Yup.string().required(),
      color: Yup.string().required(),
    })
    .required("Status is required")
    .nullable(false), // explicitly disallow null
});
