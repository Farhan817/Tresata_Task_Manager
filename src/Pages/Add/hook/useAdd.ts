import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAddTaskPayload, Task } from "../../../utils/common";
import { add } from "../../../utils/Slice/TaskSlice";

type FormData = Pick<Task, "title" | "description">;

const useAdd = (): [
  { formData: FormData },
  {
    handleSubmit: (value: FormData) => void;
    onCancel: () => void;
  }
] => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState<{ formData: FormData }>({
    formData: {
      title: "",
      description: "",
    },
  });

  const handleSubmit = (value: FormData) => {
    const payload = createAddTaskPayload(value);
    dispatch(add(payload));
    navigate("/");
  };

  const onCancel = () => {
    navigate("/");
  };

  return [state, { handleSubmit, onCancel }];
};

export default useAdd;
