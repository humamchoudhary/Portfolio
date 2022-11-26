import React from 'react'
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import About from "./components/about/About"
import Experience from "./components/Experience/Experience"
import Contact from "./components/contacts/Contact"
import Portfolio from "./components/Portfolio/Portfolio"
import Footer from "./components/footer/Footer"
import Services from "./components/Services/Service"


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App