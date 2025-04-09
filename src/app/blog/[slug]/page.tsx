import { notFound } from "next/navigation";
import BlogPage from "@/components/Blog/BlogPage";
import { db } from "../../../lib/firebaseAdmin";
import React from "react";
import BlogPostSchema from "@/components/Blog/BlogPostSchema";
import { Metadata } from "next";

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
    content: string;
  }[];
  conclusion: {
    content: string | string[];
  };
};

// Generate dynamic metadata based on the post data
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await fetchBlogPostBySlug(params.slug);

  // If no post is found, return default metadata
  if (!post) {
    return {
      title: "México interactivo",
      description: "Las ultimas noticias a cerca de México",
    };
  }

  // Convert relative URL to absolute URL if needed
  const absoluteImageUrl = post.mainImageSrc.startsWith("http")
    ? post.mainImageSrc
    : `https://www.mexicointeractivo.com${post.mainImageSrc}`;

  return {
    title: `${post.title} - México interactivo`,
    description: post.introduction.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.introduction.slice(0, 160),
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      url: `https://www.mexicointeractivo.com/blog/${post.slug}`,
      type: "article",
      siteName: "México interactivo",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.introduction.slice(0, 160),
      images: [absoluteImageUrl],
    },
  };
}

// Dynamic blog page component
const Page = async ({ params }: { params: { slug: string } }) => {
  const post = await fetchBlogPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <BlogPostSchema post={post} />
      <BlogPage {...post} />
    </>
  );
};

// Fetch a single blog post by its slug from Firestore
async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const docRef = db.collection("blogContent").doc(slug);
  const doc = await docRef.get();

  if (!doc.exists) {
    return null;
  }

  const data = doc.data() as BlogPost;

  if (!data.id) {
    data.id = doc.id;
  }

  return data;
}

export default Page;
