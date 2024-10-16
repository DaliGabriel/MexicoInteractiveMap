import Image from "next/image";
import React from "react";



const CardBlogPost = () => {
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
        <div className="rounded shadow-md h-full">
          <a href="/typography/">
            <Image
              className="w-full m-0 rounded-t lazy"
              src="https://vredeburg.netlify.app/assets/img/typography.png"
              width="960"
              height="500"
              alt="This post thumbnail"
            />
          </a>
          <div className="px-6 py-5">
            <div className="font-semibold text-lg mb-2">
              <a
                className="text-slate-900 hover:text-slate-700"
                href="/typography/"
              >
                Typography
              </a>
            </div>
            <p className="text-slate-700 mb-1" title="Published date">
              21 June 2020 08:04 AM
            </p>
            <p className="text-slate-800">
              Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est
              et expeditasi distincti...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBlogPost;
