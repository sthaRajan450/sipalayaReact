import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <AppRoutes />
      <Toaster />
    </div>
  );
}

export default App;
