"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const LazyMap = dynamic(() => import("../components/Map"), {
  ssr: false,
  loading: () => <p className="text-center mt-80">Loading...</p>,
});

export default function Home() {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  return (
    <div className="font-[family-name:var(--font-geist-sans)] min-h-screen relative">
      <main className="fixed inset-0 z-10">
        <LazyMap
          selectedState={selectedState}
          setSelectedState={setSelectedState}
        />
      </main>
      {selectedState && (
        <section className="relative z-20 pt-[700px]">
          {/* Your scrollable content goes here */}
          <div className="min-h-screen bg-white/80 backdrop-blur-sm p-8">
            {/* Flex container to align selected state and close button */}
            <div className="flex justify-between items-center mb-4">
              {/* Left: Display the selected state */}
              <h1 className="text-xl font-bold">
                {selectedState}
              </h1>

              {/* Right: Close button */}
              <button
                className="text-3xl font-bold text-gray-600 hover:text-red-600"
                onClick={() => {
                  setSelectedState(null);
                }}
              >
                &times; {/* This is the close 'X' icon */}
              </button>
            </div>

            {/* Scrollable content */}
            <p className="mb-4">This is some scrollable content. Paragraph</p>
          </div>
        </section>
      )}
    </div>
  );
}
