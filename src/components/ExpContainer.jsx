import { useState } from "react";
import ExprienceForm from "./ExperienceForm";
import { v4 as uuidv4 } from 'uuid';
import '../styles/formStyle.css'

function ExpContainer({expList, handleChange, addForm, delForm}) {
  const [formIsOpen, setFormIsOpen] = useState(true);
  // const [expList, setExpList] = useState([
  //   {
  //     id: uuidv4(),
  //     expName: 'Boeing',
  //     expLoc: 'Seattle',
  //     expStartDate: '',
  //     expEndDate: '',
  //     jobTitle: 'Software Engineer',
  //     jobDesc: 'Make planes go beep boop'
  //   }
  // ]);

  function toggleForm() {
    setFormIsOpen(!formIsOpen);
  }

  // function addForm() {
  //   setExpList([
  //     ...expList,
  //     {
  //       id: uuidv4(),
  //       expName: '',
  //       expLoc: '',
  //       expStartDate: '',
  //       expEndDate: '',
  //       jobTitle: '',
  //       jobDesc: ''
  //     }
  //   ])
  // }

  // function delForm() {
  //   setExpList(expList.slice(0, -1));
  // }

  // function handleChange(e, expId) {
  //   const index = expList.findIndex(exp => exp.id === expId);
  //   if (index === -1) return;

  //   // create a shallow copy of new list, update the element in the new list and set
  //   const newList = [...expList];
  //   newList[index] = {
  //     ...newList[index],
  //     [e.target.id]: e.target.value
  //   };

  //   setExpList(newList);
  // }

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