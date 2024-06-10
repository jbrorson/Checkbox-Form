import React from "react";
import { DigiFormCheckbox, DigiButton } from "@digi/arbetsformedlingen-react";
import { ButtonVariation } from "@digi/arbetsformedlingen";
import "./Task.scss";

const Task = ({ task, onToggleComplete, onDelete, onEdit }) => {
    const handleEditClick = () => {
        const newTitle = prompt("Ange ny titel:", task.title);
        if (newTitle !== null && newTitle.trim() !== "") {
            onEdit(task.id, newTitle);
        }
    };

    return (
        <div>
            <div className="TaskContainer">
                <DigiFormCheckbox
                    afLabel={task.title}
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleComplete(task.id)}
                />
            </div>
            <div className="ButtonStyle">
                <DigiButton afVariation={ButtonVariation.SECONDARY} onAfOnClick={handleEditClick}>
                    Redigera
                </DigiButton>
                <DigiButton onAfOnClick={() => onDelete(task.id)}>
                    Ta bort
                </DigiButton>
            </div>        
        </div>
    );
}

export default Task;
