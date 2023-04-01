import React from "react";
import pred from "../assets/prediction_icon.png";
import defect from "../assets/defect_detection_icon.png";
import recommend from "../assets/recommendation_icon.png";
const Hero = () => {
  return (
    <div className="font-body">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12 justify-center items-center">
              <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl sm:mb-0 mt-[-7rem]">
                Where Do We Stand Apart?
              </h1>
              <p className="text-white font-semibold text-xl">
                Our platform provides in-depth data analysis, price alerts,
                vehicle history reports, and financing options to help users
                make informed decisions.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden flex justify-center items-center">
                <img
                  alt="content"
                  className="object-cover object-center h-60 w-64"
                  src={pred}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                Accurate Price Prediction
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Our platform uses advanced AI and machine learning algorithms to
                accurately predict the fair market value of used cars based on
                various factors that influence their price.
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden flex justify-center items-center">
                <img
                  alt="content"
                  className="object-cover object-center h-72 w-64"
                  src={defect}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                Defect Detection
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Our platform features advanced image processing capabilities,
                allowing us to detect defects and imperfections in used cars
                based on uploaded images, providing users with additional
                insight into the condition of a car.
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden flex justify-center items-center">
                <img
                  alt="content"
                  className="object-cover object-center h-60 w-64"
                  src={recommend}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                Personalized Recommendations
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Our recommendation system provides users with personalized
                recommendations tailored to their preferences, making car-buying
                more efficient and informed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
