import React, { useState } from 'react'

const Accordion = () => {

  // State to track if the accordion is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle accordion open/close state
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dark:bg-gray-800">
      <div
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        <h3 id="accordion-flush-heading-1">
          <button
            type="button"
            className={`flex items-center justify-between w-full py-5 px-4 font-medium text-left border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 ${isOpen ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}
            onClick={toggleAccordion} // Attach toggle function here
            aria-expanded={isOpen}
            aria-controls="accordion-flush-body-1"
          >
            <span>Can I use Landwind in open-source projects?</span>
            <svg
              className={`w-6 h-6 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h3>
        <div
          id="accordion-flush-body-1"
          className={`${isOpen ? 'block' : 'hidden'}`} // Toggle visibility based on state
          aria-labelledby="accordion-flush-heading-1"
        >
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Landwind is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{' '}
              <a
                href="#"
                className="text-purple-600 dark:text-purple-500 hover:underline"
              >
                get started
              </a>{' '}
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
