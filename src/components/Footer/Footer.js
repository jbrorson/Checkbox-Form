import { DigiFooter, DigiFooterCard, DigiLogo, DigiIconAccessibilityUniversal, DigiIconSign, DigiIconGlobe, DigiIconEnvelope, DigiTypography } from "@digi/arbetsformedlingen-react";
import { FooterVariation, FooterCardVariation, LogoVariation, LogoColor, TypographyVariation } from "@digi/arbetsformedlingen";
import "./Footer.scss";

export default function Footer() {
  return (
    <DigiFooter className="footer" afVariation={FooterVariation.SMALL}>
      <div slot="content-top">
        <div>
          <DigiFooterCard afType={FooterCardVariation.ICON}>
            <ul>
              <li>
                <a href="https://designsystem.arbetsformedlingen.se/">
                  <DigiIconAccessibilityUniversal></DigiIconAccessibilityUniversal> 
                  <DigiTypography afVariation={TypographyVariation.SMALL}>
                    <p>Tillgänglighetsredogörelse</p>
                  </DigiTypography>
                </a>
              </li>
              <li>
                <a href="https://designsystem.arbetsformedlingen.se/">
                  <DigiIconSign></DigiIconSign>
                  <DigiTypography afVariation={TypographyVariation.SMALL}>
                    <p>Teckenspråk</p>
                  </DigiTypography>
                </a>
              </li>
              <li>
                <a href="https://designsystem.arbetsformedlingen.se/">
                  <DigiIconGlobe></DigiIconGlobe>
                  <DigiTypography afVariation={TypographyVariation.SMALL}>
                    <p>Other languages</p>
                  </DigiTypography>
                </a>
              </li>
              <li>
                <a href="https://designsystem.arbetsformedlingen.se/">
                  <DigiIconEnvelope></DigiIconEnvelope>
                  <DigiTypography afVariation={TypographyVariation.SMALL}>
                    <p>Mejla vår funktionbrevlåda</p>
                  </DigiTypography>
                </a>
              </li>
            </ul>
          </DigiFooterCard>
        </div>
        <div>
          <DigiFooterCard afType={FooterCardVariation.BORDER}>
            <a href="https://designsystem.arbetsformedlingen.se/">Om tjänsten dolores</a>
            <p>
              Systemversion: 1.4.0 <br /> Ansvarig: Jenny Svensson
            </p>
          </DigiFooterCard>
        </div>
        <div>
          <DigiFooterCard afType={FooterCardVariation.BORDER}>
            <a href="https://designsystem.arbetsformedlingen.se/">Kontakta servicdolores</a>
            <p>
              Telefon: 0771-60 0001 <br /> Öppettider: Vardagar 08:00-16:30
            </p>
          </DigiFooterCard>
        </div>
      </div>
      <div slot="content-bottom-left">
          <DigiLogo afVariation={LogoVariation.LARGE} afColor={LogoColor.SECONDARY}></DigiLogo>
      </div>
      <div slot="content-bottom-right">
        <p>Följ oss på</p>
        <a href="https://www.facebook.com/Arbetsformedlingen">Facebook</a>
        <a href="https://www.facebook.com/Arbetsformedlingen">Youtube</a>
        <a href="https://www.facebook.com/Arbetsformedlingen">Linkedin</a>
        <a href="https://www.facebook.com/Arbetsformedlingen">Instagram</a>
      </div>
    </DigiFooter>
  );
}
