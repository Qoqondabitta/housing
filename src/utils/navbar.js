import React from "react";
import useUniqueId from "../hooks/useId";
// import Homepage from "../pages/home";
// import PropertiesPage from "../pages/properties";
const PropertiesPage = React.lazy(() => import("../pages/properties"));
const Homepage = React.lazy(() => import("../pages/home"));

export const navbar = [
  {
    id: useUniqueId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Homepage />
      </React.Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <PropertiesPage />
      </React.Suspense>
    ),
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    // element: <SigninPage />,
    element: <h1>Signin</h1>,
    title: "Signin",
    path: "/signin",
    private: false,
    hidden: true,
  },
];

export default navbar