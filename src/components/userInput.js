import React, { useRef, useState } from "react";
import EmployeeCards from "./cards";

function userInput() {
  const [sumbit, setSubmit] = useState(false);
  const fname = useRef();
  const lname = useRef();
  const dob = useRef();
  const designation = useRef();
  const profilephoto = useRef();
  const experiance = useRef();

  const handleChange = (e) => {
    fname.current = e.target.value;
  };
  const handleChangeLname = (e) => {
    lname.current = e.target.value;
  };
  const handleChangedob = (e) => {
    dob.current = e.target.value;
  };
  const handleChangedesignation = (e) => {
    designation.current = e.target.value;
  };
  const handleChangeprofile = (e) => {
    profilephoto.current = e.target.value;
  };
  const handleChangeexp = (e) => {
    experiance.current = e.target.value;
  };

  const submit = () => {
    setSubmit(true);
  };

  return (
    <div>
      <div className="input">
        <label htmlFor="firstName"></label>
        <input
          type="text"
          id="firstName"
          onChange={handleChange}
          placeholder="FirstName"
        />
        <label htmlFor="lastName"></label>
        <input
          type="text"
          id="lastName"
          placeholder="LastName"
          onChange={handleChangeLname}
        />
        <label htmlFor="date"></label>
        <input type="date" id="date" onChange={handleChangedob} />
        <label htmlFor="designation"></label>
        <input
          type="text"
          id="designation"
          placeholder="Designation"
          onChange={handleChangedesignation}
        />
        <label htmlFor="profile"></label>
        <input
          type="text"
          placeholder="ProfilePhotoLink"
          onChange={handleChangeprofile}
        />
        <label htmlFor="experiance"></label>
        <input type="number" id="experiance" onChange={handleChangeexp} />
        <button onClick={submit}>Submit</button>
      </div>
      {sumbit ? (
        <EmployeeCards
          fname={fname.current}
          lname={lname.current}
          dob={dob.current}
          designation={designation.current}
          profile={profilephoto.current}
          exp={experiance.current}
        />
      ) : null}
    </div>
  );
}

export default userInput;
