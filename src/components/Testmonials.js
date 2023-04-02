import React from "react";
import p1 from "../assets/bussiness-man.png";
import p2 from "../assets/empathy.png";
import p3 from "../assets/man.png";
const Testmonials = () => {
  return (
    <div>
      <section className="text-white body-font">
        <h1 className="text-white text-center text-3xl font-semibold">
          What Our Users Say About Us...
        </h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={p1}
                />
                <p className="leading-relaxed">
                  "I found the predictive model feature to be particularly
                  useful, it helped me to accurately predict the price of my
                  used car and make an informed decision."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-white font-semibold title-font tracking-wider text-sm">
                  HOLDEN CAULFIELD
                </h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={p2}
                />
                <p className="leading-relaxed">
                  "The defect detection model was a lifesaver for me, it saved
                  me a lot of time and hassle trying to identify
                  defects manually."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-white font-semibold title-font tracking-wider text-sm">
                  ALPER KAMU
                </h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={p3}
                />
                <p className="leading-relaxed">
                  "Absolutely! I would recommend your platform to anyone looking
                  to buy or sell used cars, it's a game-changer."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-white font-semibold title-font tracking-wider text-sm">
                  HENRY LETHAM
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testmonials;
