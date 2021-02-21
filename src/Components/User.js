import React from "react";

// user component ( user details )
const User = ({ user, todos }) => {
  return (
    <div className="userContainer">
      <div className="todos">
        <p>
          <label>ToDo ID</label> {todos.id}
        </p>
        <p>
          <label>ToDo Title</label> {todos.title}
        </p>
      </div>
      <div className="user">
        <p>
          <label>User ID</label> {user.id}
        </p>
        <p>
          <label>Name</label> {user.name}
        </p>
        <p>
          <label>Email</label> {user.email}
        </p>
      </div>
    </div>
  );
};

export default User;
