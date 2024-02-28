/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import Header from "./Components/Header";
import uuid4 from "uuid4";
import "./App.css";

function App() {               
  // Key for localStorage
  const localStorageKey = "contact";

  // Initialize state with data from localStorage or an empty array
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  // Effect to update localStorage whenever contact state changes
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);

  // Function to add a new contact
  const addContact = (data) => {
    setContact([...contact, { id: uuid4(), data }]);
  };

  // Function to remove a contact based on its id
  const removeContact = (id) => {
    const updatedList = contact.filter((val) => {
      return val.id !== id;
    });
    setContact(updatedList);
  };

  // Render the components
  return (
    <div className="container">
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contact={contact} removeContact={removeContact} />
    </div>
  );
}

export default App;