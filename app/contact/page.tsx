import ContactForm from "../_components/ContactForm"
import ContactWith from "../_components/ContactWith"



const contactPage = () => {
  return (
    <div className="container mx-auto px-2 md:px-14 bg-white md:py-20 md:flex justify-between gap-8">
       <ContactWith/>
       <ContactForm/>
    </div>
  )
}

export default contactPage
