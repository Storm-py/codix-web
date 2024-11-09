import SmallHeading from "../Common/SmallHeading";

const Stats = () => {
  return (
    <div className="px-5 lg:px-10 xl:px-28 py-10 xl:py-20 bg-dimWhite dark:bg-dimBlack">
      <div className="2xl:container 2xl:mx-auto">
        <SmallHeading text="Ourview Comapny" />
        <div className="dark:text-white text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[50px] font-bold leading-[1.2] mt-3 text-center md:text-left">
          Stats that matter
        </div>
        <div className="mt-7 xl:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          <div className="bg-white dark:bg-black p-5 rounded-[30px] flex items-center justify-center flex-col">
            <div className="flex items-end gap-2 flex-wrap justify-center">
              <div className="dark:text-white text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[36px] font-bold">#1</div>
              <div className="dark:text-white text-[14px] sm:text-[16px] md:text-[18px] xl:text-[22px] font-semibold pb-1">IT Services</div>
            </div>
            <div className="text-[#9C9FA6] font-semibold text-sm mt-2 mb-2">
              Company In UK
            </div>
          </div>
          <div className="bg-white dark:bg-black p-5 rounded-[30px] flex items-center justify-center flex-col">
            <div className="flex items-end gap-2 flex-wrap justify-center">
              <div className="dark:text-white text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[36px] font-bold">300+</div>
              <div className="dark:text-white text-[14px] sm:text-[16px] md:text-[18px] xl:text-[22px] font-semibold pb-1"></div>
            </div>
            <div className="text-[#9C9FA6] font-semibold text-sm mt-2 mb-2">
              Global Clients
            </div>
          </div>
          <div className="bg-white dark:bg-black p-5 rounded-[30px] flex items-center justify-center flex-col">
            <div className="flex items-end gap-2 flex-wrap justify-center">
              <div className="dark:text-white text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[36px] font-bold">21+</div>
              <div className="dark:text-white text-[14px] sm:text-[16px] md:text-[18px] xl:text-[22px] font-semibold pb-1">years</div>
            </div>
            <div className="text-[#9C9FA6] font-semibold text-sm mt-2 mb-2">
              In Development
            </div>
          </div>
          <div className="bg-white dark:bg-black p-5 rounded-[30px] flex items-center justify-center flex-col">
            <div className="flex items-end gap-2 flex-wrap justify-center">
              <div className="dark:text-white text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[36px] font-bold">$50+</div>
              <div className="dark:text-white text-[14px] sm:text-[16px] md:text-[18px] xl:text-[22px] font-semibold pb-1">Million</div>
            </div>
            <div className="text-[#9C9FA6] font-semibold text-sm mt-2 mb-2">
              Total Revenue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
