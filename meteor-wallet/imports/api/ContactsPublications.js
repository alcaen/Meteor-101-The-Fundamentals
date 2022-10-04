import { ContactsCollection } from "./ContactsCollection";
import { Meteor } from "meteor/meteor";

Meteor.publish("allContacts", function publishAllCollections() {
  return ContactsCollection.find(); // Cursor or Live Query
});
