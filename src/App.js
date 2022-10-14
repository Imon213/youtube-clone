import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import "./App.css";

import { Box } from "@mui/material";
import ChannelDetail from "./Component/ChannelDetail/ChannelDetail";
import Navbar from "./Component/Navbar/Navbar";
import VideoDetail from "./Component/VideoDetail/VideoDetail";
import SearchFeed from "./Component/SearchFeed/SearchFeed";
import Feed from "./Component/Feed/Feed";
function App() {
  return (
    <div className="App">
      <Router>
        <Box sx={{ background: "#000" }} />
        <Navbar />
       
          <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route exact path="/channel/:id" element={<ChannelDetail />} />
          <Route exact path="/video/:id" element={<VideoDetail />} />
          <Route exact path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
       
      </Router>
    </div>
  );
}

export default App;
