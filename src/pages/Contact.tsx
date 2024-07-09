import React from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
    <div className='insurance-page container'>
        <h1>CONTACT</h1>
<ContactForm />

    </div>
    </>
  );
};
export default Contact;
