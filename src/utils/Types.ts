import { UUIDTypes } from "uuid";

export interface ExpandedSections {
  pending: boolean;
  inProgress: boolean;
  completed: boolean;
}
// Type definitions
export type StatusValue = "pending" | "in progress" | "completed";

export interface FormattedTask {
  pending: Task[];
  inprogres: Task[];
  complete: Task[];
}

export interface Task {
  id: UUIDTypes;
  title: string;
  description: string;
  status: StatusValue;
  createdAt: string;
  [key: string]: any; // optional, in case extra properties are used
}
export interface StatusOption {
  value: StatusValue;
  label: string;
  color: string;
}
export interface RouteConfig {
  path: string;
  comp: React.ReactNode;
  title: string;
  isBack?: boolean;
}