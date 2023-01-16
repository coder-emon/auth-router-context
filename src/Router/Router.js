import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import PrivateRoute from "../Components/PrivateRoute";
import Register from "../Components/Register";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/home",
        element: (
          <PrivateRoute>
            <Home></Home>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
