const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group absolute md:top-16 md:right-6 md:space-x-3 "> 
      <button className={`text-black p-3 rounded-full bg-gray-100  hover:bg-gray-200 cursor-pointer ${currentSlide === 0 ? 'disable' : ''}`} onClick={() => previous()} ><GoArrowLeft /></button>
      <button onClick={() => next()} className="text-black p-3 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"><GoArrowRight /></button>
    </div>
  );
};

export default ButtonGroup