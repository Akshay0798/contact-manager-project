/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

// Functional component for adding a new contact
const AddContact = ({ addContact }) => {
  // State to track input values
  const [contactData, setContactData] = useState({ name: "", email: "", number: "" });

  // Handle input changes
  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  // Handle adding a new contact
  const handleAdd = () => {
    // Check if name, email, and number are filled out
    if (contactData.name === "" || contactData.email === "" || contactData.number === "") {
      alert("Please Fill All the Details");
      return;
    }
    // Call the addContact function with the new contact data
    addContact(contactData);
    // Clear the input fields
    setContactData({ name: "", email: "", number: "" });
  };

  // Render the add contact form
  return (
    <div className="formheader">
      <div className="add-contact">Add Contact :)</div>
      <form action="">
        <label>👤Name:</label>
        
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={contactData.name}
          onChange={handleChange}
        />
        <br />

        <label>📞Contact Number:</label>
        
        <input
          type="tel"
          placeholder="Enter Contact Number"
          name="number"
          value={contactData.number}
          onChange={handleChange}
        />

        <label>📧Email ID:</label>
        
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
        />
        <br />

       
      </form>
      <button className="btn" onClick={handleAdd}>
        Add Contact
      </button>
    </div>
  );
};

export default AddContact;
