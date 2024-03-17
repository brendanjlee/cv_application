import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import InfoForm from "./InfoForm";
import EduForm from "./EduForm";
import ExpContainer from "./ExpContainer";

const defaultInfo = {name: 'John Doe', email: 'jdoe@email.com', phone: '123-123-1234', city: 'San Francisco', github: 'github.com/example'};
const defaultEdu = {schoolName: 'Purdue', schoolLoc: 'West Lafayette', degree: 'Bachelors of Science', major: 'Computer Science', gradDate: ''};
const defaultExpList = [{id: uuidv4(), expName: 'Boeing', expLoc: 'Seattle', expStartDate: '', expEndDate: '', jobTitle: 'Software Engineer', jobDesc: 'Make planes go beep boop'}];

function FormContainer() {
  const [personalInfo, setPersonalInfo] = useState(defaultInfo) //useState({name: '', email: '', phone: '', city: '', github: ''});
  const [eduInfo, setEduInfo] = useState(defaultEdu) //useState({schoolName: '', schoolLoc: '', degree: '', major: '', gradDate: ''});
  const [expList, setExpList] = useState(defaultExpList);

  function handleInfoChange(e) {
    setPersonalInfo({...personalInfo, [e.target.id]: e.target.value});
  }

  function handleEduChange(e) {
    setEduInfo({...eduInfo, [e.target.id]: e.target.value});
  } 

  function handleExpchange(e, expId) {
    //setExpInfo({...expInfo, [e.target.id]: e.target.value});
    const index = expList.findIndex(exp => exp.id === expId);
    if (index === -1) return;

    const newList = [...expList];
    newList[index] = {
      ...newList[index],
      [e.target.id]: e.target.value
    };

    setExpList(newList);
  }

  function addExpForm() {
    setExpList([
      ...expList,
      {
        id: uuidv4(),
        expName: '',
        expLoc: '',
        expStartDate: '',
        expEndDate: '',
        jobTitle: '',
        jobDesc: ''
      }
    ]);
  }

  function delExpForm() {
    setExpList(expList.slice(0, -1));
  }

  return (
    <div className="userInputContainer">
      <InfoForm
        personalInfo={personalInfo}
        handleChange={handleInfoChange}
      />
      <EduForm
        eduInfo={eduInfo}
        handleChange={handleEduChange}
      />
      <ExpContainer
        expList={expList}
        handleChange={handleExpchange}
        addForm={addExpForm}
        delForm={delExpForm}
      />
  </div>
  );
}

export default FormContainer;