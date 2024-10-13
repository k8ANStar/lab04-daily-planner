import React from "react";

const Task = ({ task, handleCheck, removeTask }) => {
	return (
		<li className="task-item">
			<input
				type="checkbox"
				checked={task.completed}
				onChange={() => handleCheck(task.id)}
				className="task-checkbox"
			/>
			<span className={task.completed ? "task-name completed" : "task-name"}>
				{task.name}
			</span>
			<button onClick={() => removeTask(task.id)} className="remove-btn">
				Remove
			</button>
		</li>
	);
};

export default Task;
