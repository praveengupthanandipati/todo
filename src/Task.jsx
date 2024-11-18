import React from "react";

const Task = (props) => {
  const { taskTitle, taskDescription, isCompleted } = props; // Desctruction props
  return (
    <div className="p-5 border mb-5 bg-white border-slate-200 rounded">
      <article className="pb-4">
        <h3 className="text-xl font-semibold pb-3">{taskTitle}</h3>
        <p>{taskDescription}</p>
      </article>
      <p className="text-end">
        <span className={`${isCompleted ? "text-green-600" : "text-red-700"}`}>
          {isCompleted ? "Completed" : "Pending"}
        </span>
      </p>
    </div>
  );
};

export default Task;
