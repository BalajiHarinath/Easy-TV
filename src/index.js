import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoProvider, CategoryProvider, SingleVideoProvider, WatchLaterProvider, AuthProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CategoryProvider>
          <WatchLaterProvider>
            <VideoProvider>
                <SingleVideoProvider>
                  <App />
                </SingleVideoProvider>         
            </VideoProvider>
          </WatchLaterProvider>      
        </CategoryProvider>
      </AuthProvider>     
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
