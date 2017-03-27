import React from 'react';
import './App.css';

export default React.createClass({
  getInitialState: function() {
    return {
      list: [],
      text: ''
    }
  },

  handleChange: function(e) {
      this.setState({
        text: e.target.value
      })
  },
  handleSubmit: function(e) {
    console.log('hello')
    e.preventDefault()
    this.setState({
      list: [this.state.text,...this.state.list],
      text: ''
    })
  },
  // handleCheck: function(list) {
  //   this.state.list.filter(function(list){
  //     completed: this.state.completed
  //   }),
  //   this.setState({
  //     list: this.state.list
  //   })
  // },
  render: function() {
  
    return (
      <div id="container">
        <h1>todos</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" placeholder="What needs to be done?" value={this.state.text}/>
          </form>

          <div id="taskBody">
            <ul>
                {this.state.list.map(function(val,i){
                return <li key={i}><input id="check" type="checkbox"/>{val}</li>
              })}
            </ul>
          </div> 
      </div>

    )
  }
})