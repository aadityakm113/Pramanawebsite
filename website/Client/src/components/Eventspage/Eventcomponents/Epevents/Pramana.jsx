import './Epevents.css'
const Pramana = ({data}) => {
    
   
  return (
    <div className="cards_container">
        {data.map((e,idx) => (
            <div className='evecard' key={idx} >
                {e.title}
            </div>
        ))}
        
    </div>
  )
}

export default Pramana