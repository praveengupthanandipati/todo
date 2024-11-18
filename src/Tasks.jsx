import React from "react";
import Task from "./Task";

const Tasks = (props) => {
  const { title, tasksList } = props; //Destructure Props
  return (
    <div className="w-[800px] mx-auto my-4 p-6 rounded bg-slate-100">
      <h1 className="text-center text-xl font-semibold text-black pb-5">
        {title}
      </h1>
      {tasksList.map((task, index) => (
        <Task key={index}
          taskTitle={task.taskTitle}
          taskDescription={task.taskDescription}
          isCompleted={task.isCompleted}
        />
      ))}
    </div>
  );
};

export default Tasks;
