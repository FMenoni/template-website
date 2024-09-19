import React from "react";
import {
  BrowserRouter as Router, // Import Router for handling routing
  Route, // Import Route to define different routes
  Routes, // Import Routes to handle routing logic
  Navigate, // Import Navigate for redirecting
} from "react-router-dom";
import Home from "./pages/Home"; // Import the Home page component
import Legal from "./pages/Legal"; // Import the Legal page component
import "./App.css"; // Import CSS styles

function App() {
  return (
    // Router component to manage routing for the application
    <Router>
      <Routes>
        {/* Redirect root path to /home */}
        <Route path="/" element={<Navigate to="/home" />} />
        {/* Define route for the Home page */}
        <Route path="/home" element={<Home />} />
        {/* Define route for the Legal page */}
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </Router>
  );
}

export default App;
