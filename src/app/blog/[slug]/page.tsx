import { notFound } from "next/navigation";
import BlogPage from "@/components/Blog/BlogPage";
import blogPosts from "../../data/blog/blogContent.json"; // Adjust path to your JSON data
import React from "react";
import Head from "next/head";
import BlogPostSchema from "@/components/Blog/BlogPostSchema";

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

  return (
    <>
      {/* Add SEO meta tags */}
      <Head>
        <title>{post.title} - My Blog</title>
        <meta name="description" content={post.introduction.slice(0, 160)} />
        <meta name="keywords" content={post.slug.replace(/-/g, ", ")} />

        {/* Open Graph (OG) meta tags for social sharing */}
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={post.introduction.slice(0, 160)}
        />
        <meta property="og:image" content={post.mainImageSrc} />
        <meta
          property="og:url"
          content={`https://www.mexicointeractivo.com/blog/${post.slug}`}
        />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta
          name="twitter:description"
          content={post.introduction.slice(0, 160)}
        />
        <meta name="twitter:image" content={post.mainImageSrc} />
      </Head>
      {/* Render the BlogPostSchema component with the post data */}
      <BlogPostSchema post={post} />
      {/* Render the BlogPage component with the post data */}
      <BlogPage {...post} />
    </>
  );
};

// Generate static paths for blog posts
export async function generateStaticParams() {
  return blogPosts.map((post: BlogPost) => ({
    slug: post.slug,
  }));
}

export default Page;
