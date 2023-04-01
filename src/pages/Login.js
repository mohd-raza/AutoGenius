import React, { useState, useRef } from "react";
import logoImg from "../assets/Login-amico.svg";
import axios from "axios";

import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState("");
  const [success, setSuccess] = useState(false);
  const emailRef = useRef("");
  const passRef = useRef("");

  //   const login = () => {
  //     let data = new FormData();
  //     data.append("email", email);
  //     data.append("password", pass);
  //     console.log(data);

  //     let config = {
  //       method: "POST",
  //       url: "http://shrutiprasad.pythonanywhere.com/auth/ngo/login/",
  //       headers: {},
  //       data: data,
  //     };

  //     axios(config)
  //       .then((response) => {
  //         if (response.status === 200) {
  //           setSuccess(true);
  //           console.log("success");
  //         }

  //         console.log(JSON.stringify(response.data));
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-[#111827]">
      <div className="hidden sm:block">
        <img className="w-full h-screen object-cover" src={logoImg} alt="" />
      </div>
      <div className="bg-[#111827] flex flex-col justify-center">
        <div className="max-w-[400px] w-full mx-auto bg-white p-4 rounded-lg">
          <h2 className="text-center text-4xl font-bold py-6">LOGIN</h2>
          <div className="flex flex-col py-2">
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              type="email"
              className="border p-2 hover:border-blue-400 rounded-lg border-[#111827]"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
              required
            />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="password">Password</label>
            <input
              ref={passRef}
              type="password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              id="password"
              className="border p-2 hover:border-blue-400 rounded-lg border-[#111827]"
              required
            />
          </div>
          {success ? (
            <Link to="/after-login">
              <button
                className="border w-full my-5 py-2 bg-blue- text-white"
                // onClick={login}
              >
                Sign In
              </button>
            </Link>
          ) : (
            <button
              className="border w-full my-5 py-2 bg-blue-600 text-white"
              //   onClick={login}
            >
              Sign In
            </button>
          )}

          <div className="flex flex-col">
            <p className="flex items-center font-semibold">
              <input type="checkbox" className="mr-2 " />
              Remember Me
            </p>

            <p className="font-semibold text-center mt-4">
              Don't have an account?
              <Link to="/signup">
                <span className="mr-2 hover:text-blue-600"> Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
