import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
	const [taskName, setTaskName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (taskName.trim()) {
			addTask(taskName); // Pass the task name to the parent component
			setTaskName(""); // Clear the input field
		}
	};

	return (
		<form onSubmit={handleSubmit} className="task-form">
			<input
				type="text"
				value={taskName}
				onChange={(e) => setTaskName(e.target.value)}
				placeholder="New task"
				className="task-input"
			/>
			<button type="submit" className="save-btn">
				Save
			</button>
		</form>
	);
};

export default TaskForm;
