/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';



export default function ContactList(props) {
    const { contact, removeContact } = props;

    // Map through the contact array and create a list of contacts
    const contactList = contact.map((val) => {
        return (
            <div key={val.id} className="contact-item">
                <div className="contact-details">
                    <div>👤 - {val.data.name}</div>
                    <div>📞 - {val.data.number}</div>
                    <div>📧 - {val.data.email}</div>
                </div>
                <span className="delete-icon" onClick={() => removeContact(val.id)}><DeleteIcon/></span>
            </div>
        );
    });

    // Render the list of contacts within the container
    return (
        <div className="contact-list-container">
            <div className="contactlist-heading">ContactList</div>
            <div>{contactList}</div>
        </div>
    );
}
