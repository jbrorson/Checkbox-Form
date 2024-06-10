import React, { useState } from "react";
import { DigiFormCheckbox, DigiButton, DigiLayoutContainer } from "@digi/arbetsformedlingen-react";

const Form = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setErrorMessage("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isChecked) {
            setErrorMessage("Du måste markera denna checkbox.");
        } else {
            setErrorMessage(null);
            console.log("isChecked:", isChecked); // Logga isChecked när formuläret skickas
        }
    };

    return (
        <DigiLayoutContainer afNoGutter afVerticalPadding>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "12px" }}>
                    <DigiFormCheckbox
                        afLabel="Jag har säkerställt att dessa ändringar följer kraven för WCAG"
                        afName="checkbox1"
                        afId="checkbox1"
                        afChecked={isChecked}
                        afOnChange={handleCheckboxChange}
                    />
                </div>
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                <DigiButton afType="submit">Skicka</DigiButton>
            </form>
        </DigiLayoutContainer>
    );
}

export default Form;