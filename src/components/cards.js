import React, { useEffect, useState } from "react";
import "../styles.css";

function EmployeeCards(props) {
  const [key, setKey] = useState(0);

  return (
    <div id="card" className="employee">
      <image
        src="https://raw.githubusercontent.com/hrinncrewin/reactjs-interview/65dbb262de39fea39b347603795f2bfcd6ba72cf/src/logo.svg"
        alt="Profile picture"
      />
      <span>{props.fname}</span>
      <span>{props.lname}</span>
      <br />
      <span>{props.dob}</span>
      <br />
      <span>{props.designation}</span>
      <br />
      <span>{props.exp}</span>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
}
export default EmployeeCards;
