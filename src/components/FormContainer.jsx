import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import InfoForm from "./InfoForm";
import EduForm from "./EduForm";
import ExpContainer from "./ExpContainer";
import Resume from "./Resume";
import '../styles/formContainer.css'

const defaultInfo = {name: 'John Doe', email: 'jdoe@email.com', phone: '123-123-1234', city: 'San Francisco', github: 'github.com/example'};
const defaultEdu = {schoolName: 'Purdue University', schoolLoc: 'West Lafayette', degree: 'Bachelors of Science', major: 'Computer Science', startDate:'2018-08', gradDate: '2022-12'};
const defaultExpList = [
  {id: uuidv4(), isCurrent:true, expName: 'Boeing', expLoc: 'Seattle, WA', expStartDate: '2023-01', expEndDate: '', jobTitle: 'Software Engineer', jobDesc: 'Make planes go beep boop. Make planes go beep boop. Make planes go beep boop. Make planes go beep boop. Make planes go beep boop. Make planes go beep boop. Make planes go beep boop. Make planes go beep boop. Make planes go beep boop. Make planes go beep boop.'},
  {id: uuidv4(), isCurrent: false, expName: 'SpaceZ', expLoc: 'Asteroid Belt', expStartDate: '2022-06', expEndDate: '2023-01', jobTitle: 'Asteroid Miner', jobDesc: 'Operate bulldozer to provide riches for my overlord. Operate bulldozer to provide riches for my overlord. Operate bulldozer to provide riches for my overlord. Operate bulldozer to provide riches for my overlord. Operate bulldozer to provide riches for my overlord. Operate bulldozer to provide riches for my overlord. Operate bulldozer to provide riches for my overlord. Operate bulldozer to provide riches for my overlord. '},
];

function FormContainer() {
  const [personalInfo, setPersonalInfo] = useState(defaultInfo) //useState({name: '', email: '', phone: '', city: '', github: ''});
  const [eduInfo, setEduInfo] = useState(defaultEdu) //useState({schoolName: '', schoolLoc: '', degree: '', major: '', gradDate: ''});
  const [expList, setExpList] = useState(defaultExpList);

  function loadExamples() {
    setPersonalInfo(defaultInfo);
    setEduInfo(defaultEdu);
    setExpList(defaultExpList);
  }

  function clearFields() {
    setPersonalInfo({ name: '', email: '', phone: '', city: '', github: '' });
    setEduInfo({ schoolName: '', schoolLoc: '', degree: '', major: '', gradDate: '' });
    setExpList([])
  }

  function handleInfoChange(e) {
    setPersonalInfo({...personalInfo, [e.target.id]: e.target.value});
  }

  function handleEduChange(e) {
    console.log(e.target.value)
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
        isCurrent: false,
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
    if (expList.length > 0) {
      setExpList(expList.slice(0, -1));
    }
  }

  return (
    <div className="app">
      <div className="sidebar">
        <div className="btnContainer">
          <button onClick={loadExamples}>Load Example</button>
          <button onClick={clearFields}>Clear Fields</button>
          <button onClick={() => alert('coming soon...')}>Save</button>
        </div>
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
      </div>
      <Resume
          personalInfo={personalInfo}
          eduInfo={eduInfo}
          expList={expList}
      />
    </div>
  );
}

export default FormContainer;