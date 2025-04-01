import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/routes.jsx";
import UserProvider from "./contexts/UserProvider.jsx";
import CaptainProvider from "./contexts/CaptainProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CaptainProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </CaptainProvider>
  </StrictMode>
);
