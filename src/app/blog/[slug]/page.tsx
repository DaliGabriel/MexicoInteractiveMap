import { notFound } from "next/navigation";
import BlogPage from "@/components/Blog/BlogPage";
import {db} from "../../../lib/firebaseAdmin";
import React from "react";
import Head from "next/head";
import BlogPostSchema from "@/components/Blog/BlogPostSchema";

// Define the BlogPost type
type BlogPost = {
  id: string;
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
    content: string[];
  };
};

// Dynamic blog page component
const Page = async ({ params }: { params: { slug: string } }) => {
  
  const post = await fetchBlogPostBySlug(params.slug); // Fetch data from Firestore

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

// Fetch a single blog post by its slug from Firestore
async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {

  const docRef = db.collection("blogContent").doc(slug); // Assuming slug is used as document ID
  const doc = await docRef.get();

  if (!doc.exists) {
    return null;
  }

  const data = doc.data() as BlogPost;


  // Add id if it's not already in the document data
  if (!data.id) {
    data.id = doc.id;
  }

  return data;
}


export default Page;
