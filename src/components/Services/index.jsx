import './index.css'
import Hero from '../_partials/Hero'
import Testimonials from '../_partials/Testimonials'

const Services = () => {
    return (
        <>
            <Hero
                title={"All About You"}
                p1={"We offer a variety of treatments and therapies, Whether you want to recover from last nights antics or prepare for tonights, need to destress or just have some you time"}
                p2={"Whatever you're here for, we can help you feel more relaxed, refreshed and rejuvinated"}            
            />

            <Testimonials />
        </>
    )
}

export default Services