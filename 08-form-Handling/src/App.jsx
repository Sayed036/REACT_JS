import React, { useState } from "react";

function App() {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault(); // it prevent to reload the page of form
    console.log("form submitted by", title);
    setTitle('')
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" value={title} placeholder="enter Your name" onChange={(e) => { setTitle(e.target.value) } } />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
