import './App.css';
import Video from './components/video/video.js'
import HeroSection from './components/hero-section/heroSection.js';
import UnderHero from './components/under-hero/underHero.js';
import CardsInfo from './components/cards/cardsInfo.js';
import Cards from './components/cards/cards.js';
import Parallax from './components/parallax/parallax.js';
import Slider from './components/products/products.js';


function App() {
  return (
    <div className="App">

      <Video />
      <HeroSection />
      <UnderHero />
      <CardsInfo />
      <Cards />
      <Parallax />
      <Slider />

    </div>
  );
}

export default App;
