import Image from "next/image";
import Button from "../Common/Button";
import SmallHeading from "../Common/SmallHeading";

const Hero = () => {
  return (
    <main className="bg-dimWhite dark:bg-dimBlack 2xl:px-28">
      <div className="2xl:container 2xl:mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-10 xl:gap-14 items-center px-5 lg:px-10 xl:px-28 2xl:px-0 py-10 xl:py-20 bg-[url('/hero-bg.png')] bg-cover dark:bg-none bg-bottom bg-no-repeat">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <span className="flex justify-center lg:justify-start mt-5 lg:mt-0">
              <SmallHeading text="About Our Company" />
            </span>
            <div className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[50px] font-bold leading-[1.2] mt-3 text-center lg:text-left">
              <span className="dark:text-white">
                Web Design, SEO & Internet Marketing For
              </span>{" "}
              <span className="text-logoBlue">Your Business</span>
            </div>
            <div className="mt-5 lg:mt-7 text-center lg:text-left text-sm md:text-base dark:text-dimWhite">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo veritatis et quasi architecto beatae vitae dicta
              sunt.
            </div>
            <div className="mt-7 lg:mt-10 w-fit lg:w-full mx-auto">
              <Button text="Free Consultation" />
            </div>
          </div>
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="relative w-[80%] md:w-fit mx-auto lg:w-full">
              <Image
                src="/home/hero/hero.jpg"
                width={500}
                height={500}
                alt=""
                className="rounded-[50px] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
