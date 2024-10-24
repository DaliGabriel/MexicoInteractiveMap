import CardBlogPost from "@/components/Blog/CardBlogPost";
import Footer from "@/components/Blog/Footer";
import Header from "@/components/Blog/Header";
import { db } from "@/lib/firebaseAdmin";

// Define the BlogPost type (same as in your other components)
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

// Fetch blog posts directly in the component (this is now an async component)
export default async function Home() {
  const snapshot = await db.collection("blogContent").get();
  const blogPosts = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as BlogPost[]; // Make sure it conforms to your BlogPost type

  return (
    <div className="flex flex-col h-screen text-slate-800 break-words">
      <Header />
      <main className="mx-7 lg:mx-6 mt-10 flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap -mx-2">
            {blogPosts.map((post) => (
              <CardBlogPost
                key={post.slug}
                slug={post.slug}
                ImageUrl={post.mainImageSrc}
                BlogTitle={post.title}
                BlogDate={post.date}
                BlogSummarize={post.introduction.slice(0, 150) + "..."} // Short summary from introduction
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
