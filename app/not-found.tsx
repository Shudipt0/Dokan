import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <div className='container mx-auto h-[600px] px-2 md:px-14 md:py-20 bg-white text-center flex flex-col justify-center gap-10 items-center'>
        <h2 className='text-[100px] font-semibold text-black'>404 Not Found</h2>
        <p className='text-md text-black/70 font-semibold'>Your visited page not found. You may go home page.</p>
        <div className='flex justify-center items-center'>
          <Link className='w-[200px] h-12 text-white text-semibold bg-[#DB4444] hover:bg-[#DB4555] flex justify-center items-center rounded cursor-pointer ' href="/">Return Home</Link>
        </div>
      </div>
    </div>
  )
}