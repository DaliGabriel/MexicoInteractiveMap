import Head from "next/head";

// Define the BlogPost type here or import it from your existing types
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
    content: string;
  }[];
  conclusion: string;
};

const BlogPostSchema = ({ post }: { post: BlogPost }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    image: post.mainImageSrc,
    author: {
      "@type": "Person",
      name: "Gabriel Dalí", // Replace with dynamic author name if needed
    },
    publisher: {
      "@type": "Organization",
      name: "México Interactivo", // Your actual blog name
      logo: {
        "@type": "ImageObject",
        url: "https://mexicointeractivo.com/logo.png", // Replace with your actual logo URL
      },
    },
    description: post.introduction.slice(0, 160),
    url: `https://mexicointeractivo.com/blog/${post.slug}`,
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Head>
  );
};

export default BlogPostSchema;
