import '../styles/formStyle.css'

function ExprienceForm() {
  return (
    <div className='userFormContainer'>
      <h3>Experience</h3>
      <form className='userForm'>
        <label htmlFor="expInput">
          Company Name
          <input type="text" id='expInput' name='expInput' placeholder='Apple' required/>
        </label>

        <label htmlFor="expLocInput">
          location
          <input type="text" id='expLocInput' name='expLocInput' placeholder='Apple' required/>
        </label>

        <label htmlFor="expStartDateInput">
          Start Date
          <input type="date" id='expStartDateInput' name='expStartDateInput' required/>
        </label>

        <label htmlFor="expEndDateInput">
          End Date (leave empty if current working)
          <input type="date" id='expEndDateInput' name='expEndDateInput'/>
        </label> 

        <label htmlFor="jobTitleInput">
          Job Title
          <input type="text" id='jobTitleInput' name='jobTitleInput' placeholder='Software Engineer' required/>
        </label>

        <label htmlFor="jobDescInput">
          Job Description
          <textarea id="jobDescInput" name='jobDescInput' cols="30" rows="5"></textarea>
        </label>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ExprienceForm;