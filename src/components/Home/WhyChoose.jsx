import Image from "next/image";
import SmallHeading from "../Common/SmallHeading";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const cards = [
  {
    image: "/home/why-choose/innovation.svg",
    title: "Innovation",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  },
  {
    image: "/home/why-choose/quality.svg",
    title: "Quality-Focused",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  },
  {
    image: "/home/why-choose/value.svg",
    title: "Value For Money",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  },
];

const links = [
  { title: "Dribble", link: "/" },
  { title: "Linkedin", link: "/" },
  { title: "Contact Us", link: "/" },
];

const WhyChoose = () => {
  return (
    <div className="bg-dimWhite dark:bg-dimBlack px-5 lg:px-10 xl:px-28 py-10 xl:py-20">
      <div className="2xl:container 2xl:mx-auto">
        <SmallHeading text="Why Choose Us" />
        <div className="dark:text-white text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[50px] font-bold leading-[1.2] mt-3 text-center md:text-left">
          Why choose us ?
        </div>
      </div>
      <div className="2xl:container 2xl:mx-auto place-item-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-7 mt-7 lg:mt-10 mb-5 xl:mb-7">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-5 lg:p-7 xl:p-10 bg-white dark:bg-black rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] overflow-hidden"
          >
            <div>
              <Image src={card.image} width={70} height={70} alt={card.title} />
            </div>
            <div className="dark:text-white text-[20px] lg:text-[24px] font-bold mt-3 sm:mt-4 lg:mt-5">
              {card.title}
            </div>
            <div className="text-[#9C9FA6] mt-2 sm:mt-3 font-semibold text-sm md:text-base">
              {card.desc}
            </div>
          </div>
        ))}
      </div>
      <div className="2xl:container 2xl:mx-auto bg-white dark:bg-black p-5 sm:p-7 lg:p-10 xl:p-14 rounded-[30px] sm:rounded-[40px] lg:rounded-[50px]">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-5">
          <div className="dark:text-white text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[50px] font-bold leading-[1.2] xl:w-[50%]">
            Do you want to explore our outstanding work?
          </div>
          <div>
            <Image
              src="/home/why-choose/explore.svg"
              width={70}
              height={70}
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-between gap-5 flex-col lg:flex-row">
          <div className="text-[#9C9FA6] mt-5 md:mt-7 xl:mt-10 font-semibold text-sm md:text-base">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium , totam rem aperiam, eaque ipsa quae ab illo inventore
            et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit.
          </div>
          <div className="flex items-center gap-3 xl:gap-5 flex-wrap md:flex-nowrap">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="w-fit group hover:bg-logoBlue dark:hover:bg-logoBlue flex items-center justify-center gap-2 bg-dimWhite dark:bg-dimBlack px-5 py-2 md:py-3 rounded-full font-semibold duration-300"
              >
                <span className="text-nowrap text-xs sm:text-sm md:text-base dark:text-white group-hover:text-white duration-300">
                  {link.title}
                </span>
                <span className="-rotate-45 group-hover:rotate-0 dark:text-white group-hover:text-white duration-300 text-base sm:text-lg md:text-xl">
                  <FaArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
