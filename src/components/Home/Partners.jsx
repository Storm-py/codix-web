import SmallHeading from "../Common/SmallHeading";

const logos = [
  "/home/partners/logo-1.svg",
  "/home/partners/logo-2.svg",
  "/home/partners/logo-3.svg",
  "/home/partners/logo-4.svg",
  "/home/partners/logo-5.svg",
  "/home/partners/logo-6.svg",
  "/home/partners/logo-7.svg",
  "/home/partners/logo-8.svg",
];

const Partners = () => {
  return (
    <div className="px-5 lg:px-10 xl:px-28 py-10 xl:py-20 dark:bg-black">
      <div className="2xl:container 2xl:mx-auto">
        <SmallHeading text="Executive Partners" />
        <div className="dark:text-white text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[50px] font-bold leading-[1.2] mt-3 text-center md:text-left">
          100+ Partners & supporters
        </div>
      </div>
      <div className="2xl:container 2xl:mx-auto mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {logos.map((logo, index) => (
          <div key={index} className="bg-dimWhite dark:bg-dimBlack p-5 lg:p-7 rounded-[20px] sm:rounded-[25px] xl:rounded-[30px]">
            <img src={logo} alt="Partner" className="w-[120px] sm:w-[150px] mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
