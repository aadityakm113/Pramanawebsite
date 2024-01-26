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
   return(<div className="epage">
        {/* hard coding the header section  */}
        <div className="epage_container">
            <div className="epage_background"><div className='blur'></div></div>
            {/* <div className="logo mt-[12%] ml-[-7%]">
                <img  src="/assets/new logo.png" alt="" />
            </div> */}
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