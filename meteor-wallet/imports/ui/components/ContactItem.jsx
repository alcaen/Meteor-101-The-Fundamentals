import { memo } from "react";
import React from "react";
import { Meteor } from "meteor/meteor";

const ContactItem = memo(({ contact }) => {
  const removeContact = (event, _id) => {
    event.preventDefault();
    Meteor.call("contacts.remove", { contactId: _id });
  };
  return (
    <li className="py-4 flex items-center justify-between space-x-3">
      <div className="min-w-0 flex-1 flex items-center space-x-3">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src={contact.imageUrl}
            alt=""
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-900 truncate">
            {contact.name}
          </p>
          <p className="text-sm font-medium text-gray-500 truncate">
            {contact.email}
          </p>
        </div>
        <div>
          <a
            href="#"
            onClick={(event) => removeContact(event, contact._id)}
            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
          >
            Remove
          </a>
        </div>
      </div>
    </li>
  );
});
export default ContactItem;
