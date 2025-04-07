import { useContext } from "react";
import { DashboardContext } from "../Provider/DashboarProvider";

const useDashboard = () => {
  const info = useContext(DashboardContext);
  return info;
};

export default useDashboard;
