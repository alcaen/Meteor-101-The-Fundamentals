import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useTracker, useSubscribe, useFind } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import ContactItem from "./components/ContactItem";

export const ContactList = () => {
  // Publish the contacts

  const isLoading = useSubscribe("allContacts"); // Name of the publication
  const contacts = useFind(() => {
    const result = ContactsCollection.find({}, { sort: { createdAt: -1 } }); // We dont have to use fetch cause use Find recive a cursor.
    console.log(result.fetch()); // When the cursor is fetch it returns an object.
    return result;
  });

  // Publish the contacts

  const removeContact = (event, _id) => {
    event.preventDefault();
    Meteor.call("contacts.remove", { contactId: _id });
  };

  if (isLoading()) {
    return (
      <div>
        <div className="mt-10">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Loading...
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mt-10">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Contact List
        </h3>
        <ul
          role="list"
          className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
        >
          {contacts.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
          ))}
        </ul>
      </div>
    </div>
  );
};
