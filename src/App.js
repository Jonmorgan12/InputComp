import React, { useState } from "react";
import "./App.css";
import data from "./mock-data.json";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./components/ReadOnlyRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [buttonPopup, setbuttonPopup] = useState(false);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    company: "",
    phoneNumber: "",
    email: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      company: addFormData.company,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleDelete = (event, contactId) => {
    event.preventDefault();
    console.log("evtn", event.target.id);
    const newContacts = [...contacts];
    console.log("this is my new contacts", newContacts);
    let index = newContacts.findIndex(
      (contact) => contact.id === event.target.id
    );
    const filteredContacts = newContacts.splice(index, 1);
    console.log("filteredContacts", filteredContacts);
    setContacts(filteredContacts);
    setbuttonPopup(false);
  };

  return (
    <div className="app-container">
      <h2>Invite a manager</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="company"
          required="required"
          placeholder="Enter a company"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number"
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter a email"
          onChange={handleAddFormChange}
        />
        <button type="submit">Send</button>
      </form>
      <form>
        <table>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          <tbody>
            {contacts.map((contact, key) => (
              <ReadOnlyRow
                key={key}
                contact={contact}
                buttonPopup={buttonPopup}
                setbuttonPopup={setbuttonPopup}
                handleDelete={(event) => handleDelete(event)}
              />
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default App;
