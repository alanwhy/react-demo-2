import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import NameCard from "./components/NameCard";
import LikeBtn from "./components/LikeBtn";
import DigitalClock from "./components/DigitalClock";
import CommentBox from "./components/CommentBox";

function App() {
  return (
    <div className="App">
      <NameCard
        name="alan"
        number={110}
        isHuman={true}
        tags={["阳光", "自信"]}
      ></NameCard>
      <LikeBtn></LikeBtn>
      <DigitalClock></DigitalClock>
      <CommentBox></CommentBox>
    </div>
  );
}

export default App;
