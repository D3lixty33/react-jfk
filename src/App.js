import './App.css';
import Main from './components/main-layout/main';
import PrivacyPage from './components/privacy/privacy-page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App w-screen">

      <Router>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path='/privacy-page' element={<PrivacyPage />} />
        </Routes>
      </Router>


      

    </div>
  );
}

export default App;
