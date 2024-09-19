"use client";
import dynamic from "next/dynamic";

const LazyMap = dynamic(() => import("../components/Map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
 
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-[family-name:var(--font-geist-sans)] h-screen">
      <main className="flex justify-center items-center  h-full mx-2">
        <LazyMap />
      </main>
      <footer className="text-center p-4 absolute bottom-0 left-0 right-0">
        <p>&copy; {currentYear}</p>
      </footer>
    </div>
  );
}
