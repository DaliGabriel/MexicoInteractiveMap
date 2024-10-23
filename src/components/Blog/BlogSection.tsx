import Image from "next/image";
import React from "react";

type BlogSectionProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  content: string[];
};

const BlogSection = ({
  title,
  imageSrc,
  imageAlt,
  content,
}: BlogSectionProps) => (
  <section className="mb-10">
    <h2 className="text-3xl text-center font-bold leading-normal text-slate-900 dark:text-slate-100 mt-0 mb-3">
      {title}
    </h2>
    <div className="mt-10 -mx-7 md:mx-0">
      <Image
        className="max-h-96 object-cover w-full"
        src={imageSrc}
        alt={imageAlt}
        width={960}
        height={500}
        priority 
      />
    </div>
    {/* Iterate over the content array and render each paragraph */}
    {content.map((paragraph, index) => (
      <p key={index} className="text-center mt-10" dangerouslySetInnerHTML={{ __html: paragraph }}></p>
    ))}
  </section>
);

export default BlogSection;
