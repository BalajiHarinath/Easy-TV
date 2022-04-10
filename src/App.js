import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HeaderNav, SidebarNav } from "./components";
import { Home, VideoPage } from "./pages";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <SidebarNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideoPage />} />
      </Routes>
    </div>
  );
}

export default App;
