import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Character from "./pages/Character";
import NotFound from "./component/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "/character/:id",
        element: <Character />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
