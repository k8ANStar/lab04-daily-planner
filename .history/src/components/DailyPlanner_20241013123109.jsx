import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import index

const DailyPlanner = () => {
	const initialTasks = [
		{ id: 1, name: "Task 1", completed: false },
		{ id: 2, name: "Task 2", completed: false },
		{ id: 3, name: "Task 3", completed: false },
	];

	const [tasks, setTasks] = useState(initialTasks);

	
	const addTask = (taskName) => {
		const newTask = {
			id: tasks.length + 1,
			name: taskName,
			completed: false,
		};
		setTasks([...tasks, newTask]);
	};

	
	const removeTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};


	const handleCheck = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const remainingTasks = tasks.filter((task) => !task.completed).length;

	return (
		<div className="planner-container">
			<h1>Daily Planner</h1>
			<TaskForm addTask={addTask} />
			<h2>You have {remainingTasks} tasks remaining</h2>
			<TaskList
				tasks={tasks}
				handleCheck={handleCheck}
				removeTask={removeTask}
			/>
		</div>
	);
};

export default DailyPlanner;
