import React from 'react';

const Question = ({ question }) => {
  // const { question } = question;
  // console.log( question.question );

  return (
    <div className='p-10 bg-gray-100 m-10 shadow-xl rounded-xl'>
      <h2 className='text-bold font-bold text-xl text-orange-600'>Quiz: { question.question }</h2>
      <br />
      <div className="">
        <ul className='grid grid-cols-1 md:grid-cols-2'>
          <li className='p-5 border-2 border-orange-400 rounded-lg m-2 cursor-pointer hover:bg-orange-400 hover:text-white transition duration-300'>01. {question.options[0]}</li>
          <li className='p-5 border-2 border-orange-400 rounded-lg m-2 cursor-pointer hover:bg-orange-400 hover:text-white transition duration-300'>02. {question.options[1]}</li>
          <li className='p-5 border-2 border-orange-400 rounded-lg m-2 cursor-pointer hover:bg-orange-400 hover:text-white transition duration-300'>03. {question.options[2]}</li>
          { question.options[3] && (
            <li className='p-5 border-2 border-orange-400 rounded-lg m-2 cursor-pointer hover:bg-orange-400 hover:text-white transition duration-300'>04. {question.options[3]}</li>
          ) }
        </ul>
      </div>
      <br />
    </div>
  );
};

export default Question;