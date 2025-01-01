// The Books which have not thumbnail used this image
import noCover from "../images/NoImage.svg";
import { useState } from "react";

export default function Card({ book }) {
  const [selectedBook, setSelectedBook] = useState(null);

  // Function to open the modal
  const openModal = (bookDetails) => {
    setSelectedBook(bookDetails);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
            {/* Access the volumeInfo and salesInfo of the Books */}
            {book.map((item) => {
              const { volumeInfo } = item;

              return (
                <div key={item.id} className="group">
                  <div
                    className="w-full aspect-[7/8] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 cursor-pointer"
                    onClick={() => openModal(volumeInfo)}
                  >
                    <img
                      alt={volumeInfo.title || "Book Thumbnail"}
                      src={volumeInfo.imageLinks?.smallThumbnail || noCover}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Book Category */}
                  <p>
                    {volumeInfo.categories?.map((category) => (
                      <span
                        key={category}
                        className="inline-block bg-gray-100 mt-4 px-3 py-1 text-sm font-semibold text-gray-600 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </p>

                  {/* Book Title */}
                  <h3 className="mt-3 text-gray-700 text-lg font-bold">
                    📔 {volumeInfo.title || "Not Available"}
                  </h3>

                  {/* Author(s) */}
                  <p className="text-sm text-gray-600 mt-4">
                    <strong>Author(s):</strong>{" "}
                    {volumeInfo.authors?.join(", ") || "Unknown"}
                  </p>

                  {/* Publisher and Published Date */}
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Publisher:</strong>{" "}
                    {volumeInfo.publisher || "Unknown"} <br />
                    <span>({volumeInfo.publishedDate || "N/A"})</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* More Details Modal */}
      {selectedBook && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg p-8 w-3/4 md:w-1/2">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 bg-gray-200 rounded-full p-3 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="flex flex-col items-center">
              <img
                alt={selectedBook.title || "Book Thumbnail"}
                src={
                  selectedBook.imageLinks?.thumbnail ||
                  selectedBook.imageLinks?.smallThumbnail ||
                  noCover
                }
                className="h-48 w-32 object-cover mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{selectedBook.title}</h2>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Author(s):</strong>{" "}
                {selectedBook.authors?.join(", ") || "Unknown"}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Publisher:</strong> {selectedBook.publisher || "N/A"}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Published Date:</strong>{" "}
                {selectedBook.publishedDate || "N/A"}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Description:</strong>{" "}
                {selectedBook.description || "No description available."}
              </p>
              <a
                href={selectedBook.infoLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition-all"
              >
                More Info
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
