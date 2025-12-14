import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'



const App = () => {
  return (
    <>
    <Navbar/>
    <Navbar2 />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/courses' element={<Courses/>}></Route>
      <Route path='/courses/:id' element={<CourseDetail/>}></Route>
      <Route path='/product' element={<Product/>}>
        <Route path='men' element={<Men/>}></Route>
        <Route path='Women' element={<Women/>}></Route>
        <Route path='kids' element={<Kids/>}></Route>
      </Route>


      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <Footer/>

    </>
  )
}

export default App