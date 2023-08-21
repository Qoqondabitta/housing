// import { createContext, useReducer } from "react";
import PropertiesProvider from "./properties";
// import { reducer } from "./properties/reducer";

// const Root = createContext();

const RootContext = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, []);
  return (
    // <Root.Provider>
    <>
      {/* <PropertiesProvider value={[state, dispatch]}> */}
      <PropertiesProvider value="">{children}</PropertiesProvider>
      {/* </Root.Provider> */}
    </>
  );
};

export default RootContext;
