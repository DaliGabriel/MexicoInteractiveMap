import React from "react";
import 'animate.css';

interface InfoModalProps {
  statesInfo: {
    [key: string]: {
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
  selectedState: string | null;
  setSelectedState: React.Dispatch<React.SetStateAction<string | null>>;
}

const InfoModal = ({
  statesInfo,
  selectedState,
  setSelectedState,
}: InfoModalProps) => {

    

  return (
    <>
      <section className="relative z-20 pt-[500px] animate__animated animate__bounceInUp">
        <div className="min-h-screen bg-white/50 backdrop-blur-sm p-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">
              {selectedState ? statesInfo[selectedState].name : ""}
            </h1>
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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

          <div className="space-y-4">
            {selectedState && (
              <>
                <p>
                  <strong>Overview:</strong>{" "}
                  {statesInfo[selectedState].overview}
                </p>
                <p>
                  <strong>Capital:</strong> {statesInfo[selectedState].capital}
                </p>
                <p>
                  <strong>Population:</strong>{" "}
                  {statesInfo[selectedState].population}
                </p>
                <p>
                  <strong>Economy:</strong> {statesInfo[selectedState].economy}
                </p>
                <div>
                  <strong>Attractions:</strong>
                  <ul className="list-disc list-inside ml-4">
                    {statesInfo[selectedState].attractions.map(
                      (attraction, index) => (
                        <li key={index}>{attraction}</li>
                      )
                    )}
                  </ul>
                </div>
                <p>
                  <strong>Culture:</strong> {statesInfo[selectedState].culture}
                </p>
                <div>
                  <strong>Education:</strong>
                  <ul className="list-disc list-inside ml-4">
                    {statesInfo[selectedState].education.map(
                      (institution, index) => (
                        <li key={index}>{institution}</li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <strong>Fun Facts:</strong>
                  <ul className="list-disc list-inside ml-4">
                    {statesInfo[selectedState].funFacts.map((fact, index) => (
                      <li key={index}>{fact}</li>
                    ))}
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
