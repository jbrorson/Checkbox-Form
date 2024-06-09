import React, { useState, useEffect } from 'react';
import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Content from './components/Content';

const App = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = (title) => {
        setTasks(prevTasks => [...prevTasks, { id: Date.now(), title, completed: false }]);
    };

    const handleToggleComplete = (id) => {
        setTasks(prevTasks => prevTasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleDeleteTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <Header />
            <DigiLayoutContainer afVerticalPadding>
                <Content />
                <NewTaskForm onAddTask={handleAddTask} />
                <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} onDelete={handleDeleteTask} />
            </DigiLayoutContainer>
            <Footer />
        </div>
    );
}

export default App;
