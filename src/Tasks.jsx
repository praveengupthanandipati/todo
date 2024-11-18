import React from "react";
import Task from "./Task";

const Tasks = (props) => {
  const { title, tasksList } = props; //Destructure Props
  return (
    <div className="w-[800px] my-4 mx-auto bg-slate-100 rounded p-6">
      <h1 className="text-xl font-bold pb-3 text-center">{title}</h1>
      {tasksList.map((task, index) => (
        <Task
          key={index}
          taskTitle={task.taskTitle}
          taskDescription={task.taskDescription}
          isCompleted={task.isCompleted}
        />
      ))}
    </div>
  );
};

export default Tasks;
