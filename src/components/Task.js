import React from 'react';
import { DigiFormCheckbox, DigiButton } from '@digi/arbetsformedlingen-react';
import { ButtonVariation } from '@digi/arbetsformedlingen';

const Task = ({ task, onToggleComplete, onDelete, onEdit }) => {
    const handleEditClick = () => {
        const newTitle = prompt('Ange ny titel:', task.title);
        if (newTitle !== null && newTitle.trim() !== '') {
            onEdit(task.id, newTitle);
        }
    };

    return (
        <div>
            <div style={{marginBottom: '12px'}}>
                <DigiFormCheckbox
                    afLabel={task.title}
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleComplete(task.id)}
                />
            </div>
            <DigiButton afVariation={ButtonVariation.SECONDARY} onAfOnClick={handleEditClick}>
                Redigera
            </DigiButton>
            <DigiButton onAfOnClick={() => onDelete(task.id)}>Ta bort</DigiButton>
        </div>
    );
};

export default Task;
