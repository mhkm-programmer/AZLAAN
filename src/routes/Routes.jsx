import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ServicePage from "../pages/service/ServicePage";
import AboutMePage from "../pages/about/AboutMePage";
import ContactPage from "../pages/contact/ContactPage";
import ErrorPage from "../pages/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Main />
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // default route for "/"
        element: <Home />,
      },
      {
        path: "service",
        element: <ServicePage />,
      },
      {
        path: "about",
        element: <AboutMePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },

  // Fallback for unmatched routes
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
