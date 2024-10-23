import Image from "next/image";
import Link from "next/link";
import React from "react";
import DOMPurify from "isomorphic-dompurify";

interface CardBlogPostProps {
  slug: string;
  ImageUrl: string;
  BlogTitle: string;
  BlogDate: string;
  BlogSummarize: string;
}

const CardBlogPost = ({
  slug,
  ImageUrl,
  BlogTitle,
  BlogDate,
  BlogSummarize,
}: CardBlogPostProps) => {
  //Void problems with ssr with next and prevent xxs atacks lol
  const sanitizedHTML = DOMPurify.sanitize(BlogSummarize);

  return (
    <>
      <Link
        className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2"
        href={`/blog/${slug}`}
      >
        <div className="rounded shadow-md bg-white dark:bg-gray-800 flex flex-col">
          {/* Image with max-height */}
          <div
            className="relative w-full"
            style={{ maxHeight: "200px", height: "200px" }}
          >
            <Image
              className="w-full h-full object-cover rounded-t" // Ensures the image covers the container
              src={ImageUrl}
              fill // Dynamically fills the parent container
              alt={`Image about ${slug}`}
              priority
            />
          </div>
          <div className="px-6 py-5 flex flex-col justify-between">
            {/* Title and Date Block */}
            <div>
              <div className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100">
                {BlogTitle}
              </div>
              <p
                className="text-slate-700 dark:text-slate-400 mb-1"
                title="Published date"
              >
                {BlogDate}
              </p>
            </div>

            {/* Blog Content */}
            <p
              className="text-slate-800 dark:text-slate-300 mt-4"
              dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
            ></p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardBlogPost;
