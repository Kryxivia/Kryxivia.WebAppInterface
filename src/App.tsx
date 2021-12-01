import React from "react";
import "./assets/css/app.css";
import Layout from "./components/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Staking from "./pages/Staking";
import { Mint } from "./pages/Mint";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Staking />} />
                    <Route path="/mint" element={<Mint />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
