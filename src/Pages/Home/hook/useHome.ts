import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formateTasks, FormattedTaskGroups } from "../../../utils/common";
import { remove } from "../../../utils/Slice/TaskSlice";

import { Task } from "../../../utils/Types";
import { RootState } from "../../../utils/Store/Store";

// Define types
type ExpandedSections = {
  inProgress: boolean;
  pending: boolean;
  completed: boolean;
};

type UseHomeReturn = [
  {
    expandedSections: ExpandedSections;
    formatedtask: FormattedTaskGroups;
  },
  {
    toggleSection: (section: keyof ExpandedSections) => void;
    handelEdit: (id: string) => void;
    handelDelete: (id: string) => void;
  }
];

const useHome = (): UseHomeReturn => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const taskList = useSelector((state: RootState) => state?.tasks) as Task[];

  const [formatedtask, Setformatedtask] = useState<FormattedTaskGroups>({
    inprogres: [],
    complete: [],
    pending: [],
  });

  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    inProgress: true,
    pending: false,
    completed: false,
  });

  useEffect(() => {
    Setformatedtask(formateTasks(taskList));
  }, [taskList]);

  const toggleSection = (section: keyof ExpandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handelEdit = (id: string) => {
    navigate("/edit", { state: { id } });
  };

  const handelDelete = (id: string) => {
    dispatch(remove(id));
  };

  return [
    { expandedSections, formatedtask },
    { toggleSection, handelEdit, handelDelete },
  ];
};

export default useHome;
