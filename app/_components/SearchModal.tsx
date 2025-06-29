// 'use client'
import { useToggleMenu } from "@/context/NavbarToggleContext";
import { FiSearch } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { useEffect, useRef } from "react";


const SearchModal = () => {
  const { searchItem, setSearchItem } = useToggleMenu();
  // autofocus on search input field
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    if(searchItem){
      inputRef.current?.focus()
    }
  },[searchItem])
  return (
    <div>
      {searchItem && (
        <div
          className=" flex items-start justify-center pt-28 fixed inset-0 bg-black/25 backdrop-blur-sm top-[112px] left-0 bottom-0 right-0 z-20"
        >
          <div className="w-full mx-5 md:mx-0 md:w-[500px] h-9 md:h-12 flex items-center justify-between bg-gray-100 rounded text-black/90 px-4 z-30 ">
            <input
              type="text"
              ref={inputRef}
              placeholder="What are you looking for?"
              className="w-full md:w-[450px] border p-1 text-[14px] text-black border-none outline-none cursor-pointer"
            />
             <span>
            <FiSearch size={24} className="text-black/90" />
          </span>
          </div>
         {/* cross button */}
          
         <div onClick={() => setSearchItem(false)}  className="absolute right-3 top-3 md:right-8 md:top-5 cursor-pointer">
            <FaTimes size={24} className="text-black/90" />

         </div>
        </div>
      )}
    </div>
  );
};

export default SearchModal;
