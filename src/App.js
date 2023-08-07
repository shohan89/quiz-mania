import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import { Children } from 'react';
import Topics from './components/Topics';
import ErrorPage from './components/ErrorPage';

function App() {
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
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={ router } />
    </div>
  );
}

export default App;
