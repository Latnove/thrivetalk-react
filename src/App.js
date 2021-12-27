import React from 'react'

import { Discussion, About, Intro, Navbar, Footer } from './containers'

import './App.css'

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Intro />
      <Discussion />
      <About />
      <Footer />
    </div>
  )
}

export default App
