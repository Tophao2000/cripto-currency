import { createBrowserRouter } from "react-router";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detalhes/:cripto",
        element: <Detail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
