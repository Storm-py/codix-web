'use client'

import { useState, useEffect } from 'react'
import Header from "@/components/Common/Header"
import Stats from "@/components/Common/Stats"
import Testimonials from "@/components/Common/Testimonials"
import Partners from "@/components/Home/Partners"
import WhyChoose from "@/components/Home/WhyChoose"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6"

const ServicesPage = () => {
  const [services, setServices] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${process.env.SERVER_URL}/api/create-service`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (!response.ok) {
          throw new Error('Failed to fetch services')
        }
        const data = await response.json()
        setServices(data)
        setIsLoading(false)
      } catch (err) {
        setError(err.message)
        setIsLoading(false)
      }
    }

    fetchServices()
  }, [setServices])

  if (isLoading) {
    return <div className='w-full flex items-center justify-between'>
    <div className="flex w-52 flex-col gap-4 items-center justify-center">
    <div className="skeleton h-32 w-full"></div>
    <div className="skeleton h-4 w-28"></div>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
  </div>
  <div className="flex w-52 flex-col gap-4 items-center justify-center">
    <div className="skeleton h-32 w-full"></div>
    <div className="skeleton h-4 w-28"></div>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
  </div>
  <div className="flex w-52 flex-col gap-4 items-center justify-center">
    <div className="skeleton h-32 w-full"></div>
    <div className="skeleton h-4 w-28"></div>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
  </div>
    </div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>
  }

  return (
    <div>
      <Header title="Services" bookmark="Services" />
      <div className="px-5 lg:px-10 xl:px-28 py-10 xl:py-20 dark:bg-black">
        <div className="2xl:container 2xl:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {services.map((service, index) => (
            <div
              key={service._id}
              className="group bg-dimWhite dark:bg-dimBlack rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] overflow-hidden p-3 sm:p-5"
            >
              <div className="p-5">
                <div className="flex items-center justify-between gap-3 pb-5 border-b dark:border-gray-700">
                  <span className="dark:text-white text-[20px] lg:text-[24px] font-bold w-full">
                    {service.title}
                  </span>
                  <span className="-rotate-45 group-hover:rotate-0 duration-300 text-base sm:text-lg md:text-xl xl:text-2xl bg-logoBlue text-white rounded-full p-3 xl:p-4">
                    <FaArrowRight />
                  </span>
                </div>
                <div className="text-[#9C9FA6] mt-2 sm:mt-5 font-semibold text-sm md:text-base">
                  {service.description}
                </div>
              </div>
              <div className="mt-2 lg:mt-3">
                <div className="relative w-full rounded-[20px] sm:rounded-[25px] lg:rounded-[35px] overflow-hidden aspect-video">
                  <Image
                    src={service.coverImage}
                    fill
                    alt={service.title}
                    className="object-cover rounded-[20px] sm:rounded-[25px] lg:rounded-[35px] group-hover:scale-105 duration-500"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Stats />
      <Partners />
      <WhyChoose />
      <Testimonials />
    </div>
  )
}

export default ServicesPage