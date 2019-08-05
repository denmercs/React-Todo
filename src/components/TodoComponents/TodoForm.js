import React, { Component } from "react";

class ListForm extends Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitTask = e => {
    e.preventDefault();
    this.props.addTask(this.state.task);
  };

  render() {
    return (
      <form onSubmit={this.submitTask}>
        <input
          type="text"
          value={this.item}
          name="item"
          onChange={this.handleChanges}
        />
      </form>
    );
  }
}

export default ListForm;
