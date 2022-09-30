import React, { useState } from "react";
import { ContactsCollection } from "../api/ContactsCollection";

// Contact:name,email,imageURL
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Check if email has the required params
  const check = (email) => {
    if (/\S+@\S+\.\S+/.test(email)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setEmail(email);
  };

  // Once button is clicked set to default values
  const saveContact = () => {
    // console.log({ name, email, imageUrl });
    ContactsCollection.insert({ name, email, imageUrl });
    setName("");
    setEmail("");
    setImageUrl("");
    setIsValid(false);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          placeholder="email@example.com"
          value={email}
          type="email"
          id="email"
          onChange={(e) => check(e.target.value)} //on change invoque check and send the field (email) as param
          style={isValid ? { borderColor: "green" } : { borderColor: "red" }} // if its valid the border is green if not is red
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          value={imageUrl}
          type="text"
          id="imageUrl"
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
        <button
          type="button"
          onClick={saveContact}
          disabled={!(name && email && imageUrl && isValid)} // disable unless is all filed and email is valid
        >
          Save Contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
