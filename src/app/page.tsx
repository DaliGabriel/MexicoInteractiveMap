"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import InfoModal from "@/components/InfoModal";
import InstructiveModal from "@/components/InstructiveModal";
import { StatesInfo } from "./data/StatesInfo";

const LazyMap = dynamic(() => import("../components/Map"), {
  ssr: false,
  loading: () => <p className="text-center mt-80">Loading...</p>,
});

export default function Home() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [mapload, setMapload] = useState<boolean>(false);

  useEffect(() => {
    // Set mapload to true when the component is mounted (map is loaded)
    setMapload(true);
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div className="relative">
      
      {mapload && (
        <>
          <header>
            <InstructiveModal selectedState={selectedState} />
          </header>
        </>
      )}

      <main className="fixed inset-0 z-10">
        <LazyMap
          selectedState={selectedState}
          setSelectedState={setSelectedState}
        />
      </main>

      {selectedState && StatesInfo[selectedState] && (
        <InfoModal
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          statesInfo={StatesInfo}
        />
      )}
    </div>
  );
}
