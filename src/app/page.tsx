"use client";
import dynamic from "next/dynamic";

const LazyMap = dynamic(() => import("../components/Map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {


  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex justify-center items-center min-h-screen">
        <LazyMap />
      </main>
    </div>
  );
}
