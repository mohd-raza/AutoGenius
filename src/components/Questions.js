import React, { useState } from "react";
import axios from "axios";
const Questions = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [owner, setOwner] = useState(1);
  const [fuel, setFuel] = useState("Petrol");
  const [transmission, setTransmission] = useState("Manual");
  const [seats, setSeats] = useState(4);
  const [answer, setAnswer] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, year, owner, fuel, transmission, seats);
  };
  function makeApiCall() {
    const data = new FormData();
    data.append("Year", "2016");
    data.append("owner_type", "2");
    data.append("Fuel", "Diesel");
    data.append("Transmission", "Mannual");
    data.append("Brand", "Hyundai");
    data.append("seats", "5");
    const config = {
      method: "post",
      url: "http://127.0.0.1:8000/mlmodel/carfinder",
      headers: { "Content-Type": " application/json" },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setAnswer(response.data);
        console.log(answer);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="font-body pt-24 flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-white text-3xl text-center mb-8">
        You Ask, We Recommend
      </h1>
      <form className="w-full max-w-xl">
        <div className="flex flex-wrap justify-center items-center -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Which Brand of Car do you like?
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Eg. Maruti.."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          {/*  */}
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Which Fuel Type Car do you like?
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                value={fuel}
                onChange={(e) => {
                  setFuel(e.target.value);
                }}
              >
                <option>Petrol</option>
                <option>Diesel</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Which Transmission do you like?
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                value={transmission}
                onChange={(e) => {
                  setTransmission(e.target.value);
                }}
              >
                <option>Manual</option>
                <option>Automatic</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Year of Car requiered?
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder="2010"
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-state"
            >
              Which Owner Type required?
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                value={owner}
                onChange={(e) => {
                  setOwner(e.target.value);
                }}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-state"
            >
              How many number of Seats required?
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                value={seats}
                onChange={(e) => {
                  setSeats(e.target.value);
                }}
              >
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="flex flex-row justify-center items-center">
        <button
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={makeApiCall}
        >
          Recommend
        </button>
      </div>
      {/*  */}
      {/* 1st element */}
      <div className="flex flex-row justify-center items-center space-x-10 my-16">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={
                answer
                  ? "https://imgd.aeplcdn.com/664x374/n/cw/ec/112947/wagon-r-2022-exterior-right-front-three-quarter.jpeg?isig=0&q=75"
                  : ""
              }
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {answer ? answer[0].name : ""}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {answer ? `Year of Manufacturing: ${answer[0].Year}` : ""}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {answer ? `Location: ${answer[0].location}` : ""}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {answer ? `Price: ${answer[0].price}Lakhs` : ""}
            </p>
            {answer ? (
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
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
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* 2nd element */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={
                answer
                  ? "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20210610035741_Creta.jpg&w=700&q=90&c=1"
                  : ""
              }
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {answer ? answer[1].name : ""}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {answer ? `Year of Manufacturing: ${answer[1].Year}` : ""}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {answer ? `Location: ${answer[1].location}` : ""}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {answer ? `Price: ${answer[1].price}Lakhs` : ""}
            </p>
            {answer ? (
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
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
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* 3rd element */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={
                answer
                  ? "https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/Jazz/6489/1677825341880/front-left-side-47.jpg"
                  : ""
              }
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {answer ? answer[2].name : ""}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {answer ? `Year of Manufacturing: ${answer[2].Year}` : ""}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {answer ? `Location: ${answer[2].location}` : ""}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {answer ? `Price: ${answer[2].price}Lakhs` : ""}
            </p>
            {answer ? (
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
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
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* 4th element */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={
                answer
                  ? "https://cdn.autoportal.com/img/new-cars-gallery/marutisuzuki/ertiga-facelift/exterior/marutisuzuki-ertiga-facelift-0cf61da7.jpg"
                  : ""
              }
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {answer ? answer[3].name : ""}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {answer ? `Year of Manufacturing: ${answer[3].Year}` : ""}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {answer ? `Location: ${answer[3].location}` : ""}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {answer ? `Price: ${answer[3].price}Lakhs` : ""}
            </p>
            {answer ? (
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
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
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* 5th element */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={
                answer
                  ? "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220922115517_Audi_A4_Tango_Red.jpg&w=700&q=90&c=1"
                  : ""
              }
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {answer ? answer[4].name : ""}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {answer ? `Year of Manufacturing: ${answer[4].Year}` : ""}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {answer ? `Location: ${answer[4].location}` : ""}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {answer ? `Price: ${answer[4].price}Lakhs` : ""}
            </p>
            {answer ? (
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
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
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
