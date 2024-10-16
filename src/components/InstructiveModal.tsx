import React from "react";

interface InstructiveModalProps {
  selectedState: string | null;
  language: "en" | "es";
}

const InstructiveModal = ({
  selectedState,
  language,
}: InstructiveModalProps) => {
  return (
    <div className="relative z-50 bg-white  w-60 mx-auto mt-20 rounded-lg shadow-2xl px-2 mb-96">
      <p className="text-center text-lg pt-4 font-bold text-black">
      {language == 'en' 
      ? 
      selectedState ? 
      '¡Scroll down to learn everything about it! ' : 'Tap a state to explore more details.'
      : 
      selectedState ? 
      '¡Desplázate hacia abajo para conocer todo sobre él!' : 'Toca un estado para explorar más detalles.' 
      }

      </p>
      <br />
      <div
        className={`text-center animate__animated animate__heartBeat animate__delay-2s animate__infinite pb-2`}
      >
        {selectedState ? "⬇️" : "👇"}
      </div>
    </div>
  );
};

export default InstructiveModal;
