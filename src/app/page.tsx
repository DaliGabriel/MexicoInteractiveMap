"use client";
import dynamic from "next/dynamic";

const LazyMap = dynamic(() => import("../components/Map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {

  //Todo: The min-h-screen cause conflicts with the css of leaflet

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex justify-center items-center min-h-screen mx-2">
        <LazyMap />
      </main>
    </div>
  );
}
