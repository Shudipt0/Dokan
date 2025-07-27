import Link from 'next/link'
import newItemThree from '../../public/newItemThree.png'
import Image from "next/legacy/image"


const NewArrivalItemTree = () => {
  return (
    <Link href='#' className="h-[105px] md:w-[270px] md:h-[284px] relative bg-black/95 flex justify-center items-center -top-3 md:top-0 ">
      <Image
        src={newItemThree}
        alt="category banner"
        className="md:w-[190px] md:h-[220px] bg-cover "
        width={190}
        height={190}
      />
      <div className="absolute bottom-2 left-2 md:bottom-8 md:left-8 md:space-y-1">
        <p className="text-[12px] md:text-[26px] font-semibold text-white ">
         Speakers
        </p>
        <h1 className=" md:w-[220px] text-[8px] md:text-[12px] font-normal text-white ">
          Amazon wireless speakers
        </h1>
        
      <button className='text-white text-[8px] md:text-[16px] font-semibold underline underline-offset-4  '>Shop Now!</button>
    
      </div>
    </Link>
  )
}

export default NewArrivalItemTree
