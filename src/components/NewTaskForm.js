import React, { useState } from 'react';
import { DigiButton, DigiLayoutContainer } from '@digi/arbetsformedlingen-react';

const NewTaskForm = ({ onAddTask }) => {
    const [newTask, setNewTask] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTask.trim() === '') {
            setErrorMessage('Du måste ange en uppgift.');
        } else {
            onAddTask(newTask);
            setNewTask('');
            setErrorMessage('');
        }
    };

    return (
        <DigiLayoutContainer afNoGutter afVerticalPadding>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Lägg till ny uppgift"
            />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <DigiButton afType="submit">Lägg till uppgift</DigiButton>
        </form>
        </DigiLayoutContainer>
    );
}

export default NewTaskForm;

