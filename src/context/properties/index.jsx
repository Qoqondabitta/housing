import { createContext } from "react";

const PropertiesContext = createContext();

const PropertiesProvider = ({ children }) => {
  return <PropertiesContext.Provider value={""}>{children}</PropertiesContext.Provider>;
};

export default PropertiesProvider;
