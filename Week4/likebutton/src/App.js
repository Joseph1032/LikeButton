import React from 'react';
import './Style.css';

export default React.createClass({
  getInitialState: function() {
    return {
      count: 0
    }
  },
  buttonHandle: function() {
    this.setState({
      count: this.state.count + 1
    })
  },
  render:function() {
    var likes = "likes"
    if (this.state.count === 1) {
      likes = 'like'
    }
    return (
      <button onClick={this.buttonHandle}>{this.state.count} {likes}</button>

    )
  }
}) 



