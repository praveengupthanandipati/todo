import React from "react";

const TaskCard = ({ task, onDelete }) => {
  const { taskTitle, taskDescription, isCompleted } = task;
  return (
    <div className="p-4 border-blue-300 rounded shadow-md my-2">
      <article className="pb-3">
        <h3 className="font-bold text-lg">{taskTitle}</h3>
        <p>{taskDescription}</p>
      </article>
      <div className="flex justify-between">
        <p>
          Task Status:
          <span className={isCompleted ? "text-green-500" : "text-red-700"}>
            {isCompleted ? "Completed" : "Pending"}
          </span>
        </p>
        <button
          className="p-2 bg-red-600 text-white rounded hover:bg-red-800"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
