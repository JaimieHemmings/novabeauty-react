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
                p1={"I offer premium traditional therapies and services including luxury manicure treatments, waxing, hairdressing and much more!"}
                p2={"Drawing on nearly a decade of experience I intend you make you feel comfortable in your own skin."}            
            />
            <Panels />
            <Testimonials />
        </main>
    )
}

export default Home