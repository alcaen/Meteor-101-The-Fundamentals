import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useTracker } from "meteor/react-meteor-data";

const ContactList = () => {
  const contacts = useTracker(() => ContactsCollection.find().fetch()); // Tracker to upfate data without this hook the app dont work

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          // Remember to add an unique key value
          <li key={contact._id}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
