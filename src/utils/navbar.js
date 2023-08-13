import useUniqueId from "../hooks/useId";
import Homepage from "../pages/home";
import PropertiesPage from "../pages/properties";

export const navbar = [
  {
    id: useUniqueId,
    element: <Homepage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: <PropertiesPage />,
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