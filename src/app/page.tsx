import CardBlogPost from "@/components/Blog/CardBlogPost";
import Footer from "@/components/Blog/Footer";
import Header from "@/components/Blog/Header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-white text-slate-800 break-words">
      <Header />
      <main className="mx-7 lg:mx-6 mt-32 flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap -mx-2">
            <CardBlogPost />
            <CardBlogPost />
            <CardBlogPost />
            <CardBlogPost />
            <CardBlogPost />
            <CardBlogPost />
          </div>

          <div className="mt-3 flow-root">
            <a
              href="/"
              className="float-left bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-default text-opacity-50"
            >
              Previous
            </a>{" "}
            <a
              href="/"
              className="float-right bg-white font-semibold py-2 px-4 border rounded shadow-md text-slate-800 cursor-pointer hover:bg-slate-100"
            >
              Next
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
