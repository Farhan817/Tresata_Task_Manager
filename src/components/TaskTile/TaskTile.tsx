import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import dayjs from "dayjs";
import {
  capitalize,
  getFistLetter,
  getSelectedStatus,
} from "../../utils/common";

// Define Task type (adapt to match your actual structure)
interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
}

// Props interface
interface TaskTileProps {
  item: Task;
  onClick?: () => void;
  handelEdit: (id: string) => void;
  handelDelete: (id: string) => void;
}

const TaskTile = ({
  item,
  onClick,
  handelEdit,
  handelDelete,
}: TaskTileProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`flex items-start space-x-3 p-3 rounded-lg ${
          hovered ? "cursor-pointer" : ""
        }`}
      >
        <div className="w-8 h-8 rounded-full flex items-center justify-center content-center border-primary border-1">
          <span className="text-primary font-medium text-lg">
            {getFistLetter(item.title)}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-medium text-gray-900">
              {item.status == "completed" ? (
                <s>{item.title}</s>
              ) : (
                <>{item.title}</>
              )}
            </h3>
            <div className="flex flex-row items-center">
              <div
                className={`w-2 h-2 rounded-full ${getSelectedStatus(item.status).color}`}
              />
              <span className="text-xs px-2 py-1 rounded-full">
                {capitalize(item.status)}
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-2">{item.description}</p>

          <div className="flex flex-row justify-between">
            <p className="text-xs text-gray-400">
              {dayjs(item.createdAt).format("ddd DD, MMM YYYY")}
            </p>
            {hovered && (
              <div className="flex flex-row gap-2">
                <Pencil
                  color="#054ea2"
                  size={18}
                  onClick={() => handelEdit(item.id)}
                />
                <Trash2
                  color="red"
                  size={18}
                  onClick={() => handelDelete(item.id)}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <hr className="h-px my-8 bg-gray-100 border-0 dark:bg-gray-300" />
    </>
  );
};

export default TaskTile;
