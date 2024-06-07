import React from 'react'
import Navbar from './components/utils/Navbar'
import {
    BrowserRouter as Router,
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
                </Routes>
            </Router>
        </div>
    )
}

export default App