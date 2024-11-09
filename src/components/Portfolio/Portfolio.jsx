'use client'
import Image from "next/image";
import { useState,useEffect } from "react";
const types = [
  {
    id: 0,
    title: "Digital Marketing",
  },
  {
    id: 1,
    title: "Website Development",
  },
  {
    id: 2,
    title: "App Development",
  },
  {
    id: 3,
    title: "Graphic Design",
  },
];

const Portfolio = () => {
  const [works, setWorks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${process.env.SERVER_URL}/api/create-portfolio`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await response.json();
        setWorks(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchServices();
  }, [setWorks]);

  if (isLoading) {
    return <div className='w-full flex items-center justify-center'>
    <div className="flex w-52 flex-col gap-4 items-center justify-center">
    <div className="skeleton h-32 w-full"></div>
    <div className="skeleton h-4 w-28"></div>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
  </div>
    </div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }
  return (
    <main className="px-5 lg:px-10 xl:px-28 py-10 xl:py-20 dark:bg-black">
      <div className="2xl:container 2xl:mx-auto flex items-center justify-center gap-5 flex-wrap">
        <div className="dark:text-white bg-dimWhite dark:bg-dimBlack text-sm lg:text-base dark:hover:bg-logoBlue hover:bg-logoBlue px-5 py-2.5 lg:py-3 hover:text-white font-semibold duration-300 cursor-pointer rounded-[25px] lg:rounded-[30px]">
          All
        </div>
        {types.map((type, index) => (
          <div
            key={type.id}
            className="dark:text-white bg-dimWhite dark:bg-dimBlack text-sm lg:text-base dark:hover:bg-logoBlue hover:bg-logoBlue px-5 py-2.5 lg:py-3 hover:text-white font-semibold duration-300 cursor-pointer rounded-[25px] lg:rounded-[30px]"
          >
            {type.title}
          </div>
        ))}
      </div>
      <div className="2xl:container 2xl:mx-auto grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 lg:gap-7">
        {works.map((work, index) => (
          <div
            key={index}
            className="group bg-dimWhite dark:bg-dimBlack rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] overflow-hidden p-3 sm:p-5"
          >
            <div>
              <div className="relative w-full rounded-[20px] sm:rounded-[25px] lg:rounded-[35px] overflow-hidden aspect-video">
                <Image
                  src={work.coverImage}
                  fill
                  alt={work.title}
                  className="object-cover rounded-[20px] sm:rounded-[25px] lg:rounded-[35px] group-hover:scale-105 duration-500"
                  unoptimized
                />
              </div>
            </div>
            <div className="px-5 pt-5 sm:pt-7 pb-3 sm:pb-5">
              <div className="dark:text-white text-[20px] lg:text-[24px] font-bold">
                {work.title}
              </div>
              <div className="text-[#9C9FA6] mt-2 sm:mt-3 font-semibold text-sm md:text-base">
                {work.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Portfolio;
