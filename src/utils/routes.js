import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import QuizDetails from "../components/QuizDetails";
import Root from "../components/Root";
import Statistics from "../components/Statistics";
import Topics from "../components/Topics";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: () => fetch( 'https://openapi.programming-hero.com/api/quiz' ),
    errorElement: <ErrorPage />,
    children: [
      // TODO: Add a route for the home page
      {
        path: '/',
        element: <Topics />
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: `/quiz/:quizId`,
        element: <QuizDetails />,
        loader: ({ params })=> {
          return fetch( `https://openapi.programming-hero.com/api/quiz/${ params.quizId }` );
        }
      }
    ]
  }
]);

export default router