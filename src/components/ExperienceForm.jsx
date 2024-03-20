import { useState } from 'react';
// import '../styles/formStyle.css'

function ExprienceForm({expInfo, handleChange}) {

  return (
    <div>
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
          <input type='month' value={expInfo.expStartDate} id='expStartDate' name='expStartDate' onChange={handleChange} />
        </label>

        <label>
          End Date
          <input type='month' value={expInfo.expEndDate} id='expEndDate' name='expEndDate' onChange={handleChange} />
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
      <hr />
    </div>
  )
}

export default ExprienceForm;