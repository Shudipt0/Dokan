import ContactForm from "../../_components/ContactForm"
import ContactWith from "../../_components/ContactWith"



const contactPage = () => {
  return (
    <div className="container mx-auto px-2 md:px-14 bg-white pb-10 md:py-20 flex flex-col md:flex-row justify-between gap-4 md:gap-8">
       <ContactWith/>
       <ContactForm/>
    </div>
  )
}

export default contactPage
