import { useState } from 'react';
// import '../styles/formStyle.css'

function ExprienceForm({expInfo, handleChange}) {

  return (
    <div className='userFormContainer'>
      <form className='userForm'>
        <label>
          Company Name
          <input value={expInfo.expName} id='expName' name='expName' onChange={handleChange} />
        </label>

        <label>
          Company Location
          <input value={expInfo.expLoc} id='expLoc' name='expLoc' onChange={handleChange} />
        </label>

        <label>
          Start Date
          <input type='date' value={expInfo.expStartDate} id='expStartDate' name='expStartDate' onChange={handleChange} />
        </label>

        <label>
          End Date
          <input type='date' value={expInfo.expEndDate} id='expEndDate' name='expEndDate' onChange={handleChange} />
        </label>

        <label>
          Job Title
          <input value={expInfo.jobTitle} id='jobTitle' name='jobTitle' onChange={handleChange} />
        </label>

        <label>
          Job Description
          <textarea value={expInfo.jobDesc} name="jobDesc" id="jobDesc" cols="30" rows="5" onChange={handleChange}></textarea>
        </label>

      </form>
    </div>
  )
}

export default ExprienceForm;