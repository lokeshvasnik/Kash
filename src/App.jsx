import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Home />
        </div>
    );
};

export default App;
