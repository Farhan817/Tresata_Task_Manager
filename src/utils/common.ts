import dayjs from "dayjs";
import { v6 as uuidv6 } from "uuid";
import { StatusOption, StatusValue, Task } from "./Types";


export interface FormattedTaskGroups {
  pending: Task[];
  complete: Task[];
  inprogres: Task[];
}

// Status options
export const statusOptions: StatusOption[] = [
  { value: "pending", label: "Pending", color: "bg-gray-400" },
  { value: "in progress", label: "In Progress", color: "bg-orange-500" },
  { value: "completed", label: "Completed", color: "bg-green-500" },
];

// Capitalize the first letter of the string
export const getFistLetter = (value: string): string => {
  return value.charAt(0).toUpperCase();
};

// Get status option object
export const getSelectedStatus = (
  value: StatusValue
): StatusOption | undefined => {
  return statusOptions.find((item) => item.value === value);
};

// Format tasks into grouped buckets
export const formateTasks = (list: Task[]): FormattedTaskGroups => {
  const result: FormattedTaskGroups = {
    pending: [],
    complete: [],
    inprogres: [],
  };

  list?.forEach((element) => {
    switch (element.status) {
      case "in progress":
        result.inprogres.push(element);
        break;
      case "completed":
        result.complete.push(element);
        break;
      case "pending":
        result.pending.push(element);
        break;
    }
  });

  return result;
};

// Capitalize each word in a string
export const capitalize = (str: string): string => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

// Create task payload for adding
export const createAddTaskPayload = (
  formData: Partial<Task> & { status: StatusOption | { value: StatusValue } }
): Task => {
  return {
    ...formData,
    id:  uuidv6(),
    status:  "pending",
    createdAt: dayjs().toISOString(),
  } as Task;
};

// Create task payload for editing
export const createEditTaskPayload = (
  formData: Partial<Task> & { status: StatusOption | { value: StatusValue } }
): Partial<Task> => {
  return {
    ...formData,
    status: formData.status.value ?? "pending",
  };
};
