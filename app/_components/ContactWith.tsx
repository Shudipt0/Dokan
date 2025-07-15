import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const ContactWith = () => {
  return (
    <div className='md:w-[450px] md:h-[460px] p-8 shadow flex flex-col justify-between '>
        <div className='flex items-center gap-4'>
           <div className='md:w-[40px] md:h-[40px] flex justify-center items-center rounded-full text-white text-[20px] bg-[#DB4444] '><FiPhone /></div>
           <h3 className='text-[20px] text-black/90 font-semibold'>Call To Us</h3>
        </div>
         <p className='text-md text-black/90  '>We are available 24/7, 7 days a week.</p>
         <p className='text-md text-black/90  '>Phone: +8801611112222</p>

         <div className='w-full h-[1px] bg-gray-400 '></div>
         <div className='flex items-center gap-4'>
           <div className='md:w-[40px] md:h-[40px] flex justify-center items-center rounded-full text-white text-[20px] bg-[#DB4444] '><AiOutlineMail /></div>
           <h3 className='text-[20px] text-black/90 font-semibold'>Write To Us</h3>

        </div>
            <p className='text-md text-black/90  '>Fill out our form and we will contact you within 24 hours.</p>
         <p className='text-md text-black/90  '>Emails: customer@exclusive.com</p>
         <p className='text-md text-black/90  '>Emails: support@exclusive.com</p>
       </div>
  )
}

export default ContactWith
