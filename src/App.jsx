import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Blog0 from './blog0';
import Blog1 from './blog1';
import Blog2 from './blog2';
import Home from './home';
function App() {
  return (
    <Router basename="/porto-V2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/#blog" element={<Home />} />
            <Route path="/blog/0" element={<Blog0 />} />
            <Route path="/blog/1" element={<Blog1 />} />
            <Route path="/blog/2" element={<Blog2 />} />
          </Routes>
        </Router>
  );
}

export default App;
