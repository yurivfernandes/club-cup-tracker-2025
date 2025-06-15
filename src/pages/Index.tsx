
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Home from './Home';
import Groups from './Groups';
import Knockout from './Knockout';
import Ranking from './Ranking';
import Criteria from './Criteria';

const Index = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/knockout" element={<Knockout />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/criteria" element={<Criteria />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default Index;
