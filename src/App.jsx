import React from 'react'
import Navbar from './components/utils/Navbar'
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from './components/pages/Home';
function App() {
    return (
        <div>
            <Router>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/study" element={<h1>Study</h1>}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App