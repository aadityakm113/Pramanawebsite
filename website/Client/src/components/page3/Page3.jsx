import Updates from "../updates/Updates"
import FAQs from "../faqs/FAQs"
import Contact from '../Contact'
import Footer from '../Footer'

//Replace key below with the valid instagram token
const key = import.meta.env.VITE_INSTA_TOKEN
const Page3 = () => {
  return (
    <div className="box">
        <div className="subpage">
            <Updates Insta_key={key}/>
            <FAQs/>
            <Contact/>
            
            
        </div>

    </div>
  )
}

export default Page3