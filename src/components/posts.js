import React, { Component } from "react";

export default class posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(result => result.json())
      .then(res => {
        // console.log(res);
        this.setState({ posts: res });
      });
  }

  render() {
    const postItems = this.state.posts.map(item => {
      return (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      );
    });
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}
