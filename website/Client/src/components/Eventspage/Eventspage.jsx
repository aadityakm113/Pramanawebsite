import React from 'react'
import {Link} from "react-router-dom"
import {Footer,Page,Eventnavbar} from './components'

const Eventspage = () => {
  return (
    <div>
        <Eventnavbar/>
        <Page/>
        <Link to='/'><i className='bx bxs-home-alt-2 text-[50px]' ></i></Link>
        
        <Footer/>
    </div>
  )
}

export default Eventspage