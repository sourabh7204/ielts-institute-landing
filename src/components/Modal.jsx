import React, { useEffect } from "react";

export default function Modal({ showModal, closeModal, modalType }) {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative p-8 transform transition-all duration-300 scale-95 animate-fade-in">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Modal Heading */}
        <h2 className="text-2xl font-extrabold mb-6 text-center text-gray-900">
          {modalType}
        </h2>

        {/* Form */}
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl shadow-md hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300"
          >
            Submit
          </button>
        </form>

        {/* Optional footer / info */}
        <p className="mt-4 text-sm text-gray-500 text-center">
          We'll never share your information. Privacy guaranteed.
        </p>
      </div>
    </div>
  );
}
