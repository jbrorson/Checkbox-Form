// import React, { useState } from 'react';
// import { DigiFormCheckbox, DigiButton, DigiLayoutContainer } from '@digi/arbetsformedlingen-react';

// const Form = () => {
//     const [isChecked, setIsChecked] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleCheckboxChange = (event) => {
//         setIsChecked(event.target.checked);
//         setErrorMessage('');
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (!isChecked) {
//             setErrorMessage('Du måste markera denna checkbox.');
//         } else {
//             setErrorMessage('');
//         }
//     };

//     return (
//         <DigiLayoutContainer afNoGutter afVerticalPadding>
//             <form onSubmit={handleSubmit}>
//                 <div style={{ marginBottom: '12px' }}>
//                     <DigiFormCheckbox
//                         afLabel="Jag har säkerställt att dessa ändringar följer kraven för WCAG"
//                         afName="checkbox1"
//                         afId="checkbox1"
//                         afChecked={isChecked}
//                         onChange={handleCheckboxChange}
//                     />
//                 </div>
//                 {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//                 <DigiButton afType='submit'>Skicka</DigiButton>
//             </form>
//         </DigiLayoutContainer>
//     );
// }

// export default Form;


