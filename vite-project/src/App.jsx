// import React from 'react'

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import Home from './pages/Home/Home'
// 'import About from './pages/About/About


function App() {
  return (
    
    <BrowserRouter>
    <header>
      <nav>
        <h1>Find jobs?</h1>
        <Link to='/'></Link>
      </nav>
    </header>
    <main>

      <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="about" element={<About/>} /> */}
      </Routes>
    </main>
    </BrowserRouter>

    
  )
}

export default App



