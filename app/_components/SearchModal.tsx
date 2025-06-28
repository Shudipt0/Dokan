// 'use client'
import { useToggleMenu } from '@/context/NavbarToggleContext'

const SearchModal = () => {
    const {searchItem,setSearchItem} = useToggleMenu()
  return (
    <div>
      {searchItem && (
        <div onClick={() => setSearchItem(false)} className='flex items-center justify-center fixed inset-0 bg-black opacity-25 backdrop-blur-sm top-[112px] left-0 bottom-0 right-0 z-40'>
            <div className='w-[500px] h-[300px] bg-white '>
                search
            </div>
        </div>
      )}
    </div>
  )
}

export default SearchModal
