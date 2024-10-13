import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const DailyPlanner = () => {
	const initialTasks = [
		{ id: 1, name: "Task 1", completed: false },
		{ id: 2, name: "Task 2", completed: false },
		{ id: 3, name: "Task 3", completed: false },
	];

	const [tasks, setTasks] = useState(initialTasks);

	const remainingTasks = tasks.filter((task) => !task.completed).length;

	useEffect(() => {
		setTasks(initialTasks);
	}, []);

	const handleCheck = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	return (
		<div style={{ padding: "20px" }}>
			<h1>Daily Planner</h1>
			<TaskForm />
			<h2>You have {remainingTasks} tasks remaining</h2>
			<TaskList tasks={tasks} handleCheck={handleCheck} />
		</div>
	);
};

export default DailyPlanner;
