import Link from "next/link";
import SearchMain from "./SearchMain";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const DesktopNavbar = ({
  NavItem,
}: {
  NavItem: { label: string; link: string }[];
}) => {
  return (
    <div className="hidden container mx-auto h-16 md:flex items-center justify-between px-14">
      {/* logo */}
      <div>
        <Link href="/" className="text-lg text-black/80 font-bold">
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
     

      {/* authentication */}
      <div className="flex items-center gap-4">
         {/* search input and cart */}
      <SearchMain />
        <SignedOut>
           <button className="px-4 text-[14px] font-bold text-white bg-blue-500 rounded-md transition-colors hover:bg-blue-600">
                <Link href="/login">Log In</Link>
              </button>
              <button className="px-4 text-[14px] font-bold text-white bg-gray-500 rounded-md transition-colors hover:bg-gray-600">
                <Link href="/signup">Sign Up</Link>
              </button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default DesktopNavbar;
