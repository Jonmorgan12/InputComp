import React, { useState } from "react";
import Popup from "./Popup";

const ReadOnlyRow = ({
  buttonPopup,
  setbuttonPopup,
  contact,
  handleDelete,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // each contact needs a unique true of false value to determine if it is toggled on or off

  //created a  function to close the popup and call the delete function
  const closePopupAndDelete = (e) => {
    e.preventDefault();
    handleDelete(e);
    setIsOpen(false);
  };
  // create a function to close the popup and call the update function
  const closePopupAndUpdate = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <table> */}
      <tr>
        <td>{contact.fullName}</td>
        <td>{contact.company}</td>
        <td>{contact.phoneNumber}</td>
        <td>{contact.email}</td>
        <td>
          {/*  This is setting the state to determine if the value is true or false for opening  */}
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            Delete
          </button>
        </td>
      </tr>
      {/* </table> */}
      {/* this isOpen compares if it's  truth value, and if is true it load the Popup  */}
      {/* Create props that allow the id and handlClick  to handle what being mapped out  */}
      {isOpen && (
        <Popup
          id={contact.id}
          onClose={(e) => closePopupAndUpdate(e)}
          handleClick={(e) => closePopupAndDelete(e)}
        />
      )}
    </>
  );
};

export default ReadOnlyRow;
