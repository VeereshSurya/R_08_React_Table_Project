import React from "react";

// API end points
const todoUrl = "https://jsonplaceholder.typicode.com/todos";

const userUrl = "https://jsonplaceholder.typicode.com/users";

// sending fetch request for the todo data
export const FetchTodoData = async () => {
  try {
    const todos = await fetch(todoUrl).then((res) => {
      return res.json();
    });

    return todos;
  } catch (error) {
    console.log(error);
  }
};

// sending fetch request for the user data
export const FetchUserData = async (userId) => {
  try {
    const user = await fetch(`${userUrl}/${userId}`).then((res) => {
      return res.json();
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};
