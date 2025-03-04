import { createBrowserRouter } from "react-router-dom";
import { Home } from './src/pages/home'
import { About } from './src/pages/about'
import { NotFound } from './src/pages/notfound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
    {
    path: '/notfound',
    element: <NotFound />
  },
])

export default router
