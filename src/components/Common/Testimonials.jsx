"use client";
import SmallHeading from "./SmallHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 0,
    name: "John Doe",
    company: "Acme Solutions",
    review:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    image: "https://www.edifycit.com/images/team/azeem.webp",
  },
  {
    id: 1,
    name: "Banson Doe",
    company: "Horizon Ventures",
    review:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    image: "https://www.edifycit.com/images/team/Tariqsb.webp",
  },
  {
    id: 2,
    name: "John Doe",
    company: "Delta Innovation",
    review:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    image: "https://www.edifycit.com/images/team/shahan.webp",
  },
  {
    id: 3,
    name: "Banson Doe",
    company: "Omega Solutions",
    review:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    image: "https://www.edifycit.com/images/team/usama.webp",
  },
];

const Testimonials = ({ dim }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={`px-5 lg:px-10 xl:px-28 py-10 xl:py-20 ${
        dim ? "bg-dimWhite dark:bg-dimBlack" : "bg-white dark:bg-black"
      }`}
    >
      <div className="2xl:container 2xl:mx-auto">
        <SmallHeading text="Client Testimonials" />
        <div className="dark:text-white text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[50px] font-bold leading-[1.2] mt-3 text-center md:text-left">
          Our customers love us.
        </div>
        <div className="mt-7 xl:mt-10 overflow-hidden">
          <Slider {...settings}>
            {reviews.map((item) => (
              <div key={item.id} className="md:pr-5 xl:pr-7">
                <div
                  className={`p-7 xl:p-10 rounded-[30px] xl:rounded-[40px] ${
                    dim
                      ? "bg-white dark:bg-black"
                      : "bg-dimWhite dark:bg-dimBlack"
                  }`}
                >
                  <div className="mb-5 flex items-center gap-2 text-orange-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="text-[#9C9FA6] font-semibold text-sm md:text-base">
                    {item.review}
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[60px] rounded-full"
                    />
                    <div>
                      <div className="text-[18px] md:text-[20px] font-bold dark:text-white">
                        {item.name}
                      </div>
                      <div className="text-[#9C9FA6] font-semibold text-sm md:text-base">
                        {item.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
