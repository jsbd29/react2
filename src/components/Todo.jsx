/** @format */

import React, { useState, useEffect } from "react"; // Added useEffect
import { AnimatePresence } from "framer-motion";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todo, setTodo] = useState("");

  // 1. Initialize state with a function (Lazy Initialization)
  // This checks local storage immediately so the page doesn't start "blank"
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("taskflow_list");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // 2. Sync with Local Storage whenever 'todos' change
  useEffect(() => {
    localStorage.setItem("taskflow_list", JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
    setTodo("");
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  return (
    <div className='min-h-screen bg-[#0a0f1a] flex items-center justify-center p-6 font-sans'>
      <div className='w-full max-w-md'>
        <header className='mb-8 text-center'>
          <h1 className='text-4xl font-extrabold text-white tracking-tighter mb-2'>
            Task<span className='text-emerald-500'>Flow</span>
          </h1>
          <div className='text-slate-500 text-xs uppercase tracking-widest font-semibold'>
            {todos.filter((t) => !t.completed).length} Tasks Remaining
          </div>
        </header>

        <form onSubmit={handleSubmit} className='flex gap-2 mb-10'>
          <input
            id='todo-input'
            name='todo'
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type='text'
            placeholder='Add to your list...'
            className='flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 
                       text-white placeholder-slate-500 outline-none backdrop-blur-sm
                       focus:ring-2 focus:ring-emerald-500/50 transition-all'
          />
          <button
            type='submit'
            className='bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-900/20'>
            Add
          </button>
        </form>

        <div className='flex flex-col'>
          <AnimatePresence mode='popLayout'>
            {todos.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                onDelete={deleteTodo}
                onEdit={editTodo}
                onToggle={toggleTodo}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Todo;
