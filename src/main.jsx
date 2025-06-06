import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="hl_wrapper">
      <div className="hl_wrapper--inner">
        <App />
      </div>
    </div>
  </React.StrictMode>,
);
