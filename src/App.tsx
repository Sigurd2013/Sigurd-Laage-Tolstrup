/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { AuthProvider } from "./contexts/AuthContext";
import { Home } from "./pages/Home";
import { Businesses } from "./pages/Businesses";
import { Events } from "./pages/Events";
import { Membership } from "./pages/Membership";
import { Inspiration } from "./pages/Inspiration";
import { Contact } from "./pages/Contact";
import { CreateEvent } from "./pages/CreateEvent";
import { Login } from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "medlemsoversigt", element: <Businesses /> },
      { path: "events", element: <Events /> },
      { path: "events/opret", element: <CreateEvent /> },
      { path: "login", element: <Login /> },
      { path: "bliv-medlem", element: <Membership /> },
      { path: "inspiration", element: <Inspiration /> },
      { path: "kontakt", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
