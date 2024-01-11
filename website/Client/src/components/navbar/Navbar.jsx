import { useEffect, useState } from "react"
import '../events/events.css'


const Navbar = () => {
  const [screenWdt,setScreenwdt] = useState(window.innerWidth)
  const handleResize = () => {
    setScreenwdt(window.innerWidth)
  }
  useEffect(() => {
    setScreenwdt(window.innerWidth);
    window.addEventListener('resize',handleResize)

    return () => {
      window.removeEventListener('resize',handleResize)
    }
  },[]);
  const [menu,setMenu] = useState(false)
  const handleClick = () => {
    setMenu((prev) => !prev)
  }
  return (
    <div className="flex  w-[100vw]">
      {screenWdt<=800?<div className="nav_container">
      <div onClick={handleClick} className="burgur_menu mt-[17px]">
            {menu?<i className='bx bx-arrow-back'></i>:<i className='bx bx-menu'></i>}
        </div>
        <div className={`nav_links hover:text-purple-500 ${menu?'nav_bar_slide':''}`}>
          <a className="hover:text-purple-500" href="#events">Events</a>
          <a className="hover:text-purple-500" href="#updates">Gallery</a>
          <a className="hover:text-purple-500" href="#faqs">FAQs</a>
          <a className="hover:text-purple-500" href="#contact">Contact us</a>
        </div>
      </div>:<div className="navbar_desktop ">
        <div className="navlinks_desktop hover:text-purple-500">
          <a className="hover:text-purple-500" href="#events">Events</a>
          <a className="hover:text-purple-500" href="#updates">Gallery</a>
          <a className="hover:text-purple-500" href="#faqs">FAQs</a>
          <a className="hover:text-purple-500" href="#contact">Contact us</a>
        </div>  
      </div>}
    </div>
  )
}

export default Navbar