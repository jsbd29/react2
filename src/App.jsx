/** @format */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {AuthContext} from  './AuthContext'
import Layout from "./layout/Layout";
import UserDashboard from "./pages/UserDashboard";
import LoginPage from ".//pages/LoginPage"; // Added this import
import UserSettings from "./pages/UserSettings";
import ProtectedRoute from './ProtextedRoute'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        // Protected Wrapper
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard",
            element: <UserDashboard />,
          },
          {
            path: "settings",
            element: <UserSettings />,
          },
        ],
      },
    ],
  },
]); // Closed the array and function call properly here

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
