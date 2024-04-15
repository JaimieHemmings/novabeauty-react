import Hero from '../_partials/Hero'
import Testimonials from '../_partials/Testimonials'
import './index.css'

const About = () => {
    return (
        <>
            <Hero
                title={"About Us"}
                p1={"If you need some more information or would like to book an appointment with me, please use the form below!"}
                p2={"I can't wait to hear from you!"}
            />
            <Testimonials />
        </>
    )
}

export default About