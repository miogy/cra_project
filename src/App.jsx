// import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>Not Found🤦‍♀️</p>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/textile_design",
    element: <p>textle design</p>,
  },
  {
    path: "/projects",
    element: <p>project</p>,
  },
  {
    path: "/web_app",
    element: <p>web and app</p>,
  },
  {
    path: "archiving",
    element: <p>archiving</p>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
