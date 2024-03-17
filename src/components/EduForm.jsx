import { useState } from 'react';
import '../styles/formStyle.css'

function EduForm({eduInfo, handleChange}) {
  const [formIsOpen, setFormIsOpen] = useState(true);

  function toggleForm() {
    setFormIsOpen(!formIsOpen);
  }

  if (!formIsOpen) {
    return (
      <div className='userFormContainer'>
        <button onClick={toggleForm}>Education</button>
      </div>
    );
  }
  return (

    <div className="userFormContainer">
      <button onClick={toggleForm}>Education</button>
      <h3>Education Info</h3>
      <form className="userForm">
        <label>
          School/University
          <input value={eduInfo.schoolName} id='schoolName' placeholder='e.g. Purdue University' onChange={handleChange}/>
        </label>

        <label>
          Location
          <input value={eduInfo.schoolLoc} id='schoolLoc' placeholder='e.g. West Lafayette' onChange={handleChange} />
        </label>
        
        <label>
          Degree
          <input value={eduInfo.degree} id='degree' placeholder='e.g. Bachelors of Science' onChange={handleChange} />
        </label>

        <label>
          Major
          <input value={eduInfo.major} id='major' placeholder='e.g. Computer Science' onChange={handleChange} />
        </label>

        <label>
          Graduation Date
          <input type="date" id='gradDate' onChange={handleChange} />
        </label>
      </form>
    </div>
  );
}

export default EduForm;