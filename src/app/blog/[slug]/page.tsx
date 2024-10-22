import { notFound } from 'next/navigation';
import BlogPage from "@/components/Blog/BlogPage";
import blogPosts from "../../data/blog/blogContent.json"; // Adjust path to your JSON data
import React from "react";

// Define the BlogPost type
type BlogPost = {
  slug: string;
  title: string;
  date: string;
  mainImageSrc: string;
  introduction: string;
  sections: {
    title: string;
    imageSrc: string;
    imageAlt: string;
    content: string[];
  }[];
  conclusion: {
    content: string[]; // Changed this to an array of strings, not an array of objects
  };
};

// Dynamic blog page component
const Page = ({ params }: { params: { slug: string } }) => {
  const post = blogPosts.find((post: BlogPost) => post.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return <BlogPage {...post} />;
};

// Generate static paths for blog posts
export async function generateStaticParams() {
  return blogPosts.map((post: BlogPost) => ({
    slug: post.slug,
  }));
}

export default Page;
