"use client";
import { useState } from "react";
import { Plus, ChevronUp, ChevronDown, Expand } from "lucide-react";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import Search from "../../components/Search/Search";
import Header from "../../components/Header/Header";
import Expandable from "../../components/Expandables/Expandable";
import TaskTile from "../../components/TaskTile/TaskTile";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import useHome from "./hook/useHome";

const todoItems = [
  {
    id: "1",
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    status: "In Progress",
    date: "Wed 31, July 2019",
    initial: "L",
  },
  {
    id: "2",
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    status: "In Progress",
    date: "Wed 31, July 2019",
    initial: "L",
  },
];

const Home = () => {
  const [{ expandedSections }, { toggleSection, handelEdit, handelDelete }] =
    useHome();

  return (
    <>
      <Search />

      <div className="px-6 pb-20">
        <Expandable
          title={`In Progress (${todoItems.length})`}
          status={expandedSections.inProgress}
          onToggle={() => toggleSection("inProgress")}
        >
          {expandedSections.inProgress && (
            <div className="space-y-3">
              {todoItems.map((item) => (
                <TaskTile
                  item={item}
                  handelEdit={handelEdit}
                  handelDelete={handelDelete}
                />
              ))}
            </div>
          )}
        </Expandable>
        <Expandable
          title={`Pending (${todoItems.length})`}
          status={expandedSections.pending}
          onToggle={() => toggleSection("pending")}
        >
          {expandedSections.pending && (
            <div className="space-y-3">
              {todoItems.map((item) => (
                <TaskTile
                  item={item}
                  handelEdit={handelEdit}
                  handelDelete={handelDelete}
                />
              ))}
            </div>
          )}
        </Expandable>
        <Expandable
          title={`Completed (${todoItems.length})`}
          status={expandedSections.completed}
          onToggle={() => toggleSection("completed")}
        >
          {expandedSections.completed && (
            <div className="space-y-3">
              {todoItems.map((item) => (
                <TaskTile
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
