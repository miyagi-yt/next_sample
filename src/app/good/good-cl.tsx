'use client';
import { useState } from 'react';
import styles from './good-cl.module.css';

const GoodCl = () => {
  const [likes, setLikes] = useState(0);

  const doClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <style jsx>{`
        .counter {
          font-size: 2em;
          color: #ff0000;
        }
      `}</style>
      <div
        className="counter"
        style={{ border: '1px solid #ff0000' }}
      >{`counter: ${likes}`}</div>
      <button
        className={
          'bg-indigo-700 font-semibold text-white py-2 px-4 rounded hover:bg-red-500'
        }
        onClick={doClick}
      >
        Likes
      </button>
      <a href="#_" className="relative inline-block text-lg group">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span className="relative">Button Text</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </a>
      <button className={styles.btn}> Click </button>
    </div>
  );
};

export default GoodCl;
