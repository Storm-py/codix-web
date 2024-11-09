import About from "@/components/About/About";
import Header from "@/components/Common/Header";
import Stats from "@/components/Common/Stats";
import Testimonials from "@/components/Common/Testimonials";
import Partners from "@/components/Home/Partners";
import WhyChoose from "@/components/Home/WhyChoose";

const page = () => {
  return (
    <div>
      <Header title="About Us" bookmark="About Us" />
      <About />
      <WhyChoose />
      <Partners />
      <Stats />
      <div className="bg-logoBlue py-2 overflow-hidden 2xl:container 2xl:mx-auto">
        <div className="slide-wrapper flex">
          <div className="slide flex items-center whitespace-nowrap">
            <span className="item min-w-max text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-white">
              Web Development
            </span>
            <span className="item min-w-max text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-white">
              Game Development
            </span>
            <span className="item min-w-max text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-white">
              App Development
            </span>
            <span className="item min-w-max text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-white">
              Digital Marketing
            </span>
            <span className="item min-w-max text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-white">
              SEO Optimization
            </span>
            <span className="item min-w-max text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-white">
              Graphic Design
            </span>
            <span className="item min-w-max text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-white">
              Networking Services
            </span>
            <span className="item min-w-max text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-white">
              Web Development
            </span>
            <span className="item min-w-max text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-white">
              Game Development
            </span>
            <span className="item min-w-max text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-white">
              App Development
            </span>
            <span className="item min-w-max text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-white">
              Digital Marketing
            </span>
            <span className="item min-w-max text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-white">
              SEO Optimization
            </span>
            <span className="item min-w-max text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-white">
              Graphic Design
            </span>
            <span className="item min-w-max text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-white">
              Networking Services
            </span>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default page;
