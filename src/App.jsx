// import logo from "./logo.svg";
import "./App.css";
import {
  // HashRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";
import Graphic from "./pages/Graphic";
import GraphicDetail from "./pages/GraphicDetail";
import Wallpaper from "./pages/Wallpaper";
import Archive from "./pages/Archive";
import Develop from "./pages/Develop";

const router = createBrowserRouter([
  {
    path: process.env.PUBLIC_URL,
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
      {
        path: process.env.PUBLIC_URL + "/about",
        element: <About />,
      },
      {
        path: process.env.PUBLIC_URL + "/graphic",
        element: <Graphic />,
      },
      {
        path: process.env.PUBLIC_URL + "/graphic/:designId",
        element: <GraphicDetail />,
      },
      {
        path: process.env.PUBLIC_URL + "/develop",
        element: <Develop />,
      },
      {
        path: process.env.PUBLIC_URL + "/archive",
        element: <Archive />,
      },
      {
        path: process.env.PUBLIC_URL + "/wallpaper",
        element: <Wallpaper />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
  // return <HashRouter router={router} />;
}

export default App;
