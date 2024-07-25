
import { createBrowserRouter } from "react-router-dom";
import MoblieLayout from "./components/common/MoblieLayout";
import PCLayout from "./components/common/PCLayout";
import MainPage from "./pages/main";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Alarm from "./pages/alarm";
import ResultMobilePage from "./pages/result/mobile";
import Vet from './pages/vetList';
import VetResult from './pages/vetResult';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MoblieLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "alarm",
        element: <Alarm />,
      },
      {
        path: "result",
        element: <ResultMobilePage />,
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
        path: 'result/:testId',
        element: <VetResult />,
      },
    ],
  },
]);

export const pages = [];
