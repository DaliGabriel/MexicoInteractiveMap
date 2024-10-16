"use client";

import InstructiveModal from "@/components/InstructiveModal";
import { detectBrowserLanguage } from "@/utils/DetectBrowserLanguage";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { StatesInfo } from "../data/StatesInfo";
import InfoModal from "@/components/InfoModal";

const LazyMap = dynamic(() => import("../../components/Map"), {
  ssr: false,
  loading: () => <p className="text-center mt-80">Loading...</p>,
});

const page = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [mapload, setMapload] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "es">("en");

  useEffect(() => {
    // Set mapload to true when the component is mounted (map is loaded)
    setMapload(true);
    //Detect the lenguaje of the user
    const detectedLang = detectBrowserLanguage();
    setSelectedLanguage(detectedLang as "en" | "es");
  }, []); // Empty dependency array ensures this runs once on component mount

  console.log(selectedLanguage);

  return (
    <div className="relative">
      {mapload && (
        <>
          <header>
            <InstructiveModal
              selectedState={selectedState}
              language={selectedLanguage}
            />
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
          language={selectedLanguage}
        />
      )}
    </div>
  );
};

export default page;
