import './index.css'
import Swiper from "../_partials/Swiper"
import Hero from "../_partials/Hero"
import Panels from "../_partials/Panels"
import Testimonials from '../_partials/Testimonials'

const Home = () => {
    return (
        <main>
            <Swiper />
            <Hero />
            <Panels />
            <Testimonials />
        </main>
    )
}

export default Home