import React, { useState } from "react";
import './App.css';
import ReactMarkdown from "react-markdown";

function App() {

  const [markdown, setMarkdown] = useState("")

  const changedMarkdown = (e) => {
      setMarkdown(e.target.value)
  }
  return (
    <div className="App">
      <textarea name="textarea" id="textarea" onChange={changedMarkdown}></textarea>
      <ReactMarkdown className="preview" children={markdown} />
    </div>
  );
}

export default App;
