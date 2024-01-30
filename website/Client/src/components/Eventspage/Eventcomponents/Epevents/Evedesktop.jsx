import React from 'react'
import '../page/page.css'
import { useState,useEffect } from 'react'
import Pramana from './Pramana'
const Evedesktop = ({events}) => {
    const daysrep = events.map(event => event.day)
    const days = []
    daysrep.forEach(element => {
      
      if(!days.includes(element))
        {
          days.push(element)
        }
    });
    const [active,setActive] = useState(0)
    const handleToggle = (i) => {
        setActive(i)
        console.log(i)
    }
    useEffect(() => {
        setActive(0)
    },[events])
    const dayEventlist = events.filter(e => e.day ===days[active])
  return (
    <div style={{margin:'3%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <div className='days_list'>
            {days.map((day,idx) => <div style={{display:'flex'}} key={idx}><button onClick={() =>handleToggle(idx)} className='evedesktop_btn'>{day}</button></div>)}
     
        </div>
            <Pramana data={dayEventlist}/>
    </div>
  )
}

export default Evedesktop