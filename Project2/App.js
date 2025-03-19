import React from 'react'
import Nav from './Sec0/Nav'

import Img from './Sec1/Cards'

import Gri from './Sec4/Grid'
import Grri from './Sec5/Grri'
// import picturee from './Sec6/picturee'
import Picturee from './Sec7/Pictureee'
import Footer from './Sec11/Footer'
import Formm from './Sec8/Formm'
// import Slii from './Sec8/Slii'


const App = () => {
  return (
    <div>
        <Nav />
        {/* <Slid /> */}
        <Img />
        {/* <Car /> */}
        <Gri />
        {/* <Footer /> */}
        <Grri />
        <picturee />
        <Picturee />
        {/* <Slii /> */}
        <Formm />
        <Footer />
    </div>
  )
}

export default App