/** @format */

import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.precentDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <>
      <div className='container flex justify-center'>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type='text'
            className='border-6  text-green-600 '
          />
          <button
            type='sumbit'
            className='bg-green-600 border-4 rounded-md text-white text-xl '>
            Add
          </button>
        </form>

        {todos.map((item) => (
          <h3>{item}</h3>
        ))}
      </div>
    </>
  );
};

export default Todo;
