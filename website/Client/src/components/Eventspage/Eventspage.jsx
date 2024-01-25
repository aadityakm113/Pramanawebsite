import React from 'react'
import {Link} from "react-router-dom"
import {Footer} from './components'

const Eventspage = () => {
  return (
    <div>
      {/* <Page></Page> */}
        <Link to='/'><i className='bx bxs-home-alt-2 text-[50px]' ></i></Link>
        <Footer/>
    </div>
  )
}

export default Eventspage