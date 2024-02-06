import { useState } from 'react'
import  Footer from '../contactandfooter/Footer'
import { Abnavbar,Abpage,Abteam } from './components'

const About = () => {
  return (
    <div style={{height:'auto',width:'100%',display:'flex',flexDirection:'column'}}>
        <Abnavbar/>
        <Abpage/>
        <Abteam/>
        <Footer/>
        
    </div>
  )
}

export default About