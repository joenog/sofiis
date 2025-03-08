import { createBrowserRouter } from "react-router-dom";
import { Home } from './src/pages/home'
import { About } from './src/pages/about'
import { NotFound } from './src/pages/notfound'
import { Layout } from "./src/components/layout";
import { News } from "./src/pages/news";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '*',
        element: <NotFound />
      },
      {
        path: 'news',
        element: <News />
      }
    ]
  }
])

export default router
