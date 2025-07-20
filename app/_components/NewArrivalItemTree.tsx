import Link from 'next/link'
import newItemThree from '../../public/newItemThree.png'
import Image from 'next/image'


const NewArrivalItemTree = () => {
  return (
    <Link href='#' className="md:w-[270px] md:h-[284px] relative bg-black/90 flex justify-center items-center">
      <Image
        src={newItemThree}
        alt="category banner"
        className="md:w-[190px] md:h-[220px] bg-cover "
        width={190}
        height={220}
      />
      <div className="absolute bottom-8 left-8 space-y-1">
        <p className=" text-[26px] font-semibold text-white ">
         Speakers
        </p>
        <h1 className=" md:w-[220px] md:text-[12px] font-normal text-white ">
          Amazon wireless speakers
        </h1>
        
      <button className='text-white text-[16px] font-semibold underline underline-offset-4  '>Shop Now!</button>
    
      </div>
    </Link>
  )
}

export default NewArrivalItemTree
