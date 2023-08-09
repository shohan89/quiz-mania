import React from 'react';

const Question = ({ question }) => {
  const { options, correctAnswer } = question;
  // console.log( correctAnswer );
  const checkCorrectAns = correctAns =>{
    console.log( correctAns );
  }
  return (
    <div className='p-10 bg-gray-100 m-10 shadow-xl rounded-xl'>
      <h2 className='text-bold font-bold text-xl text-orange-600'>Quiz: { question.question }</h2>
      <br />
      <div className="">
        <ul className='grid grid-cols-1 md:grid-cols-2'>
          {
            options.map((option, index) => (
              <li onClick={ ()=> checkCorrectAns(correctAnswer) } className='p-5 border-2 border-orange-400 rounded-lg m-2 cursor-pointer hover:bg-orange-400 hover:text-white transition duration-300' key={index}> { index + 1 }. {option}</li>
            ))
          }
        </ul>
      </div>
      <br />
    </div>
  );
};

export default Question;