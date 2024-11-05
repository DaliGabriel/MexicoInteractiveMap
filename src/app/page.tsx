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

// Server component that accepts `searchParams` directly
export default async function Home({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const category = searchParams?.category;

  // Build the Firestore query based on the `category` parameter
  let query = db
    .collection("blogContent")
    .select("slug", "title", "mainImageSrc", "date", "introduction")
    .orderBy("dateTimestamp", "desc")
    .limit(9);

  if (category) {
    query = query.where("category", "==", category);
  }

  // Fetch posts from Firestore
  const snapshot = await query.get();
  const blogPosts = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as BlogPost[];

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
                BlogSummarize={post.introduction.slice(0, 150) + "..."}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
