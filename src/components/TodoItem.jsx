/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TodoItem({ item, onDelete, onEdit, onToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(item.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <motion.div
      // Animation Properties
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      layout // This smoothly repositions other items when one is deleted
      className={`group flex items-center justify-between p-4 mb-3 
                  bg-white/5 border border-white/10 rounded-xl 
                  backdrop-blur-md transition-colors duration-300 
                  ${item.completed ? "opacity-50" : "hover:bg-white/10"}`}>
      <div className='flex items-center gap-4 flex-1'>
        <button
          onClick={() => onToggle(item.id)}
          className={`h-6 w-6 rounded-full border-2 transition-all flex items-center justify-center
                     ${
                       item.completed
                         ? "bg-emerald-500 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                         : "border-slate-500 hover:border-emerald-400"
                     }`}>
          {item.completed && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              stroke='white'
              strokeWidth='4'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <polyline points='20 6 9 17 4 12'></polyline>
            </svg>
          )}
        </button>

        {isEditing ? (
          <input
            type='text'
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className='flex-1 bg-slate-800 border border-emerald-500/50 rounded-lg px-2 py-1 text-white outline-none'
            autoFocus
          />
        ) : (
          <h3
            className={`font-medium tracking-wide transition-all duration-500
                         ${item.completed ? "text-slate-500 line-through" : "text-slate-200"}`}>
            {item.text}
          </h3>
        )}
      </div>

      <div className='flex gap-2 ml-4'>
        {isEditing ? (
          <button
            onClick={handleSave}
            className='text-emerald-400 hover:text-emerald-300 text-sm font-bold uppercase'>
            Save
          </button>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className='p-2 rounded-lg text-slate-500 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all opacity-0 group-hover:opacity-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path>
                <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'></path>
              </svg>
            </button>
            <button
              onClick={() => onDelete(item.id)}
              className='p-2 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-400/10 transition-all opacity-0 group-hover:opacity-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <path d='M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2'></path>
              </svg>
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
}
