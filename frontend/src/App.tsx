import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuestionnaireForm from './components/QuestionnaireForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/questionnaire" element={<QuestionnaireForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
