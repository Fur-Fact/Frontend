import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MoblieLayout from './components/common/MoblieLayout';
import PCLayout from './components/common/PCLayout';
import MainPage from './pages/main';
import Vet from './pages/vetList';
import VetResult from './pages/vetResult';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MoblieLayout />,
    children: [
      {
        index: true,
        element: <MainPage/>
      },
      {
        path: 'other',
        element: <App />,
      },
    ],
  },
  {
    path: '/vet',
    element: <PCLayout />,
    children: [
      {
        index: true,
        element: <Vet />,
      },
      {
        path: 'result',
        element: <VetResult />,
      },
    ],
  },
]);

export const pages = [];
