import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MoblieLayout from './components/common/MoblieLayout';
import PCLayout from './components/common/PCLayout';
import MainPage from './pages/main';
import Login from './pages/login';
import SignUp from './pages/signup';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MoblieLayout/>,
    children: [
      {
        index: true,
        element: <MainPage/>
      },
      {
        path: "/login",
        element: <Login/> 
      },
      {
        path: "/signup",
        element: <SignUp/>
      }
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
