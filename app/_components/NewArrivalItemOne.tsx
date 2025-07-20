import Image from 'next/image'
import Link from 'next/link'
import newItemOne from '../../public/newItemOne.png'

const NewArrivalItemOne = () => {
  return (
    <Link href='#' className="md:w-[570px] md:h-[600px] relative bg-black/90 flex justify-center items-end">
      <Image
        src={newItemOne}
        alt="category banner"
        className="w-[510px] h-[510px] bg-cover "
        width={510}
        height={510}
      />
      <div className="absolute bottom-10 left-10 space-y-3">
        <p className=" text-[26px] font-semibold text-white ">
          PlayStation 5
        </p>
        <h1 className=" md:w-[220px] md:text-[12px] font-normal text-white ">
          Black and White version of the PS5 coming out on sale.
        </h1>
        
      <button className='text-white text-[16px] font-semibold underline underline-offset-4  '>Shop Now!</button>
    
      </div>
    </Link>
  )
}

export default NewArrivalItemOne
