import React from 'react'

import {
  Navbar,
  Intro,
  Discussion,
  About,
  Services,
  Footer,
} from './containers'

import './App.css'

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Intro />
      <Discussion />
      <About />
      <Services />
      <Footer />
    </div>
  )
}

export default App
