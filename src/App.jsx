import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import AppMitzvah from "./Pages/AppMitzvah";

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Navbar />
                                    <Home />
                                </>
                            }
                        />
                        <Route
                            path="*"
                            element={<div>404 Not Found</div>}
                        ></Route>
                        <Route
                            path="app-mitzvah"
                            element={<AppMitzvah />}
                        ></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
