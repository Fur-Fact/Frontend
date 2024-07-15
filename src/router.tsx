import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MoblieLayout from './components/common/MoblieLayout';
import PCLayout from './components/common/PCLayout';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MoblieLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "other",
        element: <App /> 
      },
    ],
  },
  {
    path: "/back",
    element: <PCLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "other",
        element: <App />
      }
    ]
  }
]);

export const pages = [];
