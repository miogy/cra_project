// import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";
import Textile from "./pages/Textile";
import TextileDetail from "./pages/TextileDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/textile_design",
        element: <Textile />,
      },
      {
        path: "/textile_design/:designId",
        element: <TextileDetail />,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
