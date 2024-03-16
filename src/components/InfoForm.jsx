import { useState } from 'react';
import '../styles/formStyle.css'

function InfoForm() {
  const [personalInfo, setPersonalInfo] = useState({name: '', email: '', phone: '', city: '', github: ''});
  const [formIsOpen, setFormIsOpen] = useState(true);

  function toggleForm() {
    setFormIsOpen(!formIsOpen);
  }

  function handleChange(e) {
    setPersonalInfo({...personalInfo, [e.target.id]: e.target.value});
  }

  if (!formIsOpen) {
    return (
      <div className='userFormContainer'>
        <button onClick={toggleForm}>Basic Info</button>
      </div>
    );
  }
  return (
    <div className="userFormContainer">
      <button onClick={toggleForm}>Basic Info</button>
      <form className="userForm">
        <label>
          Name
          <input value={personalInfo.name} id='name' placeholder='e.g. John Doe' onChange={handleChange} />
        </label>

        <label>
          Email
          <input value={personalInfo.email} id='email' placeholder='e.g. jdoe123@gmail.com' onChange={handleChange} />
        </label>

        <label>
          Phone Number
          <input value={personalInfo.phone} id='phone' placeholder='e.g. (123)123-1234' onChange={handleChange} />
        </label>

        <label>
          Location
          <input value={personalInfo.city} id='city' placeholder='e.g. San Francisco' onChange={handleChange} />
        </label>

        <label>
          Github
          <input value={personalInfo.github} id='github' placeholder='e.g. github.com/example' onChange={handleChange}/>
        </label>
      </form>
    </div>
  );
}

export default InfoForm;