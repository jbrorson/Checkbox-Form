import { DigiLayoutContainer, DigiTypographyHeadingJumbo, DigiTypographyPreamble } from "@digi/arbetsformedlingen-react";
import { TypographyHeadingJumboLevel } from "@digi/arbetsformedlingen";

export default function Content() {
    return (
        <DigiLayoutContainer afNoGutter>
            <DigiTypographyHeadingJumbo
                afText="Checklista för publicering till intranätet"
                afLevel={TypographyHeadingJumboLevel.H1}
            >
            </DigiTypographyHeadingJumbo>
            <DigiTypographyPreamble>
                Detta är en lista att använda som hjälpmedel inför publicering på intranätet. Följ listan för att säkerställa att alla steg är uppfyllda. 
            </DigiTypographyPreamble>
        </DigiLayoutContainer>         
    )
};