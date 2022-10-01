// This one is like the api itself with GET POST etc should be handled here
import { check } from "meteor/check";
import { ContactsCollection } from "./ContactsCollection";

Meteor.methods({
  // name of the method
  "contacts.insert"({ name, email, imageUrl }) {
    // name = Number(name);
    // The check will throw an error if the type doesnt its the specified
    check(name, String);
    check(email, String);
    check(imageUrl, String);
    // params
    if (!(name && email && imageUrl)) {
      // custom validation
      throw new Meteor.Error(
        "You must complete all the fields with valid data"
      );
    } else {
      // if nothing is wrong insert the data
      ContactsCollection.insert({
        name,
        email,
        imageUrl,
        createdAt: new Date(),
      });
    }
  },
  "contacts.remove"({ contactId }) {
    check(contactId, String);
    ContactsCollection.remove(contactId);
  },
});
