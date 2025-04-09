import Image from "next/image";
import BlogSection from "./BlogSection";
import Footer from "./Footer";
import Header from "./Header";

type BlogPageProps = {
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

const BlogPage = ({
  title,
  date,
  mainImageSrc,
  introduction,
  sections,
  conclusion,
}: BlogPageProps) => {
  return (
    <>
      <Header />
      <main className="mx-7 lg:mx-6 mt-10 flex-grow">
        <article className="max-w-5xl mx-auto">
          <header className="mb-14">
            <h1 className="text-3xl text-center font-bold leading-normal text-slate-900 dark:text-slate-100 mt-0 mb-3">
              {title}
            </h1>
            <div className="text-center text-slate-700 dark:text-slate-400">
              Published on {date}
            </div>
            <div className="mt-10 -mx-7 md:mx-0">
              <Image
                priority
                className="w-full max-w-2xl mx-auto"
                src={mainImageSrc}
                alt={`Image about ${introduction}`}
                width={960}
                height={500}
              />
            </div>
          </header>

          <section className="mb-10">
            <p dangerouslySetInnerHTML={{ __html: introduction }}></p>
          </section>

          <div
            id="content"
            className="prose dark:prose-invert text-slate-800 dark:text-slate-300 max-w-none"
          >
            {sections.map((section, index) => (
              <BlogSection
                key={index}
                title={section.title}
                imageSrc={section.imageSrc}
                imageAlt={section.imageAlt}
                content={section.content}
              />
            ))}
          </div>

          {/* Render conclusion */}
          {conclusion && (
            <footer>
              <h2 className="text-2xl text-center font-bold leading-normal text-slate-900 dark:text-slate-100 mt-0 mb-3">
                Conclusión:
              </h2>
              {Array.isArray(conclusion.content) ? (
                conclusion.content.map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  ></p>
                ))
              ) : (
                <p dangerouslySetInnerHTML={{ __html: conclusion.content }}></p>
              )}
            </footer>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
