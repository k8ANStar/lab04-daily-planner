import React from "react";
import Task from "./Tasks";

const TaskList = ({ tasks, handleCheck }) => {
	return (
		<ul>
			{tasks.map((task) => (
				<Task key={task.id} task={task} handleCheck={handleCheck} />
			))}
		</ul>
	);
};

export default TaskList;