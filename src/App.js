import React from 'react'

import {
  Navbar,
  Intro,
  Discussion,
  About,
  Services,
  Benefits,
  CTA,
  Footer,
} from './containers'

import './App.css'

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <main>
        <Intro />
        <Discussion />
        <About />
        <Services />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
