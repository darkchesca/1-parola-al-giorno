import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import History from "./views/history";
import Words from "./views/words";
import Settings from "./views/settings";
import './App.css';

function App() {

  return (
      <div className="App">
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/history" element={<History />} />
            <Route path="/" element={<Words />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
  );
}

export default App;
