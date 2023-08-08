import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Root from "../components/Root";
import Statistics from "../components/Statistics";
import Topics from "../components/Topics";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
      }
    ]
  }
]);

export default router