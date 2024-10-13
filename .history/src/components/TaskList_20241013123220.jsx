import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, handleCheck, removeTask }) => {
	return (
		<ul className="task-list">
			{tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					handleCheck={handleCheck}
					removeTask={removeTask}
				/>
			))}
		</ul>
	);
};

export default TaskList;
