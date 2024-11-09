import Image from "next/image";
import SmallHeading from "../Common/SmallHeading";
import Button from "../Common/Button";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const About = () => {
  return (
    <div className="px-5 lg:px-10 xl:px-28 py-10 xl:py-20 dark:bg-black">
      <div className="2xl:container 2xl:mx-auto">
        <SmallHeading text="About Company" />
        <div className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[50px] font-bold leading-[1.2] mt-3 xl:w-[55%] text-center md:text-left dark:text-white">
          Websites that tell your brand&apos;s story
        </div>

        <div className="grid lg:grid-cols-5 gap-5 md:gap-10 lg:gap-0 mt-7 xl:mt-10 items-center">
          <div className="lg:col-span-2">
            <div className="relative w-[80%] md:w-fit mx-auto lg:w-full">
              <Image
                src="/about.jpg"
                width={500}
                height={500}
                alt="About"
                className="rounded-[50px]"
              />
              <div className="absolute -right-10 sm:-right-16 lg:-right-14 xl:-right-12 2xl:-left-[70px] top-1/2 transform -translate-y-1/2">
                <div className="w-[80px] sm:w-[100px] md:w-[120px] xl:w-[150px]">
                  <Image
                    src="/circle.png"
                    width={150}
                    height={150}
                    alt="About"
                    className="animate-spin"
                    style={{ animationDuration: "15s" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 lg:pl-16 xl:pl-20 lg:py-10">
            <div className="flex flex-col gap-3 xl:gap-5">
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
              <div className="text-[#9C9FA6] text-center md:text-left text-sm sm:text-base">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga.
              </div>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="col-span-1 flex items-center gap-2 md:gap-3">
                <span className="text-logoBlue text-[20px] sm:text-[22px] md:text-[24px]">
                  <IoIosArrowDroprightCircle />
                </span>
                <span className="font-bold text-sm sm:text-base md:text-lg dark:text-dimWhite">
                  Ease of Scalability
                </span>
              </div>
              <div className="col-span-1 flex items-center gap-2 md:gap-3">
                <span className="text-logoBlue text-[20px] sm:text-[22px] md:text-[24px]">
                  <IoIosArrowDroprightCircle />
                </span>
                <span className="font-bold text-sm sm:text-base md:text-lg dark:text-dimWhite">
                  Instant Impact
                </span>
              </div>
              <div className="col-span-1 flex items-center gap-2 md:gap-3">
                <span className="text-logoBlue text-[20px] sm:text-[22px] md:text-[24px]">
                  <IoIosArrowDroprightCircle />
                </span>
                <span className="font-bold text-sm sm:text-base md:text-lg dark:text-dimWhite">
                  Expertise and Experience
                </span>
              </div>
              <div className="col-span-1 flex items-center gap-2 md:gap-3">
                <span className="text-logoBlue text-[20px] sm:text-[22px] md:text-[24px]">
                  <IoIosArrowDroprightCircle />
                </span>
                <span className="font-bold text-sm sm:text-base md:text-lg dark:text-dimWhite">
                  Time Zone Aligned
                </span>
              </div>
              <div className="col-span-1 flex items-center gap-2 md:gap-3">
                <span className="text-logoBlue text-[20px] sm:text-[22px] md:text-[24px]">
                  <IoIosArrowDroprightCircle />
                </span>
                <span className="font-bold text-sm sm:text-base md:text-lg dark:text-dimWhite">
                  Full Flexibility
                </span>
              </div>
              <div className="col-span-1 flex items-center gap-2 md:gap-3">
                <span className="text-logoBlue text-[20px] sm:text-[22px] md:text-[24px]">
                  <IoIosArrowDroprightCircle />
                </span>
                <span className="font-bold text-sm sm:text-base md:text-lg dark:text-dimWhite">
                  Proactive Support
                </span>
              </div>
            </div>
            <div className="mt-7 md:mt-10 w-fit md:w-full mx-auto">
              <Button text="Free Consultation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
