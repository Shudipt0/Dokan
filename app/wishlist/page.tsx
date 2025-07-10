"use client";

import { useDispatch, useSelector } from "react-redux";
import WishlistCart from "../_components/WishlistCart";
import { clearWishlist } from "../redux/wishlistSlice/wishlistSlice";

const wishlistPage = () => {
  const { items } = useSelector((state: any) => state.wishlist);
  const dispatch = useDispatch()
// console.log(items);

const handleAllDelete = () => {
  // Dispatch an action to clear all items from the wishlist
  dispatch(clearWishlist())
};

  return (
    <section className="container mx-auto px-2 md:px-14 md:py-20 bg-white">
      <div className="w-full flex items-center justify-between mb-10">
        <h1 className="text-3xl font-semibold text-black/90  ">
        Your Wishlist {items?.length > 0 ? `(${items.length})` : ""}
      </h1>
      <button onClick={handleAllDelete} className="md:w-[200px] md:h-12 text-md font-semibold hover:text-white flex items-center justify-center border border-gray-300 hover:bg-[#DB4444] rounded cursor-pointer">Clear All</button>
      </div>

      {/* cart */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {items?.map((item: any) => (
               <WishlistCart key={item.id} item={item} />
            ))}
        </div>
    </section>
  );
};

export default wishlistPage;
