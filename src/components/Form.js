import React, { useState, useEffect } from 'react';

const Form = () => {
    const initialCheckboxes = [
        { id: 'checkbox1', label: 'Alternativ 1', checked: false },
        { id: 'checkbox2', label: 'Alternativ 2', checked: false },
        { id: 'checkbox3', label: 'Alternativ 3', checked: false }
    ];

    const [checkboxes, setCheckboxes] = useState(() => {
        const savedCheckboxes = localStorage.getItem('checkboxes');
        return savedCheckboxes ? JSON.parse(savedCheckboxes) : initialCheckboxes;
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        localStorage.setItem('checkboxes', JSON.stringify(checkboxes));
    }, [checkboxes]);

    const handleCheckboxChange = (event, id) => {
        const updatedCheckboxes = checkboxes.map(checkbox =>
            checkbox.id === id ? { ...checkbox, checked: event.target.checked } : checkbox
        );
        setCheckboxes(updatedCheckboxes);
        setErrorMessage('');
        setSuccessMessage('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const allChecked = checkboxes.every(checkbox => checkbox.checked);
        if (!allChecked) {
            setErrorMessage('Du måste markera alla checkboxar.');
        } else {
            setErrorMessage('');
            setSuccessMessage('Tack för dina svar!');
            // Töm checkboxarna efter att formuläret har skickats
            const resetCheckboxes = checkboxes.map(checkbox => ({ ...checkbox, checked: false }));
            setCheckboxes(resetCheckboxes);
            localStorage.removeItem('checkboxes');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Det här är en legend</legend>
                {checkboxes.map(checkbox => (
                    <div key={checkbox.id}>
                        <input
                            type="checkbox"
                            id={checkbox.id}
                            checked={checkbox.checked}
                            onChange={(e) => handleCheckboxChange(e, checkbox.id)}
                        />
                        <label htmlFor={checkbox.id}>{checkbox.label}</label>
                    </div>
                ))}
            </fieldset>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <button type="submit">Skicka</button>
        </form>
    );
};

export default Form;