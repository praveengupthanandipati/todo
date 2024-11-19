import React, { useState } from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
  const [visibleTasks, setVisibleTasks] = useState([]); //manage visible tasks array

  //function to add one more task to visible list
  const handleAddTask = () => {
    if (visibleTasks.length < tasks.length) {
      const nextTask = tasks[visibleTasks.length];
      setVisibleTasks([...visibleTasks, nextTask]); // Add next task to visible list
    }
  };

  //function to delete a task
  const handleDeleteTask = (indexToRemove) => {
    const updatedTasks = visibleTasks.filter(
      (_, index) => index !== indexToRemove
    );
    setVisibleTasks(updatedTasks); //update visible tasks
  };
  return (
    <div className="w-[800px] mx-auto">
      {visibleTasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          onDelete={() => handleDeleteTask(index)} //pass index for deletion
        />
      ))}

      <div className="text-center">
        {/* Add Task button */}
        {visibleTasks.length < tasks.length && (
          <button
            onClick={handleAddTask}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Add Task
          </button>
        )}

        {/* no tasks text message display */}
        {tasks.length === 0 && (
          <p className="text-red-500 mt-4">No tasks Available</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
