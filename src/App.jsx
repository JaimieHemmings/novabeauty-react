import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import Contact from './components/Contact'
import Services from './components/Services'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
