import React from "react";

class LikeBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
    this.addLikes = this.addLikes.bind(this);
  }

  addLikes() {
    let num = this.state.likes
    this.setState({
      likes: ++num,
    });
  }

  render() {
    return (
      <div className="likes-button-component">
        <button
          className="btn btn-outline-primary btn-lg"
          type="button"
          onClick={this.addLikes}
        >
          <span role='img' aria-labelledby="panda1">👍{this.state.likes}</span>
        </button>
      </div>
    );
  }
}

export default LikeBtn;
