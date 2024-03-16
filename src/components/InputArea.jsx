import InfoForm from "./InfoForm";
import EduForm from "./EduForm";
import ExprienceForm from "./ExperienceForm";

function InputArea() {
  return (
    <div className="userInputContainer">
      <InfoForm />
      <EduForm />
      <ExprienceForm />
    </div>
  );
}

export default InputArea;