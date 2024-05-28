import React from 'react';

const Document = () => {
  return (
    <div className="max-w-42rem px-4 py-6 md:px-8 md:py-8 mx-auto transition-colors duration-300 mr-56px">
      <div className="container mx-auto p-4">
        <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6"> {/* Added shadow-lg for more depth */}
          <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Document Transaction
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Fill in the details to process your document transaction.
          </p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"> {/* Grid with responsive column changes */}
              <input
                type="text"
                placeholder="Document Name"
                className="border border-gray-300 p-2 rounded w-full dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              />
              <input
                type="text"
                placeholder="Document Master"
                className="border border-gray-300 p-2 rounded w-full dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"> {/* Additional row */}
              <input
                type="text"
                placeholder="Student ID"
                className="border border-gray-300 p-2 rounded w-full dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              />
              <input
                type="text"
                placeholder="Transaction Date"
                className="border border-gray-300 p-2 rounded w-full dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"> {/* Another grid row */}
              <input
                type="text"
                placeholder="Amount Taken"
                className="border border-gray-300 p-2 rounded w-full dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
            <button
              type="button"
              className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors" /* Ensure good hover transition */
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Document;
