import './App.css';
import Main from './components/main-layout/main';
import PrivacyPage from './components/privacy/privacy-page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { inject } from '@vercel/analytics';
import useSmoothScroll from './components/functions/smoothScroll';

inject();



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/privacy-page' element={<PrivacyPage />} />
        </Routes>
        <Analytics />
        <SpeedInsights />
      </Router>
    </div>
  );
}

export default App;
