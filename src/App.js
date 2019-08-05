import React from "react";
import ListForm from "./components/TodoComponents/TodoForm";

const todoData = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      task: todoData,
      id: Date.now(),
      completed: false
    };
  }

  addTask = taskName => {
    const todoData = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({});
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ListForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
