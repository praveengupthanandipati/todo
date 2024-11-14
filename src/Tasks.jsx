import React from "react";
// import { useState } from "react";

const Tasks = (props) => {
  const { title, tasksList } = props;
//   const [tasks, setTasks] = useState(taskList);
  const btnClick = () => alert(title);
  return (
    <div className="w-[1000px] mx-auto my-4">
      <h1 className="text-3xl font-bold text-center">{title}</h1>

      {tasksList.map((task) => (
        <div className="shadow p-4 rounded my-4">
          <article className="pb-4">
            <h5
              className={`text-xl ${
                task.isCompleted ? "line-through" : "text-gray-800"
              }`}
            >
              {task.taskTitle}
            </h5>
            <p
              className={`text-md ${
                task.isCompleted ? "line-through" : "text-gray-700"
              }`}
            >
              {task.taskDescription}
            </p>
          </article>
          <p
            className={`text-lg ${
              task.isCompleted ? "text-green-600" : "text-red-700"
            }`}
          >
            {task.isCompleted ? "Completed" : "Pending"}
          </p>
          <a
            href="#"
            class="inline-flex font-medium items-center text-blue-600 hover:underline"
          >
            Update
          </a>
        </div>
      ))}
      <button
        className="bg-blue-700 text-white block p-4 w-full rounded-lg"
        onClick={btnClick}
      >
        + Add New Task
      </button>
    </div>
  );
};

export default Tasks;
