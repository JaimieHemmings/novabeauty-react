import { Outlet } from 'react-router-dom'
import Navigation from '../_partials/Navigation'
import Footer from '../_partials/Footer'
import './index.css'

const Layout = () => {
    return (
        <div className="App">
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout