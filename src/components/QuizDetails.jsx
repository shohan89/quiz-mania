import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const QuizDetails = () => {
  const quizData = useLoaderData();
  const quiz = quizData.data;
  const { name, questions } = quiz;
  // const { options, question, correctAnswer } = questions;
  
  // console.log( quiz );

  return (
    <div>
      <h2 className='font-bold text-3xl text-center mt-5 mb-5 text-orange-600'>Quiz Of { name }</h2>
      {
        questions.map( question => <Question key={ question.id } question={ question } /> )
      }
    </div>
  );
};

export default QuizDetails;