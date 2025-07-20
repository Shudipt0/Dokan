"use server";

import z from "zod";

const formSchema = z.object({
  name: z.string().min(3).max(15),
  companyName: z.string() || z.null,
  address: z.string().min(5),
  apertment: z.string() || z.null,
  city: z.string().min(5),
  phone: z.string().min(11).max(11),
  email: z.string().email(),
  products: z.array(z.string()),
  coupon: z.string() || z.null,
});

export const createOrder = async (prevState: any, formData: FormData) => {
  // validation
  const validatedFields = formSchema.safeParse({
    name: formData.get("name") as string,
    companyName: formData.get("companyName") as string,
    address: formData.get("address") as string,
    apertment: formData.get("apertment") as string,
    city: formData.get("city") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    products: formData.getAll("products") as string[],
    coupon: formData.get("coupon") as string,
  });
  
  // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log("error", validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }  return ( console.log(validatedFields) ,{ success: true } );
 
};
