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
    <div>
      { events.length>16?
      <p className='description'>Gear up for an exhilarating week leading to the grand spectacle of Pramana! "Road to Pramana" sets the stage for the upcoming techno-cultural fest, offering a tantalizing taste of what's to come. In the seven days preceding the main event, our campus transforms into a hub of technical brilliance and cultural finesse.</p>:
      <p className='description'>This is a description for the pramama</p>
      }
      <h1 className='eveschedule'>Event Schedule</h1>
      <div className='days_list'>
            {days.map((day,idx) => <div style={{display:'flex'}} key={idx}><button onClick={() =>handleToggle(idx)} className='evedesktop_btn'>{day}</button></div>)}
        </div>
    <div style={{margin:'3%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Pramana data={dayEventlist}/>
    </div>
    </div>
  )
}

export default Evedesktop