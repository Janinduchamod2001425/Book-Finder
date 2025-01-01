import { useState } from "react";
import axios from "axios";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import Card from "./Card";
import NoResults from "./NoResults";
import Loading from "./Loading";

import Logo from "../images/Book.png";

import Spline from "@splinetool/react-spline";

export default function Main() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchBook = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Search Function
  const handleSearch = () => {
    if (search.trim()) {
      setSearchTerm(search); // Update the search term state
      setHasSearched(true); // Set the hasSearched state to true
      setLoading(true); // Set the loading state to true
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40&key=AIzaSyDaLzmtMXyLkRnXJzGuxjkRfYJGYpmrqFM`
        )
        .then((res) => {
          setBookData(res.data.items || []);
          setLoading(false); // Set the loading state to false
          setSearch(""); // Clear the search bar after search
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  // Search by Ctaegory Function
  const handleCategorySearch = (category) => {
    setSearchTerm(category);
    setHasSearched(true);
    setLoading(true);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${category}&maxResults=40&key=AIzaSyDaLzmtMXyLkRnXJzGuxjkRfYJGYpmrqFM`
      )
      .then((res) => {
        setBookData(res.data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="bg-white">
      {/* Web View */}

      {/* Header  */}
      <header className="absolute inset-x-0 top-3 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          {/* Logo & Title */}
          <div className="flex lg:flex-1 ml-0.5 sm:ml-60">
            <div className="flex justify-center items-center mr-2">
              <a href="#" className="-m-1.5 p-1.5">
                {/* Logo */}
                <img alt="" src={Logo} className="h-10 w-auto" />
              </a>
              <p className="ml-2 font-bold sm:text-lg">
                {" "}
                <span className="sm:text-3xl text-3xl">B</span>ook Finder
              </p>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end mr-60">
            <div className="flex justify-center items-center mr-2">
              <CgProfile className="text-xl" />
            </div>
            <a href="#" className="text-md font-semibold text-gray-900">
              Janindu Chamod
            </a>
          </div>
        </nav>

        {/* Mobile Responsive Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div className="flex justify-center items-center mr-2">
                <a href="#" className="-m-1.5 p-1.5">
                  {/* Logo */}
                  <img alt="" src={Logo} className="h-8 w-auto" />
                </a>
                <p className="ml-2 font-bold">
                  {" "}
                  <span className="text-2xl">B</span>ook Finder
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    <div className="flex justify-center items-center mr-2">
                      Hello! I am Janindu Chamod <br />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <div className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          {/* Radient Color background */}
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80ee] to-[#2d22ca] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Hero and Spline container */}
        <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center py-32 sm:py-48 lg:py-56 md:mt-[-80px]">
          {/* Hero Content */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-balance text-5xl font-arboria font-extraBold tracking-tight text-gray-900 sm:text-7xl">
              Discover Your Next Favourite Book
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Explore a world of stories, knowledge, and inspiration. <br />
              Find books that ignite your curiosity and fuel your imagination.
            </p>

            {/* Search Field */}
            <div className="mt-10 flex items-center justify-center md:justify-start gap-x-4">
              <input
                type="text"
                placeholder="Search for books..."
                className="w-2/3 md:w-full rounded-xl border border-gray-300 px-4 py-2 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={searchBook} // When user presses Enter key, the search will execute
              />

              {/* Search Button */}
              <div className="flex justify-center items-center">
                <button
                  onClick={handleSearch}
                  className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"
                >
                  <FaSearch className="text-white mr-2" />
                  Search
                </button>
              </div>
            </div>

            {/* Book Categories */}
            <div className="mt-16 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Dynamic Categories */}
              {[
                {
                  name: "Sports",
                  bgColor: "bg-purple-200",
                  textColor: "text-purple-800",
                },
                {
                  name: "Cooking",
                  bgColor: "bg-green-200",
                  textColor: "text-green-800",
                },
                {
                  name: "Tech",
                  bgColor: "bg-blue-200",
                  textColor: "text-blue-800",
                },
                {
                  name: "Science",
                  bgColor: "bg-yellow-200",
                  textColor: "text-yellow-800",
                },
                {
                  name: "Romance",
                  bgColor: "bg-red-200",
                  textColor: "text-red-800",
                },
                {
                  name: "History",
                  bgColor: "bg-pink-200",
                  textColor: "text-pink-800",
                },
                {
                  name: "Fantasy",
                  bgColor: "bg-indigo-200",
                  textColor: "text-indigo-800",
                },
                {
                  name: "Fitness",
                  bgColor: "bg-teal-200",
                  textColor: "text-teal-800",
                },
                {
                  name: "Self-Help",
                  bgColor: "bg-gray-300",
                  textColor: "text-gray-800",
                },
                {
                  name: "Biography",
                  bgColor: "bg-orange-200",
                  textColor: "text-orange-800",
                },
                {
                  name: "Travel",
                  bgColor: "bg-cyan-200",
                  textColor: "text-cyan-800",
                },
                {
                  name: "Mystery",
                  bgColor: "bg-emerald-200",
                  textColor: "text-emerald-800",
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className={`rounded-full p-3 ${category.bgColor} shadow-md text-center cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-200`}
                  onClick={() => handleCategorySearch(category.name)}
                >
                  <h3 className={`text-sm font-medium ${category.textColor}`}>
                    {category.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Spline 3D Model */}
          <div className="w-1/2 h-[680px] hidden sm:block mt-[-80px] ml-20">
            <Spline
              scene="https://prod.spline.design/RD6H3cg-Ld2vg8Ze/scene.splinecode"
              className="w-180 h-180"
            />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          {/* Radient Color background */}
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          {/* Radient Color background */}
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* Loading Animation */}
      {loading && <Loading />}

      {/* Search Results title */}
      {!loading && (
        <div className="mt-1 md:mt-[-140px]">
          <h2 className="text-balance text-4xl font-medium tracking-tight text-gray-900 text-center sm:text-4xl ">
            {" "}
            {searchTerm ? `📚 Searched Books for "${searchTerm}"` : ""}
          </h2>
        </div>
      )}

      <div>
        {/* Search Results */}
        {!loading && hasSearched ? (
          bookData.length > 0 ? (
            <Card book={bookData} />
          ) : (
            <NoResults />
          )
        ) : null}

        {/* Loading State */}
        {loading && <Loading />}
      </div>
    </div>
  );
}

// ### create vite app

// ```bash
// npm create vite@latest book_finder
// ```
