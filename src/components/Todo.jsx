/** @format */

import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo.trim()) return;

    setTodos([...todos, { id: Date.now(), text: todo }]);
    setTodo("");
  }

  // Delete function: Filters out the item with the matching ID
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className='min-h-screen bg-[#0a0f1a] flex items-center justify-center p-6'>
      <div className='w-full max-w-md'>
        <header className='mb-8 text-center'>
          <h1 className='text-4xl font-extrabold text-white tracking-tighter mb-2'>
            Task<span className='text-emerald-500'>Flow</span>
          </h1>
        </header>

        <form onSubmit={handleSubmit} className='flex gap-2 mb-10'>
          <div className='flex-1'>
            <label htmlFor='todo-input' className='sr-only'>
              Add a new task
            </label>
            <input
              id='todo-input' // Fixed: Added ID
              name='todo' // Fixed: Added Name
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
              type='text'
              placeholder='Add a new task...'
              className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 
                         text-white placeholder-slate-500 outline-none backdrop-blur-sm
                         focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 
                         transition-all duration-300'
            />
          </div>
          <button
            type='submit'
            className='bg-emerald-600 hover:bg-emerald-500 text-white font-bold 
                       px-6 py-3 rounded-xl transition-all active:scale-95 
                       shadow-lg shadow-emerald-900/20'>
            Add
          </button>
        </form>

        <div className='flex flex-col'>
          {todos.length === 0 ? (
            <p className='text-slate-600 text-center italic mt-4'>
              No tasks yet.
            </p>
          ) : (
            todos.map((item) => (
              <TodoItem key={item.id} item={item} onDelete={deleteTodo} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
