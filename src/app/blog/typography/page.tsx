import Footer from "@/components/Blog/Footer";
import Header from "@/components/Blog/Header";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <Header />

      <main className="mx-7 lg:mx-6 mt-32 flex-grow ">
        <article className="max-w-5xl mx-auto">
          <header className="mb-14">
            <h1 className="text-3xl text-center font-bold leading-normal text-slate-900 dark:text-slate-100 mt-0 mb-3">
              Typography
            </h1>
            <div className="text-center text-slate-700 dark:text-slate-400">
              Published on 21 June 2020 08:04 AM
            </div>
            <div className="mt-10 -mx-7 md:mx-0">
              <Image
                className="w-full max-w-2xl mx-auto"
                src="https://vredeburg.netlify.app/assets/img/typography.png"
                width="960"
                height="500"
                alt="This post thumbnail"
              />
            </div>
          </header>
          <div
            id="content"
            className="prose dark:prose-invert text-slate-800 dark:text-slate-300 max-w-none"
          >
            <p>
              Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est
              et expeditasi distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihilse impedit quo minus id quod amets
              untra dolor amet sad. Sed ut perspser iciatis unde omnis iste
              natus error sit voluptatem accusantium doloremque laste. Dolores
              sadips ipsums sits.
            </p>
            <p>
              Nunc tristique velit ligula. Phasellus vel massa a lorem facilisis
              interdum ut ac erat. Sed convallis a nisi non elementum. Vivamus
              ac ultricies dolor. Fusce in erat rhoncus, ultrices ante placerat,
              vulputate odio. Aliquam porta varius enim vitae tempus. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Cras
              consectetur augue mauris, in scelerisque mauris dictum nec.
              Pellentesque a venenatis est. Curabitur ut quam tempus, dictum
              elit nec, vehicula dui. Nunc vestibulum lorem ac finibus
              consequat.
            </p>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-10">
              Heading 1
            </h1>
            <p className="mt-10">
              Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est
              et expeditasi distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihilse impedit quo minus id quod amets
              untra dolor amet sad. Sed ut perspser iciatis unde omnis iste
              natus error sit voluptatem accusantium doloremque laste. Dolores
              sadips ipsums sits.
            </p>

            <p className="mt-10">
              Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est
              et expeditasi distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihilse impedit quo minus id quod amets
              untra dolor amet sad. Sed ut perspser iciatis unde omnis iste
              natus error sit voluptatem accusantium doloremque laste. Dolores
              sadips ipsums sits.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default Page;
