import Link from "next/link";
import SearchMain from "./SearchMain";


const DesktopNavbar = ({
  NavItem,
}: {
  NavItem: { label: string; link: string }[];
}) => {
  return (
    <div className="hidden container mx-auto h-16 md:flex items-center justify-between px-14">
      {/* logo */}
      <div>
        <Link href="/" className="text-lg font-bold">
          Exclusive
        </Link>
      </div>
      {/* nav items for desktop */}
      <ul className="hidden md:flex items-center gap-12">
        {NavItem.map((item, index) => (
          <li key={index} className="text-[16px] font-semibold text-gray-500  ">
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
      {/* search input and cart */}
      <SearchMain/>
    </div>
  );
};

export default DesktopNavbar;
