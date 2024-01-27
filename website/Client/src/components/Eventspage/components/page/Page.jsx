import './page.css'
import { useState, useEffect } from 'react'

const Page = () =>{
    const [screenWdt,setScreenwdt] = useState(window.innerWidth)
    const handleResize = () => {
    setScreenwdt(window.innerWidth)
    }
  useEffect(() => {
    setScreenwdt(window.innerWidth);
    window.addEventListener('resize',handleResize)
  })
    // flag - road to pramana and pramama
   return(
   <div className="epage">
        {/* hard coding the header section  */}
        <div className="epage_header_container">
            <div className="epage_background">
                <div className='blur'></div>
                <div className="e_logo hidden md:block min-w-800">
                    <img src='/assets/new logo.png' alt='Logo'/>
                </div>
            </div>
            <div className="epage_text">
                <h1>Events at Pramana</h1>
            </div>
            <div className='button_container'>
                <div className="buttons">
                    <div className="rtp_button">
                        <button className='clickable'>Road to Pramana</button>
                    </div>
                
                </div>
                <div className='buttons'>
                    <div className="pramana_button">
                        <button className='clickable'>Pramana</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <eventcarousel> dynamic with flag*/}
    </div>
)}

export default Page