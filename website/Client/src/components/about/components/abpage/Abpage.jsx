import './abpage.css'
const Abpage = ({flag}) => {
    
    const handleTogglePramana =()=> {
        flag(true)
    }
    const handleToggle =()=> {
        flag(false)
    }
  return (
    <div className="evehero_container">
        <div className='logo_events hidden  ml-[-7%] md:block '>
            <img src="assets/new logo.png" alt="" />
        </div>
        <div className='evehero_text'>
            <h1 className='text-white'>Team Pramana</h1>
        </div>
    </div>
  )
}

export default Abpage