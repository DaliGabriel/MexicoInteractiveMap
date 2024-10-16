import React from "react";
import "animate.css";

// Update InfoModalProps to handle multilingual state info and a language prop
interface InfoModalProps {
  statesInfo: {
    [stateName: string]: {
      en: {
        name: string;
        overview: string;
        capital: string;
        population: string;
        economy: string;
        attractions: string[];
        culture: string;
        education: string[];
        funFacts: string[];
      };
      es: {
        name: string;
        overview: string;
        capital: string;
        population: string;
        economy: string;
        attractions: string[];
        culture: string;
        education: string[];
        funFacts: string[];
      };
    };
  };
  selectedState: string | null;
  setSelectedState: React.Dispatch<React.SetStateAction<string | null>>;
  language: "en" | "es";
}

const InfoModal = ({
  statesInfo,
  selectedState,
  setSelectedState,
  language,
}: InfoModalProps) => {
  return (
    <>
      <section className="relative z-40 animate__animated animate__headShake">
        <div className="min-h-screen bg-white text-black backdrop-blur-sm p-10">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-bold">
              {selectedState ? statesInfo[selectedState][language].name : ""}
            </h1>
            <button
              type="button"
              className="bg-[#c6f8fd] rounded-md p-2 inline-flex items-center justify-center text-gray-600 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 shadow-md"
              onClick={() => setSelectedState(null)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mt-7">
            {selectedState && (
              <>
                <p className="text-2xl">
                  {statesInfo[selectedState][language].overview}
                </p>

                <p className="mt-7 text-2xl">
                  <strong>🏙️ {language == 'en' ? 'Capital city:' : 'Capital' }</strong> <br />
                  {statesInfo[selectedState][language].capital}
                </p>
                <p className="mt-7 text-2xl">
                  <strong>👨‍👩‍👧‍👦 {language == 'en' ? 'Population:' : 'Población' }</strong> <br />
                  {statesInfo[selectedState][language].population}
                </p>
                <p className="mt-7 text-2xl">
                  <strong>💸  {language == 'en' ? 'Economy:' : 'Economía' }</strong> <br />
                  {statesInfo[selectedState][language].economy}
                </p>
                <div className="mt-7 text-2xl">
                  <strong>🎢 {language == 'en' ? 'Attractions:' : 'Atracciones' }</strong>
                  <br />
                  <ul className="list-disc list-inside ml-4 mt-2">
                    {statesInfo[selectedState][language].attractions.map(
                      (attraction, index) => (
                        <li className="mt-2" key={index}>
                          {attraction}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <p className="mt-7 text-2xl">
                  <strong>✨  {language == 'en' ? 'Culture:' : 'Cultura' }</strong> <br />
                  {statesInfo[selectedState][language].culture}
                </p>
                <div className="mt-7 text-2xl">
                  <strong>📚  {language == 'en' ? 'Education:' : 'Educación' }</strong>
                  <br />
                  <ul className="list-disc list-inside ml-4 mt-2">
                    {statesInfo[selectedState][language].education.map(
                      (institution, index) => (
                        <li className="mt-2" key={index}>
                          {institution}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="mt-7 text-2xl">
                  <strong>🥳  {language == 'en' ? 'Fun Facts:' : 'Datos curiosos' }</strong>
                  <br />
                  <ul className="list-disc list-inside ml-4 mt-2">
                    {statesInfo[selectedState][language].funFacts.map(
                      (fact, index) => (
                        <li className="mt-2" key={index}>
                        {fact}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoModal;
