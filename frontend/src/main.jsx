import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { DatabaseProvider } from "./context/DatabaseContext";

import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DatabaseProvider>
          <App />
      </DatabaseProvider>
    </AuthProvider>
  </React.StrictMode>
);