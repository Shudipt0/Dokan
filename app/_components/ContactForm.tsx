import React from 'react'

const ContactForm = () => {
  return (
    <div className='w-full md:h-[460px] p-8 shadow flex flex-col justify-between '>
      <div className='flex items-center justify-between'>
         <input type="text" placeholder='Your Name*' className='w-[330px] text-md text-black/80 px-5 py-3 outline-none bg-gray-100 rounded' />
         <input type="text" placeholder='Your Email*' className='w-[330px] text-md text-black/80 px-5 py-3 outline-none bg-gray-100 rounded' />
         <input type="text" placeholder='Your Phone*' className='w-[330px] text-md text-black/80 px-5 py-3 outline-none bg-gray-100 rounded' />
      </div>
      <textarea placeholder='Your Message' className='w-full h-52 text-md text-black/80 px-5 py-3 outline-none bg-gray-100 rounded' />
        <div className='w-full flex justify-end'>
            <button className='md:w-[215px] md:h-14 text-white text-[16px] font-semibold bg-[#DB4444] rounded flex items-center justify-center '>Send Message</button>

        </div>
    </div>
  )
}

export default ContactForm
