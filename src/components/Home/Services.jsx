import Image from "next/image";
import Button from "../Common/Button";
import SmallHeading from "../Common/SmallHeading";
import { FaArrowRight } from "react-icons/fa6";

const services = [
  {
    title: "Web Development",
    description:
      "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
    image: "/home/services/service-1.jpg",
  },
  {
    title: "Digital Marketing",
    description:
      "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
    image: "/home/services/service-2.jpg",
  },
  {
    title: "Game Development",
    description:
      "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
    image: "/home/services/service-3.jpg",
  },
  {
    title: "Mobile App Development",
    description:
      "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
    image: "/home/services/service-4.jpg",
  },
  {
    title: "Networking Services",
    description:
      "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
    image: "/home/services/service-5.jpg",
  },
  {
    title: "Graphics Design",
    description:
      "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
    image: "/home/services/service-6.jpg",
  },
];

const Services = () => {
  return (
    <div className="bg-dimWhite dark:bg-dimBlack px-5 lg:px-10 xl:px-28 py-10 xl:py-20">
      <div className="2xl:container 2xl:mx-auto flex md:items-center justify-between gap-5 flex-col md:flex-row">
        <div>
          <SmallHeading text="Our Services" />
          <div className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[50px] font-bold leading-[1.2] mt-3 text-center md:text-left dark:text-white">
            What we can offer today
          </div>
        </div>
        <div className="w-fit mx-auto md:mr-0">
          <Button text="View All Services" />
        </div>
      </div>
      <div className="2xl:container 2xl:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-7 lg:mt-10 gap-5 lg:gap-7">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-black rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] overflow-hidden p-3 sm:p-5"
          >
            <div className="p-5">
              <div className="flex items-center justify-between gap-3 pb-5 border-b dark:border-gray-700">
                <span className="dark:text-white text-[20px] lg:text-[24px] font-bold w-full">
                  {service.title}
                </span>
                <span className="-rotate-45 group-hover:rotate-0 duration-300 text-base sm:text-lg md:text-xl xl:text-2xl bg-logoBlue text-white rounded-full p-3 xl:p-4">
                  <FaArrowRight />
                </span>
              </div>
              <div className="text-[#9C9FA6] mt-2 sm:mt-5 font-semibold text-sm md:text-base">
                {service.description}
              </div>
            </div>
            <div className="mt-2 lg:mt-3">
              <div className="relative w-full rounded-[20px] sm:rounded-[25px] lg:rounded-[35px] overflow-hidden aspect-video">
                <Image
                  src={service.image}
                  fill
                  alt={service.title}
                  className="object-cover rounded-[20px] sm:rounded-[25px] lg:rounded-[35px] group-hover:scale-105 duration-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
