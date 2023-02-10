import { Fragment } from 'react'
import About from './sections/About'
import Articles from './sections/Articles'
import Hero from './sections/Hero'

function App() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Articles />
    </Fragment>
  )
}

export default App
