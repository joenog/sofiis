import { createBrowserRouter } from "react-router-dom";
import { Home } from "./src/pages/home";
import { Profile } from "./src/pages/profile";
import { NotFound } from "./src/pages/notfound";
import { Layout } from "./src/components/layout";
import { News } from "./src/pages/news";
import { Market } from "./src/pages/market";
import { Learn } from "./src/pages/learn";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/market",
        element: <Market />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "learn",
        element: <Learn />
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
