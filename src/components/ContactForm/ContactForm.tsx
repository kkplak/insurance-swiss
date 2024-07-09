import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css'; // Import the CSS file

function ContactForm() {
  const [state, handleSubmit] = useForm("xkgwndnd"); // Replace with your Formspree form ID
  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        id="name"
        type="text"
        name="name"
        required
        placeholder="Name"
        className="form-input"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
        className="form-error"
      />

      <select
        id="language"
        name="language"
        required
        className="form-select"
      >
        <option value="">Select a language</option>
        <option value="english">English</option>
        <option value="german">German</option>
        <option value="polish">Polish</option>
        <option value="greek">Greek</option>
      </select>
      <ValidationError 
        prefix="Language" 
        field="language"
        errors={state.errors}
        className="form-error"
      />

      <input
        id="phone"
        type="tel"
        name="phone"
        required
        placeholder="Phone Number"
        className="form-input"
      />
      <ValidationError 
        prefix="Phone" 
        field="phone"
        errors={state.errors}
        className="form-error"
      />

      <input
        id="email"
        type="email"
        name="email"
        required
        placeholder="Email Address"
        className="form-input"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        className="form-error"
      />

      <textarea
        id="message"
        name="message"
        placeholder="Message"
        className="form-textarea"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        className="form-error"
      />

      <button type="submit" disabled={state.submitting} className="form-button">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
