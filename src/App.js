import React, { Component } from "react";
import "./styles.css";
import { FetchTodoData, FetchUserData } from "./api";
import Table from "./Components/Table";
import User from "./Components/User";

class App extends Component {
  // Application state management
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      user: [],
      todoId: null,
      userToggle: false,
    };
  }

  // calling FetchTodoData()  to send a fetch request to api
  componentDidMount = async () => {
    const todos = await FetchTodoData();
    this.setState({
      todos,
    });
  };

  // Handling view user event , fetch particular user
  HandleClick = (userId, todoId) => {
    console.log(`userID : ${userId} , todoID : ${todoId}`);
    const user = async () => {
      const user = await FetchUserData(userId);
      this.setState({
        user: user,
        todoId: todoId - 1,
        userToggle: true,
      });
    };
    user();
  };

  render() {
    // Destructuring properties from the state
    const { todos, user, todoId, userToggle } = this.state;
    return (
      <div className="App">
        {/*  Todo table section  */}
        <div className="tabel-div">
          {todos ? (
            <Table todos={todos} HandleClick={this.HandleClick} />
          ) : (
            <h4>Loading...</h4>
          )}
        </div>

        {/* individual user section */}
        <div className="user-div">
          {userToggle ? <User user={user} todos={todos[todoId]} /> : null}
        </div>
      </div>
    );
  }
}

export default App;
