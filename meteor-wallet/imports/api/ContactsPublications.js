import { ContactsCollection } from "./ContactsCollection";

Meteor.publish(
  allContacts,
  publishAllContacts(() => {
    return ContactsCollection.find();
  })
);
