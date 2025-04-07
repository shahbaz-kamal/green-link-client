import React, { createContext } from "react";

export const DashboardContext = createContext();

const DashboarProvider = ({ children }) => {
  const dashboardInfo = { name: "tamim" };
  return (
    <DashboardContext.Provider value={dashboardInfo}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboarProvider;
