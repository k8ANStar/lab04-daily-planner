import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

const App = () => {
	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
	};

	const toggleTaskCompletion = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const completedTasksCount = tasks.filter((task) => task.completed).length;

	return (
		<div>
			<h1>Day Planner</h1>
			<h2>{completedTasksCount} tasks completed</h2>
			<TaskForm addTask={addTask} />
			<ul>
				{tasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						toggleTaskCompletion={toggleTaskCompletion}
						deleteTask={deleteTask}
					/>
				))}
			</ul>
		</div>
	);
};

export default App;
