"use client";
import Image from "next/image";
import React, { useActionState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../actions/order/createOrder";
import Link from "next/link";
import { clearCart } from "../redux/cartslice/cartSlice";
import { toast } from "sonner";

interface RootState {
  cart: {
    items: any[];
    total: number;
  };
}

const checkoutPage = () => {
  const { items, total } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [state, action, ispending] = useActionState(createOrder, null)
  
  // console.log(items)

  // clear cart after order
useEffect(() => {
  if (state?.success) {
    dispatch(clearCart());
    toast.success("Order placed successfully!")
    // setOrderSuccess(true);
  }
}, [state]);
  
  return (
    <section className="container mx-auto px-2 md:px-14 md:py-20 bg-white">
      <h1 className="text-3xl font-semibold text-black/90 mb-10 ">
        Billing Details
      </h1>
      {/* form section */}

      <form action={action} className="w-full md:flex justify-between items-start">
        {/* fields */}
        <div className="md:w-[500px] flex flex-col gap-4 text-md text-gray-400 font-semibold ">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName ">First Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 text-black/80 font-semibold bg-gray-100 rounded focus:outline-1 outline-green-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="companyName ">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="w-full px-4 py-2 text-black/80 font-semibold bg-gray-100 rounded focus:outline-1 outline-green-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address ">Street Address*</label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full px-4 py-2 text-black/80 font-semibold bg-gray-100 rounded focus:outline-1 outline-green-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="addressdetails ">
              Apartment, floor,etc. (optional)
            </label>
            <input
              type="text"
               id="apertment"
              name="apertment"
              className="w-full px-4 py-2 text-black/80 font-semibold bg-gray-100 rounded focus:outline-1 outline-green-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="city ">City/Town*</label>
            <input
              type="text"
               id="city"
              name="city"
              className="w-full px-4 py-2 text-black/80 font-semibold bg-gray-100 rounded focus:outline-1 outline-green-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="text"
               id="phone"
              name="phone"
              className="w-full px-4 py-2 text-black/80 font-semibold bg-gray-100 rounded focus:outline-1 outline-green-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email ">Email Address*</label>
            <input
              type="email"
               id="email"
              name="email"
              className="w-full px-4 py-2 text-black/80 font-semibold bg-gray-100 rounded focus:outline-1 outline-green-400"
            />
          </div>
        </div>

        {/* line */}
        <div className="w-[1px] h-[600px] bg-gray-400"></div>

        {/* ordering item */}
        <div className="md:w-[550px] flex flex-col gap-6 ">
          {/* cart item */}
          {items?.map((item: any) => (
            
            <div key={item.id} className=" flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={item?.images?.[0]}
                  alt={`image od ${item.title}`}
                  width={70}
                  height={70}
                />
                <h3 className="text-sm text-black/80">{item?.title}</h3>
              </div>
              <h3 className="text-sm text-black/80">
                ${item?.price * item?.quantity}
              </h3>
              <textarea name="products" id="products" defaultValue={item.id +','+ item.title +','+item.quantity} hidden />
            </div>
          ))}

          {/* subtotal */}
          <div className="w-full flex items-center justify-between">
            <p className="text-sm text-black/80 font-semibold">Subtotal:</p>
            <p className="text-sm text-black/80 font-semibold">${total}</p>
          </div>
          <hr className="w-full text-[1px] text-black/60" />
          {/* shipping */}
          <div className="w-full flex items-center justify-between">
            <p className="text-sm text-black/80 font-semibold">Shipping:</p>
            <p className="text-sm text-black/80 font-semibold">Free</p>
          </div>
          <hr className="w-full text-[1px] text-black/60" />
          {/* total */}
          <div className="w-full flex items-center justify-between">
            <p className="text-sm text-black/80 font-semibold">Total:</p>
            <p className="text-sm text-black/80 font-semibold">${total}</p>
          </div>
          {/* payment method */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 outline-4 rounded-full bg-black "></div>
            <h3 className="text-sm text-black/80">Cash on Delivery</h3>
          </div>

          {/* coupon button */}
          <div className="flex gap-6">
            <input
              type="text"
              id="coupon"
              name="coupon"
              placeholder="Coupon Code"
              className="md:w-[260px] md:h-12 text-[16px] text-black/70 font-semibold border border-gray-400 px-8 py-2 outline-none rounded"
            />
            <Link href='/cart' className="md:w-[200px] md:h-12 flex items-center justify-center rounded text-[16px] font-semibold bg-[#DB4444] hover:bg-[#DB2222] text-white ">
              Update Cart
            </Link>
          </div>
          {/* order button */}
          <button type="submit"  disabled={ispending}  className="md:w-[200px] md:h-12 text-white text-[16px] font-semibold bg-[#DB4444] hover:bg-[#DB2222] rounded flex items-center justify-center ">
            Place Order
          </button>

        </div>
      </form>
    </section>
  );
};

export default checkoutPage;
