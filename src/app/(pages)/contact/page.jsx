"use client";
import React, { useState } from "react";
import { z } from "zod";
import {
  MapPin,
  Phone,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Common/Header";
import Button from "@/components/Common/Button";

const contactSchema = z.object({
  firstName: z
    .string()
    .max(12,{message:"Firsrt name should be max 10 characters long"})
    .min(2, { message: "First name must be at least 2 characters." }),
  lastName: z
    .string()
    .max(12,{message:":Last name should be max 10 characters long"})
    .min(2, { message: "Last name must be at least 2 characters." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      contactSchema.parse(formData);
      const res = await fetch(`${SERVER_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        setMessage(data.message);
      } else {
        setMessage(data.message || "Submission failed");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors.reduce((acc, err) => {
          acc[err.path[0]] = err.message;
          return acc;
        }, {});
        setErrors(errorMessages);
      } else {
        setMessage("Failed to submit the form. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header title="Contact Us" bookmark="Contact Us" />
      <div className=" w-5/6 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard
            title="Address"
            icon={<MapPin className="h-6 w-6" />}
            content={
              <>
                123, Lorem Ipsum, Street no, City,
                <br />
                Country 123456
              </>
            }
            image="/contact/contact-info-2.jpg"
            alt="Map on a smartphone"
          />
          <ContactCard
            title="Call Now"
            icon={<Phone className="h-6 w-6" />}
            content={
              <>
                (+0) 123 456 789
                <br />
                (+0) 123 456 789
              </>
            }
            image="/contact/contact-info-1.jpg"
            alt="People working at computers"
          />
          <ContactCard
            title="Email Us"
            icon={<Send className="h-6 w-6" />}
            content={
              <>
                info@domainname.com
                <br />
                info@domainname.com
              </>
            }
            image="/contact/contact-info-3.jpg"
            alt="Hands typing on a laptop"
          />
        </div>
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-logoBlue text-xl font-bold mb-4">
                Contact Us
              </h3>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
                Get in touch with us today
              </h1>
              <p className="text-gray-500 my-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium, totam rem aperiam, eaque ipsa quae ab illo
                inventore et.
              </p>
              <h2 className="text-3xl font-bold mb-6">Follow Us:</h2>
              <div className="flex space-x-4">
                <SocialIcon Icon={Facebook} />
                <SocialIcon Icon={Instagram} />
                <SocialIcon Icon={Linkedin} />
                <SocialIcon Icon={Twitter} />
              </div>
            </div>
            <div className="md:w-1/2">
              <form
                className="bg-[#F7F8FD] p-8 rounded-3xl shadow-md"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full p-3 rounded-xl border border-gray-300"
                  />
                  {errors.firstName && (
                    <p className="text-red-500">{errors.firstName}</p>
                  )}

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full p-3 rounded-xl border border-gray-300"
                  />
                  {errors.lastName && (
                    <p className="text-red-500">{errors.lastName}</p>
                  )}

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full p-3 rounded-xl border border-gray-300"
                  />
                  {errors.phone && (
                    <p className="text-red-500">{errors.phone}</p>
                  )}

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-3 rounded-xl border border-gray-300"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>
                <div className="mt-6">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full p-3 rounded-xl border border-gray-300"
                  />
                  {errors.subject && (
                    <p className="text-red-500">{errors.subject}</p>
                  )}
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="4"
                  className="w-full p-3 rounded-xl border border-gray-300 my-6"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500">{errors.message}</p>
                )}
                <Button
                  text={isLoading ? "Sending..." : "Send message"}
                  disabled={isLoading}
                />
                {message && <p className="text-green-500 mt-4">{message}</p>}
              </form>
            </div>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.951985557458!2d73.10955421922871!3d31.41544893608057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392268724e6e98c7%3A0x1937073a8fd0dc03!2sEdify%20Group%20Of%20Companies!5e0!3m2!1sen!2s!4v1730107055410!5m2!1sen!2s"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
function ContactCard({ title, icon, content, image, alt }) {
  return (
    <div className="bg-[#F7F8FD] rounded-3xl overflow-hidden shadow-md">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <div className="bg-logoBlue rounded-full p-4 text-white flex justify-center items-center cursor-pointer ">
            {icon}
          </div>
        </div>
        <div className="border-t my-6"></div>
        <p className="text-gray-500 ">{content}</p>
      </div>
      <div className="flex justify-center items-center px-6 pb-6">
        <div className="relative overflow-hidden rounded-2xl group">
          <Image
            height={300}
            width={300}
            src={image}
            alt={alt}
            className="w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-80 group-hover:translate-x-full transition duration-700 ease-in-out transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
}
const SocialIcon = ({ Icon }) => (
  <a
    href="#"
    className="bg-logoBlue p-3 rounded-full text-white hover:bg-white border hover:text-logoBlue border-logoBlue transition duration-300"
  >
    <Icon className="h-6 w-6" />
  </a>
);
