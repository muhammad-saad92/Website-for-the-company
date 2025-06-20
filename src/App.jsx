import './App.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact'

function App() {

  return (
    <BrowserRouter basename="/Website-for-the-company">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />         
        {/* <Route path='/home' element={<Home />} />      */}
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
