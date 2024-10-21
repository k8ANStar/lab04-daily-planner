import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const DailyPlanner = () => {
	const initialTasks = [
		{ id: 1, name: "Task 1", completed: false },
		{ id: 2, name: "Task 2", completed: false },
		{ id: 3, name: "Task 3", completed: false },
	];

	const [tasks, setTasks] = useState(initialTasks);
	const [filter, setFilter] = useState("all");

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
	const filteredTasks = tasks.filter((task) => {
		if (filter === "completed") return task.completed;
		if (filter === "pending") return !task.completed;
		return true;
	});

	const remainingTasks = tasks.filter((task) => !task.completed).length;

	return (
		<div className="planner-container">
			<h1>Daily Planner</h1>
			<TaskForm addTask={addTask} />
			<h2>You have {remainingTasks} tasks remaining</h2>

			{/* Filter Section with chips */}
			<div className="task-filter-chips">
				<button
					className={`chip ${filter === "all" ? "active" : ""}`}
					onClick={() => setFilter("all")}
				>
					All
				</button>
				<button
					className={`chip ${filter === "completed" ? "active" : ""}`}
					onClick={() => setFilter("completed")}
				>
					Completed
				</button>
				<button
					className={`chip ${filter === "pending" ? "active" : ""}`}
					onClick={() => setFilter("pending")}
				>
					Pending
				</button>
			</div>

			<TaskList
				tasks={filteredTasks}
				handleCheck={handleCheck}
				removeTask={removeTask}
			/>
		</div>
	);
};

export default DailyPlanner;