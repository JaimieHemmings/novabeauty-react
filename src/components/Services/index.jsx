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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero hic aliquam fugit quaerat ex labore a eaque nobis maiores, id exercitationem quae. Dolore deserunt voluptas nemo autem error quibusdam ab.</p>
                        <ul>
                            <li>Luxury Manicure<span>£30</span></li>
                            <li>Gel Polish<span>£27</span></li>
                            <li>Acrylic Set<span>£40</span></li>
                        </ul>
                    </div>
                    <div className="col" style={{
                        backgroundImage: `url(${Massage})`,
                    }}>
                        <h3>Massages</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero hic aliquam fugit quaerat ex labore a eaque nobis maiores, id exercitationem quae. Dolore deserunt voluptas nemo autem error quibusdam ab.</p>
                        <ul>
                            <li>Oncology Massage<span>£55</span></li>
                            <li>Swedish Massage<span>£47</span></li>
                            <li>Head Massage<span>£25</span></li>
                        </ul>
                    </div>
                    <div className="col" style={{
                        backgroundImage: `url(${Microdermabrasion})`,
                    }}>
                        <h3>Microdermabrasion</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero hic aliquam fugit quaerat ex labore a eaque nobis maiores, id exercitationem quae. Dolore deserunt voluptas nemo autem error quibusdam ab.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero hic aliquam fugit quaerat ex labore a eaque nobis maiores, id exercitationem quae. Dolore deserunt voluptas nemo autem error quibusdam ab.</p>
                        <ul>
                            <li>Luxury Manicure<span>£30</span></li>
                            <li>Luxury Manicure<span>£30</span></li>
                            <li>Luxury Manicure<span>£30</span></li>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero hic aliquam fugit quaerat ex labore a eaque nobis maiores, id exercitationem quae. Dolore deserunt voluptas nemo autem error quibusdam ab.</p>
                        <ul>
                            <li>Luxury Manicure<span>£30</span></li>
                            <li>Luxury Manicure<span>£30</span></li>
                            <li>Luxury Manicure<span>£30</span></li>
                        </ul>
                    </div>
                    <div className="col" style={{
                        backgroundImage: `url(${Hair})`,
                    }}>
                        <h3>Hair</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero hic aliquam fugit quaerat ex labore a eaque nobis maiores, id exercitationem quae. Dolore deserunt voluptas nemo autem error quibusdam ab.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero hic aliquam fugit quaerat ex labore a eaque nobis maiores, id exercitationem quae. Dolore deserunt voluptas nemo autem error quibusdam ab.</p>
                        <ul>
                            <li>Luxury Manicure<span>£30</span></li>
                            <li>Luxury Manicure<span>£30</span></li>
                            <li>Luxury Manicure<span>£30</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <Testimonials />
        </>
    )
}

export default Services