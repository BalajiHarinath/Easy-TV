import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoProvider, CategoryProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CategoryProvider>
        <VideoProvider>
          <App />
        </VideoProvider>
      </CategoryProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
