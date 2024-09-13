
// import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"

import Home from './pages/Home/Home'
import About from "./pages/About/About"

import RootLayouts from "./layouts/RootLayouts"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts/>}>
      <Route path="/" element={<Home/>}></Route>
      <Route path="about" element={<About/>}></Route>

    </Route>

  )
)

function App() {
  return (
    
//     <BrowserRouter>
//     <header>
//       <nav>
//         <h1>Find jobs?</h1>
//         <NavLink to='/'>Home</NavLink>
//         <NavLink to="about">About</NavLink>
//       </nav>
//     </header>
//     <main>

//       <Routes>
//       <Route path="/" element={<Home/>} />
//       <Route path="about" element={<About/>} />
//       </Routes>
//     </main>
//     </BrowserRouter>


    <RouterProvider router={router}/>
  )
}

export default App



