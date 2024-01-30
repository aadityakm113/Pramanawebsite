import { useState } from 'react'
import Footer from '../Footer'
import { Epevents,Page,Eventnavbar } from "./Eventcomponents"
const Eventspage = () => {
  const [pramana,notPramana] = useState(false)
  const handleToggle = (flag) => {
    notPramana(flag)
    
  }
  return (
    <div style={{height:'auto',width:'100%',display:'flex',flexDirection:'column'}}>
        <Eventnavbar/>
        <Page flag={handleToggle}/>
        <Epevents flag={pramana}/>
        <Footer/>
        
    </div>
  )
}

export default Eventspage