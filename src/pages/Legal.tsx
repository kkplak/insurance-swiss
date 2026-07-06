import React from "react";
import { useTranslation } from "react-i18next";

const Legal: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container" style={{ padding: "3rem 1.5rem 6rem" }}>
      <h1>Legal & Privacy</h1>
      <p>
        This website uses essential and functional cookies to keep the site working correctly and to remember your language preference.
        These cookies do not collect personal data for advertising or tracking purposes.
      </p>
      <h2>What we use cookies for</h2>
      <ul>
        <li>To keep the site functioning properly</li>
        <li>To remember your language preference</li>
        <li>To ensure the contact form works as intended</li>
      </ul>
      <h2>Contact</h2>
      <p>
        If you have questions about this notice, please contact us using the contact page on this website.
      </p>
    </div>
  );
};

export default Legal;
