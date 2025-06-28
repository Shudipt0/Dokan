import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useToggleMenu } from "@/context/NavbarToggleContext";

const SearchMain = () => {
  const { setSearchItem } = useToggleMenu();
  const handleSearchModal = () => {
    setSearchItem(true);
    console.log("search on");
  };

  return (
    <div className="flex items-center gap-3  md:gap-6">
      <button
        onClick={handleSearchModal}
        className="w-8 md:w-[250px] h-9 flex items-center justify-center md:justify-between bg-gray-100 rounded text-black/80 px-4 z-20 cursor-pointer"
      >
        <h4 className="hidden md:inline w-[170px] border p-1 text-[14px] text-black/50 border-none outline-none cursor-pointer ">
          What are you looking for?
        </h4>

        <span>
          <FiSearch size={24} className="text-black/90" />
        </span>
      </button>
      <span>
        <FaRegHeart size={22} className="text-black/90" />
      </span>
      <span>
        <IoCartOutline size={26} className="text-black/90" />
      </span>
    </div>
  );
};

export default SearchMain;
