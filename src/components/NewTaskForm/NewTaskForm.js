import React, { useState } from "react";
import { DigiButton, DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react";
import { TypographyVariation } from "@digi/arbetsformedlingen";
import "./NewTaskForm.scss";

const NewTaskForm = ({ onAddTask }) => {
    const [newTask, setNewTask] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTask.trim() === "") {
            setErrorMessage("Du måste ange en uppgift.");
        } else {
            onAddTask(newTask);
            setNewTask("");
            setErrorMessage("");
        }
    };

    return (
        <DigiLayoutContainer afNoGutter afVerticalPadding>
            <DigiTypography afVariation={TypographyVariation.SMALL}>
                <h2>Det går även att lägga till egna uppgifter</h2>
                <p>Detta är valfritt</p>
            </DigiTypography>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <input
                        className="input"
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Lägg till ny uppgift"
                    />
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                    <DigiButton afType="submit">Lägg till uppgift</DigiButton>
                </div>
            </form>
        </DigiLayoutContainer>
    );
}

export default NewTaskForm;

