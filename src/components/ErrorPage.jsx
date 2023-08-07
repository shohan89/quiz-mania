import Lottie from "lottie-react";
import error from '../assets/error.json';
import React from 'react';
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div >
      <Lottie className="h-64" animationData={ error } loop={ true } />
      <h2 className="text-3xl font-semibold mb-5">Opps! You lost your way!</h2>
      <Link className=" bg-orange-600 px-3 py-2 text-white rounded-xl" to='/'>Go Back</Link>
    </div>
  );
};

export default ErrorPage;