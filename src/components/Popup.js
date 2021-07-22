import React from "react";
import "./Popup.css";

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-inner">
        {/* this props close the Popup without a  doing any of the delete functionally*/}
        <button className="close-btn" onClick={props.onClose}>
          close
        </button>
        <h2>Are you sure you want to delete this manager?</h2>
        <p>
          {/*  Setting our props to hand the id and handleClick */}
          <button id={props.id} onClick={props.handleClick}>
            Yes
          </button>
        </p>
      </div>
    </div>
  );
}

export default Popup;
