import CardBlogPost from "@/components/Blog/CardBlogPost";
import Header from "@/components/Blog/Header";
import { currentYear } from "@/utils/CurrentYear";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-white text-slate-800 break-words">
      <Header/>
      <main className="mx-7 lg:mx-6 mt-32 flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap -mx-2">
          <CardBlogPost/>
          <CardBlogPost/>
          <CardBlogPost/>
          <CardBlogPost/>
          <CardBlogPost/>
          <CardBlogPost/>
            

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
      <footer className="mt-20 px-10 py-8 bg-slate-200">
        <div className="max-w-5xl mx-auto text-slate-700 text-center">
          © {currentYear}{" "}
          <a href="/" className="font-medium" target="_blank" rel="noopener">
            México interactivo
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
