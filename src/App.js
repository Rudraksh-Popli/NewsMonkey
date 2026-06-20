import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";

import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router";

const App = () => {
    let pageSize = 9;
    let apiKey = process.env.REACT_APP_NEWS_API
    const [progress, setProgress] = useState(0)
    return (
        <div>
            <Router>
                <NavBar />
                <LoadingBar
                    height={3}
                    color="#f11946"
                    progress={progress}
                />
                <Routes>
                    <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general"
                        apiKey={apiKey} />} />
                    <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="us" category="business"
                        apiKey={apiKey} />} />
                    <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment"
                        apiKey={apiKey} />} />
                    <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health"
                        apiKey={apiKey} />} />
                    <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science"
                        apiKey={apiKey} />} />
                    <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports"
                        apiKey={apiKey} />} />
                    <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="us" category="technology"
                        apiKey={apiKey} />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
