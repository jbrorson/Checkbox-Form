import React from 'react';
import { DigiFormCheckbox, DigiButton } from '@digi/arbetsformedlingen-react';
import { ButtonVariation } from '@digi/arbetsformedlingen';

const Task = ({ task, onToggleComplete, onDelete }) => {
    return (
        <div>
            <div>
                <DigiFormCheckbox afLabel={task.title} type="checkbox" checked={task.completed} onChange={() => onToggleComplete(task.id)}/>
                <DigiButton afVariation={ButtonVariation.SECONDARY}>Redigera</DigiButton>
                <DigiButton onClick={() => onDelete(task.id)}>Ta bort</DigiButton>
            </div>
        </div>
    );
}

export default Task;

