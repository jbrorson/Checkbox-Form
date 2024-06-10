import React, { useState } from "react";
import { DigiFormCheckbox, DigiButton, DigiLayoutContainer } from "@digi/arbetsformedlingen-react";

const Form = () => {
    const initialCheckboxes = [
        { id: "checkbox1", label: "Följa guidlines enligt WCAG", checked: false },
        { id: "checkbox2", label: "Mina ändringar har rätt kontraster", checked: false },
        { id: "checkbox3", label: "Jag använder alt-taggar på bilder", checked: false }
    ];

    const [checkboxes, setCheckboxes] = useState(initialCheckboxes);
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (id, label) => {
        const updatedCheckboxes = checkboxes.map(checkbox =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
        );
        setCheckboxes(updatedCheckboxes);

        const updatedSelectedOptions = updatedCheckboxes
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.label);
        setSelectedOptions(updatedSelectedOptions);

        if (updatedSelectedOptions.length === 0) {
            setErrorMessage("Du måste markera minst ett alternativ.");
        } else {
            setErrorMessage("");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const checkedOptions = checkboxes.filter(checkbox => checkbox.checked).map(checkbox => checkbox.label);
        if (checkedOptions.length === 0) {
            setErrorMessage("Du måste markera minst ett alternativ.");
        } else {
            setSelectedOptions(checkedOptions);
            setErrorMessage("");
        }
    };

    return (
        <DigiLayoutContainer afNoGutter afVerticalPadding>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "12px" }}>
                    {checkboxes.map(checkbox => (
                        <div key={checkbox.id}>
                            <DigiFormCheckbox
                                afLabel={checkbox.label}
                                afId={checkbox.id}
                                afChecked={checkbox.checked}
                                afOnChange={() => handleCheckboxChange(checkbox.id, checkbox.label)}
                                afRequired
                            />
                        </div>
                    ))}
                </div>
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                <DigiButton afType="submit">Skicka</DigiButton>
            </form>
            <div>
                <p>Jag har sett till att: {selectedOptions.join(", ")}</p>
            </div>
        </DigiLayoutContainer>
    );
}

export default Form;