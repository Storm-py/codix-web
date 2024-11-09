import Image from "next/image";
import Link from "next/link";

const pages = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

const socials = [
  {
    title: "Instagram",
    link: "/",
  },
  {
    title: "Facebook",
    link: "/",
  },
  {
    title: "Twitter",
    link: "/",
  },
  {
    title: "Linkedin",
    link: "/",
  },
];

const services = [
  {
    title: "Web Development",
    link: "/",
  },
  {
    title: "Digital Marketing",
    link: "/",
  },
  {
    title: "Game Development",
    link: "/",
  },
  {
    title: "Mobile App Development",
    link: "/",
  },
  {
    title: "Networking Services",
    link: "/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-dimWhite dark:bg-dimBlack px-5 lg:px-10 xl:px-28">
      <div className="2xl:container 2xl:mx-auto">
        <div className="py-10 xl:pt-14 grid grid-cols-2 md:grid-cols-10 xl:grid-cols-12 gap-5">
          <div className="grid-cols-1 md:col-span-4 xl:col-span-6">
            <Link href="/">
              <Image
                src="/logo.png"
                width={150}
                height={150}
                alt="Codix Logo"
              />
            </Link>
            <div className="text-[#9C9FA6] text-sm md:text-base mt-5 md:mt-7">
              Creative Agency Based on Lorem Ipsum
            </div>
            <div className="mt-5 md:mt-7 flex flex-col gap-2">
              <Link
                href="/"
                className="text-black dark:text-white text-[18px] sm:text-[20px] lg:text-[24px] font-bold break-words"
              >
                info@domainname.com
              </Link>
              <Link
                href="/"
                className="text-black dark:text-white text-[18px] sm:text-[20px] lg:text-[24px] font-bold break-words"
              >
                (+0) 123 456 789
              </Link>
            </div>
          </div>
          <div className="grid-cols-1 md:col-span-2">
            <div className="font-bold dark:text-white text-lg lg:text-xl xl:text-2xl">
              Pages
            </div>
            <div className="flex gap-2 lg:gap-3 mt-5 flex-col">
              {pages.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="text-[#9C9FA6] hover:text-logoBlue duration-300 font-semibold"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid-cols-1 md:col-span-2">
            <div className="font-bold dark:text-white text-lg lg:text-xl xl:text-2xl">
              Socials
            </div>
            <div className="flex gap-2 lg:gap-3 mt-5 flex-col">
              {socials.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="text-[#9C9FA6] hover:text-logoBlue duration-300 font-semibold"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid-cols-1 md:col-span-2">
            <div className="font-bold dark:text-white text-lg lg:text-xl xl:text-2xl">
              Services
            </div>
            <div className="flex gap-2 lg:gap-3 mt-5 flex-col">
              {services.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="text-[#9C9FA6] hover:text-logoBlue duration-300 font-semibold"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="py-7 border-t border-t-[#9C9FA6] flex items-center justify-between flex-col md:flex-row gap-3 md:gap-5">
          <div className="text-[#9C9FA6] font-semibold text-center md:text-left">
            Copyright © {new Date().getFullYear()} Codix. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 lg:gap-5 xl:gap-10">
            <Link href="/" className="text-[#9C9FA6] hover:text-logoBlue duration-300 font-semibold">
              Privacy Policy
            </Link>
            <Link href="/" className="text-[#9C9FA6] hover:text-logoBlue duration-300 font-semibold">
              Terms Of Service
            </Link>
            <Link href="/" className="text-[#9C9FA6] hover:text-logoBlue duration-300 font-semibold">
              Go To Top
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
