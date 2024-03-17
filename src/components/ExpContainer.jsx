import { useState } from "react";
import ExprienceForm from "./ExperienceForm";
import { v4 as uuidv4 } from 'uuid';
import '../styles/formStyle.css'

function ExpContainer({expList, handleChange, addForm, delForm}) {
  const [formIsOpen, setFormIsOpen] = useState(true);

  function toggleForm() {
    setFormIsOpen(!formIsOpen);
  }

  if (!formIsOpen) {
    return (
      <div className="userFormContainer">
        <button onClick={toggleForm}>Work Experience</button>
      </div>
    );
  }
  return (
    <div className="userFormContainer">
      <button onClick={toggleForm}>Work Experience</button>
      <h3>Experience</h3>
      {expList.map((expInfo) => (
        <ExprienceForm
          key={expInfo.id}
          expInfo={expInfo}
          handleChange={(e) => handleChange(e, expInfo.id)}
        />
      ))}
      <div className="expBtnContainer">
        <button onClick={addForm}>Add</button>
        <button onClick={delForm}>Delete</button>
      </div>
    </div>
  );
}

export default ExpContainer;