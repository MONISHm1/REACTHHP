import React, {useState} from "react";

export default function TextForm(props) {
  const[text, setText] = useState("Enter your text");

  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleClickLower = () => {
    let netext = text.toLowerCase();
    setText(netext);
  }

  const handleOnchange = (event) => {
    setText(event.target.value);
  }
  
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3 pl-4 pr-4">
        <label htmlFor="myBox" className="form-label">
        </label>

        <textarea className="form-control"  id="myBox" value={text} onChange={handleOnchange} rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleClick} > To upperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClickLower} > To LowerCase</button >
    </div>

    <div className="container my-2"> 
      <h1>your text summary</h1>
      <p>number of letter : {text.length}</p>
    <p>number of words : {text.split(" ").length}</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>

    </>
  );
}



