import React, { useState } from "react";
import Popup from "./Popup";

const ReadOnlyRow = ({
  buttonPopup,
  setbuttonPopup,
  contact,
  handleDelete,
}) => {
  console.log("contact", contact.id);
  console.log("button", buttonPopup);
  return (
    <>
      {/* <table> */}
      <tr>
        <td>{contact.fullName}</td>
        <td>{contact.company}</td>
        <td>{contact.phoneNumber}</td>
        <td>{contact.email}</td>
        <td>
          <button type="button" onClick={() => setbuttonPopup(!buttonPopup)}>
            Delete
          </button>
        </td>
      </tr>
      {/* </table> */}
      <Popup trigger={buttonPopup}>
        <h2>Are you sure you want to delete this manager?</h2>
        <p>
          <button id={contact.id} onClick={handleDelete}>
            Yes
          </button>
        </p>
      </Popup>
    </>
  );
};

export default ReadOnlyRow;
