import { Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";

const TaskTile = ({ item, onClick, handelEdit, handelDelete }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      key={item.id}
      className={`flex items-start space-x-3 p-3 bg-gray-50 rounded-lg ${hovered ? "cursor-pointer" : ""}`}
    >
      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-purple-600 font-medium text-sm">
          {item.initial}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-medium text-gray-900">{item.title}</h3>
          <span className="text-xs text-orange-500 px-2 py-1 rounded-full">
            ● In Progress
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
        <div className="flex flex-row justify-between">
          <p className="text-xs text-gray-400">{item.date}</p>
          {hovered ? (
            <div className="flex flex-row  gap-2">
              <Pencil
                color="#054ea2"
                size={18}
                onClick={() => handelEdit(item.id)}
              />
              <Trash2 color="red" size={18} onClick={() => handelDelete(id)} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TaskTile;
