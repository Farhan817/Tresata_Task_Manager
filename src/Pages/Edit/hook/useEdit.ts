import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  createEditTaskPayload,
  getSelectedStatus,
} from "../../../utils/common";
import { edit } from "../../../utils/Slice/TaskSlice";
import { FormikProps } from "formik";
import { StatusOption, Task } from "../../../utils/Types";
import { RootState } from "../../../utils/Store/Store";

interface LocationState {
  id: string;
}

interface UseEditReturn {
  formData: Task;
  formikRef: React.RefObject<FormikProps<Task>>;
}

const useEdit = (): [
  UseEditReturn,
  {
    handleSubmit: (value: Task) => void;
    onCancel: () => void;
    handelSelect: (value: StatusOption) => void;
  }
] => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { id: taskId } = location.state as LocationState;

  const taskList = useSelector((state: RootState) => state.tasks);
  const formikRef = useRef<FormikProps<Task>>(null);

  const [formData, setFormData] = useState<Task>({
    id: "",
    title: "",
    description: "",
    createdAt: "",
    status: { value: "pending", label: "Pending", color: "bg-gray-400" },
  });

  useEffect(() => {
    const selectedTask = taskList.find((item) => item.id === taskId);
    if (selectedTask) {
      setFormData({
        ...selectedTask,
        status: getSelectedStatus(selectedTask.status),
      });
    }
  }, [taskId, taskList]);

  const handleSubmit = (value: Task) => {
    const payload = createEditTaskPayload(value);
    dispatch(edit(payload));
    navigate("/");
  };

  const onCancel = () => {
    navigate("/");
  };

  const handelSelect = (value: StatusOption) => {
    formikRef.current?.setFieldValue("status", value);
  };

  return [
    { formData, formikRef },
    { handleSubmit, onCancel, handelSelect },
  ];
};

export default useEdit;
