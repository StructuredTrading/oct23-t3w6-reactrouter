import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useState } from 'react'
import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import PageNotFound from './pages/PageNotFound'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" elements={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}

        <Route path="/" element={<HomePage />} />
        <Route path="/about/services" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
