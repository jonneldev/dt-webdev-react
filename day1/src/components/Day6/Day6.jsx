import React, { use, useState } from "react";

export function UserForm() {
  //  Add state variables for each field here
  const [firstName, setFirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [occupation, setOccupation] = useState("")
  const [notes, setNotes] = useState("")

  const handleSubmit = (e) => {
    //  prevent default submission, Log or alert the form data
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      age,
      gender,
      occupation,
      notes
    });
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
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input 
          type="text" /* add name, bind value and onChange */ 
          name="lastName"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
      </div>
      <div>
        <label>Age:</label>
        <input 
          type="number" /* add name, bind value and onChange */ 
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
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
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="Female"
            name="gender" /* add name, bind checked and onChange */
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
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
          onChange={(e) => setOccupation(e.target.value)}
        />
      </div>
      <div>
        <label>Notes:</label>
        <textarea /* bind value and onChange */ 
          name="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
