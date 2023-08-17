import React from 'react';

const Pagination = ({ currentPage }) => {
  return (
    <div className='flex flex-wrap justify-center items-center'>
      <button
        className='bg-yellow-400 font-mono font-bold mx-4 my-8 text-5xl rounded-lg'
        onClick={onPrevClick}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <p className='font-mono font-bold ml-4 mr-2 my-8 text-3xl text-slate-500'>
        Page {currentPage} of {totalPages}
      </p>

      <button
        className='bg-yellow-400 font-mono font-bold mx-4 my-8 text-5xl rounded-lg'
        onClick={onNextClick}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination