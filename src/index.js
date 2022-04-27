import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
  VideoProvider,
  CategoryProvider,
  SingleVideoProvider,
  WatchLaterProvider,
  AuthProvider,
  LikedVideoProvider,
  HistoryProvider,
  PlaylistProvider,
  ToastProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToastProvider>
        <AuthProvider>
          <CategoryProvider>
            <PlaylistProvider>
              <LikedVideoProvider>
                <HistoryProvider>
                  <WatchLaterProvider>
                    <VideoProvider>
                      <SingleVideoProvider>
                        <App />
                      </SingleVideoProvider>
                    </VideoProvider>
                  </WatchLaterProvider>
                </HistoryProvider>
              </LikedVideoProvider>
            </PlaylistProvider>       
          </CategoryProvider>
        </AuthProvider>
      </ToastProvider>
      
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
