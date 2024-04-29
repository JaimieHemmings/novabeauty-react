import './index.css'
import Hero from '../_partials/Hero'
import Testimonials from '../_partials/Testimonials'
import Nails from '../../assets/images/panels/category_0009_nails.avif'
import Massage from '../../assets/images/panels/category_0002_massage.avif'
import Microdermabrasion from '../../assets/images/panels/category_0001_spray_tan.avif'
import Waxing from '../../assets/images/panels/category_0000_waxing.avif'
import Facials from '../../assets/images/panels/category_0007_facials.avif'
import Lashes from '../../assets/images/panels/category_0008_eyes.avif'
import Hair from '../../assets/images/panels/category_0006_hair.avif'
import Brows from '../../assets/images/panels/category_0003_makeup.avif'

const Services = () => {
    return (
        <>
            <Hero
                title={"All About You"}
                p1={"We offer a variety of treatments and therapies, Whether you want to recover from last nights antics or prepare for tonights, need to destress or just have some you time"}
                p2={"Whatever you're here for, we can help you feel more relaxed, refreshed and rejuvinated"}            
            />

            <div className="container services-list">
                <div className="row">
                    <div className="col" style={{
                        backgroundImage: `url(${Nails})`,
                    }}>
                        <h3>Nails</h3>
                        <p>At our sanctuary of beauty, we offer an array of treatments designed to elevate your manicure experience to new heights. Whether you're in need of infills to maintain your stunning acrylics, a flawless gel polish that lasts, or a classic manicure for a touch of elegance, we have you covered.</p>
                        <ul>
                            <li>Gel Polish<span>£22</span></li>
                            <li>Luxury Manicure<span>£30</span></li>
                            <li>Pedicure<span>£22</span></li>
                            <li>Luxury Pedicure<span>£30</span></li>
                        </ul>
                    </div>
                    <div className="col" style={{
                        backgroundImage: `url(${Massage})`,
                    }}>
                        <h3>Massages</h3>
                        <p>Embark on a journey of relaxation and rejuvenation with our exquisite range of massage services tailored to soothe your body, mind, and soul. At our sanctuary of serenity, we offer a blissful escape from the stresses of daily life.</p>
                        <ul>
                            <li>Swedish/Full Body<span>£25/£35</span></li>
                            <li>Aromatherapy Back/Full Body<span>£35/£50</span></li>
                            <li>Back, Neck and Shoulder<span>£40</span></li>
                            <li>Hot Stone Back/Full Body<span>£35/£50</span></li>
                            <li>Oncology Massage<span>£55</span></li>
                            <li>Indian Head Massage<span>£35</span></li>
                            <li>With Face Included<span>£2</span></li>
                        </ul>
                    </div>
                    <div className="col" style={{
                        backgroundImage: `url(${Microdermabrasion})`,
                    }}>
                        <h3>Microdermabrasion</h3>
                        <p>Revitalize your skin and reveal a radiant complexion with our transformative microdermabrasion services. At our sanctuary of beauty, we offer a range of treatments designed to rejuvenate your skin and restore its natural glow.</p>
                        <ul>
                            <li>Luxury Manicure<span>£30</span></li>
                            <li>Luxury Manicure<span>£30</span></li>
                            <li>Luxury Manicure<span>£30</span></li>
                        </ul>
                    </div>
                    <div className="col" style={{
                        backgroundImage: `url(${Waxing})`,
                    }}>
                        <h3>Waxing</h3>
                        <p>Discover the secret to silky smooth skin with our premium waxing services designed to leave you feeling confident and carefree.</p>
                        <ul>
                            <li>Eyebrow<span>£8</span></li>
                            <li>Upper Lip<span>£20</span></li>
                            <li>Chin<span>£10</span></li>
                        </ul>
                    </div>
                    <div className="col" style={{
                        backgroundImage: `url(${Facials})`,
                    }}>
                        <h3>Facials</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero hic aliquam fugit quaerat ex labore a eaque nobis maiores, id exercitationem quae. Dolore deserunt voluptas nemo autem error quibusdam ab.</p>
                        <ul>
                            <li>Luxury Manicure<span>£30</span></li>
                            <li>Luxury Manicure<span>£30</span></li>
                            <li>Luxury Manicure<span>£30</span></li>
                        </ul>
                    </div>
                    <div className="col" style={{
                        backgroundImage: `url(${Lashes})`,
                    }}>
                        <h3>Lashes</h3>
                        <p>Indulge in the luxury of lush lashes that command attention and leave a lasting impression. With our expert lash services, you'll awaken your inner goddess and step into a world where beauty knows no bounds.</p>
                        <ul>
                            <li>Lash Lift<span>£35</span></li>
                            <li>Lash Lift & Tint<span>£8</span></li>
                            <li>Classic Lash Extensions<span>£45</span></li>
                            <li>Lash Extension Infills<span>£22</span></li>
                        </ul>
                    </div>
                    <div className="col" style={{
                        backgroundImage: `url(${Hair})`,
                    }}>
                        <h3>Hair</h3>
                        <p>Transform your tresses and unleash your inner beauty with our exceptional hairdressing services tailored to your unique style and personality. At our oasis of creativity, I offer a comprehensive range of hair treatments designed to elevate your look and leave you feeling confident and fabulous.</p>
                        <ul>
                            <li>Luxury Manicure<span>£30</span></li>
                            <li>Luxury Manicure<span>£30</span></li>
                            <li>Luxury Manicure<span>£30</span></li>
                        </ul>
                    </div>
                    <div className="col" style={{
                        backgroundImage: `url(${Brows})`,
                    }}>
                        <h3>Brows</h3>
                        <p>Frame your face with confidence and redefine your beauty with our range of brow services, meticulously crafted to enhance your natural allure. I offer a bespoke brow experience that leaves you feeling empowered and flawless.</p>
                        <ul>
                            <li>Tint & Wax<span>£30</span></li>
                            <li>Brow Tint<span>£30</span></li>
                            <li>Brow Lamination<span>£30</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <Testimonials />
        </>
    )
}

export default Services