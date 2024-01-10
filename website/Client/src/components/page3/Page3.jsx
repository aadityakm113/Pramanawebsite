import Updates from "../updates/Updates"
import FAQs from "../faqs/FAQs"
import Contact from '../contactandfooter/Contact'
import Footer from '../contactandfooter/Footer'


//Replace key below with the valid instagram token
const key = import.meta.env.VITE_INSTA_TOKEN
const Page3 = () => {
  return (
    
        <div className="subpage">
          <div className="update_section">
            <Updates Insta_key={key}/>
          </div>
          <div>
          <FAQs/>
          </div>
          <div>
            <Contact/>
          </div>
          <div>
          <Footer/>
          </div>
        </div>

   
  )
}

export default Page3