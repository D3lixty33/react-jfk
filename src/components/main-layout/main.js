import Video from '../video/video.js'
import HeroSection from '../hero-section/heroSection.js';
import UnderHero from '../under-hero/underHero.js';
import CardsInfo from '../cards/cardsInfo.js';
import Cards from '../cards/cards.js';
import Parallax from '../parallax/parallax.js';
import Slider from '../products/products.js';
import News from '../news/news.js';
import ScrollForm from '../scrollForm/scrollForm.js';
import Footer from '../footer/footer.js';
import Privacy from '../privacy/privacy.js';
import useSmoothScroll from '../functions/smoothScroll.js';


const Main = () => {

    useSmoothScroll();

    return (
        <div className='main'>
            <Video />
            <HeroSection />
            <UnderHero />
            <CardsInfo />
            <Cards />
            <Parallax />
            <Slider />
            <News />
            <ScrollForm />
            <Footer />
            <Privacy />
        </div>
    )
}

export default Main;