import './page.css'
const Page = () =>{
    // flag - road to pramana and pramama
   return(<div className="epage">
        {/* hard coding the header section  */}
        <div className="epage_container">
            {/* <div className="logo mt-[12%] ml-[-7%]">
                <img  src="/assets/new logo.png" alt="" />
            </div> */}
            <div className="epage_background"><div className='blur'></div></div>
            <div className="epage_text">
                <h1>Events at Pramana</h1>
            </div>
            <div className="buttons">
                <div className="rtp_button">
                    <button>Road to Pramana</button>
                </div>
                <div className="pramana_button">
                    <button>Pramana</button>
                </div>
            </div>
        </div>
        {/* <eventcarousel> dynamic with flag*/}
    </div>
)}

export default Page