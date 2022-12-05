import "./styles.css";
import React, { useState } from "react";

var name = "Henry";
//prompt("Give me your Name :");
//var counter = 0;

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  const [userInput, setuserInput] = useState("");

  function likeClickHandler() {
    //counter++;
    //console.log("clicked", counter);
    setLikeCounter(likeCounter + 1);
  }

  function inputChangeHandler(event) {
    console.log(event.target.value);
    setuserInput(event.target.value);
  }

  return (
    <div className="App">
      <h1>
        Welcome <span id="username"> {name} </span>
      </h1>
      <button onClick={likeClickHandler}> Like Me </button> {likeCounter}
      <br />
      <br />
      <input placeholder="Enter some text here" onChange={inputChangeHandler} />
      <br />
      <br />
      <div>Welcome {userInput}</div>
    </div>
  );
}
