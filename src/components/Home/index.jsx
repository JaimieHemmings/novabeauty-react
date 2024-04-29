import './index.css'
import Swiper from "../_partials/Swiper"
import Hero from "../_partials/Hero"
import Panels from "../_partials/Panels"
import Testimonials from '../_partials/Testimonials'

const Home = () => {
    return (
        <main>
            <Swiper />
            <Hero
                title={"The WOW Effect"}
                p1={"Welcome to my sanctuary of holistic beauty and rejuvenation, where tranquility meets transformation. Nestled in the heart of serene Cornish surroundings, we invite you on a journey of self-discovery and revitalization. Using a variety of skills I blend ancient healing techniques with modern practices to provide a holistic approach to beauty and wellness."}
                p2={"Embrace a holistic approach to beauty that celebrates your unique essence. Our range of therapies goes beyond skin-deep, nourishing your inner radiance and enhancing your natural glow. Whether you seek radiant skin, inner peace, or simply a moment of tranquility, our sanctuary awaits to envelop you in a world of holistic rejuvenation"}
                p3={"Step into our oasis of relaxation and surrender yourself to the soothing touch of massage therapy. From Swedish massages to aromatherapy sessions, each treatment is thoughtfully tailored to harmonize your body, mind, and spirit. Let the stresses of daily life melt away as you embark on a transformative experience designed to restore balance and vitality."}            
            />
            <Panels />
            <Testimonials />
        </main>
    )
}

export default Home