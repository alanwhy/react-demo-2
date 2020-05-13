import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import NameCard from "./components/NameCard";
// import LikeBtn from "./components/LikeBtn";
// import DigitalClock from "./components/DigitalClock";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";

// function App() {
//   // return (
//   //   <div className="App">
//   //     <NameCard
//   //       name="alan"
//   //       number={110}
//   //       isHuman={true}
//   //       tags={["阳光", "自信"]}
//   //     ></NameCard>
//   //     <LikeBtn></LikeBtn>
//   //     <DigitalClock></DigitalClock>
//   //     <CommentBox></CommentBox>
//   //   </div>
//   // );
//   return <div className="App"></div>;
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ["this is my first reply"],
    };
    this.addComment = this.addComment.bind(this);
  }
  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment],
    });
  }
  render() {
    const { comments } = this.state;
    return (
      <div className="App">
        <CommentList comments={comments}></CommentList>
        <CommentBox
          commentsLength={comments.length}
          onAddComment={this.addComment}
        ></CommentBox>
      </div>
    );
  }
}

export default App;
