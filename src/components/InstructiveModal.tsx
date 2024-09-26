import React from "react";

interface InstructiveModalProps {
  selectedState: string | null;
}

const InstructiveModal = ({ selectedState }: InstructiveModalProps) => {


  return (
    <div className="relative z-50 bg-white bg-opacity-90 h-40 w-60 mx-auto mt-20 rounded-lg shadow-2xl ">
      <p className="text-center text-lg pt-4 font-bold">
        Tap a state to explore more details. Scroll down to learn everything
        about it!
      </p>
      <br />
      <div
        className={`text-center animate__animated animate__heartBeat animate__delay-2s animate__infinite`}
      >
        {
        selectedState ? "⬇️" : "👇"
        }
      </div>
    </div>
  );
};

export default InstructiveModal;
