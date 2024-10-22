import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardBlogPostProps {
  ImageUrl: string;
  BlogTitle: string;
  BlogDate: string;
  BlogSummarize: string;
}

const CardBlogPost = (
  {
    ImageUrl,
    BlogTitle,
    BlogDate,
    BlogSummarize,
  }: CardBlogPostProps
) => {
  return (
    <>
      <Link className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2" href={"blog/typography/"}>
          <div className="rounded shadow-md h-full bg-white dark:bg-gray-800">
            <Image
              className="w-full m-0 rounded-t lazy"
              src={ImageUrl}
              width="960"
              height="500"
              alt="This post thumbnail"
            />
            <div className="px-6 py-5">
              <div className="font-semibold text-lg mb-2">
                <div className="text-slate-900 dark:text-slate-100 ">
                  {BlogTitle}
                </div>
              </div>
              <p
                className="text-slate-700 dark:text-slate-400 mb-1"
                title="Published date"
              >
                {BlogDate}
              </p>
              <p className="text-slate-800 dark:text-slate-300">
                {BlogSummarize}
              </p>
            </div>
          </div>
      </Link>
    </>
  );
};

export default CardBlogPost;
