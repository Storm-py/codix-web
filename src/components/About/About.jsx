import Image from "next/image";
import SmallHeading from "../Common/SmallHeading";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const About = () => {
  return (
    <div className="px-5 lg:px-10 xl:px-28 py-10 xl:py-20 dark:bg-black">
      <div className="2xl:container 2xl:mx-auto">
        <div className="grid lg:grid-cols-5 gap-5 md:gap-10 lg:gap-0 mt-7 xl:mt-10 items-center">
          <div className="lg:col-span-2">
            <div className="relative w-[80%] sm:w-[70%] md:w-[65%] mx-auto lg:w-full">
              <Image
                src="/about.jpg"
                width={1000}
                height={1000}
                alt="About"
                className="rounded-[40px] sm:rounded-[50px]"
              />
              <div className="absolute -left-10 sm:-left-12 md:-left-14 lg:-left-8 xl:-left-14 top-6 sm:top-8 md:top-10 lg:top-10 xl:top-10 bg-logoBlue px-4 md:px-5 py-2 md:py-3 xl:py-5 flex items-center gap-3 xl:gap-5 rounded-[25px]">
                <div className="w-[40px] md:w-[60px] lg:w-[50px] xl:w-[60px]">
                  <Image
                    src="/exp.svg"
                    width={60}
                    height={60}
                    alt="About"
                    className="Exp"
                  />
                </div>
                <div>
                  <div className="text-[24px] md:text-[28px] lg:text-[26px] xl:text-[34px] text-white font-bold">30+</div>
                  <div className="text-[14px] md:text-[16px] xl:text-[18px] text-white">Work Experience</div>
                </div>
              </div>
              <div className="absolute -right-8 sm:-right-12 md:-right-10 lg:-right-12 xl:-right-14 -bottom-6 sm:-bottom-8 md:-bottom-12 lg:-bottom-10 xl:-bottom-12">
                <div className="w-[120px] sm:w-[150px] md:w-[200px] xl:w-[250px]">
                  <Image
                    src="/about/laptop.jpg"
                    width={250}
                    height={250}
                    alt="About"
                    className="rounded-[20px] sm:rounded-[25px] md:rounded-[30px] border-[2px] sm:border-[3px] border-white"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 lg:pl-16 xl:pl-24 lg:py-10">
            <SmallHeading text="About Us" />
            <div className="dark:text-white text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[50px] font-bold leading-[1.2] mt-3 text-center md:text-left">
              Websites that tell your brand&apos;s story
            </div>
            <div className="flex flex-col gap-3 xl:gap-5 mt-5">
              <div className="text-[#9C9FA6] text-center md:text-left text-sm sm:text-base">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium , totam rem aperiam, eaque ipsa quae ab illo
                inventore et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit.
              </div>
              <div className="text-[#9C9FA6] text-center md:text-left text-sm sm:text-base">
                totam rem aperiam, eaque ipsa quae ab illo inventore et quasi
                architecto beatae vitae dicta sunt explicabo. sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </div>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="col-span-1 flex items-center gap-2 md:gap-3">
                <span className="text-logoBlue text-[20px] sm:text-[22px] md:text-[24px]">
                  <IoIosArrowDroprightCircle />
                </span>
                <span className="dark:text-dimWhite font-bold text-sm sm:text-base md:text-lg">
                  Ease of Scalability
                </span>
              </div>
              <div className="col-span-1 flex items-center gap-2 md:gap-3">
                <span className="text-logoBlue text-[20px] sm:text-[22px] md:text-[24px]">
                  <IoIosArrowDroprightCircle />
                </span>
                <span className="dark:text-dimWhite font-bold text-sm sm:text-base md:text-lg">
                  Instant Impact
                </span>
              </div>
              <div className="col-span-1 flex items-center gap-2 md:gap-3">
                <span className="text-logoBlue text-[20px] sm:text-[22px] md:text-[24px]">
                  <IoIosArrowDroprightCircle />
                </span>
                <span className="dark:text-dimWhite font-bold text-sm sm:text-base md:text-lg">
                  Expertise and Experience
                </span>
              </div>
              <div className="col-span-1 flex items-center gap-2 md:gap-3">
                <span className="text-logoBlue text-[20px] sm:text-[22px] md:text-[24px]">
                  <IoIosArrowDroprightCircle />
                </span>
                <span className="dark:text-dimWhite font-bold text-sm sm:text-base md:text-lg">
                  Time Zone Aligned
                </span>
              </div>
              <div className="col-span-1 flex items-center gap-2 md:gap-3">
                <span className="text-logoBlue text-[20px] sm:text-[22px] md:text-[24px]">
                  <IoIosArrowDroprightCircle />
                </span>
                <span className="dark:text-dimWhite font-bold text-sm sm:text-base md:text-lg">
                  Full Flexibility
                </span>
              </div>
              <div className="col-span-1 flex items-center gap-2 md:gap-3">
                <span className="text-logoBlue text-[20px] sm:text-[22px] md:text-[24px]">
                  <IoIosArrowDroprightCircle />
                </span>
                <span className="dark:text-dimWhite font-bold text-sm sm:text-base md:text-lg">
                  Proactive Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
