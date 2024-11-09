import { FaArrowRight } from "react-icons/fa6";

const Button = ({ text }) => {
  return (
    <button className="ctaButton min-w-fit group flex items-center justify-center gap-2 bg-logoBlue px-5 md:px-7 py-2 md:py-3 rounded-full text-white hover:text-logoBlue border-2 border-logoBlue font-semibold duration-300">
      <span className="text-nowrap text-xs sm:text-sm md:text-base">{text}</span>
      <span className="-rotate-45 group-hover:rotate-0 duration-300 text-base sm:text-lg md:text-xl">
        <FaArrowRight />
      </span>
    </button>
  );
};

export default Button;
