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
      { path: "about", element: <About /> },
      { path: "graphic", element: <Graphic /> },
      { path: "graphic/:designId", element: <GraphicDetail /> },
      { path: "develop", element: <Develop /> },
      { path: "archive", element: <Archive /> },
      { path: "wallpaper", element: <Wallpaper /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
  // return <HashRouter router={router} />;
}

export default App;
