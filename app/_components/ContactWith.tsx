import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const ContactWith = () => {
  return (
    <div className="w-full h-[250px] md:w-[450px] md:h-[460px] p-3 md:p-8 shadow flex flex-col justify-between ">
      <div className="flex items-center gap-2 md:gap-4">
        <div className="w-6 h-6 md:w-[40px] md:h-[40px] flex justify-center items-center rounded-full text-white text-sm md:text-[20px] bg-[#DB4444] ">
          <FiPhone />
        </div>
        <h3 className="text-[16px] md:text-[20px] text-black/90 font-semibold">
          Call To Us
        </h3>
      </div>
      <p className="text-[12px] md:text-[16px] text-black/90  ">
        We are available 24/7, 7 days a week.
      </p>
      <p className="text-[12px] md:text-[16px] text-black/90  ">
        Phone: +8801611112222
      </p>

      <div className="w-full h-[1px] bg-gray-400 "></div>
      <div className="flex items-center gap-4">
        <div className="w-6 h-6 md:w-[40px] md:h-[40px] flex justify-center items-center rounded-full text-white text-sm md:text-[20px] bg-[#DB4444] ">
          <AiOutlineMail />
        </div>
        <h3 className="text-[16px] md:text-[20px] text-black/90 font-semibold">
          Write To Us
        </h3>
      </div>
      <p className="text-[12px] md:text-[16px] text-black/90  ">
        Fill out our form and we will contact you within 24 hours.
      </p>
      <p className="text-[12px] md:text-[16px] text-black/90  ">
        Emails: customer@exclusive.com
      </p>
      <p className="text-[12px] md:text-[16px] text-black/90  ">
        Emails: support@exclusive.com
      </p>
    </div>
  );
};

export default ContactWith;
