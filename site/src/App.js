import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import About from "./pages/About.js"
import Contact from "./pages/Contact.js"
import Home from "./pages/Home.js"
import Error from "./pages/Error.js"

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
