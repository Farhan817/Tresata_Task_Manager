"use client";

import { FC } from "react";
import Search from "../../components/Search/Search";

import Expandable from "../../components/Expandables/Expandable";
import TaskTile from "../../components/TaskTile/TaskTile";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import useHome from "./hook/useHome";
import { ExpandedSections, FormattedTask, Task } from "../../utils/Types";
import React from "react";

// Define the task type

const Home = () => {
  const [
    { expandedSections, formatedtask },
    { toggleSection, handelEdit, handelDelete },
  ]: [
    {
      expandedSections: ExpandedSections;
      formatedtask: FormattedTask;
    },
    {
      toggleSection: (section: keyof ExpandedSections) => void;
      handelEdit: (item: Task) => void;
      handelDelete: (itemId: string) => void;
    },
  ] = useHome();

  return (
    <>
      <Search />

      <div className="px-6 pb-20">
        <Expandable
          title={`In Progress (${formatedtask?.inprogres.length})`}
          status={expandedSections.inProgress}
          onToggle={() => toggleSection("inProgress")}
        >
          {expandedSections.inProgress && (
            <div className="space-y-3 mt-3">
              {formatedtask?.inprogres.map((item) => (
                <TaskTile
                  key={item.id}
                  item={item}
                  handelEdit={handelEdit}
                  handelDelete={handelDelete}
                />
              ))}
            </div>
          )}
        </Expandable>

        <Expandable
          title={`Pending (${formatedtask?.pending.length})`}
          status={expandedSections.pending}
          onToggle={() => toggleSection("pending")}
        >
          {expandedSections.pending && (
            <div className="space-y-3 mt-3">
              {formatedtask?.pending.map((item) => (
                <TaskTile
                  key={item.id}
                  item={item}
                  handelEdit={handelEdit}
                  handelDelete={handelDelete}
                />
              ))}
            </div>
          )}
        </Expandable>

        <Expandable
          title={`Completed (${formatedtask?.complete.length})`}
          status={expandedSections.completed}
          onToggle={() => toggleSection("completed")}
        >
          {expandedSections.completed && (
            <div className="space-y-3 mt-3">
              {formatedtask?.complete.map((item) => (
                <TaskTile
                  key={item.id}
                  item={item}
                  handelEdit={handelEdit}
                  handelDelete={handelDelete}
                />
              ))}
            </div>
          )}
        </Expandable>
      </div>

      <FloatingButton />
    </>
  );
};

export default Home;
