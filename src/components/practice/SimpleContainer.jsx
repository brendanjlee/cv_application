import { useState } from "react";
import SimpleInput from "./SimpleInput";
import SimpleOutput from "./SimpleOutput";

function SimpleContainer() {
  const [content, setContent] = useState('');

  function handleChange(e) {
    setContent(e.target.value);
  }

  return (
    <>
      <SimpleInput content={content} handleChange={handleChange} />
      <SimpleOutput content={content} />
    </>
  );
}

export default SimpleContainer;