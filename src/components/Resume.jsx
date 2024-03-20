import '../styles/resume.css'

function RenderJobDates({startDate, endDate}) {
  if (endDate.length === 0) {
    return <p>{startDate} ~ Current</p>
  }
  return (
    <p>{startDate} ~ {endDate}</p>
  );
}

function Resume({personalInfo, eduInfo, expList}) {
  return (
    <div className="resume">
      <div className="personalInfoContainer">
        <h1>{personalInfo.name}</h1>
        <div className="personalContent">
          <p>{personalInfo.email} | {personalInfo.phone}</p>
          <p>{personalInfo.city} | {personalInfo.github}</p>
        </div>
      </div>
      <hr />
      <div className="sectionContainer">
        <h3 className='sectionHeading'>Work History</h3>
        {expList.map((expInfo, index) => (
          <div key={index} className="experience">
            <div className='resumeHoriStack'>
              <h4 className='sectionHeading'>{expInfo.expName}</h4>
              <p>{expInfo.expLoc}</p>
            </div>
            <div className='resumeHoriStack'>
              <p>{expInfo.jobTitle}</p>
              <RenderJobDates startDate={expInfo.expStartDate} endDate={expInfo.expEndDate}/>
            </div>
            <p>{expInfo.jobDesc}</p>
          </div>
        ))}
      </div>
      <hr />
      <div className="sectionContainer">
        <h3 className='sectionHeading'>Education</h3>
        <div className="eduContent">
          <div className='resumeHoriStack'>
            <p>{eduInfo.schoolName}</p>
            <p>{eduInfo.schoolLoc}</p>
          </div>
          <div className='resumeHoriStack'>
            <p>{eduInfo.degree} in {eduInfo.major}</p>
            <p>{eduInfo.startDate} - {eduInfo.gradDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume; 