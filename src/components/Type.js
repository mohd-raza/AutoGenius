import React from "react";
import car from "../assets/car-removebg-preview.png";
import { Link } from "react-router-dom";
function Type() {
  return (
    <section className="bg-white dark:bg-gray-900 mt-16 pt-8 font-body">
      <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="place-self-center mr-auto lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-3xl xl:text-4xl dark:text-white">
            Looking For A Deal On Wheels? Check Out Our Used Car Appeals
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
            Discover your perfect ride with us - our machine learning technology
            provides personalized recommendations based on your preferences,
            budget, and needs. Revolutionizing the used car industry one
            recommendation at a time.
          </p>
          <Link
            to="/signup"
            className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-white rounded-lg bg-blue-700 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Explore
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex pl-24">
          <img src={car} alt="mockup" />
        </div>
      </div>
    </section>
  );
}

export default Type;
