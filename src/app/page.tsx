import CardBlogPost from "@/components/Blog/CardBlogPost";
import Footer from "@/components/Blog/Footer";
import Header from "@/components/Blog/Header";
import { db } from "@/lib/firebaseAdmin";

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
    .orderBy("date") // Optional, Firestore may order lexicographically
    .limit(50); // Fetch more than needed;

  if (category) {
    query = query.where("category", "==", category);
  }

  // Fetch posts from Firestore
  const snapshot = await query.get();

  const blogPosts = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as BlogPost[];

  // Custom date parsing and sorting
  const sortedBlogPosts = blogPosts
    .sort((a, b) => {
      // Parse the date string into a Date object
      const parseDate = (dateString: string) => {
        // Mapping of Spanish month names to English
        const months: Record<string, string> = {
          enero: "January",
          febrero: "February",
          marzo: "March",
          abril: "April",
          mayo: "May",
          junio: "June",
          julio: "July",
          agosto: "August",
          septiembre: "September",
          octubre: "October",
          noviembre: "November",
          diciembre: "December",
        };

        // Replace Spanish month name with English equivalent
        const normalizedDate = dateString.replace(
          /\b(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)\b/gi,
          (match) => months[match.toLowerCase() as keyof typeof months]
        );

        // Remove extra spaces and parse the normalized date
        return new Date(normalizedDate.replace(/\s+/g, " "));
      };

      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);

      // Sort in descending order (most recent first)
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 9);

  return (
    <div className="flex flex-col h-screen text-slate-800 break-words">
      <Header />
      <main className="mx-7 lg:mx-6 mt-10 flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap -mx-2">
            {sortedBlogPosts.map((post) => (
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
