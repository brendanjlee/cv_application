import '../styles/resume.css'

function Resume({personalInfo, eduInfo, expList}) {
  return (
    <div className="resume">
      <div className="personalInfoContainer">
        <h1>{personalInfo.name}</h1>
        <div className="personalContent">
          <p>{personalInfo.email} | {personalInfo.phone}</p>
          <p>{personalInfo.city}  | {personalInfo.github}</p>
        </div>
      </div>
      <div className="eduInfoContainer">
        <h3>Education</h3>
        <div className="eduContent">
          <h4>{eduInfo.schoolName}</h4>
          <p>{eduInfo.schoolLoc}</p>
          <p>{eduInfo.degree} in {eduInfo.major}</p>
          <p>{eduInfo.gradDate}</p>
        </div>
      </div>
      <div className="expInfo">
        <h3>Work History</h3>
        {expList.map((expInfo, index) => (
          <div key={index} className="experience">
            <h4>{expInfo.expName}</h4>
            <p>{expInfo.jobTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume; 