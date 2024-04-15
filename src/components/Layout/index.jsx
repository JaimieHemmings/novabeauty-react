import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation'
import './index.css'

const Layout = () => {
    return (
        <div className="App">
            <Navigation />
            <Outlet />
        </div>
    )
}

export default Layout