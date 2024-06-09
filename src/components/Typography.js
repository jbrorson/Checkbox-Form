import React from 'react';
import { DigiTypography } from '@digi/arbetsformedlingen-react';

export default function TypographyWrapper({ children }) {
  return (
    <DigiTypography>
      {children}
    </DigiTypography>
  );
};
