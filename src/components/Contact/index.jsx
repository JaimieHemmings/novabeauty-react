import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import Hero from '../_partials/Hero'
import Testimonials from '../_partials/Testimonials'
import 'leaflet/dist/leaflet.css'
import './index.css'

const Contact = () => {
    return (
        <>
        
            <MapContainer center={[50.4362682, -4.7904315]} zoom={9} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            <Hero
                title={"Contact Us"}
                p1={"If you need some more information or would like to book an appointment with me, please use the form below!"}
                p2={"I can't wait to hear from you!"}
            />
            <Testimonials />
        </>
    )
}

export default Contact