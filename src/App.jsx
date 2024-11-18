import React, { useState } from "react";
import Tasks from "./Tasks"; //Import Tasks Component

function App() {
  const [visibleCount, setVisibleCount] = useState(1);
  const [noMoreTasks, setNoMoreTasks] = useState(false);
  //Handle load more tasks for button
  const handleMoreTasks = () => {
    if (visibleCount < tasks.length) {
      setVisibleCount(visibleCount + 1); //increasing visible task count by 1
      setNoMoreTasks(false); //Reset "No More tasks" message
    } else if (visibleCount >= tasks.length) {
      setNoMoreTasks(true);
    }
  };

  // Data list
  const tasks = [
    {
      taskTitle: "Learn Javascript",
      taskDescription:
        "Learn how to use JavaScript — a powerful and flexible programming language for adding website interactivity.",
      isCompleted: true,
    },
    {
      taskTitle: "Learn Typescript",
      taskDescription:
        "Learn to supercharge your web-applications with the powerful typed language from Microsoft!",
      isCompleted: false,
    },
    {
      taskTitle: "Learn React",
      taskDescription:
        "Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.",
      isCompleted: true,
    },
    {
      taskTitle: "Learn Python",
      taskDescription:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      isCompleted: false,
    },
    {
      taskTitle: "Learn HTML",
      taskDescription:
        "In this HTML tutorial, you will find more than 200 examples. With our online 'Try it Yourself' editor, you can edit and test each example yourself.",
      isCompleted: true,
    },
  ];
  return (
    <div className="w[800px] mx-auto">
      <Tasks
        title="Tasks list for the month of November 2024"
        tasksList={[...tasks].splice(0, visibleCount)}
      />

      <div className="text-center">
        {noMoreTasks && (
          <p className="py-4 text-red-700">
            No More Tasks Available to Display
          </p>
        )}
        <button
          className="bg-blue-700 text-white px-5 py-2 rounded"
          onClick={handleMoreTasks}
        >
          Load More Tasks
        </button>
      </div>
    </div>
  );
}

export default App;
