import React from 'react'
import {Link} from "react-router-dom"
import {Footer,Page,Eventnavbar} from './components'

const Eventspage = () => {
  return (
    <div>
        <Eventnavbar/>
        <Page/>
        
        <Footer/>
    </div>
  )
}

export default Eventspage