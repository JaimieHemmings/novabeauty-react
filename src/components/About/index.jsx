import Hero from '../_partials/Hero'
import Testimonials from '../_partials/Testimonials'
import FaceImage from '../../assets/images/face-line.png'
import Swiper from "../_partials/Swiper"
import './index.css'

const About = () => {
    return (
        <>
            <Swiper />
            <Hero
                title={"About Us"}
                p1={"If you need some more information or would like to book an appointment with me, please use the form below!"}
                p2={"I can't wait to hear from you!"}
            />
            <section className="about-us" style={{ backgroundImage: `url(${FaceImage})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>VISUAL INTEGRITY,<br />
                            SIMPLE FORMS AND<br />
                            STRIVING FOR<br />
                            HARMONY</h2>
                        </div>
                        <div className="col">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, dolores. Quisquam quasi id alias odit, dicta dolore accusamus similique ducimus, veritatis vero optio earum quam repellat eum adipisci amet provident!</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, dolores. Quisquam quasi id alias odit, dicta dolore accusamus similique ducimus, veritatis vero optio earum quam repellat eum adipisci amet provident!</p>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials />
        </>
    )
}

export default About