/** @format */

import React from "react";

export default function TodoItem({ item, onDelete }) {
  return (
    <div
      className='group flex items-center justify-between p-4 mb-3 
                    bg-white/5 border border-white/10 rounded-xl 
                    backdrop-blur-md transition-all duration-300 
                    hover:bg-white/10 hover:border-white/20'>
      <h3 className='text-slate-200 font-medium tracking-wide'>{item.text}</h3>

      <button
        onClick={() => onDelete(item.id)}
        className='p-2 rounded-lg text-slate-500 hover:text-red-400 
                   hover:bg-red-400/10 transition-all opacity-0 
                   group-hover:opacity-100'
        aria-label='Delete task'>
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
    </div>
  );
}
