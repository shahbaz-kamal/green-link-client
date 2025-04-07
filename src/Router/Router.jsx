import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import Overview from "../Pages/Admin/Overview";
import ManageUsers from "../Pages/Admin/ManageUsers";
import EventManagements from "../Pages/Admin/EventManagements";
import Donations from "../Pages/Admin/Donations";
import ReportsAndAnalytics from "../Pages/Admin/ReportsAndAnalytics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      // for admin
      { path: "overview", element: <Overview></Overview> },
      { path: "manage-users", element: <ManageUsers></ManageUsers> },
      {
        path: "event-managements",
        element: <EventManagements></EventManagements>,
      },
      { path: "Donations", element: <Donations></Donations> },
      {
        path: "reports-and-analytics",
        element: <ReportsAndAnalytics></ReportsAndAnalytics>,
      },
    ],
  },
]);

export default router;
