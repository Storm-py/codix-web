import Image from "next/image";
import Button from "../Common/Button";
import SmallHeading from "../Common/SmallHeading";

const works = [
  {
    title: "Operation Atlas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/home/works/works-1.jpg",
  },
  {
    title: "Quantum Quest",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/home/works/works-2.jpg",
  },
  {
    title: "Blue Horizon Initiative",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/home/works/works-1.jpg",
  },
  {
    title: "Project Alpha",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/home/works/works-2.jpg",
  },
];

const Works = () => {
  return (
    <div className="px-5 lg:px-10 xl:px-28 py-10 xl:py-20 dark:bg-black">
      <div className="2xl:container 2xl:mx-auto flex md:items-center justify-between gap-5 flex-col md:flex-row">
        <div>
          <SmallHeading text="Our Works" />
          <div className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[50px] font-bold leading-[1.2] mt-3 text-center md:text-left dark:text-white">
            Excellence from concept to completion
          </div>
        </div>
        <div className="w-fit mx-auto md:mr-0">
          <Button text="All Portfolio" />
        </div>
      </div>
      <div className="2xl:container 2xl:mx-auto grid grid-cols-1 md:grid-cols-2 mt-7 lg:mt-10 gap-5 lg:gap-7">
        {works.map((work, index) => (
          <div
            key={index}
            className="group bg-dimWhite dark:bg-dimBlack rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] overflow-hidden p-3 sm:p-5"
          >
            <div>
              <div className="relative w-full rounded-[20px] sm:rounded-[25px] lg:rounded-[35px] overflow-hidden aspect-video">
                <Image
                  src={work.image}
                  fill
                  alt={work.title}
                  className="object-cover rounded-[20px] sm:rounded-[25px] lg:rounded-[35px] group-hover:scale-105 duration-500"
                />
              </div>
            </div>
            <div className="px-5 pt-5 sm:pt-7 pb-3 sm:pb-5">
              <div className="text-[20px] lg:text-[24px] font-bold dark:text-white">
                {work.title}
              </div>
              <div className="text-[#9C9FA6] mt-2 sm:mt-3 font-semibold text-sm md:text-base">
                {work.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
