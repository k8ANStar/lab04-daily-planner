import React from "react";

const Task = ({ task, handleCheck }) => {
	return (
		<li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
			<input
				type="checkbox"
				checked={task.completed}
				onChange={() => handleCheck(task.id)}
			/>
			<span style={{ marginLeft: "10px", flexGrow: 1 }}>{task.name}</span>
			<button style={{ marginLeft: "20px", background: "red", color: "white" }}>
				Remove
			</button>
		</li>
	);
};

export default Task;
