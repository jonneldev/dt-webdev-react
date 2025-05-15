import React, { use, useState } from "react";
import { nodeModuleNameResolver } from "typescript";

export function UserForm() {
  //  Add state variables for each field here
  // const [firstName, setFirstName] = useState("")
  // const [lastName, setlastName] = useState("")
  // const [age, setAge] = useState("")
  // const [gender, setGender] = useState("")
  // const [occupation, setOccupation] = useState("")
  // const [notes, setNotes] = useState("")

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    occupation: "",
    notes: "",
  })

  const {firstName, lastName, age, gender, occupation, notes} = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    //  prevent default submission, Log or alert the form data
    e.preventDefault();
    console.log(formData);
    alert('Form submitted!')

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input 
          type="text" /* add name, bind value and onChange */
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input 
          type="text" /* add name, bind value and onChange */ 
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input 
          type="number" /* add name, bind value and onChange */ 
          name="age"
          value={age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            value="male"
            name="gender" /* add name, bind checked and onChange */
            checked={gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            name="gender" /* add name, bind checked and onChange */
            checked={gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
      </div>
      <div>
        <label>Occupation:</label>
        <input 
          type="text" /* add name, bind value and onChange */ 
          value={occupation}
          name="occupation"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Notes:</label>
        <textarea /* bind value and onChange */ 
          name="notes"
          value={notes}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
