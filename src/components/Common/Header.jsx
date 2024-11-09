import Link from "next/link";

const Header = ({ title, bookmark }) => {
  return (
    <div className="md:h-[400px] xl:h-[450px] bg-dimWhite dark:bg-dimBlack flex items-center justify-center flex-col gap-5 px-5 py-10">
      <div className="dark:text-white text-[26px] sm:text-[30px] md:text-[38px] lg:text-[46px] xl:text-[52px] font-bold leading-[1.2] text-center md:text-left">
        {title}
      </div>
      <div className="border border-logoBlue rounded-full px-5 py-1.5 md:py-2">
        <Link href="/" className="text-logoBlue text-[14px] md:text-base">Home</Link>
        <span className="text-logoBlue text-[14px] md:text-base px-3">/</span>
        <span className="text-logoBlue text-[14px] md:text-base">{bookmark}</span>
      </div>
    </div>
  );
};

export default Header;
