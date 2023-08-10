import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Question = ({ question }) => {
  const { options, correctAnswer } = question;
  const [ selectAnswer, setSelectAnswer ] = useState( null );
  const checkCorrectAns = selectOption =>{
    setSelectAnswer( selectOption );

    if (selectOption === correctAnswer) {
      toast.success('Your Answer Is Correct!🥳', { autoClose: 1000 });
    } else {
      toast.error( 'Your Answer Is Wrong!☹️', { autoClose: 1000 } );
    }
  }
  const showCorrectAnswer = () => {
    toast.info(`The correct answer is: ${correctAnswer}`, { autoClose: 3000 });
  };

  return (
    <div className='p-10 bg-gray-100 m-10 shadow-xl rounded-xl relative'>
      <h2 className='text-bold font-bold text-xl text-orange-600'>Quiz: { question.question }</h2>
      <div onClick={ showCorrectAnswer } className='absolute top-0 right-0 cursor-pointer'>
        <FontAwesomeIcon icon={faInfoCircle} className='text-orange-600 p-4' />
      </div>
      <br />
      <div className="">
        <ul className='grid grid-cols-1 md:grid-cols-2'>
          {
            options.map((option, index) => (
              <li onClick={ ()=> checkCorrectAns(option) } className='p-5 border-2 border-orange-400 rounded-lg m-2 cursor-pointer hover:bg-orange-400 hover:text-white transition duration-300' key={index}> { index + 1 }. {option}</li>
            ))
          }
        </ul>
      </div>
      <br />
    </div>
  );
};

export default Question;