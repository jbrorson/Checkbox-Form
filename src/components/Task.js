// import React from 'react';
// import { DigiFormCheckbox, DigiButton } from '@digi/arbetsformedlingen-react';
// import { ButtonVariation } from '@digi/arbetsformedlingen';

// const Task = ({ id, title, onDelete, onEdit }) => {
//     const handleEditClick = () => {
//         const newTitle = prompt('Ange ny titel:', title);
//         if (newTitle !== null) {
//             onEdit(id, newTitle);
//         }
//     };

//     const handleDeleteClick = () => {
//         if (window.confirm('Är du säker på att du vill ta bort uppgiften?')) {
//             onDelete(id);
//         }
//     };

//     return (
//         <div>
//             <DigiFormCheckbox afLabel={title} />
//             <DigiButton afVariation={ButtonVariation.SECONDARY} onClick={handleEditClick}>Redigera</DigiButton>
//             <DigiButton onClick={handleDeleteClick}>Ta bort</DigiButton>
//         </div>
//     );
// }

// export default Task;

// Task.js
import React from 'react';

const Task = ({ task, onToggleComplete, onDelete }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            </span>
            <button onClick={() => onDelete(task.id)}>Ta bort</button>
        </div>
    );
}

export default Task;

