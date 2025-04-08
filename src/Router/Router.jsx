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
import AboutUs from "../Pages/AboutUs";
import Events from "../Pages/Events";
import Donate from "../Pages/Donate";
import Contact from "../Pages/Contact";
import Profile from "../Pages/Profile";
import AvailableEvents from "../Pages/Volunteer/AvailableEvents";
import MyAssignedEvents from "../Pages/Volunteer/MyAssignedEvents";
import ProgressReport from "../Pages/Volunteer/ProgressReport";
import MyDonation from "../Pages/Donor/MyDonation";
import TransactionHistory from "../Pages/Donor/TransactionHistory";
import DonateNow from "../Pages/Donor/DonateNow";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/about-us", element: <AboutUs></AboutUs> },
      { path: "/events", element: <Events></Events> },
      { path: "/donate", element: <Donate></Donate> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "/my-profile", element: <Profile></Profile> },
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
      // volunteer
      {
        path: "available-events",
        element: <AvailableEvents></AvailableEvents>,
      },
      {
        path: "my-assigned-events",
        element: <MyAssignedEvents></MyAssignedEvents>,
      },
      { path: "progress-reports", element: <ProgressReport></ProgressReport> },
      // donor
      { path: "my-donation", element: <MyDonation></MyDonation> },
      {
        path: "donate-now",
        element: <DonateNow></DonateNow>,
      },
      { path: "transaction-history", element:<TransactionHistory></TransactionHistory>  },
    ],
  },
]);

export default router;
