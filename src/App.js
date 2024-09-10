import './App.css';
import Video from './components/video/video.js'
import HeroSection from './components/hero-section/heroSection.js';
import UnderHero from './components/under-hero/underHero.js';
import CardsInfo from './components/cards/cardsInfo.js';


function App() {
  return (
    <div className="App">

      <Video />
      <HeroSection />
      <UnderHero/>
      <CardsInfo/>

    </div>
  );
}

export default App;
