import { createContext } from "react";

const PropertiesContext = createContext();

const PropertiesProvider = ({ children }) => {
  return <PropertiesContext.Provider>{children}</PropertiesContext.Provider>;
};

export default PropertiesProvider;
