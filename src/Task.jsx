import React from "react";

const Task = (props) => {
  const { taskTitle, taskDescription, isCompleted } = props; // Destructure Props
  return (
    <div className="p-5 border mb-5 bg-white border-slate-300 rounded">
      <article className="pb-4">
        <h3 className="text-xl font-semibold pb-3">{taskTitle}</h3>
        <p className="text-lg text-slate-700">{taskDescription}</p>
      </article>
      <p className="text-end">
        <span className={`${isCompleted ? "text-green-600" : "text-red-800"}`}>
          {isCompleted ? "Completed" : "Pending"}
        </span>
      </p>
    </div>
  );
};

export default Task;
