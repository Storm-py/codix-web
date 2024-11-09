"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "@/components/Common/Header";

const BlogDetailPage = ({params}) => {
  const id=params.id
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; 

    const fetchBlog = async () => {
      try {
        const response = await fetch(`${process.env.SERVER_URL}/api/create-blog/${id}`);
        if (!response.ok) throw new Error("Failed to fetch blog content");
        
        const data = await response.json();
        setBlog(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (isLoading) return <div className='w-full flex items-center justify-center'>
  <div className="flex w-52 flex-col gap-4 items-center justify-center">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
  </div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (<>
      <Header title={blog.title} bookmark="Blog Detail" />
    <div className="hard bg-gray-400 dark:bg-black">
      <div className="px-5 lg:px-10 xl:px-28 py-10 xl:py-20 dark:bg-black">
        
          <div
            className="text-gray-700 leading-7"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
            </>
  );
};

export default BlogDetailPage;
