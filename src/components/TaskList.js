import React from "react";
import Task from "./Task/Task";

const TaskList = ({ tasks, onToggleComplete, onDeleteTask, onEditTask }) => {
    return (
        <div>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                    onDelete={onDeleteTask}
                    onEdit={onEditTask}
                />
            ))}
        </div>
    );
};

export default TaskList;
