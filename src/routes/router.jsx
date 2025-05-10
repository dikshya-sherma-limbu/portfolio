import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ProjectPage } from "../pages/ProjectPage";
import { ContactPage } from "../pages/ContactPage";
import { BlogPage } from "../pages/BlogPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    //children - means nested routes
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "projects",
        element: <ProjectPage />,
      },
      { path: "contact", element: <ContactPage /> },
      {
        path: "blog",
        element: <BlogPage />,
      },
    ],
  },
]);
