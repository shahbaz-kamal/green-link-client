import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
  },
]);

export default router;
