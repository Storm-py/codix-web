"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Common/Header";
import Image from "next/image";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/create-blog`);
        if (!response.ok) throw new Error("Failed to fetch blogs");
        
        const data = await response.json();
        setBlogs(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);
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
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div>
      <Header title="Blogs" bookmark="Blogs" />
      <div className="px-5 lg:px-10 xl:px-28 py-10 xl:py-20 dark:bg-black">
        <div className="2xl:container 2xl:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {blogs.map((blog) => (
            <Link href={`/blogs/${blog._id}`} key={blog._id} className="block bg-gray-100 rounded-3xl shadow-lg p-4 dark:border-gray-700 dark:bg-dimBlack">
              <div className="rounded-3xl overflow-hidden mb-4">
                <Image
                  src={blog.coverImage}
                  alt="Blog image"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <p className="text-gray-500 text-sm mb-2 dark:text-white">{new Date(blog.createdAt).toLocaleDateString()}</p>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{blog.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
