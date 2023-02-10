import { Fragment } from 'react'
import About from './sections/About'
import Articles from './sections/Articles'
import Footer from './sections/Footer'
import Hero from './sections/Hero'

function App() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Articles />
      <Footer />
    </Fragment>
  )
}

export default App
