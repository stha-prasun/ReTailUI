import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import ComponentsPage from "./components/ComponentsPage";
import DocsPage from "./components/DocsPage";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/components",
      element: <ComponentsPage />,
    },
    {
      path: "/docs",
      element: <DocsPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
