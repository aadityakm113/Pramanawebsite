import { useState } from 'react'
import  Footer from '../contactandfooter/Footer'
import { Abnavbar,Abpage } from './components'
const About = () => {
  return (
    <div style={{height:'auto',width:'100%',display:'flex',flexDirection:'column'}}>
        <Abnavbar/>
        <Abpage/>
        <Footer/>
        
    </div>
  )
}

export default About