import { useState } from "react";

const initialValues = {
  name: "Brendan",
  email: "email@email.com",
  phone: "(132) 312 1392",
  location: "San Francisco",
  githubLink: "github.com/example"
}

function MultiInput() {
  const [userInfo, setUserInfo] = useState({name: '', email: '', phone: '', location: '', githubLink: ''});

  function handleChange(e) {
    setUserInfo({...userInfo, [e.target.id]: e.target.value});
  }

  return (
    <>
      <h1>Personal Information</h1>
      <form>
        <label>
          Name:
          <input
            value={userInfo.name}
            onChange={handleChange}
            id='name'
          />
        </label>
      </form>
    </>
  );
}

export default MultiInput;