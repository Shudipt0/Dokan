import { FaStar, FaRegStar, FaStarHalf } from "react-icons/fa";

const Rating = ({ rating }) => {
  
  const stars = Array.from({length: 5}, (_, index) => {
    const starValue = index + 0.5;
    
    return (
      <span key={index}>
           {rating >= index + 1 ? (
            <FaStar className="text-[10px] md:text-[16px] text-yellow-500" />
           ) : rating >= starValue ? (
            <FaStarHalf className="text-[10px] md:text-[16px] text-yellow-500" />

           ) : (
            <FaStar className="text-[10px] md:text-[16px] text-gray-400" />
           ) }
      </span>
    )
  })

  return (
     <div className="flex items-center gap-1">
      {stars}

     </div>
  );
};

export default Rating;
